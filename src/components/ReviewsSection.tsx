import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase, type Review } from '../lib/supabase'
import { useLanguage } from '../LanguageContext'

const EASE = [0.25, 0.1, 0.25, 1] as const
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
const fadeIn  = { initial: { opacity: 0 },        whileInView: { opacity: 1 },        viewport: { once: true } }

function Stars({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hovered, setHovered] = useState(0)
  const interactive = !!onChange
  return (
    <div className="flex gap-1" role={interactive ? 'radiogroup' : undefined}>
      {[1, 2, 3, 4, 5].map(star => {
        const filled = star <= (hovered || value)
        return (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            disabled={!interactive}
            onClick={() => onChange?.(star)}
            onMouseEnter={() => interactive && setHovered(star)}
            onMouseLeave={() => interactive && setHovered(0)}
            className={[
              'text-xl leading-none transition-colors duration-100',
              interactive ? 'cursor-pointer' : 'cursor-default pointer-events-none',
              filled ? 'text-amber-400' : 'text-zinc-700',
            ].join(' ')}
            aria-label={interactive ? `${star} Sterne` : undefined}
          >
            ★
          </button>
        )
      })}
    </div>
  )
}

function ReviewCard({ review, delay }: { review: Review; delay: number }) {
  return (
    <motion.figure
      {...fadeUp}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="bg-[#18181B] border border-zinc-800 rounded-3xl p-6 flex flex-col gap-4"
    >
      <Stars value={review.rating} />
      <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1">
        „{review.quote}"
      </blockquote>
      <figcaption className="flex flex-col gap-0.5">
        <span className="text-white text-sm font-semibold [font-family:var(--font-heading)]">{review.name}</span>
        {review.role && (
          <span className="text-zinc-600 text-xs">{review.role}</span>
        )}
      </figcaption>
    </motion.figure>
  )
}

function ReviewModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage()
  const tr = t.reviews.modal
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [quote, setQuote] = useState('')
  const [rating, setRating] = useState(5)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !quote.trim()) return
    setStatus('submitting')
    const { error } = await supabase
      .from('reviews')
      .insert({ name: name.trim(), role: role.trim() || null, quote: quote.trim(), rating })
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={e => e.target === overlayRef.current && onClose()}
        className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="relative w-full max-w-md bg-[#18181B] border border-zinc-800 rounded-3xl p-8"
        >
          <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent rounded-t-3xl" />

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white [font-family:var(--font-heading)]">{tr.title}</h2>
            <button
              onClick={onClose}
              aria-label={tr.close}
              className="text-zinc-500 hover:text-white transition-colors duration-200 text-xl leading-none"
            >
              ×
            </button>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-6"
            >
              <div className="text-3xl mb-4">✅</div>
              <p className="text-zinc-300 text-sm leading-relaxed">{tr.success}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <p className="text-[11px] text-zinc-600 uppercase tracking-[0.2em] mb-2 [font-family:var(--font-heading)]">{tr.ratingLabel}</p>
                <Stars value={rating} onChange={setRating} />
              </div>

              <input
                type="text"
                required
                placeholder={tr.namePlaceholder}
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563EB]/60 transition-colors duration-200"
              />

              <input
                type="text"
                placeholder={tr.rolePlaceholder}
                value={role}
                onChange={e => setRole(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563EB]/60 transition-colors duration-200"
              />

              <textarea
                required
                rows={4}
                placeholder={tr.quotePlaceholder}
                value={quote}
                onChange={e => setQuote(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563EB]/60 transition-colors duration-200 resize-none"
              />

              {status === 'error' && (
                <p className="text-red-400 text-xs">{tr.error}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-xl px-6 py-3 bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] active:bg-[#1E40AF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 [font-family:var(--font-heading)]"
              >
                {status === 'submitting' ? tr.submitting : tr.submit}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function ReviewsSection() {
  const { t } = useLanguage()
  const tr = t.reviews
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    supabase
      .from('reviews')
      .select('id, name, role, quote, rating, created_at')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setReviews(data ?? [])
        setLoading(false)
      })
  }, [])

  return (
    <>
      <section id="reviews" className="max-w-6xl mx-auto mb-40 px-6 scroll-mt-28">
        <motion.p {...fadeIn} transition={{ duration: 0.5 }} className="text-xs text-[#3B82F6] uppercase tracking-[0.3em] mb-4 [font-family:var(--font-heading)]">
          {tr.eyebrow}
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <motion.h2 {...fadeUp} transition={{ duration: 0.6, ease: EASE }} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white [font-family:var(--font-heading)]">
            {tr.h2}
          </motion.h2>
          <motion.button
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setShowModal(true)}
            className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 rounded-full px-6 py-3 border border-zinc-700 text-sm text-zinc-300 hover:border-[#2563EB]/60 hover:text-white transition-colors duration-200 [font-family:var(--font-heading)]"
          >
            {tr.cta} ↗
          </motion.button>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#18181B] border border-zinc-800/50 rounded-3xl p-6 h-44 animate-pulse" />
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-800 rounded-3xl text-zinc-600"
          >
            <p className="text-sm mb-4">{tr.empty}</p>
            <button
              onClick={() => setShowModal(true)}
              className="text-xs text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200 underline underline-offset-2"
            >
              {tr.cta}
            </button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} delay={i * 0.08} />
            ))}
          </div>
        )}

        <motion.p
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-[11px] text-zinc-700 text-center"
        >
          {tr.pendingNote}
        </motion.p>
      </section>

      {showModal && <ReviewModal onClose={() => setShowModal(false)} />}
    </>
  )
}
