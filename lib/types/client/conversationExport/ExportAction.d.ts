import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import type { ChatHistory } from '../shared/history.ts';
import { type AttachmentResolver } from './collect.ts';
type LoadHistory = (signal: AbortSignal, onPage: (history: ChatHistory) => Promise<void>) => Promise<ChatHistory | null>;
export type ExportActionProps = PropsRuntime<'conversation.session.header.actions'> & PropsLocale<typeof NS> & {
    readonly resolveAttachment: (sessionId: string, attachmentId: string) => ReturnType<AttachmentResolver>;
    readonly loadHistory: (sessionId: string, ...args: Parameters<LoadHistory>) => ReturnType<LoadHistory>;
};
export declare function AssistantExportActions({ sessionId, messageId, t }: PropsRuntime<'conversation.chat.assistant-actions'> & PropsLocale<typeof NS>): import("react").JSX.Element;
export declare function ExportAction({ sessionId, useChat, useSession, useSessions, resolveAttachment, loadHistory, t }: ExportActionProps): import("react").JSX.Element;
export {};
