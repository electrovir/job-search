import {defineTypedEvent} from 'element-vir';
import type {JobSearchRecord, JobSearchRecords} from '../../data/job-search-record.js';

export const UpdateAllRecordsEvent = defineTypedEvent<JobSearchRecords>()('update-all-records');

export const UpdateIndividualRecordEvent = defineTypedEvent<{
    id: string;
    record: JobSearchRecord;
}>()('update-individual-record');
