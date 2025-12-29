import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-bold text-xl">Live AI Interview</div>
        <nav className="space-x-4">
          <Link to="/signin" className="text-primary">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-primary text-white rounded">Get Started</Link>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold">
            Practice Interviews Live — Get Real Feedback from AI
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">A smart platform that listens, evaluates, and guides you with tailored tips.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/signup" className="px-5 py-3 bg-primary rounded text-white">Get Started</Link>
            <Link to="/interview" className="px-5 py-3 border rounded">Explore Demo</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {[
              { t: 'AI that listens to you in real time.' },
              { t: 'Instant feedback on answers.' },
              { t: 'Adaptive, domain-aware question flow.' },
              { t: 'Mock tests and preparation guides.' }
            ].map((f,i)=> (
              <motion.div key={i} whileHover={{scale:1.03}} className="p-4 rounded border bg-white/70 dark:bg-gray-800/70">
                <span className="text-sm">{f.t}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="rounded-xl border overflow-hidden bg-black">
          <div className="aspect-video flex items-center justify-center text-white">
            AI Interviewer Demo
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {['Choose domain','Answer live questions','Get instant feedback'].map((s,i)=>(
            <motion.div key={i} initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} className="p-6 rounded-xl border bg-white dark:bg-gray-800">
              <div className="text-lg font-semibold">{s}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {['Live speech','Instant scoring','Smart flow','Reports'].map((s,i)=>(
            <div key={i} className="p-6 rounded-xl border bg-white dark:bg-gray-800">
              <div className="text-sm">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500">
        <div className="flex gap-6">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  )
}