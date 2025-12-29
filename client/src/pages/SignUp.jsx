import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogin } from '../services/firebase.js'
import { useAuth } from '../providers/ThemeProvider.jsx'

const domains = ['CSE','ECE','MBA','Mechanical','Civil','General']

export default function SignUp() {
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
  const signup = async (e) => {
    e.preventDefault()
    const passHash = await sha256Hex(password)
    const uid = String(Date.now())
    const account = { uid, name, email, domain, passHash }
    try {
      const list = JSON.parse(localStorage.getItem('accounts') || '[]')
      const filtered = list.filter(a => a.email !== email)
      filtered.push(account)
      localStorage.setItem('accounts', JSON.stringify(filtered))
    } catch {}
    localStorage.setItem('user', JSON.stringify(account))
    setUser(account)
    nav('/dashboard')
  }

  const signupWithGoogle = async () => {
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
      <form onSubmit={signup} className="w-full max-w-md p-6 rounded-xl border bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Sign Up</h1>
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
        <button className="mt-6 w-full px-4 py-2 bg-primary text-white rounded">Create account</button>
        <button type="button" onClick={signupWithGoogle} className="mt-3 w-full px-4 py-2 border rounded">Sign up with Google</button>
        <div className="mt-4 text-sm flex justify-between">
          <Link to="/signin" className="text-primary">Already have an account?</Link>
          <Link to="/" className="text-primary">Home</Link>
        </div>
      </form>
    </div>
  )
}