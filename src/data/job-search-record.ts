import {fullDateShape} from 'date-vir';
import {defineShape, literal, or} from 'object-shape-tester';

export const nonEmptyStringShape = literal('', (value): value is string => !!value);

export const jobSearchRecordShape = defineShape({
    contactDate: fullDateShape,
    companyName: nonEmptyStringShape,
    posting: or(undefined, nonEmptyStringShape),
    companyAddress: nonEmptyStringShape,
    contactPhoneNumber: or(undefined, nonEmptyStringShape),
    contactEmail: or(undefined, nonEmptyStringShape),
    url: or(undefined, nonEmptyStringShape),
    contactName: or(undefined, nonEmptyStringShape),
    positionTitle: nonEmptyStringShape,
    contactMethod: nonEmptyStringShape,
    results: '',
});

export type JobSearchRecord = typeof jobSearchRecordShape.runtimeType;

export const jobSearchRecordsShape = defineShape([jobSearchRecordShape]);

export type JobSearchRecords = typeof jobSearchRecordsShape.runtimeType;
