import {getObjectTypedKeys} from '@augment-vir/common';
import {toSimpleDatePartString} from 'date-vir';
import {css, defineElement, html, nothing} from 'element-vir';
import {
    jobSearchRecordPropertyDisplayNames,
    jobSearchRecordShape,
    type JobSearchRecord,
} from '../../data/job-search-record.js';

export const JobViewRecord = defineElement<{
    record: Readonly<JobSearchRecord>;
}>()({
    tagName: 'job-view-record',
    styles: css`
        th {
            text-align: right;
        }

        td {
            padding-left: 8px;
        }
    `,
    render({inputs}) {
        const dateString = toSimpleDatePartString(inputs.record.contactDate);

        const entryTitle = inputs.record.contactName || inputs.record.companyName || dateString;

        const jobRecordKeyOrder = getObjectTypedKeys(jobSearchRecordShape.shape);

        const tableRows = jobRecordKeyOrder.map((recordKey) => {
            if (recordKey === 'contactDate' || !inputs.record[recordKey]) return nothing;

            return html`
                <tr>
                    <th>${jobSearchRecordPropertyDisplayNames[recordKey]}:</th>
                    <td>${inputs.record[recordKey]}</td>
                </tr>
            `;
        });

        return html`
            <h2>${entryTitle}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>${jobSearchRecordPropertyDisplayNames.contactDate}:</th>
                        <td>${dateString}</td>
                    </tr>
                    ${tableRows}
                </tbody>
            </table>
        `;
    },
});
