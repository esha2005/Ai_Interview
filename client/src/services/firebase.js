import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let app = null
let auth = null
let provider = null
const configured = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId)

export function initFirebase() {
  if (!configured) return { app: null, auth: null }
  if (!app) {
    app = initializeApp(config)
    auth = getAuth(app)
    provider = new GoogleAuthProvider()
  }
  return { app, auth }
}

export function watchAuth(cb) {
  const { auth } = initFirebase()
  if (!auth) {
    try {
      const raw = localStorage.getItem('user')
      const u = raw ? JSON.parse(raw) : null
      cb(u)
    } catch { cb(null) }
    return () => {}
  }
  return onAuthStateChanged(auth, (user) => cb(user))
}

export async function googleLogin() {
  const { auth } = initFirebase()
  if (!auth) {
    const prev = JSON.parse(localStorage.getItem('user') || 'null')
    const profile = { name: prev?.name || 'Demo User', email: 'demo@local', uid: 'demo', domain: prev?.domain || 'General' }
    localStorage.setItem('user', JSON.stringify(profile))
    return
  }
  await signInWithPopup(auth, provider)
}

export async function logout() {
  const { auth } = initFirebase()
  if (!auth) {
    localStorage.removeItem('user')
    return
  }
  await signOut(auth)
}