import { useState } from 'react'
export default function Preparation() {
  const COMPANIES = ['All Companies','Google','Amazon','Microsoft','Meta','Apple','IBM','Accenture','Capgemini','HCL','Deloitte','TCS','Infosys','Wipro']
  const COMPANY_PREP = {
    'All Companies': {
      format: 'Common flow: online assessment → technical screens → onsite (coding/design/behavioral)',
      types: ['DSA','System Design','Behavioral','Aptitude'],
      rounds: ['Assessment','Technical coding','System/design for senior','Behavioral'],
      topics: ['Arrays','Strings','Graphs','Dynamic Programming','OOP','APIs','Caching','Concurrency basics'],
      materials: [
        { title: 'LeetCode', url: 'https://leetcode.com/problemset/' },
        { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
        { title: 'STAR Method', url: 'https://www.themuse.com/advice/star-method-interview-questions-answers' }
      ]
    },
    Google: {
      format: 'Online assessment → 1–2 phone screens → onsite (coding, system design, behavioral)',
      types: ['DSA','System Design','Behavioral'],
      rounds: ['Online assessment','Phone screens','Onsite coding','Onsite system design','Behavioral'],
      topics: ['Arrays','Strings','Graphs','Dynamic Programming','Concurrency basics','API design','Caching','Sharding'],
      materials: [
        { title: 'LeetCode', url: 'https://leetcode.com/problemset/' },
        { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
        { title: 'STAR Method', url: 'https://www.themuse.com/advice/star-method-interview-questions-answers' }
      ],
      opportunities: {
        internships: { seasons: 'Summer (May–Aug), Fall', portal: 'https://careers.google.com/students/', eligibility: ['Bachelors/Masters CS or related','Strong DSA','Projects with impact'] },
        jobs: { portal: 'https://careers.google.com', tracks: ['SWE','SRE','Data','Cloud'], notes: ['Referrals help','Campus cycles vary by region'] }
      }
    },
    Amazon: {
      format: 'OA → phone → onsite (coding, LP, system design for SDE2+)',
      types: ['DSA','Leadership Principles','System Design'],
      rounds: ['OA','Phone screens','Onsite coding','LP deep dive','System design'],
      topics: ['Trees','Graphs','DP','Two-pointers','Caching','Load balancing','Queues'],
      materials: [
        { title: 'Amazon LP Questions', url: 'https://www.interviewkickstart.com/blog/amazon-leadership-principles-interview-questions' },
        { title: 'LeetCode', url: 'https://leetcode.com/problemset/' },
        { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }
      ],
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://www.amazon.jobs/en/job_categories/student-programs', eligibility: ['CS/related','LP alignment','Coding proficiency'] },
        jobs: { portal: 'https://www.amazon.jobs', tracks: ['SDE','SDE Intern','Data','Cloud'], notes: ['Bar raiser round common','LP stories critical'] }
      }
    },
    Microsoft: {
      format: 'OA → phone → onsite (coding, problem solving, behavioral)',
      types: ['DSA','Problem Solving','Behavioral'],
      rounds: ['OA','Phone/virtual','Onsite coding','Design for senior roles','Behavioral'],
      topics: ['Hashing','Graphs','Math','Bit manipulation','OOP','Design basics'],
      materials: [
        { title: 'LeetCode', url: 'https://leetcode.com/problemset/' },
        { title: 'Behavioral Prep', url: 'https://www.themuse.com/advice/star-method-interview-questions-answers' }
      ],
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://careers.microsoft.com/students/us/en', eligibility: ['CS/related','Problem solving','Team projects'] },
        jobs: { portal: 'https://careers.microsoft.com', tracks: ['SWE','PM','Data','Security'], notes: ['Campus hiring strong','Global mobility possible'] }
      }
    },
    TCS: {
      format: 'NQT (aptitude, reasoning, English) → technical → HR',
      types: ['Aptitude','Reasoning','Basic Coding','HR'],
      rounds: ['NQT','Technical','HR'],
      topics: ['Percentages','Averages','Ratios','Logical puzzles','Basic coding'],
      materials: [
        { title: 'TCS NQT', url: 'https://www.tcs.com/careers/tcs-national-qualifier-test' },
        { title: 'Aptitude Formulas', url: 'https://byjus.com/aptitude/aptitude-formulas/' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.tcs.com/careers', eligibility: ['UG/PG across disciplines','Campus drives'] },
        jobs: { portal: 'https://www.tcs.com/careers', tracks: ['Ninja','Digital','Innovator'], notes: ['NQT score used','Service + product roles'] }
      }
    },
    Infosys: {
      format: 'Aptitude → pseudocode/coding → interview',
      types: ['Aptitude','Pseudocode','Basic Coding','HR'],
      rounds: ['Aptitude','Coding/pseudocode','Technical','HR'],
      topics: ['Speed/time','Probability','Arrays','Strings','Pseudocode patterns'],
      materials: [
        { title: 'Infosys Careers', url: 'https://careers.infosys.com' },
        { title: 'Aptitude Formulas', url: 'https://byjus.com/aptitude/aptitude-formulas/' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://careers.infosys.com', eligibility: ['UG/PG','Campus/online drives'] },
        jobs: { portal: 'https://careers.infosys.com', tracks: ['SE','Systems Engineer','Digital Specialist'], notes: ['Off-campus cycles frequent'] }
      }
    },
    Wipro: {
      format: 'Aptitude → logical reasoning → coding → interview',
      types: ['Aptitude','Logical','Basic Coding','HR'],
      rounds: ['Aptitude','Logical','Coding','Technical','HR'],
      topics: ['Percentages','Ratios','Series','Basic DS','OOP basics'],
      materials: [
        { title: 'Wipro Careers', url: 'https://careers.wipro.com' },
        { title: 'Aptitude Formulas', url: 'https://byjus.com/aptitude/aptitude-formulas/' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://careers.wipro.com', eligibility: ['UG/PG','Eligibility by role'] },
        jobs: { portal: 'https://careers.wipro.com', tracks: ['Project Engineer','Developer','Cloud'], notes: ['Assessment + interview flow'] }
      }
    },
    Meta: {
      format: 'OA/Referrals → phone screens → onsite (coding, system design, behavioral)',
      types: ['DSA','System Design','Behavioral'],
      rounds: ['Phone/virtual','Onsite coding','System design','Behavioral'],
      topics: ['Graphs','DP','Concurrency','APIs','Caching','Scaling'],
      materials: [
        { title: 'LeetCode', url: 'https://leetcode.com/problemset/' },
        { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
        { title: 'STAR Method', url: 'https://www.themuse.com/advice/star-method-interview-questions-answers' }
      ],
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://www.metacareers.com/careerprograms/students/', eligibility: ['CS/related','Strong coding','Projects/impact'] },
        jobs: { portal: 'https://www.metacareers.com', tracks: ['SWE','Infra','Data'], notes: ['Referrals helpful','Design emphasis for senior'] }
      }
    },
    Apple: {
      format: 'Recruiter screen → technical interviews (coding, problem solving, design) → onsite',
      types: ['DSA','Problem Solving','System Design','Behavioral'],
      rounds: ['Recruiter','Technical coding','Team interviews','Onsite'],
      topics: ['Arrays','Strings','Graphs','Design principles','Performance'],
      materials: [
        { title: 'LeetCode', url: 'https://leetcode.com/problemset/' },
        { title: 'Apple Careers', url: 'https://www.apple.com/careers/' }
      ],
      opportunities: {
        internships: { seasons: 'Summer', portal: 'https://www.apple.com/careers/us/students.html', eligibility: ['Bachelors/Masters','Relevant projects'] },
        jobs: { portal: 'https://www.apple.com/careers/', tracks: ['SWE','HW/SW Integration','ML'], notes: ['Role-specific interviews','Portfolio helps'] }
      }
    },
    IBM: {
      format: 'Assessment → technical → HR (varies by role)',
      types: ['Aptitude','Coding','Behavioral','Cloud/Data for specific roles'],
      rounds: ['Assessment','Technical','HR'],
      topics: ['Aptitude','Basic coding','SQL','Cloud basics'],
      materials: [
        { title: 'IBM Careers', url: 'https://www.ibm.com/careers' },
        { title: 'SQL Practice', url: 'https://www.hackerrank.com/domains/sql' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.ibm.com/careers/us-en/students/', eligibility: ['UG/PG','Discipline-specific'] },
        jobs: { portal: 'https://www.ibm.com/careers', tracks: ['Developer','Consulting','Cloud'], notes: ['Role-based assessments'] }
      }
    },
    Accenture: {
      format: 'Assessment (aptitude + coding) → interview (technical + behavioral)',
      types: ['Aptitude','Coding Basics','Behavioral','Consulting'],
      rounds: ['Assessment','Technical','Behavioral/HR'],
      topics: ['Percentages','Ratios','Arrays','Strings','Case-style questions'],
      materials: [
        { title: 'Accenture Careers', url: 'https://www.accenture.com/us-en/careers' },
        { title: 'Case Interview Bootcamp', url: 'https://www.preplounge.com/en/bootcamp' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.accenture.com/us-en/careers', eligibility: ['UG/PG','Campus drives'] },
        jobs: { portal: 'https://www.accenture.com/us-en/careers', tracks: ['Tech','Consulting','Operations'], notes: ['Case/behavioral emphasis for consulting'] }
      }
    },
    Capgemini: {
      format: 'Aptitude → technical → HR',
      types: ['Aptitude','Coding Basics','HR'],
      rounds: ['Aptitude','Technical','HR'],
      topics: ['Numbers','Series','Basic DS','OOP'],
      materials: [
        { title: 'Capgemini Careers', url: 'https://www.capgemini.com/careers/' },
        { title: 'Aptitude Formulas', url: 'https://byjus.com/aptitude/aptitude-formulas/' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.capgemini.com/careers/', eligibility: ['UG/PG','Campus/Off-campus'] },
        jobs: { portal: 'https://www.capgemini.com/careers/', tracks: ['Engineer','Consultant'], notes: ['Service + consulting roles'] }
      }
    },
    HCL: {
      format: 'Aptitude → technical → HR',
      types: ['Aptitude','Coding Basics','HR'],
      rounds: ['Aptitude','Technical','HR'],
      topics: ['Averages','Ratios','Arrays','Strings'],
      materials: [
        { title: 'HCLTech Careers', url: 'https://www.hcltech.com/careers' },
        { title: 'Aptitude Formulas', url: 'https://byjus.com/aptitude/aptitude-formulas/' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www.hcltech.com/careers', eligibility: ['UG/PG','Discipline-specific'] },
        jobs: { portal: 'https://www.hcltech.com/careers', tracks: ['Developer','Engineer'], notes: ['Assessment-based hiring'] }
      }
    },
    Deloitte: {
      format: 'Aptitude/assessment → case interview (for consulting) → technical/HR',
      types: ['Aptitude','Case Interviews','Behavioral','Technical (role-specific)'],
      rounds: ['Assessment','Case/Group','Technical','HR'],
      topics: ['Case frameworks','Estimation','Data interpretation','SQL basics'],
      materials: [
        { title: 'Deloitte Careers', url: 'https://www2.deloitte.com/global/en/careers.html' },
        { title: 'Case Interview Bootcamp', url: 'https://www.preplounge.com/en/bootcamp' }
      ],
      opportunities: {
        internships: { seasons: 'Varies', portal: 'https://www2.deloitte.com/global/en/careers/students.html', eligibility: ['UG/PG','Consulting/Tech tracks'] },
        jobs: { portal: 'https://www2.deloitte.com/global/en/careers.html', tracks: ['Consulting','Tech','Risk'], notes: ['Case + behavioral focus'] }
      }
    }
  }
  const [company, setCompany] = useState(COMPANIES[0])
  const prep = COMPANY_PREP[company]
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Learning Materials</h1>
      <div className="mt-6 p-6 rounded-xl border bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Company Preparation</div>
          <select value={company} onChange={(e)=>setCompany(e.target.value)} className="border rounded p-2 bg-transparent">
            {COMPANIES.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Interview Format</div>
        <div className="mt-1">{prep.format}</div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Typical Rounds</div>
        <ul className="mt-1 list-disc list-inside text-sm">
          {prep.rounds.map((r,i)=> (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Question Types</div>
        <div className="mt-1 flex flex-wrap gap-2">
          {prep.types.map((t,i)=> (
            <span key={i} className="px-2 py-1 rounded border text-xs">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Sample Question Topics</div>
        <div className="mt-1 flex flex-wrap gap-2">
          {prep.topics.map((t,i)=> (
            <span key={i} className="px-2 py-1 rounded border text-xs">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Preparation Materials</div>
        <div className="mt-2 grid sm:grid-cols-2 gap-3">
          {prep.materials.map((m,i)=> (
            <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 border rounded inline-flex items-center">Open {m.title}</a>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}