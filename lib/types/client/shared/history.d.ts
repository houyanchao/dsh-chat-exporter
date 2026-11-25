import type { SessionFace } from '@deepseek-ai/dsh-api-session-controller/client';
import type { ChatNodeStore } from '@deepseek-ai/dsh-client-ui-chat/client';
export interface ChatHistory {
    readonly order: readonly string[];
    readonly nodes: ChatNodeStore;
    readonly hasMore: boolean;
}
interface HistorySource {
    getSnapshot(): Omit<ChatHistory, 'hasMore'> | undefined;
}
interface HistoryOptions {
    readonly signal: AbortSignal;
    readonly onPage?: (history: ChatHistory) => void | Promise<void>;
    readonly until?: (history: ChatHistory) => boolean;
}
/** Reuse the host's page loader and let an existing host or plugin request finish first. */
export declare function loadChatHistory(session: SessionFace, source: HistorySource, { signal, onPage, until }: HistoryOptions): Promise<ChatHistory | null>;
export {};
