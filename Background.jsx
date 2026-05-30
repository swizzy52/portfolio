import { useEffect, useRef } from 'react'

export default function Background({ dark }) {
  const canvasRef = useRef(null)
  const spotlightRef = useRef(null)
  const mouse = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX - 250}px`
        spotlightRef.current.style.top = `${e.clientY - 250}px`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mouse.current
      particles.forEach((p) => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        const dist = Math.hypot(p.x - mx, p.y - my)
        const boost = dist < 200 ? (1 - dist / 200) * 0.5 : 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + boost * 2, 0, Math.PI * 2)
        ctx.fillStyle = dark
          ? `rgba(34, 211, 238, ${p.opacity + boost})`
          : `rgba(99, 102, 241, ${p.opacity * 0.5 + boost * 0.4})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [dark])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className={`absolute inset-0 ${dark ? 'grid-bg' : 'grid-bg-light'}`} />
      <div className="mesh-orb absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full opacity-30 blur-[100px] bg-cyan-400" />
      <div className="mesh-orb-2 absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full opacity-25 blur-[90px] bg-fuchsia-400" />
      <div className="mesh-orb-3 absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full opacity-20 blur-[80px] bg-orange-400" />
      <div
        ref={spotlightRef}
        className="absolute h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #22d3ee55, transparent 70%)', left: -999, top: -999 }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
    </div>
  )
}
