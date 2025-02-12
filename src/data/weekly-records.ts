import {getOrSet} from '@augment-vir/common';
import {
    DateUnit,
    FullDate,
    getEndDate,
    getStartDate,
    orderedMonthNames,
    toTimestamp,
} from 'date-vir';
import {JobSearchRecord, JobSearchRecords} from './job-search-record.js';

export type RecordWeeks = {[Year in number]: {[WeekKey in string]: JobSearchRecord[]}};

export function generateWeekKey(date: Readonly<FullDate>): string {
    const startOfWeek = getStartDate(date, DateUnit.Week);
    const endOfWeek = getEndDate(date, DateUnit.Week);

    const startOfWeekMonthName = orderedMonthNames[startOfWeek.month - 1]?.slice(0, 3);
    const endOfWeekMonthName = orderedMonthNames[endOfWeek.month - 1]?.slice(0, 3);

    return `${startOfWeekMonthName}${startOfWeek.day}-${endOfWeekMonthName}${endOfWeek.day}`;
}

export function organizeDataIntoWeeks(data: Readonly<JobSearchRecords>): RecordWeeks {
    const allWeeks: RecordWeeks = {};

    const sorted = data.toSorted((a, b) => toTimestamp(b.contactDate) - toTimestamp(a.contactDate));

    sorted.forEach((searchRecord) => {
        const endOfWeek = getEndDate(searchRecord.contactDate, DateUnit.Week);

        const yearWeeks = getOrSet(allWeeks, endOfWeek.year, () => {
            return {};
        });

        const weekKey = generateWeekKey(searchRecord.contactDate);

        getOrSet(yearWeeks, weekKey, () => {
            return [];
        }).push(searchRecord);
    });

    return allWeeks;
}

export function prettifyWeekKey(weekKey: string, weekRecordLength: number) {
    return [
        weekKey.replace('-', ' - ').replaceAll(/(\D)(\d)/g, '$1 $2'),
        `(${weekRecordLength || 0})`,
    ].join(' ');
}
