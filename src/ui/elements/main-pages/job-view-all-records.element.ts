import {getObjectTypedEntries} from '@augment-vir/common';
import {calculateRelativeDate, getNowInUserTimezone} from 'date-vir';
import {css, defineElement, html, listen, nothing} from 'element-vir';
import {ViraButton, ViraInput} from 'vira';
import {AppTab} from '../../../data/app-tabs.js';
import type {JobSearchRecords} from '../../../data/job-search-record.js';
import type {JobAppFullRoute} from '../../../data/router.js';
import {
    generateWeekKey,
    organizeDataIntoWeeks,
    prettifyWeekKey,
} from '../../../data/weekly-records.js';
import {ChangeRouteEvent} from '../../events/change-route.event.js';
import {JobRecordSearch} from '../common/job-record-search.element.js';
import {JobViewRecord} from '../common/job-view-record.element.js';

export const JobViewAllRecords = defineElement<{
    allRecords: Readonly<JobSearchRecords>;
    currentRoute: Readonly<JobAppFullRoute>;
}>()({
    tagName: 'job-view-all-records',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .contact-container {
            display: flex;
            gap: 32px;
        }

        .week-buttons {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: flex-start;
        }

        .all-weeks {
            flex-shrink: 0;
        }
    `,
    render({inputs, dispatch}) {
        const organizedData = organizeDataIntoWeeks(inputs.allRecords);
        const now = getNowInUserTimezone();

        const lastWeekKey = generateWeekKey(calculateRelativeDate(now, {weeks: -1}));
        const [
            selectedYear,
            selectedWeekKey,
        ] = inputs.currentRoute.paths[1]
            ? inputs.currentRoute.paths[1].replace(/(\d)(\D)/, '$1 $2').split(' ')
            : [
                  now.year,
                  lastWeekKey,
              ];

        const buttonTemplates = getObjectTypedEntries(organizedData).map(
            ([
                buttonYear,
                buttonWeeks,
            ]) => {
                const buttons = Object.keys(buttonWeeks).map((buttonWeekKey) => {
                    const buttonText = prettifyWeekKey(
                        buttonWeekKey,
                        buttonWeeks[buttonWeekKey]?.length || 0,
                    );

                    const buttonYearWeekKey = `${buttonYear}${buttonWeekKey}`;
                    return html`
                        <${ViraButton.assign({
                            text: buttonText,
                            disabled:
                                !!buttonYear &&
                                !!buttonWeekKey &&
                                buttonYearWeekKey === `${selectedYear}${selectedWeekKey}`,
                        })}
                            ${listen('click', () => {
                                dispatch(
                                    new ChangeRouteEvent({
                                        paths: [
                                            AppTab.View,
                                            buttonYearWeekKey,
                                        ],
                                    }),
                                );
                            })}
                        ></${ViraButton}>
                    `;
                });

                return html`
                    <section>
                        <span>${buttonYear}</span>
                        <div class="week-buttons">${buttons}</div>
                    </section>
                `;
            },
        );

        const selectedRecords =
            (selectedYear &&
                selectedWeekKey &&
                organizedData[Number(selectedYear)]?.[selectedWeekKey]) ||
            [];

        const searchQuery: string = inputs.currentRoute.search?.search[0] || '';

        return html`
            Search
            <${ViraInput.assign({
                value: searchQuery,
                showClearButton: true,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    dispatch(
                        new ChangeRouteEvent({
                            search: {
                                search: [event.detail],
                            },
                        }),
                    );
                })}
            ></${ViraInput}>

            ${searchQuery
                ? html`
                      <${JobRecordSearch.assign({
                          allRecords: inputs.allRecords,
                          searchQuery: [searchQuery],
                      })}></${JobRecordSearch}>
                  `
                : html`
                      <div class="contact-container">
                          <div class="all-weeks">
                              ${buttonTemplates.length ? buttonTemplates : 'No records yet.'}
                          </div>

                          <div class="week-data">
                              ${selectedRecords.length
                                  ? selectedRecords.map(
                                        (record) => html`
                                            <${JobViewRecord.assign({record})}></${JobViewRecord}>
                                        `,
                                    )
                                  : inputs.currentRoute.paths[1]
                                    ? 'No records for this week'
                                    : nothing}
                          </div>
                      </div>
                  `}
        `;
    },
});
