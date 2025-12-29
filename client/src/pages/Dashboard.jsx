import { Link } from 'react-router-dom'
import { useAuth } from '../providers/ThemeProvider.jsx'

export default function Dashboard() {
  const { user } = useAuth()
  const cards = [
    { t: 'Start Live Interview', to: '/interview' },
    { t: 'Mock Tests', to: '/mock-tests' },
    { t: 'Resume Analyzer', to: '/resume' },
    { t: 'My Performance', to: '/performance' },
    { t: 'Learning Materials', to: '/preparation' },
    { t: 'Internships & Jobs', to: '/opportunities' },
    { t: 'Settings', to: '/settings' },
  ]
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome, {user?.name || 'User'}</h1>
        <div className="text-sm px-3 py-1 rounded border">Domain: {user?.domain}</div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {cards.map((c,i)=> (
          <Link key={i} to={c.to} className="p-6 rounded-xl border bg-white dark:bg-gray-800 hover:shadow">
            {c.t}
          </Link>
        ))}
      </div>
    </div>
  )
}