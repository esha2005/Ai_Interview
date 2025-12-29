import { useAuth } from '../providers/ThemeProvider.jsx'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogin } from '../services/firebase.js'

const domains = ['CSE','ECE','MBA','Mechanical','Civil','General']

export default function Auth() {
  const { setUser } = useAuth()
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [domain, setDomain] = useState('General')

  const login = (e) => {
    e.preventDefault()
    const u = { email, domain }
    localStorage.setItem('user', JSON.stringify(u))
    setUser(u)
    nav('/dashboard')
  }

  const loginWithGoogle = async () => {
    try {
      await googleLogin()
      const raw = localStorage.getItem('user')
      const u = raw ? JSON.parse(raw) : null
      if (u) {
        u.domain = domain
        localStorage.setItem('user', JSON.stringify(u))
        setUser(u)
      }
      nav('/dashboard')
    } catch {}
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={login} className="w-full max-w-md p-6 rounded-xl border bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Login / Signup</h1>
        <label className="block mt-4 text-sm">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" className="mt-1 w-full border rounded p-2 bg-transparent" placeholder="you@example.com" />
        <label className="block mt-4 text-sm">Choose Domain</label>
        <select value={domain} onChange={(e)=>setDomain(e.target.value)} className="mt-1 w-full border rounded p-2 bg-transparent">
          {domains.map(d=> <option key={d} value={d}>{d}</option>)}
        </select>
        <button className="mt-6 w-full px-4 py-2 bg-primary text-white rounded">Continue</button>
        <button type="button" onClick={loginWithGoogle} className="mt-3 w-full px-4 py-2 border rounded">Continue with Google</button>
        <div className="mt-4 text-sm"><Link to="/" className="text-primary">Back to Home</Link></div>
      </form>
    </div>
  )
}