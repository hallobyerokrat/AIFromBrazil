import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4 border-b border-zinc-800/60 bg-[#09090B]/90 backdrop-blur-xl">
        <Link
          to="/"
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-200 text-sm [font-family:var(--font-heading)]"
        >
          <span aria-hidden="true">←</span>
          BuiltByNikolay
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Blog</p>
        <h1 className="text-4xl font-bold text-white mb-4 [font-family:var(--font-heading)]">KI & Digitalisierung für Kleinunternehmer</h1>
        <p className="text-zinc-400 text-base mb-14">Praxiswissen zu WhatsApp-Bots, Websites und Automatisierungen — aus der Praxis, nicht aus dem Lehrbuch.</p>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block bg-[#18181B] border border-zinc-800 hover:border-zinc-600 rounded-2xl p-6 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-zinc-500">{post.date}</span>
                <span className="text-zinc-700">·</span>
                <span className="text-xs text-zinc-500">{post.readTime} Lesezeit</span>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2 [font-family:var(--font-heading)] group-hover:text-[#60A5FA] transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{post.description}</p>
              <div className="mt-4 text-xs text-[#3B82F6] [font-family:var(--font-heading)]">
                Artikel lesen →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <Link to="/" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-200">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
