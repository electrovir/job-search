import {check, checkWrap} from '@augment-vir/assert';
import {SpaRouter, type FullRoute} from 'spa-router-vir';
import {AppTab} from './app-tabs.js';

export type JobAppPaths = [AppTab.Entry] | [AppTab.Raw] | [AppTab.View, string] | [AppTab.View];

export type JobAppRoute = Required<FullRoute<JobAppPaths, undefined, undefined>>;

export const defaultJobAppRoute: JobAppRoute = {
    paths: [AppTab.Entry],
    hash: undefined,
    search: undefined,
};

export const jobAppRouter = new SpaRouter<JobAppPaths, undefined, undefined>({
    basePath: 'job-search',
    sanitizeRoute(rawRoute) {
        const tab = checkWrap.isEnumValue(rawRoute.paths[0], AppTab) || defaultJobAppRoute.paths[0];

        if (tab === AppTab.View) {
            return {
                ...defaultJobAppRoute,
                paths: (
                    [
                        tab,
                        rawRoute.paths[1],
                    ] satisfies [AppTab.View, string | undefined]
                ).filter(check.isTruthy) as [AppTab.View, string] | [AppTab.View],
            };
        } else {
            return {
                ...defaultJobAppRoute,
                paths: [
                    tab,
                ],
            };
        }
    },
});
