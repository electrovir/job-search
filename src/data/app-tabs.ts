export enum AppTab {
    Entry = 'entry',
    Raw = 'raw',
    View = 'view',
}

export const appTabDisplay: Record<AppTab, string> = {
    [AppTab.Entry]: 'New',
    [AppTab.Raw]: 'Raw',
    [AppTab.View]: 'View All',
};
