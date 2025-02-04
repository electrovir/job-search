import {css, defineElementEvent, defineElementNoInputs, html, listen} from 'element-vir';
import {type JobSearchRecord} from '../../../data/job-search-record.js';
import {JobSearchRecordEdit} from '../common/job-record-edit.element.js';

export const JobCreateSearchRecord = defineElementNoInputs({
    tagName: 'job-create-search-record',
    styles: css`
        th {
            text-align: right;
        }

        td {
            padding-left: 8px;
        }

        .buttons {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .saved-subtitle {
            opacity: 0.5;
        }
    `,
    events: {
        searchRecordCreate: defineElementEvent<JobSearchRecord>(),
    },
    render({dispatch, events}) {
        return html`
            <h2>New Job Search</h2>
            <${JobSearchRecordEdit.assign({existingRecord: undefined})}
                ${listen(JobSearchRecordEdit.events.searchRecordSave, (event) => {
                    dispatch(new events.searchRecordCreate(event.detail));
                })}
            ></${JobSearchRecordEdit}>
        `;
    },
});
