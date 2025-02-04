import localforage from 'localforage-esm';
import {assertValidShape} from 'object-shape-tester';
import {JobSearchRecords, jobSearchRecordsShape} from './job-search-record.js';

const jobSearchDataStore = localforage.createInstance({
    description: 'Records for job search.',
    name: 'job-search',
    storeName: 'job-search',
});

const dataKey = 'job-search-data';

export async function loadLocalData() {
    const data = await jobSearchDataStore.getItem(dataKey);

    if (!data) {
        return [];
    }

    return data;
}

export async function saveDataLocally(data: Readonly<JobSearchRecords>): Promise<void> {
    assertValidShape(data, jobSearchRecordsShape);

    await jobSearchDataStore.setItem(dataKey, data);
}
