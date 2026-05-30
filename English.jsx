import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'

const activities = [
  {
    icon: '🎬',
    title: 'Watching Movies',
    desc: 'English films sharpen my listening and vocabulary without feeling like study.',
    accent: '#e879f9',
  },
  {
    icon: '💬',
    title: 'Daily Practice',
    desc: 'Using English in everyday life to build real confidence and fluency.',
    accent: '#22d3ee',
  },
  {
    icon: '📝',
    title: 'IELTS Prep',
    desc: 'Systematic study across all four exam sections — reading, writing, listening, speaking.',
    accent: '#fb923c',
  },
  {
    icon: '📖',
    title: 'Reading & Writing',
    desc: 'Expanding vocabulary and practicing academic writing for higher band scores.',
    accent: '#a3e635',
  },
]

export default function English({ dark }) {
  return (
    <section id="english" className="py-28">
      <SectionHeader
        number="04"
        label="Language"
        title="English Journey"
        subtitle="Language is my bridge to the global tech world — and I'm crossing it every day."
        dark={dark}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`card-glow relative mb-8 overflow-hidden rounded-3xl border p-8 sm:p-10 ${
          dark ? 'glass glass-dark' : 'glass glass-light'
        }`}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl text-5xl"
            style={{ background: 'linear-gradient(135deg, #22d3ee22, #e879f922)', border: '1px solid rgba(34,211,238,0.2)' }}
          >
            🇬🇧
          </motion.div>
          <div>
            <p className="font-mono text-xs text-fuchsia-400">target: IELTS Band 7+</p>
            <h3 className={`mt-2 text-3xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Preparing for IELTS
            </h3>
            <p className={`mt-3 max-w-xl leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              Strong English opens doors to international education and tech careers.
              Movies, daily practice, and structured IELTS prep are all part of my routine.
            </p>
          </div>
        </div>

        <div className="relative mt-8 grid grid-cols-4 gap-3">
          {['Reading', 'Writing', 'Listening', 'Speaking'].map((section, i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl border p-3 text-center ${dark ? 'border-white/8 bg-white/3' : 'border-black/6 bg-black/2'}`}
            >
              <p className={`text-xs font-medium ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{section}</p>
              <div className={`mt-2 h-1 overflow-hidden rounded-full ${dark ? 'bg-white/8' : 'bg-black/6'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${60 + i * 8}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {activities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`card-glow group flex gap-5 rounded-2xl border p-6 ${
              dark ? 'glass glass-dark' : 'glass glass-light'
            }`}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}33` }}
            >
              {item.icon}
            </div>
            <div>
              <h3 className={`font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
