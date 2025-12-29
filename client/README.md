# Live AI Interview App

A React + Vite application for interview preparation with:
- Company-specific Mock Tests and an “All Companies” common set
- Internships & Jobs with a unified “Available Openings” view
- Resume Analyzer to learn, upload, score, and get improvement suggestions
- Learning Materials, Live Interview, Performance tracking, and Settings

## Tech Stack
- React 18
- Vite 5
- React Router 6
- Tailwind CSS

## Quick Start (Client)

1) Install dependencies

```bash
cd client
npm install
```

If PowerShell blocks npm scripts, you can still start the dev server directly with Node (see “Run (Dev)” below). To fix policy, run PowerShell as Administrator and:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

2) Run (Dev)

```bash
cd client
node node_modules/vite/bin/vite.js
```

Vite will start on an available port (5173 by default). If a port is busy, it picks the next one automatically.

3) Run (Preview, production build)

```bash
cd client
npm run build
node node_modules/vite/bin/vite.js preview --port 5175
```

Open http://localhost:5175/.

## Key Routes
- /dashboard — Main navigation
- /mock-tests — Company-specific + common tests
- /opportunities — Unified “Available Openings” (Internships and Jobs) and announcements
- /resume — Resume Analyzer (Learn + Upload & Analyze)
- /preparation — Company preparation materials
- /performance — Personal performance
- /settings — Preferences

## Features Overview

### Mock Tests
- Company selector including “All Companies”
- Common test sets for DSA, System Design, Aptitude, HR, Technical

### Internships & Jobs
- Single “Available Openings” block, split into Internships and Jobs
- Shows only active items (apply-by date ≥ today), sorted by deadline
- Safe external links with target="_blank" and rel="noopener noreferrer"

### Resume Analyzer
- Learn section: concise guidance + external references
- Upload & Analyze: paste or .txt upload
- Scoring signals: required sections, contact info, bullets, action verbs, metrics, length
- Verdict and actionable suggestions when improvements are needed

## Troubleshooting
- Port already in use: Vite automatically switches to the next port. Check terminal output for the actual URL.
- PowerShell execution policy prevents npm: use Node to run the dev server, or adjust execution policy as shown above.
- Blank page: ensure dependencies are installed and the server is running; check console for errors.

## Notes
- No secrets are stored in the repo.
- External links are opened safely in new tabs.
