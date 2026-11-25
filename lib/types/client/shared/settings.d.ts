interface ExportOptions {
    readonly formatId: string;
    readonly themeId: string;
    readonly showTime: boolean;
    readonly showConversationTime: boolean;
}
interface Settings {
    readonly conversationExportEnabled: boolean;
    readonly messageScreenshotEnabled: boolean;
    readonly screenshotScale: number;
    readonly activeColorId: string;
    readonly exportOptions?: ExportOptions;
}
export declare const settingsStore: {
    subscribe: (listener: () => void) => (() => void);
    get: () => Settings;
    set(patch: Partial<Settings>): void;
};
export {};
