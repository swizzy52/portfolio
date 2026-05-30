import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'

const facts = [
  { icon: '📍', title: 'Location', desc: 'Tashkent, Uzbekistan' },
  { icon: '🎓', title: 'Status', desc: 'School Student' },
  { icon: '💡', title: 'Interests', desc: 'Web Dev · English · Movies' },
  { icon: '🚀', title: 'Mission', desc: 'Software Development Career' },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About({ dark }) {
  return (
    <section id="about" className="py-28">
      <SectionHeader
        number="01"
        label="About"
        title="Who I Am"
        subtitle="A curious mind from Central Asia, chasing two dreams — fluent English and clean code."
        dark={dark}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`lg:col-span-2 rounded-3xl border p-8 sm:p-10 ${dark ? 'glass glass-dark' : 'glass glass-light'}`}
        >
          <p className={`text-xl leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            My name is <span className="text-gradient font-semibold">Fayoz</span>. I live in Tashkent and I am a school
            student passionate about programming and English.
          </p>
          <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            I enjoy creating websites, learning new technologies, and improving through personal projects.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
          {facts.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border p-5 ${dark ? 'glass glass-dark' : 'glass glass-light'}`}
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className={`mt-3 font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>{f.title}</h3>
              <p className={`mt-1 text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
