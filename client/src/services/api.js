const email = (() => { try { return JSON.parse(localStorage.getItem('user'))?.email || '' } catch { return '' } })()

export async function fetchNextQuestion(domain = 'General') {
  const res = await fetch(`/api/questions?domain=${encodeURIComponent(domain)}`)
  if (!res.ok) throw new Error('Failed to fetch question')
  return res.json()
}

export async function evaluateAnswer({ question, answer, domain }) {
  const res = await fetch('/api/evaluate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-user-email': email },
    body: JSON.stringify({ question, answer, domain })
  })
  if (!res.ok) throw new Error('Failed to evaluate answer')
  return res.json()
}

export async function fetchReports() {
  const res = await fetch('/api/reports', { headers: { 'x-user-email': email } })
  if (!res.ok) throw new Error('Failed to fetch reports')
  return res.json()
}