import { motion } from 'framer-motion'

const icons = {
  home: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
    </svg>
  ),
  about: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  skills: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  english: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  projects: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  goals: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  contact: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

const navItems = [
  { id: 'home', label: 'Home', icon: icons.home },
  { id: 'about', label: 'About', icon: icons.about },
  { id: 'skills', label: 'Skills', icon: icons.skills },
  { id: 'projects', label: 'Projects', icon: icons.projects },
  { id: 'english', label: 'English', icon: icons.english },
  { id: 'goals', label: 'Goals', icon: icons.goals },
  { id: 'contact', label: 'Contact', icon: icons.contact },
]

export default function Sidebar({ active, onNavigate, dark, onToggleTheme, open, onClose }) {
  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`glass fixed top-0 left-0 z-50 flex h-full w-[72px] flex-col items-center border-r py-6 transition-transform duration-500 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } ${dark ? 'glass-dark border-white/8' : 'glass-light border-black/5'}`}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative mb-10 flex h-11 w-11 cursor-default items-center justify-center rounded-2xl text-lg font-bold text-white"
          style={{ background: 'linear-gradient(135deg, #22d3ee, #e879f9)' }}
        >
          F
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#0a0a0f] bg-lime-400" />
        </motion.div>

        <nav className="flex flex-1 flex-col items-center gap-2">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
                className={`group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400'
                    : dark
                      ? 'text-slate-500 hover:text-slate-200'
                      : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: dark
                        ? 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(232,121,249,0.15))'
                        : 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(232,121,249,0.12))',
                      boxShadow: dark ? '0 0 20px rgba(34,211,238,0.2)' : 'none',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>

                <span
                  className={`pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 ${
                    dark ? 'bg-white/10 text-white' : 'bg-slate-900 text-white'
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            )
          })}
        </nav>

        <motion.button
          onClick={onToggleTheme}
          whileHover={{ scale: 1.15, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.4 }}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
            dark
              ? 'bg-white/5 text-cyan-400 hover:bg-white/10'
              : 'bg-black/5 text-amber-500 hover:bg-black/10'
          }`}
        >
          {dark ? (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c1.1-.53 2.34-.9 3.64-.9z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
            </svg>
          )}
        </motion.button>
      </aside>
    </>
  )
}
