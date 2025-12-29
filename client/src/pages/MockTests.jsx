import { useEffect, useMemo, useState } from 'react'
import { TEST_SETS, tipsFor, COMPANY_TESTS, COMMON_TESTS } from '../data/mockTests.js'

export default function MockTests() {
  const COMPANIES = ['All Companies','Google','Amazon','Microsoft','Meta','Apple','IBM','Accenture','Capgemini','HCL','Deloitte','TCS','Infosys','Wipro']
  const [company, setCompany] = useState(COMPANIES[0])
  const initialTypes = Object.keys(COMMON_TESTS)
  const [type, setType] = useState(initialTypes[0])
  const [started, setStarted] = useState(false)
  const [time, setTime] = useState(300)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const sets = useMemo(() => (company === 'All Companies') ? COMMON_TESTS : (COMPANY_TESTS[company] || TEST_SETS), [company])
  const types = useMemo(() => Object.keys(sets), [sets])
  const questions = useMemo(() => sets[type], [sets, type])

  useEffect(() => {
    if (!started) return
    const id = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [started])

  useEffect(() => { if (started && time <= 0) submit() }, [time, started])

  const start = () => { setAnswers({}); setResult(null); setTime(300); setStarted(true) }
  const choose = (qi, oi) => setAnswers(a => ({ ...a, [qi]: oi }))
  const submit = () => {
    const correct = questions.reduce((acc, q, i) => acc + ((answers[i] === q.a) ? 1 : 0), 0)
    const score = correct
    const max = questions.length
    const pct = Math.round((score / max) * 100)
    const summary = { score, max, pct, type, company, tips: tipsFor(type, score) }
    setResult(summary)
    setStarted(false)
    try {
      const hist = JSON.parse(localStorage.getItem('mockHistory') || '[]')
      hist.push({ date: new Date().toISOString().slice(0,10), score: summary.score, type, company })
      localStorage.setItem('mockHistory', JSON.stringify(hist))
    } catch {}
  }

  useEffect(() => {
    const nextTypes = Object.keys((company === 'All Companies') ? COMMON_TESTS : (COMPANY_TESTS[company] || TEST_SETS))
    setType(nextTypes[0])
    setAnswers({})
    setResult(null)
    setStarted(false)
  }, [company])

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Mock Tests</h1>
      <div className="mt-4 flex items-center gap-3">
        <label className="text-sm">Company</label>
        <select value={company} onChange={(e)=>setCompany(e.target.value)} className="border rounded p-2 bg-transparent">
          {COMPANIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <label className="text-sm">Type</label>
        <select value={type} onChange={(e)=>setType(e.target.value)} className="border rounded p-2 bg-transparent">
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {!started ? (
          <button onClick={start} className="ml-auto px-4 py-2 bg-primary text-white rounded">Start</button>
        ) : (
          <div className="ml-auto text-sm text-gray-500">Test in progress</div>
        )}
      </div>

      <div className="mt-4 p-4 rounded-xl border bg-white dark:bg-gray-800">
        <div className="flex justify-between">
          <div className="text-sm">Questions: {questions.length}</div>
          <div className="text-sm">Timer: {started ? time : '—'}s</div>
        </div>
        <div className="mt-4 space-y-4">
          {questions.map((q, qi) => (
            <div key={qi} className="p-3 rounded border">
              <div className="font-medium">{qi+1}. {q.q}</div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {q.options.map((opt, oi) => (
                  <button key={oi} onClick={()=> choose(qi, oi)} className={`px-3 py-2 rounded border ${answers[qi]===oi ? 'bg-primary text-white' : ''}`}>{opt}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {started && (
          <div className="mt-6 flex justify-end">
            <button onClick={submit} className="px-4 py-2 border rounded">Submit</button>
          </div>
        )}
      </div>

      {result && (
        <div className="mt-6 p-6 rounded-xl border bg-white dark:bg-gray-800">
          <div className="text-lg font-semibold">Result</div>
          <div className="mt-2">Company: {result.company}</div>
          <div className="mt-1">Score: {result.score}/{result.max} ({result.pct}%)</div>
          <div className="mt-1 text-sm">Tips: {result.tips}</div>
        </div>
      )}
    </div>
  )
}