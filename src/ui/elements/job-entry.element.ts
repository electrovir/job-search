import {check} from '@augment-vir/assert';
import {getObjectTypedEntries, wait} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    FullDatePart,
    getNowInUserTimezone,
    parseInputElementValue,
    toHtmlInputString,
    userTimezone,
} from 'date-vir';
import {css, defineElementEvent, defineElementNoInputs, html, listen, nothing} from 'element-vir';
import {LoaderAnimated24Icon, ViraButton, ViraInput} from 'vira';
import {jobSearchRecordShape, type JobSearchRecord} from '../../data/job-search-record.js';
import {makeKeyPretty} from '../../data/pretty-key.js';

function createDefaultRecordEntry() {
    return {
        ...jobSearchRecordShape.defaultValue,
        contactDate: getNowInUserTimezone(),
    };
}

export const JobEntry = defineElementNoInputs({
    tagName: 'job-entry',
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
        entrySave: defineElementEvent<JobSearchRecord>(),
    },
    stateInitStatic: {
        isSaving: false,
        savedSubtitle: '',
        currentJobRecord: createDefaultRecordEntry(),
    },
    render({state, updateState, dispatch, events}) {
        const inputTemplates = getObjectTypedEntries(state.currentJobRecord).map(
            ([
                recordKey,
                recordValue,
            ]) => {
                if (!check.isString(recordValue)) {
                    return nothing;
                }

                return html`
                    <tr>
                        <th>${makeKeyPretty(recordKey)}:</th>
                        <td>
                            <${ViraInput.assign({
                                value: recordValue,
                            })}
                                ${listen(ViraInput.events.valueChange, (event) => {
                                    updateState({
                                        currentJobRecord: {
                                            ...state.currentJobRecord,
                                            [recordKey]: event.detail,
                                        },
                                    });
                                })}
                            ></${ViraInput}>
                        </td>
                    </tr>
                `;
            },
        );

        return html`
            <h2>New Job Search</h2>
            <table>
                <tbody>
                    <tr>
                        <th>date</th>
                        <td>
                            <input
                                value=${toHtmlInputString(
                                    state.currentJobRecord.contactDate,
                                    FullDatePart.Date,
                                )}
                                type="date"
                                ${listen('change', (event) => {
                                    const value = parseInputElementValue(
                                        extractEventTarget(event, HTMLInputElement),
                                        userTimezone,
                                    );
                                    if (value) {
                                        updateState({
                                            currentJobRecord: {
                                                ...state.currentJobRecord,
                                                contactDate: value,
                                            },
                                        });
                                    }
                                })}
                            />
                        </td>
                    </tr>
                    ${inputTemplates}
                </tbody>
                <tbody></tbody>
            </table>
            <div class="buttons">
                <${ViraButton.assign({
                    text: state.isSaving ? '' : 'Save',
                    icon: state.isSaving ? LoaderAnimated24Icon : undefined,
                    disabled: state.isSaving,
                })}
                    ${listen('click', async () => {
                        updateState({
                            isSaving: true,
                        });
                        dispatch(new events.entrySave(state.currentJobRecord));
                        await wait({milliseconds: 500});
                        updateState({
                            currentJobRecord: createDefaultRecordEntry(),
                            savedSubtitle: 'Saved',
                            isSaving: false,
                        });

                        await wait({seconds: 5});
                        updateState({
                            savedSubtitle: '',
                        });
                    })}
                ></${ViraButton}>
                <span class="saved-subtitle">${state.savedSubtitle}</span>
            </div>
        `;
    },
});
