import {getEnumValues, wait} from '@augment-vir/common';
import {asyncProp, css, defineElementNoInputs, html, isResolved} from 'element-vir';
import {ViraButton} from 'vira';
import {AppTab, appTabDisplay} from '../../data/app-tabs.js';
import {loadData} from '../../data/data-store.js';
import {defaultJobAppRoute, jobAppRouter} from '../../data/router.js';
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
            gap: 16px;
        }
    `,
    stateInitStatic: {
        data: asyncProp({
            defaultValue: wait({
                seconds: 2,
            }).then(() => loadData()),
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
        const currentTab = state.currentRoute.paths[0];

        const tabTemplate = isResolved(state.data.value)
            ? currentTab === AppTab.Raw
                ? html`
                      <${JobRawData.assign({
                          data: state.data.value,
                      })}></${JobRawData}>
                      Job App goes here!
                  `
                : 'UNKNOWN TAB'
            : 'Loading...';

        const tabButtonTemplates = getEnumValues(AppTab).map((tab) => {
            return html`
                <${ViraButton.assign({
                    disabled: currentTab === tab,
                    text: appTabDisplay[tab],
                })}></${ViraButton}>
            `;
        });

        return html`
            <nav class="tab-buttons">${tabButtonTemplates}</nav>
            <main>${tabTemplate}</main>
        `;
    },
});
