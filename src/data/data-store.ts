import {log, type AnyObject} from '@augment-vir/common';
import localforage from 'localforage-esm';
import {assertValidShape} from 'object-shape-tester';
import {dataMigrations} from './data-migrations.js';
import {JobSearchRecords, jobSearchRecordsShape} from './job-search-record.js';

const jobSearchRecordsStore = localforage.createInstance({
    description: 'Records for job search.',
    name: 'job-search',
    storeName: 'job-search',
});

let firstLoad = true;

const dataKey = 'job-search-data';
const dataVersionKey = 'job-search-data-version';

export async function loadLocalData() {
    if (firstLoad) {
        firstLoad = false;
        await migrateData();
    }

    return (await jobSearchRecordsStore.getItem<AnyObject[]>(dataKey)) || [];
}

export async function saveDataLocally(data: Readonly<JobSearchRecords>): Promise<void> {
    assertValidShape(data, jobSearchRecordsShape);

    await jobSearchRecordsStore.setItem(dataKey, data);
}

async function migrateData(): Promise<void> {
    const currentVersion = (await jobSearchRecordsStore.getItem<string>(dataVersionKey)) || '';

    const migrator = dataMigrations[currentVersion];
    if (!migrator) {
        log.info(`Current data version: '${currentVersion}'`);
        return;
    }

    log.info(`Migration found for data version '${currentVersion}'. Executing migration...`);

    const currentData = (await jobSearchRecordsStore.getItem<AnyObject[]>(dataKey)) || [];

    const {fixedRecords, nextVersion} = await migrator(currentData);

    await jobSearchRecordsStore.setItem(dataKey, fixedRecords);
    await jobSearchRecordsStore.setItem(dataVersionKey, nextVersion);

    log.info(`Migration completed. New data version: '${nextVersion}'`);

    return migrateData();
}
