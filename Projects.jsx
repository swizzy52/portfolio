import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { projects } from '../../data/content'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'learning', label: 'Learning' },
]

export default function Projects({ dark }) {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-28">
      <SectionHeader
        number="03"
        label="Work"
        title="My Projects"
        subtitle="Things I've built while learning — click a card to view more."
        dark={dark}
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <motion.button
            key={f.id}
            onClick={() => setFilter(f.id)}
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl border px-4 py-2 font-mono text-sm font-medium transition-all ${
              filter === f.id
                ? dark
                  ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-300'
                  : 'border-cyan-500 bg-cyan-50 text-cyan-700'
                : dark
                  ? 'border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300'
                  : 'border-black/10 text-slate-500 hover:border-black/20'
            }`}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className={`card-glow group flex flex-col rounded-2xl border p-6 ${
                dark ? 'glass glass-dark' : 'glass glass-light'
              }`}
            >
              <div
                className="mb-4 h-1 w-12 rounded-full"
                style={{ background: project.color }}
              />
              <h3 className={`text-lg font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h3>
              <p className={`mt-2 flex-1 text-sm leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
                {project.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-lg px-2.5 py-0.5 font-mono text-xs ${
                      dark ? 'bg-white/5 text-slate-400' : 'bg-black/5 text-slate-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium transition-colors"
                    style={{ color: project.color }}
                  >
                    Live →
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm font-medium ${dark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-700'}`}
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
