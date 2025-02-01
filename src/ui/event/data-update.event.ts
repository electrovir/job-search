import {defineTypedEvent} from 'element-vir';
import type {JobSearchRecords} from '../../data/job-search-record.js';

export const DataUpdateEvent = defineTypedEvent<JobSearchRecords>()('data-update');
