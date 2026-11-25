import { useEffect, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type { NS } from '../locales.ts'
import { ExportSettingsDialog } from '../settings/ExportSettings.tsx'
import { settingsDialog } from '../settings/dialog.ts'
import { selectCurrentSessionId } from '../shared/currentSession.ts'
import { detectDarkTheme, observeTheme } from '../shared/theme.ts'
import { toast, ToastHost } from './toast.tsx'
import { tooltip, TooltipHost } from './tooltip.tsx'
import css from './ui.module.css'

export function ExportOverlay({ t, useSessions }: PropsRuntime<'shell.overlay'> & PropsLocale<typeof NS>) {
  const dark = useSyncExternalStore(observeTheme, detectDarkTheme)
  const sessionId = useSessions(selectCurrentSessionId)
  useEffect(() => () => {
    toast.forceHideAll()
    tooltip.forceHideAll()
    settingsDialog.set(false)
  }, [sessionId])

  return createPortal(
    <div className={css.host} style={{ colorScheme: dark ? 'dark' : 'light' }} data-theme={dark ? 'dark' : 'light'}>
      <ToastHost dark={dark} />
      <ExportSettingsDialog t={t} />
      <TooltipHost dark={dark} />
    </div>, document.body,
  )
}
