import { Bus } from '../ui/bus.ts'
import { DEFAULT_ACTIVE_COLOR_ID } from './palette.ts'
import { registerStorageSync } from './storageSync.ts'

interface ExportOptions {
  readonly formatId: string
  readonly themeId: string
  readonly showTime: boolean
  readonly showConversationTime: boolean
}

interface Settings {
  readonly conversationExportEnabled: boolean
  readonly messageScreenshotEnabled: boolean
  readonly screenshotScale: number
  readonly activeColorId: string
  readonly exportOptions?: ExportOptions
}

const STORAGE_KEY = 'dsh.chat-export.settings'
const LEGACY_KEY = 'dsh.timeline.settings'
const defaults: Settings = {
  conversationExportEnabled: true,
  messageScreenshotEnabled: true,
  screenshotScale: 2,
  activeColorId: DEFAULT_ACTIVE_COLOR_ID,
}

function decode(raw: string): Settings {
  const value = JSON.parse(raw) as Partial<Settings> | null
  if (!value || typeof value !== 'object') return defaults
  const options = value.exportOptions
  const scale = value.screenshotScale
  return {
    conversationExportEnabled: value.conversationExportEnabled !== false,
    messageScreenshotEnabled: value.messageScreenshotEnabled !== false,
    screenshotScale: typeof scale === 'number' && [1, 2, 3, 4].includes(scale) ? scale : defaults.screenshotScale,
    activeColorId: typeof value.activeColorId === 'string' ? value.activeColorId : defaults.activeColorId,
    ...(options && typeof options.formatId === 'string' && typeof options.themeId === 'string' ? {
      exportOptions: {
        formatId: options.formatId, themeId: options.themeId,
        showTime: options.showTime !== false, showConversationTime: options.showConversationTime !== false,
      },
    } : {}),
  }
}

/** Seed this plugin's own key once using just the export preferences from Timeline. */
function load(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw !== null) return decode(raw)
    const legacy = localStorage.getItem(LEGACY_KEY)
    const initial = legacy === null ? defaults : decode(legacy)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(initial)) } catch { /* storage may be read-only */ }
    return initial
  } catch { return defaults }
}

const bus = new Bus<Settings>(defaults)
registerStorageSync(STORAGE_KEY, () => { bus.set(load()) })

export const settingsStore = {
  subscribe: bus.subscribe,
  get: (): Settings => bus.get(),
  set(patch: Partial<Settings>): void {
    let current = bus.get()
    try {
      const latest = localStorage.getItem(STORAGE_KEY)
      if (latest !== null) current = decode(latest)
    } catch { /* keep the in-memory preferences */ }
    const next = { ...current, ...patch }
    bus.set(next)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch { /* keep the in-memory changes */ }
  },
}
