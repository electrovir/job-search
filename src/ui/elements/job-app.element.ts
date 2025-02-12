import {check, checkWrap} from '@augment-vir/assert';
import {extractErrorMessage, getEnumValues} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    asyncProp,
    css,
    defineElementNoInputs,
    html,
    isAsyncError,
    isResolved,
    listen,
} from 'element-vir';
import {assertValidShape, isValidShape} from 'object-shape-tester';
import {ViraButton, ViraIcon, ViraLink} from 'vira';
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
            justify-content: space-between;
        }

        .nav-icon {
            height: 24px;
            width: 24px;
        }

        .tab-buttons,
        .external-links {
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
    stateInitStatic: {
        records: asyncProp({
            defaultValue: loadLocalData(),
        }),
        router: jobAppRouter,
        currentRoute: defaultJobAppRoute,
    },
    init({state, updateState}) {
        state.router.listen(true, (route) => {
            updateState({currentRoute: route});
        });
    },
    render({state}) {
        async function updateDate(data: JobSearchRecords) {
            await saveDataLocally(data);
            state.records.setValue(data);
        }

        const currentRecords = state.records.value;

        if (isAsyncError(currentRecords)) {
            return html`
                <p class="error">${extractErrorMessage(currentRecords)}</p>
            `;
        }

        const currentTab = String(state.currentRoute.paths[0]);

        const tabTemplate = isResolved(currentRecords)
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

                    const updatedData = currentRecords.map((record) => {
                        if (record.id === event.detail.id) {
                            return event.detail;
                        } else {
                            return record;
                        }
                    });

                    await updateDate(updatedData);
                })}
            >
                <nav>
                    <div class="tab-buttons">${tabButtonTemplates}</div>
                    <div class="external-links">
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
