import {fullDateShape} from 'date-vir';
import {defineShape} from 'object-shape-tester';

export const jobSearchRecordShape = defineShape({
    contactDate: fullDateShape,
    companyName: '',
    posting: '',
    companyAddress: '',
    contactPhoneNumber: '',
    contactEmail: '',
    url: '',
    contactName: '',
    positionTitle: '',
    contactMethod: '',
    results: '',
});

export type JobSearchRecord = typeof jobSearchRecordShape.runtimeType;

export const jobSearchRecordsShape = defineShape([jobSearchRecordShape]);

export type JobSearchRecords = typeof jobSearchRecordsShape.runtimeType;
