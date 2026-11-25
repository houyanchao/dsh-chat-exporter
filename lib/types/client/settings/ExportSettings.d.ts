import type { PropsLocale } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
type Localized = PropsLocale<typeof NS>;
export declare function ExportSettings({ t }: Localized): import("react").JSX.Element;
export declare function ExportSettingsDialog({ t }: Localized): import("react").JSX.Element;
export {};
