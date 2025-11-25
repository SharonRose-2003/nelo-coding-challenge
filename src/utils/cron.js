let _interval = null
export function startCron(getTasks) {
  if (_interval) clearInterval(_interval)
  _interval = setInterval(() => {
    try {
      const tasks = getTasks()
      const pending = tasks.filter(t => !t.completed)
      console.log('🔔 [CRON] Pending tasks:', pending.length, pending)
    } catch (e) {
      console.error('cron error', e)
    }
  }, 20 * 60 * 1000)
}
export function stopCron() { if (_interval) clearInterval(_interval) }
