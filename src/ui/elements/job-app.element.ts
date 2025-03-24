import {check, checkWrap} from '@augment-vir/assert';
import {extractErrorMessage, getEnumValues, stringify} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {asyncProp, css, defineElementNoInputs, html, listen, nothing} from 'element-vir';
import {assertValidShape, isValidShape} from 'object-shape-tester';
import {ViraButton, ViraIcon, ViraInput, ViraLink} from 'vira';
import {AppTab, appTabDisplay} from '../../data/app-tabs.js';
import {loadLocalData, saveDataLocally} from '../../data/data-store.js';
import {jobSearchRecordsShape, type JobSearchRecords} from '../../data/job-search-record.js';
import {defaultJobAppRoute, jobAppRouter} from '../../data/router.js';
import {ChangeRouteEvent} from '../events/change-route.event.js';
import {
    UpdateAllRecordsEvent,
    UpdateIndividualRecordEvent,
} from '../events/records-update.event.js';
import {GithubIcon} from '../icons/github.icon.js';
import {JobCreateSearchRecord} from './main-pages/job-create-search-record.element.js';
import {JobRawData} from './main-pages/job-raw-data.element.js';
import {JobViewAllRecords} from './main-pages/job-view-all-records.element.js';

export const JobApp = defineElementNoInputs({
    tagName: 'job-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
            padding: 16px;
            font-family: sans-serif;
        }

        .app-wrapper {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 16px;
        }

        ${ViraLink} {
            display: flex;
        }

        nav {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: space-between;
        }

        .nav-icon {
            height: 24px;
            width: 24px;
        }

        .tab-buttons,
        .external-links {
            flex-shrink: 0;
            display: flex;
            gap: 8px;
            align-items: flex-start;
        }

        .external-links {
            align-items: center;
        }

        main {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        ${JobRawData} {
            flex-grow: 1;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,
    state() {
        return {
            records: asyncProp({
                defaultValue: loadLocalData(),
            }),
            router: jobAppRouter,
            currentRoute: defaultJobAppRoute,

            cleanup: undefined as undefined | (() => void),
        };
    },
    init({state, updateState}) {
        state.router.listen(true, (route) => {
            updateState({currentRoute: route});
        });

        if (!state.cleanup) {
            /** Keep data relatively in sync. */
            const intervalId = window.setInterval(async () => {
                state.records.setValue(await loadLocalData());
            }, 10_000);
            updateState({
                cleanup: () => {
                    window.clearInterval(intervalId);
                },
            });
        }
    },
    cleanup({state, updateState}) {
        if (state.cleanup) {
            state.cleanup();
            updateState({cleanup: undefined});
        }
    },
    render({state}) {
        async function updateDate(data: JobSearchRecords) {
            await saveDataLocally(data);
            state.records.setValue(data);
        }

        const currentRecords = state.records.settledValue;

        if (currentRecords instanceof Error) {
            return html`
                <p class="error">${extractErrorMessage(currentRecords)}</p>
            `;
        }

        const currentTab = String(state.currentRoute.paths[0]);

        const tabTemplate = currentRecords
            ? currentTab === AppTab.Raw || !isValidShape(currentRecords, jobSearchRecordsShape)
                ? html`
                      <${JobRawData.assign({
                          data: currentRecords,
                      })}></${JobRawData}>
                  `
                : currentTab === AppTab.Entry
                  ? html`
                        <${JobCreateSearchRecord.assign({
                            allRecords: checkWrap.isArray(currentRecords) || [],
                        })}
                            ${listen(
                                JobCreateSearchRecord.events.searchRecordCreate,
                                async (event) => {
                                    if (check.isArray(currentRecords)) {
                                        const records: JobSearchRecords = [
                                            ...currentRecords,
                                            event.detail,
                                        ];

                                        await updateDate(records);
                                    }
                                },
                            )}
                        ></${JobCreateSearchRecord}>
                    `
                  : currentTab === AppTab.View
                    ? html`
                          <${JobViewAllRecords.assign({
                              currentRoute: state.currentRoute,
                              allRecords: checkWrap.isArray(currentRecords) || [],
                          })}></${JobViewAllRecords}>
                      `
                    : 'UNKNOWN TAB'
            : 'Loading...';

        const tabButtonTemplates = getEnumValues(AppTab).map((tab) => {
            return html`
                <${ViraButton.assign({
                    disabled: currentTab === tab,
                    text: appTabDisplay[tab],
                })}
                    ${listen('click', (event) => {
                        const button = extractEventTarget(event, HTMLElement);
                        button.dispatchEvent(
                            new ChangeRouteEvent({
                                paths: [tab],
                            }),
                        );
                    })}
                ></${ViraButton}>
            `;
        });

        const searchInputTemplate =
            currentTab === AppTab.View
                ? html`
                      Search
                      <${ViraInput.assign({
                          value: state.currentRoute.search?.search[0] || '',
                          showClearButton: true,
                      })}
                          ${listen(ViraInput.events.valueChange, (event) => {
                              state.router.setRoute({
                                  search: {
                                      search: [event.detail],
                                  },
                              });
                          })}
                      ></${ViraInput}>
                  `
                : nothing;

        return html`
            <div
                class="app-wrapper"
                ${listen(ChangeRouteEvent, (event) => {
                    state.router.setRoute(event.detail);
                })}
                ${listen(UpdateAllRecordsEvent, async (event) => {
                    await updateDate(event.detail);
                })}
                ${listen(UpdateIndividualRecordEvent, async (event) => {
                    assertValidShape(currentRecords, jobSearchRecordsShape);
                    let updateCount = 0;

                    const updatedData = currentRecords.map((record) => {
                        if (record.id === event.detail.id) {
                            updateCount++;
                            return event.detail;
                        } else {
                            return record;
                        }
                    });

                    if (updateCount > 1) {
                        throw new Error(
                            `Tried to update multiple records: ${stringify(event.detail)}`,
                        );
                    } else if (!updateCount) {
                        throw new Error(`Found no records to update: ${stringify(event.detail)}`);
                    }

                    await updateDate(updatedData);
                })}
            >
                <nav>
                    <div class="tab-buttons">${tabButtonTemplates}</div>
                    <div class="external-links">
                        ${searchInputTemplate}
                        <${ViraLink.assign({
                            link: {
                                newTab: true,
                                url: 'https://github.com/electrovir/job-search',
                            },
                        })}>
                            <${ViraIcon.assign({icon: GithubIcon})} class="nav-icon"></${ViraIcon}>
                        </${ViraLink}>
                    </div>
                </nav>
                <main>${tabTemplate}</main>
            </div>
        `;
    },
});
