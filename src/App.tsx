import { motion, useMotionValue, useScroll, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageContext'

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const SPACING = 36
    const BASE_OPACITY = 0.15
    const PULSE_SPEED = 0.0003

    const draw = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cols = Math.ceil(canvas.width / SPACING) + 1
      const rows = Math.ceil(canvas.height / SPACING) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const wave = Math.sin(c * 0.4 + r * 0.4 - t) * 0.5 + 0.5
          const opacity = BASE_OPACITY * (0.3 + 0.7 * wave)
          const radius = 0.8 + wave * 0.5
          ctx.beginPath()
          ctx.arc(c * SPACING, r * SPACING, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(59,130,246,${opacity})`
          ctx.fill()
        }
      }
      t += PULSE_SPEED * 16
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen pointer-events-none -z-10"
    />
  )
}

const EASE = [0.25, 0.1, 0.25, 1] as const
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
const fadeIn  = { initial: { opacity: 0 },        whileInView: { opacity: 1 },        viewport: { once: true } }

export default function App() {
  const { t, lang, setLang } = useLanguage()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 22 })
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  useEffect(() => scrollY.on('change', v => setScrolled(v > 60)), [scrollY])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="relative text-white min-h-screen overflow-x-hidden">
      <DotGrid />

      {/* Gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none fixed top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#2563EB] opacity-[0.05] blur-[140px] -z-20" />
      <div aria-hidden="true" className="pointer-events-none fixed bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#1D4ED8] opacity-[0.04] blur-[120px] -z-20" />

      {/* Cursor glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed w-[380px] h-[380px] rounded-full bg-[#2563EB] opacity-[0.08] blur-[90px] -z-20"
        style={{ left: springX, top: springY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-label="Main navigation"
          className={[
            'pointer-events-auto inline-flex items-center gap-1 rounded-full border px-2 py-2',
            'bg-[#18181B]/80 backdrop-blur-xl border-zinc-800 transition-shadow duration-300',
            scrolled ? 'shadow-xl shadow-black/40' : '',
          ].join(' ')}
        >
          <a
            href="#top"
            aria-label="AIFromBrazil — back to top"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2563EB] text-white text-[10px] font-bold tracking-wide [font-family:var(--font-heading)] hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            AFB
          </a>

          <div aria-hidden="true" className="w-px h-5 bg-zinc-800 mx-1 hidden sm:block" />

          {([
            { label: t.nav.about,    href: '#about'    },
            { label: t.nav.work,     href: '#work'     },
            { label: t.nav.services, href: '#services' },
            { label: t.nav.contact,  href: '#contact'  },
          ] as const).map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200"
            >
              {label}
            </a>
          ))}

          <div aria-hidden="true" className="w-px h-5 bg-zinc-800 mx-1 hidden sm:block" />

          {/* Language toggle */}
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => setLang('de')}
              aria-label="Deutsch"
              className={`text-[11px] font-semibold px-2 py-1 rounded-full transition-colors duration-200 [font-family:var(--font-heading)] ${
                lang === 'de'
                  ? 'text-white bg-zinc-700'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              DE
            </button>
            <span aria-hidden="true" className="text-zinc-700 text-xs">|</span>
            <button
              onClick={() => setLang('en')}
              aria-label="English"
              className={`text-[11px] font-semibold px-2 py-1 rounded-full transition-colors duration-200 [font-family:var(--font-heading)] ${
                lang === 'en'
                  ? 'text-white bg-zinc-700'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              EN
            </button>
          </div>

          <div aria-hidden="true" className="w-px h-5 bg-zinc-800 mx-1 hidden sm:block" />

          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 [font-family:var(--font-heading)]"
          >
            {t.nav.sayHi}
          </a>
        </motion.nav>
      </div>

      {/* ── HEADER VIDEO ────────────────────────────────────────── */}
      <section id="top" className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mb-20">
        <video
          src="/wall-header.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-[#09090B]" />

        <div className="absolute top-20 left-8 md:left-14 right-8 md:right-14 flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="flex flex-col gap-1.5"
          >
            <span
              className="text-4xl md:text-6xl font-bold tracking-tight leading-none [font-family:var(--font-heading)] select-none"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #93C5FD 45%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AIFromBrazil
            </span>
            <span className="text-[11px] text-white/40 uppercase tracking-[0.35em] pl-0.5 [font-family:var(--font-heading)]">
              {t.header.taglineAFB}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="flex flex-col gap-1.5 items-end"
          >
            <span
              className="text-4xl md:text-6xl font-bold tracking-tight leading-none [font-family:var(--font-heading)] select-none"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #93C5FD 45%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BuiltByNikolay
            </span>
            <span className="text-[11px] text-white/40 uppercase tracking-[0.35em] pr-0.5 [font-family:var(--font-heading)]">
              {t.header.taglineBBN}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto mb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 mb-10 text-xs text-zinc-400 select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          {t.hero.available}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.06] mb-6 text-white [font-family:var(--font-heading)]"
        >
          {t.hero.h1a}<br />
          <span className="text-[#3B82F6]">{t.hero.h1b}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <a
            href="#contact"
            className="rounded-full px-8 py-3.5 text-base font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-colors duration-200 [font-family:var(--font-heading)]"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#work"
            className="rounded-full px-8 py-3.5 text-base font-medium border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white active:border-zinc-400 transition-colors duration-200"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative w-full overflow-hidden py-4 mb-32"
        style={{
          borderTop: '1px solid rgba(37,99,235,0.22)',
          borderBottom: '1px solid rgba(37,99,235,0.22)',
          background: 'linear-gradient(90deg, rgba(37,99,235,0.02) 0%, rgba(37,99,235,0.07) 50%, rgba(37,99,235,0.02) 100%)',
          boxShadow: '0 0 50px rgba(37,99,235,0.1), inset 0 0 40px rgba(37,99,235,0.04)',
        }}
      >
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #09090B, transparent)' }} />
        <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #09090B, transparent)' }} />
        <div
          aria-hidden="true"
          className="flex"
          style={{ animation: 'marquee 24s linear infinite', width: 'max-content' }}
        >
          {[...Array(2)].flatMap((_, set) =>
            t.marquee.map(tag => (
              <span
                key={`${set}-${tag}`}
                className="inline-flex items-center gap-10 px-10 text-[11px] uppercase tracking-[0.35em] whitespace-nowrap select-none"
                style={{ color: 'rgba(96,165,250,0.75)', textShadow: '0 0 18px rgba(59,130,246,0.55)' }}
              >
                {tag}
                <span style={{ width: 3, height: 3, borderRadius: '50%', display: 'inline-block', background: 'rgba(59,130,246,0.5)', boxShadow: '0 0 8px rgba(59,130,246,0.7)' }} />
              </span>
            ))
          )}
        </div>
      </motion.div>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto mb-40 px-6 scroll-mt-28">
        <motion.p {...fadeIn} transition={{ duration: 0.5 }} className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">{t.about.eyebrow}</motion.p>
        <div className="grid md:grid-cols-[1fr_260px] gap-14 items-start">
          <div>
            <motion.h2 {...fadeUp} transition={{ duration: 0.6, ease: EASE }} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-white [font-family:var(--font-heading)]">
              {t.about.h2a}<br />{t.about.h2b}
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1, ease: EASE }} className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl">
              {t.about.desc}
            </motion.p>
            <motion.blockquote {...fadeUp} transition={{ duration: 0.5, delay: 0.2, ease: EASE }} className="relative pl-5 border-l-2 border-[#2563EB]">
              <p className="text-lg text-white/80 font-medium [font-family:var(--font-heading)] leading-relaxed">
                {t.about.quote}
              </p>
            </motion.blockquote>
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15, ease: EASE }} className="w-full aspect-[3/4] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            <img src="/me.jpg" alt="AIFromBrazil" className="w-full h-full object-cover object-center" />
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────── */}
      <section aria-label="Key numbers" className="max-w-6xl mx-auto mb-40 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/80 rounded-3xl overflow-hidden">
          {t.results.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="bg-[#18181B] px-8 py-10 flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-bold text-white [font-family:var(--font-heading)]">{stat.value}</span>
              <span className="text-sm text-zinc-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WORK ────────────────────────────────────────────────── */}
      <section id="work" className="max-w-6xl mx-auto mb-40 px-6 scroll-mt-28">
        <motion.p {...fadeIn} transition={{ duration: 0.5 }} className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">{t.work.eyebrow}</motion.p>
        <motion.h2 {...fadeUp} transition={{ duration: 0.6, ease: EASE }} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10 text-white [font-family:var(--font-heading)]">
          {t.work.h2}
        </motion.h2>

        {/* Byerokrat — featured card */}
        <motion.article
          {...fadeUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="group relative rounded-3xl overflow-hidden mb-6 cursor-pointer"
          style={{ background: 'linear-gradient(140deg,#18181B 0%,#1c1c23 100%)', border: '1px solid rgba(37,99,235,0.22)' }}
        >
          <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent" />
          <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(700px circle at 40% 0%,rgba(37,99,235,0.07),transparent 55%)' }} />

          <div className="relative grid md:grid-cols-[1fr_1.1fr]">
            <div className="p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] text-[#3B82F6] uppercase tracking-[0.2em] [font-family:var(--font-heading)]">{t.work.featuredProject}</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-[0.15em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />{t.work.liveStatus}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 [font-family:var(--font-heading)] group-hover:text-[#60A5FA] transition-colors duration-300">Byerokrat</h3>
                <p className="text-zinc-400 leading-relaxed mb-7 max-w-sm">{t.work.byerokrat.desc}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.15em] mb-1 [font-family:var(--font-heading)]">{t.work.problemLabel}</p>
                    <p className="text-zinc-300">{t.work.byerokrat.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.15em] mb-1 [font-family:var(--font-heading)]">{t.work.solutionLabel}</p>
                    <p className="text-zinc-300">{t.work.byerokrat.solution}</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-[11px] text-zinc-600 font-mono">React · Supabase · Claude API</p>
            </div>

            <div className="relative bg-zinc-900/50 border-l border-zinc-800/50 min-h-[280px] overflow-hidden">
              <img src="/byerokrat.png" alt="Byerokrat app screenshot" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.article>

        {/* KI-Sekretärin Roxi — second featured card */}
        <motion.article
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="group relative rounded-3xl overflow-hidden mb-6 cursor-pointer"
          style={{ background: 'linear-gradient(140deg,#18181B 0%,#1c1c23 100%)', border: '1px solid rgba(37,99,235,0.22)' }}
        >
          <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent" />
          <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(700px circle at 40% 0%,rgba(37,99,235,0.07),transparent 55%)' }} />

          <div className="relative grid md:grid-cols-[1fr_1.1fr]">
            <div className="p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] text-[#3B82F6] uppercase tracking-[0.2em] [font-family:var(--font-heading)]">{t.work.featuredProduct}</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-[0.15em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />{t.work.deployStatus}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 [font-family:var(--font-heading)] group-hover:text-[#60A5FA] transition-colors duration-300">KI-Sekretärin „Roxi"</h3>
                <p className="text-zinc-400 leading-relaxed mb-7 max-w-sm">{t.work.roxi.desc}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.15em] mb-1 [font-family:var(--font-heading)]">{t.work.problemLabel}</p>
                    <p className="text-zinc-300">{t.work.roxi.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.15em] mb-1 [font-family:var(--font-heading)]">{t.work.solutionLabel}</p>
                    <p className="text-zinc-300">{t.work.roxi.solution}</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-[11px] text-zinc-600 font-mono">Python · FastAPI · Claude API · WhatsApp Business</p>
            </div>

            <div className="relative bg-zinc-900/50 border-l border-zinc-800/50 overflow-hidden flex flex-col">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(400px circle at 60% 40%, rgba(37,99,235,0.05), transparent 70%)' }} />
              <div className="relative flex items-center gap-2.5 px-5 py-3.5 border-b border-zinc-800/60 shrink-0">
                <div className="w-7 h-7 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[10px] text-[#3B82F6] font-bold [font-family:var(--font-heading)] shrink-0">R</div>
                <div>
                  <p className="text-xs font-semibold text-white [font-family:var(--font-heading)]">Roxi</p>
                  <p className="text-[10px] text-emerald-400">online</p>
                </div>
              </div>
              <div className="relative flex flex-col gap-2.5 px-4 py-4 overflow-y-auto max-h-[380px]">
                <div className="flex justify-end">
                  <div className="flex flex-col items-end gap-0.5 max-w-[210px]">
                    <div className="bg-[#2563EB]/25 border border-[#2563EB]/20 rounded-2xl rounded-br-sm px-3.5 py-2 text-[11px] text-zinc-200 leading-relaxed">
                      Hallo, kann ich morgen einen Termin buchen?
                    </div>
                    <span className="text-[9px] text-zinc-700 pr-1">01:26</span>
                  </div>
                </div>
                <div className="flex gap-2 items-end">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[8px] text-[#3B82F6] font-bold shrink-0 mb-3.5">R</div>
                  <div className="flex flex-col gap-0.5 max-w-[220px]">
                    <div className="bg-zinc-800/80 rounded-2xl rounded-bl-sm px-3.5 py-2 text-[11px] text-zinc-300 leading-relaxed">
                      Hallo! 😊 Klar, gerne helfe ich dir.<br /><br />
                      – Welche Leistung möchtest du?<br />
                      – Wie heißt du?<br />
                      – Bevorzugte Uhrzeit?
                    </div>
                    <span className="text-[9px] text-zinc-700 pl-1">01:26</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex flex-col items-end gap-0.5 max-w-[210px]">
                    <div className="bg-[#2563EB]/25 border border-[#2563EB]/20 rounded-2xl rounded-br-sm px-3.5 py-2 text-[11px] text-zinc-200 leading-relaxed">
                      Herrenhaarschnitt, mein Name ist Max, morgen um 9:30
                    </div>
                    <span className="text-[9px] text-zinc-700 pr-1">01:29</span>
                  </div>
                </div>
                <div className="flex gap-2 items-end">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[8px] text-[#3B82F6] font-bold shrink-0 mb-3.5">R</div>
                  <div className="flex flex-col gap-0.5 max-w-[220px]">
                    <div className="bg-zinc-800/80 rounded-2xl rounded-bl-sm px-3.5 py-2 text-[11px] text-zinc-300 leading-relaxed">
                      Perfekt! ✅ Dein Herrenhaarschnitt ist gebucht:<br /><br />
                      <span className="text-white font-semibold">Morgen um 09:30 Uhr</span><br />
                      – Kosten: ab 20 €<br />
                      – Dauer: 30 Min.<br /><br />
                      Bis dann, Max! 💇‍♂️
                    </div>
                    <span className="text-[9px] text-zinc-700 pl-1">01:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Secondary cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Céu de Brincar',
              img: '/ceu-de-brincar.png',
              tech: 'Next.js · Tailwind · Framer Motion',
              statusColor: 'bg-emerald-400',
              status: t.work.ceuDeBrincar.status,
              desc: t.work.ceuDeBrincar.desc,
              problem: t.work.ceuDeBrincar.problem,
              solution: t.work.ceuDeBrincar.solution,
            },
            {
              title: 'Assilee TV',
              img: '/assileetv.webp',
              tech: 'TODO',
              statusColor: 'bg-amber-400',
              status: t.work.assilee.status,
              desc: t.work.assilee.desc,
              problem: t.work.assilee.problem,
              solution: t.work.assilee.solution,
            },
          ].map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="group relative bg-[#18181B] border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 overflow-hidden flex flex-col transition-colors duration-300 cursor-pointer"
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/[0.015] to-transparent transition-opacity duration-300 pointer-events-none" />
              <div className="relative aspect-video bg-zinc-900 border border-zinc-800/60 rounded-2xl mb-5 overflow-hidden">
                <img src={p.img} alt={`${p.title} screenshot`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-zinc-100 transition-colors duration-200 [font-family:var(--font-heading)]">{p.title}</h3>
                <span className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-[0.12em]">
                  <span className={`w-1.5 h-1.5 rounded-full ${p.statusColor}`} aria-hidden="true" />{p.status}
                </span>
              </div>
              <p className="relative text-zinc-500 text-sm mb-5 leading-relaxed">{p.desc}</p>
              <div className="relative space-y-3 text-xs flex-1">
                <div>
                  <p className="text-[10px] text-zinc-700 uppercase tracking-[0.12em] mb-1 [font-family:var(--font-heading)]">{t.work.problemLabel}</p>
                  <p className="text-zinc-500 leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-700 uppercase tracking-[0.12em] mb-1 [font-family:var(--font-heading)]">{t.work.solutionLabel}</p>
                  <p className="text-zinc-500 leading-relaxed">{p.solution}</p>
                </div>
              </div>
              <p className="relative mt-4 text-[10px] font-mono text-zinc-700">{p.tech}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-40 px-6">
        <motion.p {...fadeIn} transition={{ duration: 0.5 }} className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">{t.process.eyebrow}</motion.p>
        <motion.h2 {...fadeUp} transition={{ duration: 0.6, ease: EASE }} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10 text-white [font-family:var(--font-heading)]">
          {t.process.h2}
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-4">
          {t.process.steps.map((item, i) => (
            <motion.div
              key={item.step}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.09, ease: EASE }}
              className="relative bg-[#18181B] border border-zinc-800/80 rounded-3xl p-7 overflow-hidden hover:border-zinc-700 transition-colors duration-300"
            >
              <span className="text-5xl font-bold [font-family:var(--font-heading)] block mb-5 bg-gradient-to-b from-zinc-700 to-zinc-800/60 bg-clip-text text-transparent select-none">{item.step}</span>
              <h3 className="text-base font-semibold text-white mb-2 [font-family:var(--font-heading)]">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section id="services" className="max-w-6xl mx-auto mb-40 px-6 scroll-mt-28">
        <motion.p {...fadeIn} transition={{ duration: 0.5 }} className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">{t.services.eyebrow}</motion.p>
        <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
          <motion.h2 {...fadeUp} transition={{ duration: 0.6, ease: EASE }} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white [font-family:var(--font-heading)]">
            {t.services.h2}
          </motion.h2>
          <motion.p {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg text-zinc-400 leading-relaxed">
            {t.services.desc}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 mb-14">
          {t.services.items.map((service, i) => (
            <motion.div
              key={service.name}
              {...fadeUp}
              transition={{ duration: 0.35, delay: i * 0.04, ease: EASE }}
              className="group py-4 border-b border-zinc-800/80 flex justify-between items-center gap-4 cursor-pointer"
            >
              <div>
                <p className="text-sm text-zinc-200 group-hover:text-white transition-colors duration-200 font-medium">{service.name}</p>
                <p className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors duration-200 mt-0.5">{service.desc}</p>
              </div>
              <span aria-hidden="true" className="text-zinc-700 group-hover:text-[#3B82F6] transition-colors duration-200 text-base shrink-0">→</span>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: EASE }} className="bg-[#18181B] border border-zinc-800 rounded-3xl p-8">
            <p className="text-[11px] text-[#3B82F6] uppercase tracking-[0.2em] mb-5 [font-family:var(--font-heading)]">{t.services.whoTitle}</p>
            <ul className="space-y-3">
              {t.services.whoItems.map(item => (
                <li key={item} className="flex items-start gap-2 text-zinc-400 text-sm">
                  <span aria-hidden="true" className="text-[#3B82F6] mt-0.5 shrink-0">–</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1, ease: EASE }} className="bg-[#2563EB]/8 border border-[#2563EB]/20 rounded-3xl p-8 flex flex-col">
            <p className="text-[11px] text-[#3B82F6] uppercase tracking-[0.2em] mb-4 [font-family:var(--font-heading)]">{t.services.readyTitle}</p>
            <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-1">{t.services.readyDesc}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-full px-6 py-3 bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-colors duration-200 [font-family:var(--font-heading)]"
            >
              {t.services.readyCta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STACK ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-40 px-6">
        <motion.p {...fadeIn} transition={{ duration: 0.5 }} className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">{t.stack.eyebrow}</motion.p>
        <motion.h2 {...fadeUp} transition={{ duration: 0.6, ease: EASE }} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10 text-white [font-family:var(--font-heading)]">
          {t.stack.h2}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-3xl p-8 border bg-[#18181B] border-zinc-800/80 relative overflow-hidden"
          >
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.2em] mb-7 [font-family:var(--font-heading)]">{t.stack.coreLabel}</p>
            <ul className="space-y-0">
              {t.stack.coreSkills.map((skill, i) => (
                <li key={skill.label} className="flex items-start gap-4 py-4 border-b border-zinc-800/60 last:border-0 last:pb-0 first:pt-0">
                  <span className="text-[13px] font-bold text-[#2563EB] shrink-0 mt-0.5 [font-family:var(--font-heading)]">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-sm font-semibold text-white [font-family:var(--font-heading)] leading-snug">{skill.label}</p>
                    <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">{skill.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.07, ease: EASE }}
            className="rounded-3xl p-8 border bg-[#18181B] border-[#2563EB]/20 relative overflow-hidden"
          >
            <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
            <p className="text-[11px] text-[#3B82F6] uppercase tracking-[0.2em] mb-7 [font-family:var(--font-heading)]">{t.stack.techLabel}</p>
            <div className="space-y-5">
              {[
                { cat: 'AI & Agents',        tools: ['Claude API', 'Anthropic SDK', 'Claude Code'] },
                { cat: 'Frontend',           tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
                { cat: 'Backend',            tools: ['Python', 'FastAPI', 'Node.js', 'Supabase', 'SQLite'] },
                { cat: 'Automation & Tools', tools: ['n8n', 'Stripe', 'Resend', 'Twitter API', 'WhatsApp Business', 'Remotion'] },
              ].map(group => (
                <div key={group.cat}>
                  <p className="text-[10px] text-zinc-700 uppercase tracking-[0.18em] mb-2 [font-family:var(--font-heading)]">{group.cat}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.tools.map(tool => (
                      <span
                        key={tool}
                        className="text-[11px] text-zinc-400 bg-zinc-800/60 border border-zinc-700/50 rounded-lg px-2.5 py-1 hover:border-[#2563EB]/40 hover:text-zinc-200 transition-colors duration-200 cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="max-w-4xl mx-auto px-6 scroll-mt-28">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative rounded-3xl overflow-hidden text-center"
          style={{ background: 'linear-gradient(140deg,#18181B 0%,#1c1c23 100%)', border: '1px solid rgba(37,99,235,0.2)' }}
        >
          <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
          <div className="px-10 py-16 md:py-20">
            <p className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">{t.contact.eyebrow}</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5 text-white [font-family:var(--font-heading)]">
              {t.contact.h2}
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-sm mx-auto">
              {t.contact.desc}
            </p>
            <a
              href="mailto:dnwayne97@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-colors duration-200 [font-family:var(--font-heading)]"
            >
              dnwayne97@gmail.com ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="max-w-6xl mx-auto mt-20 mb-8 px-6 py-8 border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[10px] font-bold [font-family:var(--font-heading)] select-none">AFB</span>
            <span className="text-zinc-500 text-sm [font-family:var(--font-heading)]">AIFromBrazil</span>
          </div>

          <nav aria-label="Social links" className="flex items-center gap-5 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-300 transition-colors duration-200">Twitter / X</a>
            <a href="#" className="hover:text-zinc-300 transition-colors duration-200">LinkedIn</a>
            <a href="#" className="hover:text-zinc-300 transition-colors duration-200">GitHub</a>
          </nav>

          <nav aria-label="Legal links" className="flex items-center gap-4 text-xs text-zinc-600">
            <Link to="/impressum" className="hover:text-zinc-300 transition-colors duration-200">{t.footer.impressum}</Link>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <Link to="/datenschutz" className="hover:text-zinc-300 transition-colors duration-200">{t.footer.datenschutz}</Link>
          </nav>

          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.footer.available}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
