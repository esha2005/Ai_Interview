import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Interview from './pages/Interview.jsx'
import MockTests from './pages/MockTests.jsx'
import Preparation from './pages/Preparation.jsx'
import ResumeAnalyzer from './pages/ResumeAnalyzer.jsx'
import Performance from './pages/Performance.jsx'
import Settings from './pages/Settings.jsx'
import Opportunities from './pages/Opportunities.jsx'
import { useAuth } from './providers/ThemeProvider.jsx'

export default function App() {
  const { user } = useAuth()
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/interview" element={user ? <Interview /> : <Navigate to="/signin" />} />
        <Route path="/mock-tests" element={user ? <MockTests /> : <Navigate to="/signin" />} />
        <Route path="/preparation" element={user ? <Preparation /> : <Navigate to="/signin" />} />
        <Route path="/resume" element={user ? <ResumeAnalyzer /> : <Navigate to="/signin" />} />
        <Route path="/opportunities" element={user ? <Opportunities /> : <Navigate to="/signin" />} />
        <Route path="/performance" element={user ? <Performance /> : <Navigate to="/signin" />} />
        <Route path="/settings" element={user ? <Settings /> : <Navigate to="/signin" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

function NotFound() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link to="/" className="text-primary">Go home</Link>
    </div>
  )
}