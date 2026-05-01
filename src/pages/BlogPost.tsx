import { Link, useParams, Navigate } from 'react-router-dom'
import { blogPosts, type ContentBlock } from '../data/blogPosts'

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <div key={i} className="flex items-center gap-3 mt-12 mb-5">
          <span className="w-1 h-5 rounded-full bg-[#3B82F6] shrink-0" />
          <h2 className="text-lg font-bold text-white [font-family:var(--font-heading)]">
            {block.text}
          </h2>
        </div>
      )
    case 'h3':
      return (
        <h3 key={i} className="text-sm font-semibold text-[#60A5FA] uppercase tracking-widest mt-7 mb-2 [font-family:var(--font-heading)]">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p key={i} className="text-zinc-300 text-base leading-[1.85] mb-5">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={i} className="my-5 border border-zinc-800 rounded-xl overflow-hidden">
          {block.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 px-5 py-3 border-b border-zinc-800/60 last:border-0 text-zinc-300 text-sm">
              <span className="text-[#3B82F6] shrink-0 mt-0.5">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div key={i} className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[#1E3A5F]/30 border border-[#3B82F6]/25 rounded-2xl" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8]" />
          <div className="relative px-7 py-6">
            <p className="text-zinc-200 text-base leading-relaxed mb-5">{block.text}</p>
            <a
              href="mailto:dnwayne97@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] px-5 py-2.5 rounded-xl transition-colors duration-200 [font-family:var(--font-heading)]"
            >
              Jetzt melden →
            </a>
          </div>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4 border-b border-zinc-800/60 bg-[#09090B]/90 backdrop-blur-xl">
        <Link
          to="/blog"
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-200 text-sm [font-family:var(--font-heading)]"
        >
          <span aria-hidden="true">←</span>
          Blog
        </Link>
      </div>

      <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs text-[#3B82F6] font-semibold uppercase tracking-widest [font-family:var(--font-heading)]">Artikel</span>
          <span className="text-zinc-700">·</span>
          <span className="text-xs text-zinc-500">{post.date}</span>
          <span className="text-zinc-700">·</span>
          <span className="text-xs text-zinc-500">{post.readTime} Lesezeit</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6 leading-tight [font-family:var(--font-heading)]">
          {post.title}
        </h1>

        {/* Description with left accent */}
        <div className="flex gap-4 mb-10 pb-10 border-b border-zinc-800/50">
          <div className="w-0.5 shrink-0 rounded-full bg-zinc-700 self-stretch" />
          <p className="text-zinc-400 text-base leading-relaxed italic">{post.description}</p>
        </div>

        {/* Content */}
        <div>
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex gap-6">
          <Link to="/blog" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-200">
            ← Alle Artikel
          </Link>
          <Link to="/" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-200">
            Zur Startseite
          </Link>
        </div>
      </article>
    </div>
  )
}
