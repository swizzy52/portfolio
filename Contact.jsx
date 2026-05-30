import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { profile } from '../../data/content'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'

const socials = [
  {
    name: 'GitHub',
    href: profile.github,
    color: '#e879f9',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.795-.735-.405-1.02-1.005-1.29-1.005-1.29-.81-.555.06-.555.06-.555 1.005.075 1.53 1.035 1.53 1.035.9 1.545 2.34 1.08 2.91.825.09-.645.315-1.08.57-1.335-2.4-.27-4.92-1.215-4.92-5.415 0-1.2.435-2.175 1.14-2.94-.105-.27-.495-1.365.105-2.85 0 0 .93-.3 3.045 1.125.885-.24 1.83-.36 2.775-.36.945 0 1.89.12 2.775.36 2.115-1.425 3.045-1.125 3.045-1.125.6 1.485.21 2.58.105 2.85.705.765 1.14 1.74 1.14 2.94 0 4.215-2.52 5.145-4.92 5.415.39.33.735.96.735 1.935 0 1.395-.015 2.52-.015 2.85 0 .315.225.69.825.57A8.205 8.205 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: profile.telegram,
    color: '#22d3ee',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: profile.tiktok,
    color: '#fb923c',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
]

function buildTelegramUrl(form) {
  const text = `Hi Fayoz! I'm ${form.name} (${form.email}).\n\n${form.message}`
  const username = profile.telegram.replace('https://t.me/', '')
  return `https://t.me/${username}?text=${encodeURIComponent(text)}`
}

export default function Contact({ dark }) {
  const { copied, copy } = useCopyToClipboard()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const inputClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 ${
    dark
      ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-600'
      : 'border-black/10 bg-white text-slate-900 placeholder:text-slate-400'
  }`

  const sendViaEmail = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error(data.message || 'Failed to send')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Email failed. Try Telegram instead — it always works!')
    }
  }

  const sendViaTelegram = () => {
    if (!form.name || !form.message) {
      setErrorMsg('Please fill in your name and message first.')
      setStatus('error')
      return
    }
    window.open(buildTelegramUrl(form), '_blank', 'noopener,noreferrer')
    setStatus('success')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-28 pb-32">
      <SectionHeader
        number="06"
        label="Contact"
        title="Let's Connect"
        subtitle="Send a message — it goes straight to my inbox. Telegram works too."
        dark={dark}
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`lg:col-span-2 rounded-2xl border p-8 ${dark ? 'glass glass-dark' : 'glass glass-light'}`}
        >
          <div className={`rounded-2xl border p-5 ${dark ? 'border-cyan-500/20 bg-cyan-500/5' : 'border-cyan-200 bg-cyan-50'}`}>
            <p className={`text-xs font-medium uppercase tracking-widest ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Email
            </p>
            <p className="mt-2 text-lg font-bold text-gradient-shimmer">{profile.email}</p>
            <motion.button
              onClick={() => copy(profile.email)}
              whileTap={{ scale: 0.95 }}
              className={`mt-3 rounded-xl border px-4 py-2 font-mono text-xs font-medium ${
                copied
                  ? 'border-lime-500/50 bg-lime-500/10 text-lime-400'
                  : dark
                    ? 'border-white/10 text-slate-400 hover:text-cyan-300'
                    : 'border-black/10 text-slate-600'
              }`}
            >
              {copied ? '✓ Copied!' : 'Copy email'}
            </motion.button>
          </div>

          <p className={`mt-8 text-sm font-medium ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Social profiles
          </p>
          <div className="mt-4 space-y-3">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 rounded-xl border p-4 transition-colors ${
                  dark
                    ? 'border-white/10 hover:border-white/20'
                    : 'border-black/10 hover:border-black/20'
                }`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${s.color}18`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>{s.name}</p>
                  <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {s.href.replace('https://', '')}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`lg:col-span-3 rounded-2xl border p-8 ${dark ? 'glass glass-dark' : 'glass glass-light'}`}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-500/20 text-3xl">
                  ✓
                </div>
                <h3 className={`mt-4 text-xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                  Message sent!
                </h3>
                <p className={`mt-2 text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className={`mt-6 text-sm font-medium ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={sendViaEmail}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { id: 'name', label: 'Your name', type: 'text', placeholder: 'John Doe' },
                    { id: 'email', label: 'Your email', type: 'email', placeholder: 'you@email.com' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className={`mb-2 block text-sm font-medium ${dark ? 'text-slate-400' : 'text-slate-600'}`}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.id]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className={`text-sm font-medium ${dark ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      Message
                    </label>
                    <span className={`font-mono text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                      {form.message.length}/500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    required
                    maxLength={500}
                    rows={5}
                    placeholder="Hi Fayoz, I'd like to talk about..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-[#050508] disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #22d3ee, #a3e635)' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#050508]/30 border-t-[#050508]" />
                        Sending…
                      </>
                    ) : (
                      'Send to email →'
                    )}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={sendViaTelegram}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border py-3.5 text-sm font-semibold ${
                      dark
                        ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/15'
                        : 'border-cyan-500/40 bg-cyan-50 text-cyan-700'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Send via Telegram
                  </motion.button>
                </div>

                <p className={`mt-4 text-center text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                  First email send? Check your inbox — FormSubmit sends a one-time confirmation link.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <p
        className={`mt-16 border-t pt-8 text-center font-mono text-xs ${
          dark ? 'border-white/10 text-slate-600' : 'border-black/10 text-slate-400'
        }`}
      >
        Built with React + Vite · © {new Date().getFullYear()} Fayoz
      </p>
    </section>
  )
}
