import {createUuidV4, type AnyObject, type MaybePromise} from '@augment-vir/common';

export type DataMigrator = (
    records: AnyObject[],
) => MaybePromise<{fixedRecords: AnyObject[]; nextVersion: string}>;

export const dataMigrations: Record<number | string, DataMigrator> = {
    ''(this: void, records: AnyObject[]) {
        const fixedRecords = records.map((record) => {
            if ('id' in record) {
                return record;
            } else {
                return {
                    ...record,
                    id: createUuidV4(),
                };
            }
        });

        return {
            fixedRecords,
            nextVersion: 'add-id-field',
        };
    },
};
