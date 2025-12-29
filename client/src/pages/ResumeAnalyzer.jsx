import { useState } from 'react'

export default function ResumeAnalyzer() {
  const [text, setText] = useState('')
  const [score, setScore] = useState(null)
  const [verdict, setVerdict] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const actionVerbs = ['led','built','designed','implemented','developed','created','optimized','improved','refactored','automated','reduced','increased','managed','owned','delivered','launched']

  const onFile = async (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    if (f.type === 'text/plain') {
      const content = await f.text()
      setText(content)
    } else {
      setText('')
    }
  }

  const analyze = () => {
    const s = text || ''
    const lower = s.toLowerCase()
    let points = 0
    const sugg = []

    const hasEducation = /education/.test(lower)
    const hasExperience = /(experience|work experience)/.test(lower)
    const hasProjects = /projects?/.test(lower)
    const hasSkills = /skills?/.test(lower)
    const hasSummary = /(summary|objective|profile)/.test(lower)
    const hasCerts = /(certifications?|courses)/.test(lower)
    const hasAchievements = /(achievements?|awards)/.test(lower)
    const email = /[\w.+-]+@\w+\.[\w.-]+/i.test(s)
    const phone = /(\+?\d[\d\s-]{7,}\d)/.test(s)

    points += hasEducation ? 10 : 0
    points += hasExperience ? 10 : 0
    points += hasProjects ? 10 : 0
    points += hasSkills ? 10 : 0
    points += hasSummary ? 10 : 0
    points += hasCerts ? 5 : 0
    points += hasAchievements ? 5 : 0
    points += email ? 10 : 0
    points += phone ? 10 : 0

    if (!hasEducation) sugg.push('Add an Education section')
    if (!hasExperience) sugg.push('Add Work Experience with role, company, dates')
    if (!hasProjects) sugg.push('Include Projects highlighting tech stack and impact')
    if (!hasSkills) sugg.push('Add a Skills section with relevant keywords')
    if (!hasSummary) sugg.push('Add a concise Summary or Objective at the top')
    if (!email) sugg.push('Add a professional email address')
    if (!phone) sugg.push('Add a reachable phone number with country code if needed')

    const lines = s.split(/\r?\n/)
    const bulletCount = lines.filter(l => /^\s*(\-|\•|\*)\s+/.test(l)).length
    points += bulletCount >= 5 ? 5 : 0
    if (bulletCount < 5) sugg.push('Use bullet points for clarity and scannability')

    const verbCount = actionVerbs.reduce((acc,v)=> acc + (lower.match(new RegExp(`\\b${v}\\b`,'g'))?.length || 0), 0)
    points += verbCount >= 10 ? 10 : verbCount >= 5 ? 5 : 0
    if (verbCount < 5) sugg.push('Use strong action verbs to start bullets')

    const metricCount = (s.match(/(\d+%|\b\d{1,3}\b|\$\d+)/g)?.length || 0)
    points += metricCount >= 3 ? 5 : 0
    if (metricCount < 3) sugg.push('Quantify impact with numbers and percentages')

    const words = s.trim().split(/\s+/).filter(Boolean).length
    if (words < 300) {
      points -= 10
      sugg.push('Expand content; add responsibilities and outcomes')
    } else if (words > 900) {
      points -= 10
      sugg.push('Reduce length; keep it concise and focused')
    }

    if (points < 0) points = 0
    if (points > 100) points = 100

    setScore(points)
    setVerdict(points >= 70 ? 'Strong' : 'Needs Improvement')
    setSuggestions(sugg)
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Resume Analyzer</h1>
      <div className="mt-6 p-6 rounded-xl border bg-white dark:bg-gray-800">
        <div className="font-semibold">Learn to Build a Strong Resume</div>
        <div className="mt-3 space-y-2 text-sm">
          <div>Use a clear structure with Summary, Skills, Experience, Projects, Education.</div>
          <div>Start bullets with strong action verbs and quantify impact with numbers.</div>
          <div>Tailor keywords to the role; keep formatting simple and consistent.</div>
          <div>
            <a href="https://www.themuse.com/advice/resume-writing" target="_blank" rel="noopener noreferrer" className="text-primary">Resume guide</a> ·
            <a href="https://www.indeed.com/career-advice/resumes-cover-letters" target="_blank" rel="noopener noreferrer" className="text-primary ml-2">Samples and tips</a>
          </div>
        </div>
        <div className="mt-6">
          <div className="font-semibold">Upload and Analyze</div>
          <div className="mt-2 text-sm">Upload a .txt resume or paste content below.</div>
          <input type="file" accept=".txt" onChange={onFile} className="mt-2" />
          <textarea value={text} onChange={(e)=>setText(e.target.value)} className="mt-3 w-full h-40 border rounded p-2 bg-transparent" placeholder="Paste resume content" />
          <button onClick={analyze} className="mt-3 px-3 py-2 rounded border">Analyze Resume</button>
          {score !== null && (
            <div className="mt-4">
              <div className="text-sm">Score: {score}/100 — {verdict}</div>
              {suggestions.length > 0 && (
                <div className="mt-2">
                  <div className="font-medium text-sm">Suggestions</div>
                  <ul className="mt-1 space-y-1 text-sm">
                    {suggestions.map((s,i)=> (<li key={i}>• {s}</li>))}
                  </ul>
                </div>
              )}
              {suggestions.length === 0 && (
                <div className="mt-2 text-sm text-gray-500">Looks good. Consider tailoring to specific roles.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}