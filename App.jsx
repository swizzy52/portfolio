import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Background from './components/Background'
import Sidebar from './components/Sidebar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import English from './components/sections/English'
import Goals from './components/sections/Goals'
import Contact from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'english', 'goals', 'contact']

export default function App() {
  const { dark, toggle } = useTheme()
  const [active, setActive] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -35% 0px' }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navigate = (id) => {
    setActive(id)
    setSidebarOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`relative min-h-screen transition-colors duration-700 ${
        dark ? 'bg-[#050508] text-slate-300' : 'bg-[#faf9f7] text-slate-700'
      }`}
    >
      <Background dark={dark} />
      <ScrollProgress dark={dark} />

      <Sidebar
        active={active}
        onNavigate={navigate}
        dark={dark}
        onToggleTheme={toggle}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <motion.button
        onClick={() => setSidebarOpen(true)}
        whileTap={{ scale: 0.9 }}
        className={`glass fixed top-5 left-5 z-30 rounded-xl p-2.5 lg:hidden ${
          dark ? 'glass-dark text-cyan-400' : 'glass-light text-slate-700'
        }`}
        aria-label="Open menu"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      <BackToTop dark={dark} />

      <main className="relative z-10 lg:ml-[72px]">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-14">
          <Home dark={dark} />
          <About dark={dark} />
          <Skills dark={dark} />
          <Projects dark={dark} />
          <English dark={dark} />
          <Goals dark={dark} />
          <Contact dark={dark} />
        </div>
      </main>
    </div>
  )
}
