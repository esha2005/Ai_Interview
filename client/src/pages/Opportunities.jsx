import { useState } from 'react'
export default function Opportunities() {
  const COMPANIES = ['All Companies','Google','Amazon','Microsoft','Meta','Apple','IBM','Accenture','Capgemini','HCL','Deloitte','TCS','Infosys','Wipro']
  const COMPANY_PREP = {
    Google: {
      opportunities: {
        internships: { seasons: 'Summer (May–Aug), Fall', portal: 'https://careers.google.com/students/', eligibility: ['Bachelors/Masters CS or related','Strong DSA','Projects with impact'] },
        jobs: { portal: 'https://careers.google.com', tracks: ['SWE','SRE','Data','Cloud'], notes: ['Referrals help','Campus cycles vary by region'] }
      }
    },
    Amazon: {
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://www.amazon.jobs/en/job_categories/student-programs', eligibility: ['CS/related','LP alignment','Coding proficiency'] },
        jobs: { portal: 'https://www.amazon.jobs', tracks: ['SDE','SDE Intern','Data','Cloud'], notes: ['Bar raiser round common','LP stories critical'] }
      }
    },
    Microsoft: {
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://careers.microsoft.com/students/us/en', eligibility: ['CS/related','Problem solving','Team projects'] },
        jobs: { portal: 'https://careers.microsoft.com', tracks: ['SWE','PM','Data','Security'], notes: ['Campus hiring strong','Global mobility possible'] }
      }
    },
    TCS: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.tcs.com/careers', eligibility: ['UG/PG across disciplines','Campus drives'] },
        jobs: { portal: 'https://www.tcs.com/careers', tracks: ['Ninja','Digital','Innovator'], notes: ['NQT score used','Service + product roles'] }
      }
    },
    Infosys: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://careers.infosys.com', eligibility: ['UG/PG','Campus/online drives'] },
        jobs: { portal: 'https://careers.infosys.com', tracks: ['SE','Systems Engineer','Digital Specialist'], notes: ['Off-campus cycles frequent'] }
      }
    },
    Wipro: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://careers.wipro.com', eligibility: ['UG/PG','Eligibility by role'] },
        jobs: { portal: 'https://careers.wipro.com', tracks: ['Project Engineer','Developer','Cloud'], notes: ['Assessment + interview flow'] }
      }
    },
    Meta: {
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://www.metacareers.com/careerprograms/students/', eligibility: ['CS/related','Strong coding','Projects/impact'] },
        jobs: { portal: 'https://www.metacareers.com', tracks: ['SWE','Infra','Data'], notes: ['Referrals helpful','Design emphasis for senior'] }
      }
    },
    Apple: {
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://www.apple.com/careers/us/students.html', eligibility: ['Bachelors/Masters','Relevant projects'] },
        jobs: { portal: 'https://www.apple.com/careers/', tracks: ['SWE','HW/SW Integration','ML'], notes: ['Role-specific interviews','Portfolio helps'] }
      }
    },
    IBM: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.ibm.com/careers/us-en/students/', eligibility: ['UG/PG','Discipline-specific'] },
        jobs: { portal: 'https://www.ibm.com/careers', tracks: ['Developer','Consulting','Cloud'], notes: ['Role-based assessments'] }
      }
    },
    Accenture: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.accenture.com/us-en/careers', eligibility: ['UG/PG','Campus drives'] },
        jobs: { portal: 'https://www.accenture.com/us-en/careers', tracks: ['Tech','Consulting','Operations'], notes: ['Case/behavioral emphasis for consulting'] }
      }
    },
    Capgemini: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.capgemini.com/careers/', eligibility: ['UG/PG','Campus/Off-campus'] },
        jobs: { portal: 'https://www.capgemini.com/careers/', tracks: ['Engineer','Consultant'], notes: ['Service + consulting roles'] }
      }
    },
    HCL: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.hcltech.com/careers', eligibility: ['UG/PG','Discipline-specific'] },
        jobs: { portal: 'https://www.hcltech.com/careers', tracks: ['Developer','Engineer'], notes: ['Assessment-based hiring'] }
      }
    },
    Deloitte: {
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www2.deloitte.com/global/en/careers/students.html', eligibility: ['UG/PG','Consulting/Tech tracks'] },
        jobs: { portal: 'https://www2.deloitte.com/global/en/careers.html', tracks: ['Consulting','Tech','Risk'], notes: ['Case + behavioral focus'] }
      }
    }
  }
  const [company, setCompany] = useState(COMPANIES[0])
  const isAll = company === 'All Companies'
  const prep = COMPANY_PREP[company]
  const allKeys = Object.keys(COMPANY_PREP)
  const allInternships = allKeys.map(c => ({ company: c, ...COMPANY_PREP[c].opportunities.internships }))
  const allJobs = allKeys.map(c => ({ company: c, ...COMPANY_PREP[c].opportunities.jobs }))

  const UPCOMING = {
    Google: {
      internships: [
        { title: 'Software Engineering Intern (Summer)', applyBy: '2025-01-31', location: 'Multiple', url: 'https://careers.google.com/students/' }
      ],
      jobs: [
        { title: 'Software Engineer, Early Career', applyBy: '2025-02-15', location: 'Multiple', url: 'https://careers.google.com/jobs/' }
      ]
    },
    Amazon: {
      internships: [
        { title: 'SDE Intern (Summer)', applyBy: '2025-02-10', location: 'Multiple', url: 'https://www.amazon.jobs/en/job_categories/student-programs' }
      ],
      jobs: [
        { title: 'SDE I', applyBy: '2025-03-01', location: 'Multiple', url: 'https://www.amazon.jobs' }
      ]
    },
    Microsoft: {
      internships: [
        { title: 'Software Engineer Intern', applyBy: '2025-02-05', location: 'Multiple', url: 'https://careers.microsoft.com/students/us/en' }
      ],
      jobs: [
        { title: 'Software Engineer', applyBy: '2025-03-10', location: 'Multiple', url: 'https://careers.microsoft.com' }
      ]
    },
    Meta: {
      internships: [
        { title: 'Software Engineer Intern', applyBy: '2025-02-20', location: 'Multiple', url: 'https://www.metacareers.com/careerprograms/students/' }
      ],
      jobs: [
        { title: 'Software Engineer, University Grad', applyBy: '2025-03-20', location: 'Multiple', url: 'https://www.metacareers.com' }
      ]
    },
    Apple: {
      internships: [
        { title: 'Software Engineering Intern', applyBy: '2025-02-28', location: 'USA', url: 'https://www.apple.com/careers/us/students.html' }
      ],
      jobs: [
        { title: 'Software Engineer', applyBy: '2025-03-30', location: 'USA', url: 'https://www.apple.com/careers/' }
      ]
    },
    IBM: {
      internships: [
        { title: 'Developer Intern', applyBy: '2025-02-25', location: 'Multiple', url: 'https://www.ibm.com/careers/us-en/students/' }
      ],
      jobs: [
        { title: 'Associate Developer', applyBy: '2025-03-25', location: 'Multiple', url: 'https://www.ibm.com/careers' }
      ]
    },
    Accenture: {
      internships: [
        { title: 'Technology Intern', applyBy: '2025-02-18', location: 'Multiple', url: 'https://www.accenture.com/us-en/careers' }
      ],
      jobs: [
        { title: 'Associate Software Engineer', applyBy: '2025-03-12', location: 'Multiple', url: 'https://www.accenture.com/us-en/careers' }
      ]
    },
    Capgemini: {
      internships: [
        { title: 'Engineering Intern', applyBy: '2025-02-22', location: 'Multiple', url: 'https://www.capgemini.com/careers/' }
      ],
      jobs: [
        { title: 'Software Engineer', applyBy: '2025-03-18', location: 'Multiple', url: 'https://www.capgemini.com/careers/' }
      ]
    },
    HCL: {
      internships: [
        { title: 'Developer Intern', applyBy: '2025-02-12', location: 'India', url: 'https://www.hcltech.com/careers' }
      ],
      jobs: [
        { title: 'Graduate Engineer', applyBy: '2025-03-08', location: 'India', url: 'https://www.hcltech.com/careers' }
      ]
    },
    Deloitte: {
      internships: [
        { title: 'Consulting Intern (Tech)', applyBy: '2025-02-15', location: 'Multiple', url: 'https://www2.deloitte.com/global/en/careers/students.html' }
      ],
      jobs: [
        { title: 'Analyst (Tech)', applyBy: '2025-03-05', location: 'Multiple', url: 'https://www2.deloitte.com/global/en/careers.html' }
      ]
    },
    TCS: {
      internships: [
        { title: 'Digital Intern', applyBy: '2025-02-14', location: 'India', url: 'https://www.tcs.com/careers' }
      ],
      jobs: [
        { title: 'Ninja Hiring', applyBy: '2025-03-02', location: 'India', url: 'https://www.tcs.com/careers' }
      ]
    },
    Infosys: {
      internships: [
        { title: 'Systems Engineer Intern', applyBy: '2025-02-16', location: 'India', url: 'https://careers.infosys.com' }
      ],
      jobs: [
        { title: 'Systems Engineer', applyBy: '2025-03-06', location: 'India', url: 'https://careers.infosys.com' }
      ]
    },
    Wipro: {
      internships: [
        { title: 'Project Engineer Intern', applyBy: '2025-02-20', location: 'India', url: 'https://careers.wipro.com' }
      ],
      jobs: [
        { title: 'Project Engineer', applyBy: '2025-03-10', location: 'India', url: 'https://careers.wipro.com' }
      ]
    },
  }
  const ANNOUNCEMENTS = {
    Google: [
      { t: 'Summer internships applications window opened', url: 'https://careers.google.com/students/' }
    ],
    Amazon: [
      { t: 'SDE Intern OA schedule published', url: 'https://www.amazon.jobs/en/job_categories/student-programs' }
    ],
    Microsoft: [
      { t: 'University hiring timeline updated', url: 'https://careers.microsoft.com/students/us/en' }
    ],
    Meta: [
      { t: 'Referral program guidance for grads', url: 'https://www.metacareers.com' }
    ],
    Apple: [
      { t: 'US student opportunities live', url: 'https://www.apple.com/careers/us/students.html' }
    ],
    IBM: [
      { t: 'Associate roles accepting applications', url: 'https://www.ibm.com/careers' }
    ],
    Accenture: [
      { t: 'ASE campus drive schedule', url: 'https://www.accenture.com/us-en/careers' }
    ],
    Capgemini: [
      { t: 'Off-campus intake open', url: 'https://www.capgemini.com/careers/' }
    ],
    HCL: [
      { t: 'Graduate intake announced', url: 'https://www.hcltech.com/careers' }
    ],
    Deloitte: [
      { t: 'Tech analyst positions added', url: 'https://www2.deloitte.com/global/en/careers.html' }
    ],
    TCS: [
      { t: 'NQT registration dates released', url: 'https://www.tcs.com/careers/tcs-national-qualifier-test' }
    ],
    Infosys: [
      { t: 'Digital specialist hiring drive', url: 'https://careers.infosys.com' }
    ],
    Wipro: [
      { t: 'Velocity program timeline update', url: 'https://careers.wipro.com' }
    ],
  }
  const [subscribed, setSubscribed] = useState(() => {
    try {
      const raw = localStorage.getItem('oppsSubs')
      const obj = raw ? JSON.parse(raw) : {}
      return !!obj[company]
    } catch {
      return false
    }
  })
  const toggleSubscribe = () => {
    try {
      const raw = localStorage.getItem('oppsSubs')
      const obj = raw ? JSON.parse(raw) : {}
      const next = !subscribed
      obj[company] = next
      localStorage.setItem('oppsSubs', JSON.stringify(obj))
      setSubscribed(next)
    } catch {}
  }
  const allUpcomingInternships = Object.keys(UPCOMING).flatMap(c => UPCOMING[c].internships.map(it => ({ company: c, ...it })))
  const allUpcomingJobs = Object.keys(UPCOMING).flatMap(c => UPCOMING[c].jobs.map(jb => ({ company: c, ...jb })))
  const announcements = isAll ? Object.keys(ANNOUNCEMENTS).flatMap(c => ANNOUNCEMENTS[c].map(a => ({ company: c, ...a }))) : ANNOUNCEMENTS[company]
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Internships & Jobs</h1>
      <div className="mt-6 p-6 rounded-xl border bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Company</div>
          <select value={company} onChange={(e)=>setCompany(e.target.value)} className="border rounded p-2 bg-transparent">
            {COMPANIES.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {!isAll && (
          <div className="mt-3">
            <button onClick={toggleSubscribe} className={`px-3 py-2 rounded border ${subscribed ? 'bg-primary text-white' : ''}`}>{subscribed ? 'Subscribed to notifications' : 'Subscribe to notifications'}</button>
          </div>
        )}
        <div className="mt-6 p-3 rounded border">
          <div className="font-semibold text-sm">Available Openings</div>
          <div className="mt-2">
            <div className="font-medium text-sm">Internships</div>
            <div className="mt-2 space-y-2">
              {(() => {
                const today = new Date().toISOString().slice(0,10)
                const list = isAll
                  ? allUpcomingInternships.map(it => ({ ...it }))
                  : (UPCOMING[company]?.internships || [])
                const filtered = list.filter(x => x.applyBy >= today)
                filtered.sort((a,b) => a.applyBy.localeCompare(b.applyBy))
                if (filtered.length === 0) {
                  return (<div className="text-sm text-gray-500">No available internships.</div>)
                }
                return filtered.map((op,i) => (
                  <div key={`intern-${i}`} className="text-sm">
                    {isAll && (<span className="font-medium">{op.company}</span>)} {isAll && ':'} {op.title} — Apply by {op.applyBy} — {op.location}. <a href={op.url} target="_blank" rel="noopener noreferrer" className="text-primary">Apply</a>
                  </div>
                ))
              })()}
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium text-sm">Jobs</div>
            <div className="mt-2 space-y-2">
              {(() => {
                const today = new Date().toISOString().slice(0,10)
                const list = isAll
                  ? allUpcomingJobs.map(jb => ({ ...jb }))
                  : (UPCOMING[company]?.jobs || [])
                const filtered = list.filter(x => x.applyBy >= today)
                filtered.sort((a,b) => a.applyBy.localeCompare(b.applyBy))
                if (filtered.length === 0) {
                  return (<div className="text-sm text-gray-500">No available jobs.</div>)
                }
                return filtered.map((op,i) => (
                  <div key={`job-${i}`} className="text-sm">
                    {isAll && (<span className="font-medium">{op.company}</span>)} {isAll && ':'} {op.title} — Apply by {op.applyBy} — {op.location}. <a href={op.url} target="_blank" rel="noopener noreferrer" className="text-primary">Apply</a>
                  </div>
                ))
              })()}
            </div>
          </div>
        </div>

        <div className="mt-6 p-3 rounded border">
          <div className="font-semibold text-sm">Latest Announcements</div>
          <div className="mt-2 space-y-2">
            {(announcements || []).map((a,i)=> (
              <div key={i} className="text-sm">
                {isAll && (<span className="font-medium">{a.company}</span>)} {isAll && ':'} {a.t}. <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-primary">Open</a>
              </div>
            ))}
            {(!announcements || announcements.length===0) && (
              <div className="text-sm text-gray-500">No announcements available.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}