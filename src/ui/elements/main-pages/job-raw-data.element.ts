import {extractErrorMessage, wait, wrapInTry} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {css, defineElement, html, listen} from 'element-vir';
import JSON5 from 'json5';
import {assertValidShape} from 'object-shape-tester';
import {LoaderAnimated24Icon, ViraButton} from 'vira';
import {AppTab} from '../../../data/app-tabs.js';
import {jobSearchRecordsShape} from '../../../data/job-search-record.js';
import {ChangeRouteEvent} from '../../event/change-route.event.js';
import {DataUpdateEvent} from '../../event/data-update.event.js';

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
        isSaving: false,
    },
    render({inputs, state, updateState, dispatch}) {
        const json = state.inputJson || JSON.stringify(inputs.data, null, 4);

        const parsedJson = wrapInTry(() => JSON5.parse(json), {
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
                    text: state.isSaving ? '' : 'Save',
                    icon: state.isSaving ? LoaderAnimated24Icon : undefined,
                    disabled: !!dataError || state.isSaving,
                })}
                    ${listen('click', async () => {
                        updateState({isSaving: true});
                        assertValidShape(parsedJson, jobSearchRecordsShape);
                        await wait({seconds: 0.5});
                        dispatch(new DataUpdateEvent(parsedJson));
                        dispatch(
                            new ChangeRouteEvent({
                                paths: [AppTab.View],
                            }),
                        );
                        updateState({isSaving: false});
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
