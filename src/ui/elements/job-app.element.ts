import {check} from '@augment-vir/assert';
import {getEnumValues, wait} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {asyncProp, css, defineElementNoInputs, html, isResolved, listen} from 'element-vir';
import {ViraButton} from 'vira';
import {AppTab, appTabDisplay} from '../../data/app-tabs.js';
import {loadLocalData, saveDataLocally} from '../../data/data-store.js';
import type {JobSearchRecords} from '../../data/job-search-record.js';
import {defaultJobAppRoute, jobAppRouter} from '../../data/router.js';
import {ChangeRouteEvent} from '../event/change-route.event.js';
import {DataUpdateEvent} from '../event/data-update.event.js';
import {JobEntry} from './job-entry.element.js';
import {JobRawData} from './job-raw-data.element.js';

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

        main {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        ${JobRawData} {
            flex-grow: 1;
        }
    `,
    stateInitStatic: {
        data: asyncProp({
            defaultValue: wait({
                seconds: 0.5,
            }).then(() => loadLocalData()),
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
            state.data.setValue(data);
        }

        const currentTab = state.currentRoute.paths[0];

        const tabTemplate = isResolved(state.data.value)
            ? currentTab === AppTab.Raw
                ? html`
                      <${JobRawData.assign({
                          data: state.data.value,
                      })}></${JobRawData}>
                  `
                : currentTab === AppTab.Entry
                  ? html`
                        <${JobEntry}
                            ${listen(JobEntry.events.entrySave, async (event) => {
                                if (check.isArray(state.data.value)) {
                                    const data: JobSearchRecords = [
                                        ...state.data.value,
                                        event.detail,
                                    ];

                                    await updateDate(data);
                                }
                            })}
                        ></${JobEntry}>
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
                ${listen(DataUpdateEvent, async (event) => {
                    await updateDate(event.detail);
                })}
            >
                <nav class="tab-buttons">${tabButtonTemplates}</nav>
                <main>${tabTemplate}</main>
            </div>
        `;
    },
});
