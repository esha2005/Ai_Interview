import { Router } from 'express'
import { getNextQuestion, evaluate } from '../services/openai.js'
import mongoose from 'mongoose'
import Report from '../models/Report.js'

const router = Router()

const memoryReports = []

router.get('/questions', async (req, res) => {
  const domain = req.query.domain || 'General'
  const question = await getNextQuestion(domain)
  res.json({ question })
})

router.post('/evaluate', async (req, res) => {
  const { question, answer, domain } = req.body || {}
  const email = req.header('x-user-email') || 'anonymous@example.com'
  try {
    const result = await evaluate({ question, answer, domain })
    if (mongoose.connection.readyState === 1) {
      await Report.create({ email, question, score: result.score, feedback: result.feedback, tips: result.tips, domain })
    } else {
      memoryReports.push({ email, date: new Date().toISOString().slice(0,10), score: result.score })
    }
    res.json(result)
  } catch (e) {
    res.status(500).json({ error: 'Evaluation failed', details: String(e) })
  }
})

router.get('/reports', async (req, res) => {
  const email = req.header('x-user-email') || ''
  if (mongoose.connection.readyState === 1) {
    const last = await Report.find(email ? { email } : {}).sort({ createdAt: -1 }).limit(10)
    const history = last.map(r => ({ date: r.createdAt.toISOString().slice(0,10), score: r.score }))
    return res.json({ history })
  } else {
    const filtered = email ? memoryReports.filter(r => r.email === email) : memoryReports
    const history = filtered.slice(-10)
    return res.json({ history })
  }
})

export default router