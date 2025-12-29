import { useAuth } from '../providers/ThemeProvider.jsx'

export default function Settings() {
  const { dark, setDark } = useAuth()
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-6 p-6 rounded-xl border bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Dark Mode</div>
            <div className="text-sm text-gray-500">Toggle theme for the app.</div>
          </div>
          <button onClick={()=>setDark(!dark)} className="px-4 py-2 border rounded">{dark ? 'Disable' : 'Enable'}</button>
        </div>
      </div>
    </div>
  )
}