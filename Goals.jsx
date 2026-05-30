import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'

const goals = [
  {
    step: '01',
    title: 'Master Web Development',
    desc: 'Become proficient in React and modern frontend tools to ship polished, real applications.',
    color: '#22d3ee',
  },
  {
    step: '02',
    title: 'Achieve IELTS Success',
    desc: 'Score high on IELTS to unlock international education and global career paths.',
    color: '#e879f9',
  },
  {
    step: '03',
    title: 'Build Real Projects',
    desc: 'Create useful, innovative apps that solve actual problems for real people.',
    color: '#fb923c',
  },
  {
    step: '04',
    title: 'Become a Software Developer',
    desc: 'Grow into a skilled developer who never stops learning and giving back to the community.',
    color: '#a3e635',
  },
]

export default function Goals({ dark }) {
  return (
    <section id="goals" className="py-28">
      <SectionHeader
        number="05"
        label="Future"
        title="Where I'm Headed"
        subtitle="Big goals, small daily steps — that's how I build the future I want."
        dark={dark}
      />

      <div className="space-y-5">
        {goals.map((goal, i) => (
          <motion.div
            key={goal.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ x: 8 }}
            className={`card-glow group flex gap-6 rounded-2xl border p-6 sm:p-7 ${
              dark ? 'glass glass-dark' : 'glass glass-light'
            }`}
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-bold transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `${goal.color}15`,
                color: goal.color,
                border: `1px solid ${goal.color}33`,
                boxShadow: `0 0 20px ${goal.color}11`,
              }}
            >
              {goal.step}
            </div>
            <div className="flex-1">
              <h3 className={`text-lg font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                {goal.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                {goal.desc}
              </p>
            </div>
            <motion.div
              className="hidden self-center sm:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <svg
                className="h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                style={{ color: goal.color }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mt-12 overflow-hidden rounded-3xl p-px"
        style={{ background: 'linear-gradient(135deg, #22d3ee, #e879f9, #fb923c)' }}
      >
        <div className={`rounded-[23px] p-8 text-center sm:p-10 ${dark ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <motion.p
            className={`text-xl font-medium italic sm:text-2xl ${dark ? 'text-slate-200' : 'text-slate-700'}`}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "Both English and programming are important for my future career in technology."
          </motion.p>
          <p className="mt-4 font-mono text-sm text-gradient">
            — Fayoz · Tashkent, Uzbekistan 🇺🇿
          </p>
        </div>
      </motion.div>

    </section>
  )
}
