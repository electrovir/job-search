import {getObjectTypedEntries} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, nothing} from 'element-vir';
import {JobSearchRecords, type JobSearchRecord} from '../../../data/job-search-record.js';
import {organizeDataIntoWeeks, prettifyWeekKey} from '../../../data/weekly-records.js';
import {JobViewRecord} from './job-view-record.element.js';

export const JobRecordSearch = defineElement<{
    allRecords: Readonly<JobSearchRecords>;
    searchQuery: string[];
    searchKeys?: (keyof JobSearchRecord)[];
}>()({
    tagName: 'job-record-search',
    events: {
        searchResultCount: defineElementEvent<number>(),
    },
    styles: css`
        :host {
            display: block;
        }

        h3 {
            border-bottom: 1px solid #aaa;
            padding-bottom: 4px;
            font-weight: normal;
        }
    `,
    render({inputs, dispatch, events}) {
        if (!inputs.searchQuery.length) {
            return nothing;
        }

        const searchResults = inputs.allRecords.filter((contact) => {
            return getObjectTypedEntries(contact).some(
                ([
                    key,
                    value,
                ]) => {
                    if (
                        key === 'id' ||
                        typeof value !== 'string' ||
                        (inputs.searchKeys &&
                            inputs.searchKeys.length &&
                            !inputs.searchKeys.includes(key))
                    ) {
                        return false;
                    }

                    return inputs.searchQuery.some((query) =>
                        String(value).toLowerCase().includes(query.toLowerCase()),
                    );
                },
            );
        });

        const groupedSearchResults = organizeDataIntoWeeks(searchResults);

        dispatch(new events.searchResultCount(searchResults.length));

        if (!searchResults.length) {
            return 'No records match this search.';
        }

        return Object.entries(groupedSearchResults).map(
            ([
                year,
                weeks,
            ]) => html`
                ${year}
                ${Object.entries(weeks).map(
                    ([
                        weekKey,
                        records,
                    ]) => html`
                        <h3>${prettifyWeekKey(weekKey, records.length)}</h3>
                        ${records.map(
                            (record) => html`
                                <${JobViewRecord.assign({
                                    record,
                                })}></${JobViewRecord}>
                            `,
                        )}
                    `,
                )}
            `,
        );
    },
});
