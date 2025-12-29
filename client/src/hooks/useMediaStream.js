import { useEffect, useRef, useState } from 'react'

export default function useMediaStream() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        if (videoRef.current) videoRef.current.srcObject = stream
        setReady(true)
      } catch (e) {
        setReady(false)
      }
    })()
  }, [])

  return { videoRef, ready }
}