import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
const fadeIn  = { initial: { opacity: 0 },        whileInView: { opacity: 1 },        viewport: { once: true } }
const EASE = [0.25, 0.1, 0.25, 1] as const

const SERVICES = [
  {
    name: 'KI-Tool-Entwicklung',
    desc: 'Maßgeschneiderte KI-Tools für deinen spezifischen Workflow',
  },
  {
    name: 'Website & Landing Page',
    desc: 'Von der einfachen Präsenz bis zur Full-Stack Web-App',
  },
  {
    name: 'WhatsApp-Bot & KI-Sekretärin',
    desc: 'Automatische Terminbuchung und Kundenkommunikation 24/7',
  },
  {
    name: 'Autonome KI-Agenten',
    desc: 'Agenten die Leads, E-Mails und Aufgaben selbstständig übernehmen',
  },
  {
    name: 'Automatisierungssysteme',
    desc: 'End-to-End Workflows mit n8n und Make',
  },
  {
    name: 'Lead-Qualifizierung & E-Mail-Automation',
    desc: 'Automatisierte Systeme zur Nachverfolgung von Interessenten',
  },
  {
    name: 'KI-Videoproduktion',
    desc: 'KI-gestützte Video-Inhalte mit HyperFrames',
  },
  {
    name: 'Werbekampagnen-Audit',
    desc: 'Analyse und Optimierung von Google, Meta & TikTok Kampagnen mit Claude Ads — 250+ automatische Checks',
  },
]

const TOOLS = [
  {
    name: 'HyperFrames',
    author: 'HeyGen',
    desc: 'Video-Rendering-Framework — HTML zu MP4, agent-nativ',
    href: 'https://github.com/heygen-com/hyperframes',
  },
  {
    name: 'Claude Ads',
    author: 'AgriciDaniel',
    desc: 'Werbekampagnen-Audit Skill für Claude Code — 250+ Checks',
    href: 'https://github.com/AgriciDaniel/claude-ads',
  },
  {
    name: 'Fincept Terminal',
    author: 'Fincept Corporation',
    desc: 'Open-Source Bloomberg-Alternative für Finanzanalyse',
    href: 'https://github.com/Fincept-Corporation/FinceptTerminal',
  },
]

export default function Katalog() {
  return (
    <div className="relative text-white min-h-screen overflow-x-hidden bg-[#09090B]">
      {/* Gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none fixed top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#2563EB] opacity-[0.05] blur-[140px] -z-10" />
      <div aria-hidden="true" className="pointer-events-none fixed bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#1D4ED8] opacity-[0.04] blur-[120px] -z-10" />

      {/* ── NAV ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <nav
          aria-label="Navigation"
          className="pointer-events-auto inline-flex items-center gap-1 rounded-full border px-2 py-2 bg-[#18181B]/80 backdrop-blur-xl border-zinc-800 shadow-xl shadow-black/40"
        >
          <Link
            to="/"
            aria-label="BuiltByNikolay — zurück zur Startseite"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2563EB] text-white text-[10px] font-bold tracking-wide [font-family:var(--font-heading)] hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            BBN
          </Link>

          <div aria-hidden="true" className="w-px h-5 bg-zinc-800 mx-1 hidden sm:block" />

          {([
            { label: 'Startseite', href: '/'          },
            { label: 'Projekte',   href: '/#work'     },
            { label: 'Leistungen', href: '/#services' },
            { label: 'Katalog',    href: '/katalog'   },
            { label: 'Kontakt',    href: '/#contact'  },
          ] as const).map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 ${
                href === '/katalog'
                  ? 'text-white bg-zinc-800/80'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {label}
            </Link>
          ))}

          <div aria-hidden="true" className="w-px h-5 bg-zinc-800 mx-1 hidden sm:block" />

          <a
            href="https://wa.me/5521999791569"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 [font-family:var(--font-heading)]"
          >
            Hallo sagen ↗
          </a>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-20 text-center">
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]"
        >
          Vollständiges Angebot
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.06] mb-6 text-white [font-family:var(--font-heading)]"
        >
          Alles was ich bauen kann
        </motion.h1>
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed"
        >
          Vollständiger Überblick über Tools, Leistungen und Technologien — für Kunden die genau wissen was sie brauchen.
        </motion.p>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-6xl mx-auto mb-32 px-6">
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]"
        >
          Leistungen
        </motion.p>
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-10 text-white [font-family:var(--font-heading)]"
        >
          Was ich anbiete
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="group bg-[#18181B] border border-zinc-800 hover:border-zinc-700 rounded-3xl p-7 flex flex-col gap-2 transition-colors duration-300 relative overflow-hidden"
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/[0.015] to-transparent transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-semibold text-white [font-family:var(--font-heading)] leading-snug">{service.name}</p>
                <span aria-hidden="true" className="text-zinc-700 group-hover:text-[#3B82F6] transition-colors duration-200 shrink-0 mt-0.5">→</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="max-w-6xl mx-auto mb-32 px-6">
        <div className="mb-10">
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.5 }}
            className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]"
          >
            Mein erweiterter Tech-Stack
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white [font-family:var(--font-heading)]"
          >
            Tools die ich einsetze
          </motion.h2>
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-lg leading-relaxed max-w-xl"
          >
            Open-Source Tools und Frameworks die ich für Kundenprojekte einsetze
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TOOLS.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className="group relative bg-[#18181B] border border-zinc-800 hover:border-[#2563EB]/40 rounded-3xl p-7 flex flex-col gap-4 transition-colors duration-300 overflow-hidden cursor-pointer"
              style={{ background: 'linear-gradient(140deg,#18181B 0%,#1c1c23 100%)' }}
            >
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(400px circle at 50% 0%,rgba(37,99,235,0.06),transparent 60%)' }} />

              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-base font-bold text-white [font-family:var(--font-heading)] leading-snug group-hover:text-[#60A5FA] transition-colors duration-200">{tool.name}</p>
                  <p className="text-[11px] text-zinc-600 mt-0.5">{tool.author}</p>
                </div>
                <span className="shrink-0 text-[10px] font-semibold text-[#3B82F6] bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full px-2.5 py-1 [font-family:var(--font-heading)] whitespace-nowrap">
                  Open Source
                </span>
              </div>

              <p className="text-sm text-zinc-500 leading-relaxed flex-1">{tool.desc}</p>

              <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 group-hover:text-[#60A5FA] transition-colors duration-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub →
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative rounded-3xl overflow-hidden text-center"
          style={{ background: 'linear-gradient(140deg,#18181B 0%,#1c1c23 100%)', border: '1px solid rgba(37,99,235,0.2)' }}
        >
          <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
          <div className="px-10 py-16">
            <p className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">Nächster Schritt</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-5 text-white [font-family:var(--font-heading)]">
              Etwas Bestimmtes im Kopf?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-sm mx-auto">
              Sag mir was du brauchst — ich antworte innerhalb von 24 Stunden.
            </p>
            <a
              href="https://wa.me/5521999791569"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-colors duration-200 [font-family:var(--font-heading)]"
            >
              Projekt besprechen ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="max-w-6xl mx-auto mb-8 px-6 py-8 border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Link to="/" className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
            <span aria-hidden="true" className="w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[10px] font-bold [font-family:var(--font-heading)] select-none">BBN</span>
            <span className="text-sm [font-family:var(--font-heading)]">BuiltByNikolay</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verfügbar für Projekte</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
