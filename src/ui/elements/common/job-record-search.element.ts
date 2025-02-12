import {css, defineElement, html} from 'element-vir';
import {JobSearchRecords} from '../../../data/job-search-record.js';
import {organizeDataIntoWeeks, prettifyWeekKey} from '../../../data/weekly-records.js';
import {JobViewRecord} from './job-view-record.element.js';

export const JobRecordSearch = defineElement<{
    allRecords: Readonly<JobSearchRecords>;
    searchQuery: string;
}>()({
    tagName: 'job-record-search',
    styles: css`
        h3 {
            border-bottom: 1px solid #aaa;
            padding-bottom: 4px;
            font-weight: normal;
        }
    `,
    render({inputs}) {
        const searchResults = inputs.allRecords.filter((contact) => {
            return Object.entries(contact).some((entry) => {
                if (
                    entry[0] === 'id' ||
                    entry[0] === 'contactDate' ||
                    typeof entry[1] !== 'string'
                ) {
                    return false;
                }

                return String(entry[1]).toLowerCase().includes(inputs.searchQuery.toLowerCase());
            });
        });

        const groupedSearchResults = organizeDataIntoWeeks(searchResults);

        if (!searchResults.length) {
            return 'No records match this search';
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
