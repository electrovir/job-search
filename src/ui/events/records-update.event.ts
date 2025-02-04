import {defineTypedEvent} from 'element-vir';
import {type JobSearchRecord, type JobSearchRecords} from '../../data/job-search-record.js';

export const UpdateAllRecordsEvent = defineTypedEvent<JobSearchRecords>()('update-all-records');

export const UpdateIndividualRecordEvent = defineTypedEvent<Readonly<JobSearchRecord>>()(
    'update-individual-record',
);
