import {extractErrorMessage, wrapInTry} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {css, defineElement, html, listen} from 'element-vir';
import {assertValidShape} from 'object-shape-tester';
import {ViraButton} from 'vira';
import {jobSearchRecordsShape} from '../../data/job-search-record.js';
import {DataUpdateEvent} from '../event/data-update.event.js';

export const JobRawData = defineElement<{data: unknown}>()({
    tagName: 'job-raw-data',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        textarea {
            flex-grow: 1;
            font-size: 1.2em;
            font-family: monospace;
            resize: none;
        }

        .bottom-buttons {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,
    stateInitStatic: {
        inputJson: '',
    },
    render({inputs, state, updateState, dispatch}) {
        const json = state.inputJson || JSON.stringify(inputs.data, null, 4);

        const parsedJson = wrapInTry(() => JSON.parse(json), {
            fallbackValue: {},
        });

        const dataError = wrapInTry(() => assertValidShape(parsedJson, jobSearchRecordsShape));

        return html`
            <textarea
                .value=${json}
                ${listen('input', (event) => {
                    const element = extractEventTarget(event, HTMLTextAreaElement);
                    updateState({
                        inputJson: element.value,
                    });
                })}
            ></textarea>

            <div class="bottom-buttons">
                <${ViraButton.assign({
                    text: 'Save',
                    disabled: !!dataError,
                })}
                    ${listen('click', () => {
                        assertValidShape(parsedJson, jobSearchRecordsShape);
                        dispatch(new DataUpdateEvent(parsedJson));
                    })}
                ></${ViraButton}>
                <p class="error">
                    ${dataError
                        ? extractErrorMessage(dataError)
                        : html`
                              &nbsp;
                          `}
                </p>
            </div>
        `;
    },
});
