import {check, checkWrap} from '@augment-vir/assert';
import {SpaRouter, type FullRoute} from 'spa-router-vir';
import {AppTab} from './app-tabs.js';

export type JobAppPaths = [AppTab.Entry] | [AppTab.Raw] | [AppTab.View, string] | [AppTab.View];

type ValidJobAppSearch = {search: string[]} | undefined;

export type JobAppFullRoute = Required<FullRoute<JobAppPaths, ValidJobAppSearch, undefined>>;

export const defaultJobAppRoute: JobAppFullRoute = {
    paths: [AppTab.Entry],
    hash: undefined,
    search: undefined,
};

export const jobAppRouter = new SpaRouter<JobAppPaths, ValidJobAppSearch, undefined>({
    basePath: 'job-search',
    sanitizeRoute(rawRoute) {
        const tab = checkWrap.isEnumValue(rawRoute.paths[0], AppTab) || defaultJobAppRoute.paths[0];

        const searchQuery = rawRoute.search?.search?.[0];
        const sanitizedSearch: ValidJobAppSearch =
            tab === AppTab.View ? (searchQuery ? {search: [searchQuery]} : undefined) : undefined;

        const sanitizedPaths: JobAppPaths =
            tab === AppTab.View
                ? ((
                      [
                          tab,
                          rawRoute.paths[1],
                      ] satisfies [AppTab.View, string | undefined]
                  ).filter(check.isTruthy) as [AppTab.View, string] | [AppTab.View])
                : [tab];

        const newRoute: JobAppFullRoute = {
            ...defaultJobAppRoute,
            search: sanitizedSearch,
            paths: sanitizedPaths,
        };

        return newRoute;
    },
});
