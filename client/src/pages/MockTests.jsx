import { useEffect, useMemo, useState } from 'react'
import { COMMON_TESTS, COMPANY_TESTS, TEST_SETS, tipsFor } from '../data/mockTests.js'

export default function MockTests() {
  const COMPANIES = ['All Companies', 'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Tesla', 'NVIDIA', 'Accenture', 'Deloitte', 'TCS', 'Infosys', 'Goldman Sachs', 'JPMorgan Chase', 'Morgan Stanley', 'Uber', 'Flipkart', 'Paytm', 'Adobe', 'Tata Group']
  const [company, setCompany] = useState(COMPANIES[0])
  const initialTypes = Object.keys(COMMON_TESTS)
  const [type, setType] = useState(initialTypes[0])
  const [started, setStarted] = useState(false)
  const [time, setTime] = useState(300)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [code, setCode] = useState('')
  const [runReport, setRunReport] = useState(null)
  const [codingProblem, setCodingProblem] = useState(null)

  const sets = useMemo(() => (company === 'All Companies') ? COMMON_TESTS : (COMPANY_TESTS[company] || TEST_SETS), [company])
  const types = useMemo(() => Object.keys(sets), [sets])
  const pool = useMemo(() => sets[type] || [], [sets, type])

  useEffect(() => {
    if (!started) return
    const id = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [started])

  useEffect(() => { if (started && time <= 0) submit() }, [time, started])

  const randPick = (arr, k) => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy.slice(0, Math.min(k, copy.length))
  }

  const start = () => {
    setAnswers({})
    setResult(null)
    setTime(300)
    if (type === 'Coding') {
      const picked = randPick(pool, 1)[0] || null
      setCodingProblem(picked || null)
      setCode(picked?.signature || '')
      setCurrentQuestions([])
    } else {
      setCurrentQuestions(randPick(pool, 5))
      setCodingProblem(null)
      setCode('')
    }
    setRunReport(null)
    setStarted(true)
  }
  const choose = (qi, oi) => setAnswers(a => ({ ...a, [qi]: oi }))
  const submit = () => {
    let score = 0
    let max = 0
    if (type === 'Coding' && codingProblem) {
      const res = runCode(codingProblem, code)
      setRunReport(res)
      score = res.passed
      max = res.total
    } else {
      const correct = currentQuestions.reduce((acc, q, i) => acc + ((answers[i] === q.a) ? 1 : 0), 0)
      score = correct
      max = currentQuestions.length
    }
    const pct = Math.round((score / (max || 1)) * 100)
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
    setCurrentQuestions([])
    setCodingProblem(null)
    setRunReport(null)
    setCode('')
  }, [company])

  const runCode = (problem, src) => {
    let passed = 0
    const total = (problem?.tests || []).length
    const details = []
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(`${src}; return solve;`)()
      for (const t of problem.tests) {
        const args = Array.isArray(t.input) ? t.input : [t.input]
        let out
        try {
          out = fn(...args)
        } catch (e) {
          details.push({ input: t.input, expect: t.output, got: String(e), ok: false })
          continue
        }
        const eq = Array.isArray(t.output)
          ? JSON.stringify(out) === JSON.stringify(t.output)
          : out === t.output
        if (eq) passed++
        details.push({ input: t.input, expect: t.output, got: out, ok: eq })
      }
      return { passed, total, details }
    } catch (e) {
      return { passed: 0, total, details: [{ input: null, expect: null, got: String(e), ok: false }] }
    }
  }

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
          <div className="text-sm">
            {type === 'Coding'
              ? `Tests: ${codingProblem ? codingProblem.tests.length : 0}`
              : `Questions: ${currentQuestions.length}`}
          </div>
          <div className="text-sm">Timer: {started ? time : '—'}s</div>
        </div>
        {type !== 'Coding' ? (
          <div className="mt-4 space-y-4">
            {currentQuestions.map((q, qi) => (
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
        ) : (
          <div className="mt-4 space-y-3">
            {codingProblem && (
              <>
                <div className="text-lg font-semibold">{codingProblem.title}</div>
                <div className="text-sm text-gray-600">{codingProblem.prompt}</div>
                <a className="text-sm text-primary underline" href={codingProblem.link} target="_blank" rel="noopener noreferrer">Reference</a>
                <textarea
                  className="mt-3 w-full h-40 border rounded p-2 font-mono text-sm"
                  value={code}
                  onChange={(e)=> setCode(e.target.value)}
                  placeholder={codingProblem.signature}
                />
                <div className="flex gap-2">
                  <button onClick={()=> setRunReport(runCode(codingProblem, code))} className="px-3 py-2 border rounded">Run Code</button>
                </div>
                {runReport && (
                  <div className="mt-3 text-sm">
                    <div>Passed: {runReport.passed}/{runReport.total}</div>
                    <div className="mt-2 space-y-2">
                      {runReport.details.map((d, i)=> (
                        <div key={i} className={`p-2 rounded border ${d.ok ? 'border-green-500' : 'border-red-500'}`}>
                          <div>Input: {JSON.stringify(d.input)}</div>
                          <div>Expected: {JSON.stringify(d.expect)}</div>
                          <div>Got: {JSON.stringify(d.got)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
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
