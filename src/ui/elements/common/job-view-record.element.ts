import {getObjectTypedKeys} from '@augment-vir/common';
import {toSimpleDatePartString} from 'date-vir';
import {css, defineElement, html, listen, nothing} from 'element-vir';
import {Pencil24Icon, ViraIcon} from 'vira';
import {
    jobSearchRecordPropertyDisplayNames,
    jobSearchRecordShape,
    type JobSearchRecord,
} from '../../../data/job-search-record.js';
import {UpdateIndividualRecordEvent} from '../../events/records-update.event.js';
import {JobSearchRecordEdit} from './job-record-edit.element.js';

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

        ${ViraIcon} {
            height: 16px;
            width: 16px;
            cursor: pointer;
        }
    `,
    stateInitStatic: {
        editing: false,
    },
    render({inputs, state, updateState, dispatch}) {
        const dateString = toSimpleDatePartString(inputs.record.contactDate);

        const recordTitle = inputs.record.contactName || inputs.record.companyName || dateString;

        const jobRecordKeyOrder = getObjectTypedKeys(jobSearchRecordShape.shape);

        const tableRows = jobRecordKeyOrder.map((recordKey) => {
            if (
                recordKey === 'contactDate' ||
                !inputs.record[recordKey] ||
                !jobSearchRecordPropertyDisplayNames[recordKey]
            ) {
                return nothing;
            }

            return html`
                <tr>
                    <th>${jobSearchRecordPropertyDisplayNames[recordKey]}:</th>
                    <td>${inputs.record[recordKey]}</td>
                </tr>
            `;
        });

        const recordBody = state.editing
            ? html`
                  <${JobSearchRecordEdit.assign({
                      existingRecord: inputs.record,
                  })}
                      ${listen(JobSearchRecordEdit.events.searchRecordSave, (event) => {
                          updateState({editing: false});
                          dispatch(new UpdateIndividualRecordEvent(event.detail));
                      })}
                  ></${JobSearchRecordEdit}>
              `
            : html`
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

        return html`
            <h2>
                ${recordTitle}
                <${ViraIcon.assign({icon: Pencil24Icon, fitContainer: true})}
                    ${listen('click', () => {
                        updateState({editing: !state.editing});
                    })}
                ></${ViraIcon}>
            </h2>
            ${recordBody}
        `;
    },
});
