import { motion } from 'framer-motion'
import RotatingText, { TypewriterLine } from '../RotatingText'

const stats = [
  { value: '6+', label: 'Technologies', color: '#22d3ee' },
  { value: '🇺🇿', label: 'Uzbekistan', color: '#a3e635' },
  { value: 'IELTS', label: 'In Progress', color: '#e879f9' },
]

export default function Home({ dark }) {
  return (
    <section id="home" className="relative flex min-h-screen items-center py-20">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-8 inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-xs ${
              dark ? 'border-cyan-500/30 bg-cyan-500/5 text-cyan-300' : 'border-cyan-600/30 bg-cyan-50 text-cyan-700'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Tashkent, Uzbekistan — Open to learn & build
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl ${dark ? 'text-white' : 'text-slate-900'}`}
          >
            Hey, I'm{' '}
            <span className="text-gradient-shimmer">Fayoz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={`mt-6 text-xl sm:text-2xl ${dark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            A passionate{' '}
            <RotatingText />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className={`mt-4 max-w-lg text-lg leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-500'}`}
          >
            School student building websites, mastering React, and preparing for IELTS —
            one line of code at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-semibold text-[#050508]"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #a3e635)' }}
            >
              View Projects →
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-2xl border px-7 py-3.5 text-sm font-semibold transition-colors ${
                dark
                  ? 'border-white/15 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300'
                  : 'border-black/10 text-slate-700 hover:border-cyan-500/50'
              }`}
            >
              My Story
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <TypewriterLine dark={dark} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`card-glow rounded-2xl border p-4 text-center ${
                  dark ? 'glass glass-dark' : 'glass glass-light'
                }`}
              >
                <p className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className={`mt-1 text-xs font-medium ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden h-[380px] w-[380px] lg:block"
        >
          <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-cyan-500/20" />
          <div
            className="animate-spin-slow absolute inset-8 rounded-full border border-dashed border-fuchsia-500/20"
            style={{ animationDirection: 'reverse', animationDuration: '15s' }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-52 w-52 overflow-hidden rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #e879f9, #fb923c)',
                padding: '3px',
              }}
            >
              <div
                className={`flex h-full w-full flex-col items-center justify-center rounded-[21px] ${
                  dark ? 'bg-[#0a0a0f]' : 'bg-white'
                }`}
              >
                <span className="text-7xl font-black text-gradient">F</span>
                <span className={`mt-1 font-mono text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                  developer.exe
                </span>
              </div>
            </motion.div>
          </div>

          {[
            { label: '⚛️ React', style: { top: '8%', left: '50%', transform: 'translateX(-50%)' } },
            { label: '🎬 Movies', style: { bottom: '8%', left: '50%', transform: 'translateX(-50%)' } },
            { label: '📚 IELTS', style: { top: '50%', left: '0%', transform: 'translateY(-50%)' } },
            { label: '💻 Code', style: { top: '50%', right: '0%', transform: 'translateY(-50%)' } },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs font-medium ${
                dark ? 'border-white/10 bg-[#0a0a0f]/90 text-slate-300' : 'border-black/8 bg-white text-slate-600'
              }`}
              style={item.style}
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
