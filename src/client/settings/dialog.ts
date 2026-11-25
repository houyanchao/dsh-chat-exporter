import { Bus } from '../ui/bus.ts'

export const settingsDialog = new Bus(false)
export function showSettings(): void {
  settingsDialog.set(true)
}
