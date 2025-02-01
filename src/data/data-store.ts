import localforage from 'localforage-esm';
import {assertValidShape} from 'object-shape-tester';
import {JobSearchRecords, jobSearchRecordsShape} from './job-search-record.js';

const jobSearchDataStore = localforage.createInstance({
    description: 'Entry records for job search.',
    name: 'job-search',
    storeName: 'job-search',
});

const dataKey = 'job-search-data';

export async function loadData() {
    const data = await jobSearchDataStore.getItem(dataKey);

    if (!data) {
        return [];
    }

    assertValidShape(data, jobSearchRecordsShape);

    return data;
}

export async function saveData(data: Readonly<JobSearchRecords>): Promise<void> {
    assertValidShape(data, jobSearchRecordsShape);

    await jobSearchDataStore.setItem(dataKey, data);
}
