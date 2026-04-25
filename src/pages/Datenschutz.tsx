import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

export default function Datenschutz() {
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
          {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>
        <p className="text-zinc-500 text-sm mb-12">
          {lang === 'de'
            ? 'Zuletzt aktualisiert: April 2026'
            : 'Last updated: April 2026'}
        </p>

        {lang === 'de' ? (
          <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der DSGVO:<br /><br />
                Daniel Nikolay<br />
                Wilhelm-Leuschner-Straße 14<br />
                64589 Stockstadt am Rhein<br />
                E-Mail: <a href="mailto:dnwayne97@gmail.com" className="text-white hover:text-[#60A5FA] transition-colors">dnwayne97@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">2. Hosting</h2>
              <p className="text-zinc-400">
                Diese Website wird bei <strong className="text-zinc-200">Vercel Inc.</strong> (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Beim Aufruf dieser Website werden von Vercel automatisch Server-Logfiles erfasst (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Datum/Uhrzeit). Diese Daten werden von Vercel gemäß deren <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#60A5FA] transition-colors underline underline-offset-2">Datenschutzrichtlinie</a> verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website).
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">3. Kontaktaufnahme per E-Mail</h2>
              <p className="text-zinc-400">
                Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben (E-Mail-Adresse, Name, Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">4. Cookies & Tracking</h2>
              <p className="text-zinc-400">
                Diese Website verwendet keine Cookies zu Tracking- oder Werbezwecken. Es werden keine Analyse-Tools (z. B. Google Analytics) eingesetzt. Es findet keine Weitergabe von Daten an Dritte für Werbezwecke statt.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">5. Ihre Rechte</h2>
              <p className="text-zinc-400">
                Sie haben gemäß DSGVO folgende Rechte:<br /><br />
                – <strong className="text-zinc-200">Auskunft</strong> (Art. 15 DSGVO): Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten.<br />
                – <strong className="text-zinc-200">Berichtigung</strong> (Art. 16 DSGVO): Recht auf Korrektur unrichtiger Daten.<br />
                – <strong className="text-zinc-200">Löschung</strong> (Art. 17 DSGVO): Recht auf Löschung Ihrer Daten.<br />
                – <strong className="text-zinc-200">Einschränkung</strong> (Art. 18 DSGVO): Recht auf Einschränkung der Verarbeitung.<br />
                – <strong className="text-zinc-200">Datenübertragbarkeit</strong> (Art. 20 DSGVO).<br />
                – <strong className="text-zinc-200">Widerspruch</strong> (Art. 21 DSGVO).<br /><br />
                Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:dnwayne97@gmail.com" className="text-white hover:text-[#60A5FA] transition-colors">dnwayne97@gmail.com</a><br /><br />
                Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">6. Externe Links</h2>
              <p className="text-zinc-400">
                Diese Website enthält Links zu externen Websites. Für den Inhalt dieser externen Seiten sind deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">1. Controller</h2>
              <p>
                Data controller within the meaning of the GDPR:<br /><br />
                Daniel Nikolay<br />
                Wilhelm-Leuschner-Straße 14<br />
                64589 Stockstadt am Rhein<br />
                Email: <a href="mailto:dnwayne97@gmail.com" className="text-white hover:text-[#60A5FA] transition-colors">dnwayne97@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">2. Hosting</h2>
              <p className="text-zinc-400">
                This website is hosted by <strong className="text-zinc-200">Vercel Inc.</strong> (340 Pine Street, Suite 701, San Francisco, CA 94104, USA). When you visit this website, Vercel automatically collects server log files (IP address, browser type, operating system, referrer URL, date/time). This data is processed by Vercel in accordance with their <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#60A5FA] transition-colors underline underline-offset-2">privacy policy</a>. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in operating the website).
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">3. Contact via Email</h2>
              <p className="text-zinc-400">
                If you contact me by email, your information (email address, name, message content) will be stored for the purpose of processing your inquiry. I will not share this data without your consent. The legal basis is Art. 6(1)(f) GDPR. Data will be deleted once your inquiry has been fully processed.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">4. Cookies & Tracking</h2>
              <p className="text-zinc-400">
                This website does not use cookies for tracking or advertising purposes. No analytics tools (e.g. Google Analytics) are used. No data is shared with third parties for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">5. Your Rights</h2>
              <p className="text-zinc-400">
                Under the GDPR, you have the following rights:<br /><br />
                – <strong className="text-zinc-200">Access</strong> (Art. 15 GDPR): Right to information about your stored personal data.<br />
                – <strong className="text-zinc-200">Rectification</strong> (Art. 16 GDPR): Right to correction of inaccurate data.<br />
                – <strong className="text-zinc-200">Erasure</strong> (Art. 17 GDPR): Right to deletion of your data.<br />
                – <strong className="text-zinc-200">Restriction</strong> (Art. 18 GDPR): Right to restriction of processing.<br />
                – <strong className="text-zinc-200">Data portability</strong> (Art. 20 GDPR).<br />
                – <strong className="text-zinc-200">Objection</strong> (Art. 21 GDPR).<br /><br />
                To exercise your rights, contact: <a href="mailto:dnwayne97@gmail.com" className="text-white hover:text-[#60A5FA] transition-colors">dnwayne97@gmail.com</a><br /><br />
                You also have the right to lodge a complaint with a data protection supervisory authority.
              </p>
            </section>

            <section>
              <h2 className="text-xs text-[#3B82F6] uppercase tracking-[0.25em] mb-3 [font-family:var(--font-heading)]">6. External Links</h2>
              <p className="text-zinc-400">
                This website contains links to external websites. The operators of those sites are responsible for their content. No legal violations were apparent at the time of linking.
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
