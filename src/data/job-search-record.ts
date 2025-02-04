import {fullDateShape} from 'date-vir';
import {defineShape} from 'object-shape-tester';

export const jobSearchRecordShape = defineShape({
    contactDate: fullDateShape,
    companyName: '',
    companyAddress: '',
    contactName: '',
    contactEmail: '',
    contactPhoneNumber: '',
    positionTitle: '',
    posting: '',
    url: '',
    contactMethod: '',
    results: '',
    notes: '',
});

export type JobSearchRecord = typeof jobSearchRecordShape.runtimeType;

export const jobSearchRecordsShape = defineShape([jobSearchRecordShape]);

export type JobSearchRecords = typeof jobSearchRecordsShape.runtimeType;

/** These are the names for each property that will be displayed to the user. */
export const jobSearchRecordPropertyDisplayNames: Record<keyof JobSearchRecord, string> = {
    companyAddress: 'Company Address',
    companyName: 'Company Name',
    contactDate: 'Date Made Contact',
    contactEmail: 'Contact Email',
    contactMethod: 'Contact Method',
    contactName: 'Contact Name',
    contactPhoneNumber: 'Contact Phone Number',
    notes: 'Notes',
    positionTitle: 'Position Title',
    posting: 'Posting number or URL',
    results: 'Results',
    url: 'Company URL',
};
