import type { Context } from '@deepseek-ai/cordis'
import { whenTimelineInactive } from './whenTimelineInactive.ts'
import type { SessionId } from '@deepseek-ai/dsh-client-connection/client'
import type {} from '@deepseek-ai/dsh-api-session-controller/client'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-chat/client'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {} from '@deepseek-ai/dsh-client-ui-layout/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import type {} from '@deepseek-ai/dsh-client-ui-session/client'
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'
import { en, NS, zh, type ExportKey } from './locales.ts'
import { AssistantExportActions, ExportAction } from './conversationExport/ExportAction.tsx'
import { ExportOverlay } from './ui/ExportOverlay.tsx'
import { ExportSettings } from './settings/ExportSettings.tsx'
import { loadChatHistory, type ChatHistory } from './shared/history.ts'
import { bindStorageSync } from './shared/storageSync.ts'
import { bindTheme } from './shared/theme.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    dshChatExporter: ExportKey
  }
}

export const inject = ['slots', 'locale', 'sessions', 'theme', 'uiConversation']

export function apply(ctx: Context): void {
  whenTimelineInactive(ctx, { name: 'dsh-chat-exporter', inject, apply: activate })
}

function activate(ctx: Context): void {
  bindTheme(ctx)
  bindStorageSync(ctx)
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-chat-exporter: dictionaries')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'dsh-chat-exporter-overlay',
    locale: NS,
  }, ExportOverlay))
  ctx.slots.inject('settings.general.item', () => ctx.slots.register({
    name: 'settings.general.item',
    id: 'dsh-chat-exporter',
    locale: NS,
  }, ExportSettings))
  ctx.slots.inject(
    'conversation.chat.assistant-actions',
    () => ctx.slots.register({
      name: 'conversation.chat.assistant-actions',
      id: 'dsh-chat-exporter-reply',
      locale: NS,
    }, AssistantExportActions),
  )
  // 对话导出与消息选择（图片经 readAttachment 解析字节）。
  ctx.slots.inject(
    'conversation.session.header.actions',
    () => ctx.slots.register({
      name: 'conversation.session.header.actions',
      id: 'dsh-chat-exporter',
      order: 41,
      locale: NS,
      inject: () => ({
        resolveAttachment: async (sessionId: string, attachmentId: string) => {
          const session = ctx.sessions.binding(sessionId as SessionId)?.session
          if (session === undefined) return null
          const result = await session.readAttachment(attachmentId as Parameters<typeof session.readAttachment>[0])
          if (!result.ok) return null
          const { attachment, data } = result.value
          return {
            mediaType: attachment.mediaType,
            width: attachment.width,
            height: attachment.height,
            name: attachment.name,
            data,
          }
        },
        loadHistory: async (sessionId: string, signal: AbortSignal, onPage: (history: ChatHistory) => Promise<void>) => {
          const id = sessionId as SessionId
          const session = ctx.sessions.binding(id)?.session
          if (session === undefined) return null
          return await loadChatHistory(session, ctx.uiConversation.binding(id).target('chat'), { signal, onPage })
        },
      }),
    }, ExportAction),
  )
}
