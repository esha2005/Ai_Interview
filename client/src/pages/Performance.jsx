import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from 'react'
import { fetchReports } from '../services/api.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

export default function Performance() {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchReports()
        const serverHist = res.history || []
        let mock = []
        try { mock = JSON.parse(localStorage.getItem('mockHistory') || '[]') } catch {}
        const combined = [...serverHist, ...mock].slice(-10)
        setData(combined)
      } catch {}
    })()
  }, [])
  const labels = data.map((d)=> d.date)
  const scores = data.map((d)=> d.score)
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Performance Dashboard</h1>
      <div className="mt-6 p-6 rounded-xl border bg-white dark:bg-gray-800">
        <Line data={{ labels, datasets: [{ label: 'Score', data: scores, borderColor: '#2563eb' }] }} options={{ responsive: true }} />
      </div>
    </div>
  )
}