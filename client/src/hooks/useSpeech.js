import { useEffect, useRef, useState } from 'react'

export default function useSpeechRecognition({ lang = 'en-US' } = {}) {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [supported, setSupported] = useState(false)
  const [error, setError] = useState('')
  const recRef = useRef(null)

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) { setSupported(false); return }
    setSupported(true)
    const rec = new SR()
    rec.lang = lang
    rec.continuous = true
    rec.interimResults = true
    rec.onresult = (e) => {
      let text = ''
      for (let i = 0; i < e.results.length; i++) {
        const r = e.results[i]
        text += r[0].transcript + ' '
      }
      setTranscript(text.trim())
    }
    rec.onerror = () => { setListening(false); setError('Speech recognition error') }
    rec.onend = () => setListening(false)
    recRef.current = rec
    return () => rec.stop()
  }, [lang])

  const start = () => {
    if (!recRef.current) { setError('Speech recognition not supported'); return }
    try {
      recRef.current.start()
      setListening(true)
      setError('')
    } catch (e) {
      setError('Unable to start speech recognition')
    }
  }
  const stop = () => {
    if (!recRef.current) return
    try {
      recRef.current.stop()
      setListening(false)
    } catch {}
  }

  return { listening, transcript, start, stop, supported, error }
}