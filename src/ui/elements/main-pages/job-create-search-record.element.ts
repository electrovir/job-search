import {check, checkWrap} from '@augment-vir/assert';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {noNativeSpacing} from 'vira';
import {JobSearchRecord, JobSearchRecords} from '../../../data/job-search-record.js';
import {JobSearchRecordEdit} from '../common/job-record-edit.element.js';
import {JobRecordSearch} from '../common/job-record-search.element.js';

export const JobCreateSearchRecord = defineElement<{allRecords: Readonly<JobSearchRecords>}>()({
    tagName: 'job-create-search-record',
    hostClasses: {
        'job-create-search-record-no-past-entries': ({state}) => !state.searchResultCount,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 64px;
        }

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

        .entry {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        p,
        h2 {
            ${noNativeSpacing};
        }

        .warning {
            font-weight: bold;
            color: darkorange;
        }

        .search-results {
            flex-basis: 500px;
            max-width: 500px;
            flex-grow: 1;
        }

        ${JobRecordSearch} {
            margin-left: 16px;
            opacity: 0.5;
        }

        ${hostClasses['job-create-search-record-no-past-entries'].selector} .search-results {
            display: none;
        }
    `,
    events: {
        searchRecordCreate: defineElementEvent<JobSearchRecord>(),
    },
    stateInitStatic: {
        searchResultCount: 0,
        currentEdits: undefined as undefined | JobSearchRecord,
    },
    render({dispatch, events, inputs, state, updateState}) {
        const searchQuery: string[] = state.currentEdits
            ? [
                  checkWrap.isLengthAtLeast(state.currentEdits.companyName, 3),
                  checkWrap.isLengthAtLeast(state.currentEdits.contactName, 3),
                  checkWrap.isLengthAtLeast(state.currentEdits.contactEmail, 3),
                  checkWrap.isLengthAtLeast(state.currentEdits.posting, 3),
              ].filter(check.isTruthy)
            : [];

        if (!searchQuery.length) {
            updateState({searchResultCount: 0});
        }

        const warningMessage = state.searchResultCount
            ? 'Warning: you may have already entered this job.'
            : '';

        return html`
            <div class="entry">
                <h2>Enter Job Application</h2>
                <${JobSearchRecordEdit.assign({existingRecord: undefined})}
                    ${listen(JobSearchRecordEdit.events.searchRecordSave, (event) => {
                        dispatch(new events.searchRecordCreate(event.detail));
                    })}
                    ${listen(JobSearchRecordEdit.events.searchRecordEdit, (event) => {
                        updateState({
                            currentEdits: event.detail,
                        });
                    })}
                ></${JobSearchRecordEdit}>
                <p class="warning">${warningMessage}</p>
            </div>
            <div class="search-results">
                <h3>Past entries:</h3>
                <${JobRecordSearch.assign({
                    allRecords: inputs.allRecords,
                    searchQuery,
                    searchKeys: [
                        'companyName',
                        'contactName',
                        'contactEmail',
                        'posting',
                    ],
                })}
                    ${listen(JobRecordSearch.events.searchResultCount, (event) => {
                        updateState({
                            searchResultCount: event.detail,
                        });
                    })}
                ></${JobRecordSearch}>
            </div>
        `;
    },
});
