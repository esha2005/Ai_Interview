import mongoose from 'mongoose'

const ReportSchema = new mongoose.Schema({
  email: { type: String, index: true },
  score: { type: Number },
  question: { type: String },
  feedback: { type: String },
  tips: { type: String },
  domain: { type: String },
}, { timestamps: true })

export default mongoose.models.Report || mongoose.model('Report', ReportSchema)