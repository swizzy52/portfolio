import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = ['Web Developer', 'React Enthusiast', 'IELTS Preparer', 'Problem Solver', 'Future Engineer']

export default function RotatingText() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gradient-shimmer font-semibold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function TypewriterLine({ dark = true }) {
  const code = 'const fayoz = { location: "Tashkent", passion: ["code", "english"] }'
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      if (i <= code.length) setDisplayed(code.slice(0, i++))
      else {
        setDone(true)
        clearInterval(t)
      }
    }, 45)
    return () => clearInterval(t)
  }, [])

  return (
    <div className={`mt-6 overflow-hidden rounded-xl border font-mono text-sm ${dark ? 'border-white/10 bg-black/40' : 'border-black/10 bg-slate-900'}`}>
      <div className={`flex gap-2 border-b px-4 py-2.5 ${dark ? 'border-white/10' : 'border-white/10'}`}>
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-slate-500">fayoz.js</span>
      </div>
      <pre className="overflow-x-auto p-4 text-slate-300">
        <code>{displayed}</code>
        {!done && <span className="cursor-blink text-cyan-400">|</span>}
      </pre>
    </div>
  )
}
