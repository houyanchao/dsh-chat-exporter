import type { Context } from '@deepseek-ai/cordis';
import { type ExportKey } from './locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        dshChatExporter: ExportKey;
    }
}
export declare const inject: string[];
export declare function apply(ctx: Context): void;
