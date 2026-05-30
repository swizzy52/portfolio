import { motion } from 'framer-motion'

export default function SectionHeader({ number, label, title, subtitle, dark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-cyan-500">{number}</span>
        <div className={`h-px flex-1 ${dark ? 'bg-white/10' : 'bg-black/10'}`} />
        <span className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
          {label}
        </span>
      </div>
      <h2 className={`mt-5 text-4xl font-bold tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-lg text-lg ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
