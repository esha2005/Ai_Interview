import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogin } from '../services/firebase.js'
import { useAuth } from '../providers/ThemeProvider.jsx'

const domains = ['CSE','ECE','MBA','Mechanical','Civil','General']

export default function SignIn() {
  const { setUser } = useAuth()
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [domain, setDomain] = useState('General')

  async function sha256Hex(s) {
    try {
      const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s))
      return Array.from(new Uint8Array(d)).map(b=>b.toString(16).padStart(2,'0')).join('')
    } catch {
      return s
    }
  }
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const login = async (e) => {
    e.preventDefault()
    setErr('')
    const passHash = await sha256Hex(password)
    try {
      const list = JSON.parse(localStorage.getItem('accounts') || '[]')
      const account = list.find(a => a.email === email)
      if (!account || account.passHash !== passHash) { setErr('Invalid credentials'); return }
      const u = { uid: account.uid, name: account.name, email: account.email, domain: domain }
      localStorage.setItem('user', JSON.stringify(u))
      setUser(u)
      nav('/dashboard')
    } catch {
      setErr('Invalid credentials')
    }
  }

  const loginWithGoogle = async () => {
    try {
      await googleLogin()
      const raw = localStorage.getItem('user')
      const u = raw ? JSON.parse(raw) : null
      if (u) {
        const final = { name: u.name || u.displayName || 'User', email: u.email, uid: u.uid, domain }
        localStorage.setItem('user', JSON.stringify(final))
        setUser(final)
      }
      nav('/dashboard')
    } catch {}
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={login} className="w-full max-w-md p-6 rounded-xl border bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <label className="block mt-4 text-sm">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full border rounded p-2 bg-transparent" placeholder="Your name" />
        <label className="block mt-4 text-sm">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" className="mt-1 w-full border rounded p-2 bg-transparent" placeholder="you@example.com" />
        <label className="block mt-4 text-sm">Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" className="mt-1 w-full border rounded p-2 bg-transparent" placeholder="••••••••" />
        <label className="block mt-4 text-sm">Choose Domain</label>
        <select value={domain} onChange={(e)=>setDomain(e.target.value)} className="mt-1 w-full border rounded p-2 bg-transparent">
          {domains.map(d=> <option key={d} value={d}>{d}</option>)}
        </select>
        <button className="mt-6 w-full px-4 py-2 bg-primary text-white rounded">Continue</button>
        {err && <div className="mt-2 text-sm text-red-600">{err}</div>}
        <button type="button" onClick={loginWithGoogle} className="mt-3 w-full px-4 py-2 border rounded">Continue with Google</button>
        <div className="mt-4 text-sm flex justify-between">
          <Link to="/signup" className="text-primary">Create account</Link>
          <Link to="/" className="text-primary">Home</Link>
        </div>
      </form>
    </div>
  )
}