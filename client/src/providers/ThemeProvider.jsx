import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { watchAuth } from '../services/firebase.js'

const ThemeContext = createContext(null)

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const unsub = watchAuth((u) => {
      if (u) {
        const prev = JSON.parse(localStorage.getItem('user') || 'null')
        const profile = { name: u.displayName || prev?.name || 'User', email: u.email, uid: u.uid, domain: prev?.domain || 'General' }
        localStorage.setItem('user', JSON.stringify(profile))
        setUser(profile)
      }
    })
    return () => unsub && unsub()
  }, [])

  const value = useMemo(() => ({ dark, setDark, user, setUser }), [dark, user])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useAuth() {
  return useContext(ThemeContext)
}