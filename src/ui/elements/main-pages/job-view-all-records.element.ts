import {getObjectTypedEntries, getOrSet} from '@augment-vir/common';
import {
    calculateRelativeDate,
    DateUnit,
    getEndDate,
    getNowInUserTimezone,
    getStartDate,
    orderedMonthNames,
    toTimestamp,
    type FullDate,
} from 'date-vir';
import {css, defineElement, html, listen, nothing} from 'element-vir';
import {ViraButton, ViraInput} from 'vira';
import {AppTab} from '../../../data/app-tabs.js';
import type {JobSearchRecord, JobSearchRecords} from '../../../data/job-search-record.js';
import type {JobAppRoute} from '../../../data/router.js';
import {ChangeRouteEvent} from '../../events/change-route.event.js';
import {JobViewRecord} from '../common/job-view-record.element.js';

export const JobViewAllRecords = defineElement<{
    data: Readonly<JobSearchRecords>;
    currentRoute: Readonly<JobAppRoute>;
}>()({
    tagName: 'job-view-all-records',
    styles: css`
        :host {
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

        .week-data {
            word-break: break-all;
        }
    `,
    stateInitStatic: {
        searchValue: '',
    },
    render({state, updateState, inputs, dispatch}) {
        const organizedData = organizeDataIntoWeeks(inputs.data);
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
                    const buttonText = `${buttonWeekKey
                        .replace('-', ' - ')
                        .replaceAll(
                            /(\D)(\d)/g,
                            '$1 $2',
                        )} (${buttonWeeks[buttonWeekKey]?.length || 0})`;

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

        return html`
            <div class="all-weeks">
                ${buttonTemplates.length ? buttonTemplates : 'No records yet.'}
            </div>
            <div class="week-data">
                Search
                <${ViraInput.assign({
                    value: state.searchValue,
                    showClearButton: true,
                })}
                    ${listen(ViraInput.events.valueChange, (event) => {
                        updateState({
                            searchValue: event.detail,
                        });
                    })}
                ></${ViraInput}>
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
        `;
    },
});

type RecordWeeks = {[Year in number]: {[WeekKey in string]: JobSearchRecord[]}};

function generateWeekKey(date: Readonly<FullDate>): string {
    const startOfWeek = getStartDate(date, DateUnit.Week);
    const endOfWeek = getEndDate(date, DateUnit.Week);

    const startOfWeekMonthName = orderedMonthNames[startOfWeek.month - 1]?.slice(0, 3);
    const endOfWeekMonthName = orderedMonthNames[endOfWeek.month - 1]?.slice(0, 3);

    return `${startOfWeekMonthName}${startOfWeek.day}-${endOfWeekMonthName}${endOfWeek.day}`;
}

function organizeDataIntoWeeks(data: Readonly<JobSearchRecords>): RecordWeeks {
    const allWeeks: RecordWeeks = {};

    const sorted = data.toSorted((a, b) => toTimestamp(b.contactDate) - toTimestamp(a.contactDate));

    sorted.forEach((searchRecord) => {
        const endOfWeek = getEndDate(searchRecord.contactDate, DateUnit.Week);

        const yearWeeks = getOrSet(allWeeks, endOfWeek.year, () => {
            return {};
        });

        const weekKey = generateWeekKey(searchRecord.contactDate);

        getOrSet(yearWeeks, weekKey, () => {
            return [];
        }).push(searchRecord);
    });

    return allWeeks;
}
