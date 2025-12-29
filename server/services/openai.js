import OpenAI from 'openai'

const apiKey = process.env.OPENAI_API_KEY
const client = apiKey ? new OpenAI({ apiKey }) : null

export async function getNextQuestion(domain = 'General') {
  const prompt = `Generate a concise interview question for the domain: ${domain}. Keep it under 25 words.`
  if (!client) return 'Tell me about yourself.'
  try {
    const resp = await client.responses.create({ model: 'gpt-4o-mini', input: prompt })
    const text = resp.output_text?.trim() || 'Tell me about yourself.'
    return text.replace(/^"|"$/g, '')
  } catch {
    return 'Tell me about yourself.'
  }
}

export async function evaluate({ question, answer, domain }) {
  const rubric = `You are an interview evaluator. Score 1-5.
Question: ${question}
Candidate Answer: ${answer}
Domain: ${domain}
Return JSON with keys: score (1-5), feedback (1-2 sentences), tips (1 sentence), idealAnswer (1-2 sentences), isCorrect (boolean). isCorrect should be true only if the candidate answer would be accepted as correct.`
  if (!client) {
    return { score: 3, feedback: 'Offline evaluation stub.', tips: 'Practice concise responses.', idealAnswer: 'Provide a structured and concise answer covering key points.', isCorrect: false }
  }
  try {
    const resp = await client.responses.create({ model: 'gpt-4o-mini', input: rubric })
    const text = resp.output_text || ''
    try {
      const parsed = JSON.parse(text)
      if (typeof parsed.isCorrect !== 'boolean') parsed.isCorrect = (parsed.score || 3) >= 4
      if (!parsed.idealAnswer) parsed.idealAnswer = 'Provide a structured and concise answer covering key points.'
      return parsed
    } catch {
      const scoreMatch = text.match(/score\D(\d)/i)
      const score = scoreMatch ? Number(scoreMatch[1]) : 3
      return { score, feedback: text.slice(0,200), tips: 'Focus on clarity and structure.', idealAnswer: 'Provide a structured and concise answer covering key points.', isCorrect: score >= 4 }
    }
  } catch (e) {
    return { score: 3, feedback: 'Offline evaluation stub.', tips: 'Practice concise responses.' }
  }
}