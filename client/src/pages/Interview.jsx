import { useEffect, useMemo, useState } from 'react'
import useMediaStream from '../hooks/useMediaStream.js'
import useSpeechRecognition from '../hooks/useSpeech.js'
import { fetchNextQuestion, evaluateAnswer } from '../services/api.js'
import { useAuth } from '../providers/ThemeProvider.jsx'

export default function Interview() {
  const { videoRef } = useMediaStream()
  const { transcript, listening, start, stop, supported, error } = useSpeechRecognition({ lang: 'en-US' })
  const { user } = useAuth()
  const [question, setQuestion] = useState(null)
  const [evaluation, setEvaluation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [manual, setManual] = useState('')
  const [speaking, setSpeaking] = useState(false)

  useEffect(() => {
    (async () => {
      const q = await fetchNextQuestion(user?.domain || 'General')
      setQuestion(q.question)
    })()
  }, [user])

  useEffect(() => {
    if (!question) return
    const utt = new SpeechSynthesisUtterance(question)
    utt.lang = 'en-US'
    utt.onstart = () => setSpeaking(true)
    utt.onend = () => setSpeaking(false)
    try { window.speechSynthesis.speak(utt) } catch {}
  }, [question])

  const submit = async () => {
    setLoading(true)
    const res = await evaluateAnswer({ question, answer: supported ? transcript : manual, domain: user?.domain })
    setEvaluation(res)
    setLoading(false)
  }

  const askAgain = () => {
    if (!question) return
    const utt = new SpeechSynthesisUtterance(question)
    utt.lang = 'en-US'
    utt.onstart = () => setSpeaking(true)
    utt.onend = () => setSpeaking(false)
    try { window.speechSynthesis.speak(utt) } catch {}
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-video rounded-xl overflow-hidden border bg-black">
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border bg-white dark:bg-gray-800 flex items-center justify-center">
            <div className={`w-24 h-24 rounded-full ${speaking ? 'bg-blue-600 animate-pulse' : 'bg-gray-400'}`}></div>
          </div>
        </div>
        <div className="p-4 rounded-xl border bg-white dark:bg-gray-800">
          <div className="text-sm text-gray-500">Current Question</div>
          <div className="mt-2 font-semibold">{question || 'Loading...'}</div>
          <div className="mt-3">
            <button onClick={askAgain} className="px-3 py-2 border rounded">Ask Again</button>
          </div>
        </div>
        <div className="flex gap-3">
          {supported ? (
            !listening ? (
              <button onClick={start} className="px-4 py-2 bg-primary text-white rounded">Start Answer</button>
            ) : (
              <button onClick={stop} className="px-4 py-2 bg-red-600 text-white rounded">Stop</button>
            )
          ) : (
            <div className="text-sm text-red-600">Speech recognition not supported. Use text input.</div>
          )}
          <button onClick={submit} disabled={(supported ? !transcript : !manual) || loading} className="px-4 py-2 border rounded">Evaluate</button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-xl border bg-white dark:bg-gray-800">
          <div className="text-sm text-gray-500">Transcribed Answer</div>
          {supported ? (
            <div className="mt-2 whitespace-pre-wrap min-h-[120px]">{transcript || 'Speak to record...'}</div>
          ) : (
            <textarea value={manual} onChange={(e)=>setManual(e.target.value)} className="mt-2 w-full border rounded p-2 bg-transparent min-h-[120px]" placeholder="Type your answer here" />
          )}
          {error && <div className="mt-2 text-xs text-red-600">{error}</div>}
        </div>
        <div className="p-4 rounded-xl border bg-white dark:bg-gray-800">
          <div className="text-sm text-gray-500">AI Feedback</div>
          {evaluation ? (
            <div className="mt-2 space-y-2">
              <div>Score: <span className="font-semibold">{evaluation.score}/5</span></div>
              <div className="text-sm">{evaluation.feedback}</div>
              <div className="text-sm">Tips: {evaluation.tips}</div>
              <div className="text-sm">Verdict: {evaluation.isCorrect || (evaluation.score >= 4) ? 'Correct' : 'Incorrect'}</div>
              {!(evaluation.isCorrect || (evaluation.score >= 4)) && (
                <div className="text-sm">Correct Answer: {evaluation.idealAnswer}</div>
              )}
            </div>
          ) : (
            <div className="mt-2 text-sm">No feedback yet.</div>
          )}
        </div>
      </div>
    </div>
  )
}