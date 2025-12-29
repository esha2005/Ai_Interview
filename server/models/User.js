import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, index: true },
  uid: { type: String },
  domain: { type: String, default: 'General' },
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', UserSchema)