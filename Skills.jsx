import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import Marquee from '../Marquee'

const skills = [
  { name: 'HTML & CSS', level: 85, color: '#fb923c', icon: '01' },
  { name: 'Tailwind CSS', level: 80, color: '#22d3ee', icon: '02' },
  { name: 'JavaScript', level: 75, color: '#facc15', icon: '03' },
  { name: 'React', level: 70, color: '#38bdf8', icon: '04' },
  { name: 'C / C++', level: 65, color: '#818cf8', icon: '05' },
  { name: 'Git & Tools', level: 60, color: '#a3e635', icon: '06' },
]

export default function Skills({ dark }) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = document.getElementById('skills')
    if (!el) return
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setAnimate(true), { threshold: 0.2 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28">
      <SectionHeader
        number="02"
        label="Skills"
        title="My Toolkit"
        subtitle="Web development by day, systems programming by night."
        dark={dark}
      />
      <div className="mb-10">
        <Marquee dark={dark} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className={`rounded-2xl border p-6 ${dark ? 'glass glass-dark' : 'glass glass-light'}`}
          >
            <div className="flex justify-between">
              <span className="font-mono text-xs font-bold" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="font-mono text-2xl font-bold" style={{ color: dark ? `${skill.color}99` : `${skill.color}44` }}>
                {skill.level}%
              </span>
            </div>
            <h3 className={`mt-4 font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>{skill.name}</h3>
            <div className={`mt-4 h-1.5 overflow-hidden rounded-full ${dark ? 'bg-white/10' : 'bg-black/10'}`}>
              <div
                className="skill-bar-fill h-full rounded-full"
                style={{
                  width: animate ? `${skill.level}%` : '0%',
                  background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
