import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import interviewRouter from './routes/interview.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({ limit: '1mb' }))

const MONGO_URI = process.env.MONGO_URI
if (MONGO_URI) {
  mongoose.connect(MONGO_URI).then(()=> console.log('MongoDB connected')).catch(()=> console.log('MongoDB connection failed'))
}

app.get('/api/health', (_,res)=> res.json({ ok: true }))
app.use('/api', interviewRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))