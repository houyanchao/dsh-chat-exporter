import { useLayoutEffect, useRef, useSyncExternalStore } from 'react'
import type { PropsLocale } from '@deepseek-ai/dsh-client-ui-slots'
import type { NS } from '../locales.ts'
import { settingsStore } from '../shared/settings.ts'
import { settingsDialog } from './dialog.ts'
import css from './settings.module.css'

type Localized = PropsLocale<typeof NS>

export function ExportSettings({ t }: Localized) {
  const preferences = useSyncExternalStore(settingsStore.subscribe, settingsStore.get)
  const rows = [
    { key: 'conversationExportEnabled', title: t('panel.exportTitle'), hint: t('panel.exportHint') },
    { key: 'messageScreenshotEnabled', title: t('export.screenshot'), hint: t('export.screenshotHint') },
  ] as const
  return (
    <div className={css.settings}>
      {rows.map(({ key, title, hint }) => (
        <label className={css.row} key={key}>
          <span className={css.text}><strong>{title}</strong><span>{hint}</span></span>
          <input type="checkbox" aria-label={title} checked={preferences[key]}
            onChange={event => { settingsStore.set({ [key]: event.target.checked }) }} />
          <span className={css.toggle} aria-hidden="true" />
        </label>
      ))}
    </div>
  )
}

export function ExportSettingsDialog({ t }: Localized) {
  const dialog = useRef<HTMLDialogElement>(null)
  const open = useSyncExternalStore(settingsDialog.subscribe, () => settingsDialog.get())
  useLayoutEffect(() => {
    const element = dialog.current
    if (element === null) return
    if (open && !element.open) element.showModal()
    if (!open && element.open) element.close()
  }, [open])
  return (
    <dialog className={css.dialog} ref={dialog} aria-label={t('settings.title')}
      onClick={event => { if (event.target === dialog.current) settingsDialog.set(false) }}
      onClose={() => { settingsDialog.set(false) }}>
      <div className={css.content}>
        <header><h2>{t('settings.title')}</h2><button type="button" aria-label={t('common.cancel')}
          onClick={() => { settingsDialog.set(false) }}>×</button></header>
        <ExportSettings t={t} />
      </div>
    </dialog>
  )
}
