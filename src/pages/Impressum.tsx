import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

export default function Impressum() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-zinc-800/60 bg-[#09090B]/90 backdrop-blur-xl">
        <Link
          to="/"
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
        >
          <span aria-hidden="true">←</span>
          <span className="[font-family:var(--font-heading)]">AIFromBrazil</span>
        </Link>

        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setLang('de')}
            className={`text-[11px] font-semibold px-2 py-1 rounded-full transition-colors duration-200 [font-family:var(--font-heading)] ${
              lang === 'de' ? 'text-white bg-zinc-700' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            DE
          </button>
          <span className="text-zinc-700 text-xs">|</span>
          <button
            onClick={() => setLang('en')}
            className={`text-[11px] font-semibold px-2 py-1 rounded-full transition-colors duration-200 [font-family:var(--font-heading)] ${
              lang === 'en' ? 'text-white bg-zinc-700' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-3xl font-bold text-white mb-2 [font-family:var(--font-heading)]">
          {lang === 'de' ? 'Impressum' : 'Legal Notice'}
        </h1>
        <p className="text-zinc-500 text-sm mb-12">
          {lang === 'de'
            ? 'Angaben gemäß § 5 TMG'
            : 'Information according to § 5 TMG (German Telemedia Act)'}
        </p>

        {lang === 'de' ? (
          <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Anbieter</h2>
              <p>
                [DEIN VOLLSTÄNDIGER NAME]<br />
                [STRAßE UND HAUSNUMMER]<br />
                [PLZ ORT]<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:dnwayne97@gmail.com" className="text-white hover:text-[#60A5FA] transition-colors">dnwayne97@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Verantwortlich für den Inhalt</h2>
              <p>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                [DEIN VOLLSTÄNDIGER NAME]<br />
                [ADRESSE WIE OBEN]
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Haftungsausschluss</h2>
              <p className="text-zinc-400">
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Urheberrecht</h2>
              <p className="text-zinc-400">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Service Provider</h2>
              <p>
                [YOUR FULL NAME]<br />
                [STREET AND NUMBER]<br />
                [POSTAL CODE CITY]<br />
                Germany
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Contact</h2>
              <p>
                Email: <a href="mailto:dnwayne97@gmail.com" className="text-white hover:text-[#60A5FA] transition-colors">dnwayne97@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Responsible for Content</h2>
              <p>
                Responsible for content according to § 55 para. 2 RStV:<br />
                [YOUR FULL NAME]<br />
                [ADDRESS AS ABOVE]
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Disclaimer</h2>
              <p className="text-zinc-400">
                The contents of this website have been created with the greatest possible care. However, no guarantee can be given for the correctness, completeness and topicality of the contents. As a service provider, I am responsible for my own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">Copyright</h2>
              <p className="text-zinc-400">
                The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
              </p>
            </section>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <Link to="/" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors duration-200">
            ← {lang === 'de' ? 'Zurück zur Startseite' : 'Back to home'}
          </Link>
        </div>
      </div>
    </div>
  )
}
