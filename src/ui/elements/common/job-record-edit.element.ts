import {assert, check} from '@augment-vir/assert';
import {getObjectTypedEntries, wait, wrapInTry, type AnyObject} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    FullDatePart,
    getNowInUserTimezone,
    parseInputElementValue,
    toHtmlInputString,
    userTimezone,
} from 'date-vir';
import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {isValidShape} from 'object-shape-tester';
import {allowNavigation, preventNavigation} from 'prevent-navigation';
import {LoaderAnimated24Icon, ViraButton, ViraButtonStyle, ViraInput} from 'vira';
import {
    jobSearchRecordPropertyDisplayNames,
    jobSearchRecordShape,
    type JobSearchRecord,
} from '../../../data/job-search-record.js';

function createDefaultRecordEntry() {
    return {
        ...jobSearchRecordShape.defaultValue,
        contactDate: getNowInUserTimezone(),
    };
}

const recordEditsNavKey = 'record edits';

export const JobSearchRecordEdit = defineElement<{
    existingRecord: Readonly<JobSearchRecord> | undefined;
}>()({
    tagName: 'job-search-record-edit',
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
        searchRecordSave: defineElementEvent<Readonly<JobSearchRecord>>(),
    },
    stateInitStatic: {
        isSaving: false,
        savedSubtitle: '',
        currentSearchRecord: undefined as undefined | Readonly<JobSearchRecord>,
    },
    render({state, updateState, dispatch, events, inputs}) {
        if (!state.currentSearchRecord) {
            const cachedEntry: AnyObject | undefined = wrapInTry(
                () => JSON.parse(localStorage.getItem(recordEditsNavKey) || ''),
                {
                    fallbackValue: undefined,
                },
            );

            updateState({
                currentSearchRecord:
                    inputs.existingRecord ||
                    (isValidShape(cachedEntry, jobSearchRecordShape)
                        ? cachedEntry
                        : createDefaultRecordEntry()),
            });
        }
        const currentSearchRecord = state.currentSearchRecord;
        assert.isDefined(currentSearchRecord);

        function makeEdit<const Key extends keyof JobSearchRecord>(
            key: Key,
            value: JobSearchRecord[Key],
        ) {
            assert.isDefined(currentSearchRecord);
            preventNavigation(recordEditsNavKey);
            const newRecord = {
                ...currentSearchRecord,
                [key]: value,
            };

            localStorage.setItem(recordEditsNavKey, JSON.stringify(newRecord));
            updateState({
                currentSearchRecord: newRecord,
            });
        }

        const inputTemplates = getObjectTypedEntries(currentSearchRecord).map(
            ([
                recordKey,
                recordValue,
            ]) => {
                if (
                    !check.isString(recordValue) ||
                    !jobSearchRecordPropertyDisplayNames[recordKey]
                ) {
                    return nothing;
                }

                return html`
                    <tr>
                        <th>${jobSearchRecordPropertyDisplayNames[recordKey]}:</th>
                        <td>
                            <${ViraInput.assign({
                                value: recordValue,
                            })}
                                ${listen(ViraInput.events.valueChange, (event) => {
                                    makeEdit(recordKey, event.detail);
                                })}
                            ></${ViraInput}>
                        </td>
                    </tr>
                `;
            },
        );

        return html`
            <table>
                <tbody>
                    <tr>
                        <th>date</th>
                        <td>
                            <input
                                value=${toHtmlInputString(
                                    currentSearchRecord.contactDate,
                                    FullDatePart.Date,
                                )}
                                type="date"
                                ${listen('change', (event) => {
                                    const value = parseInputElementValue(
                                        extractEventTarget(event, HTMLInputElement),
                                        userTimezone,
                                    );
                                    if (value) {
                                        makeEdit('contactDate', value);
                                    }
                                })}
                            />
                        </td>
                    </tr>
                    ${inputTemplates}
                </tbody>
            </table>
            <div class="buttons">
                <${ViraButton.assign({
                    text: inputs.existingRecord ? 'Revert' : 'Clear',
                    disabled: state.isSaving,
                    buttonStyle: ViraButtonStyle.Outline,
                })}
                    ${listen('click', () => {
                        allowNavigation(recordEditsNavKey);
                        localStorage.removeItem(recordEditsNavKey);
                        updateState({
                            currentSearchRecord: undefined,
                        });
                    })}
                ></${ViraButton}>
                <${ViraButton.assign({
                    text: state.isSaving ? '' : 'Save',
                    icon: state.isSaving ? LoaderAnimated24Icon : undefined,
                    disabled: state.isSaving,
                })}
                    ${listen('click', async () => {
                        updateState({
                            isSaving: true,
                        });
                        dispatch(new events.searchRecordSave(currentSearchRecord));
                        await wait({seconds: 0.5});
                        updateState({
                            currentSearchRecord: createDefaultRecordEntry(),
                            savedSubtitle: 'Saved',
                            isSaving: false,
                        });
                        localStorage.removeItem(recordEditsNavKey);
                        allowNavigation(recordEditsNavKey);

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
