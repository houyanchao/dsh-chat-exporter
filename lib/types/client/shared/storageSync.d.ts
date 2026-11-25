import type { Context as ClientContext } from '@deepseek-ai/cordis';
export declare function registerStorageSync(key: string, reload: () => void): void;
/** Keep the browser listener within the plugin's lifetime. */
export declare function bindStorageSync(ctx: ClientContext): void;
