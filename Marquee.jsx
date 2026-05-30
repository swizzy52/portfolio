const items = ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'C', 'C++', 'Vite', 'Git', 'Node.js', 'Figma']

export default function Marquee({ dark }) {
  const doubled = [...items, ...items]
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="marquee-track flex w-max gap-4">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`shrink-0 rounded-full border px-5 py-2 font-mono text-sm font-medium ${
              dark
                ? 'border-cyan-500/20 bg-cyan-500/10 text-cyan-100'
                : 'border-slate-200 bg-white text-slate-700 shadow-sm'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
