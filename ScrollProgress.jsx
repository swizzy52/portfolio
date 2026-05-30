import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress({ dark }) {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(0, { stiffness: 100, damping: 30, mass: 0.5 })

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(p)
      scaleX.set(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scaleX])

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-[60] h-[3px] lg:left-[72px] ${
        dark ? 'bg-white/5' : 'bg-black/5'
      }`}
    >
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #22d3ee, #e879f9, #fb923c)',
        }}
      />
      <span className="sr-only">{Math.round(progress * 100)}% scrolled</span>
    </div>
  )
}
