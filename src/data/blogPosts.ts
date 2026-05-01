export interface ContentBlock {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'callout'
  text?: string
  items?: string[]
}

export interface BlogPostData {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  content: ContentBlock[]
}

export const blogPosts: BlogPostData[] = [
  {
    slug: 'whatsapp-bot-friseure',
    title: 'WhatsApp Bot für Friseure: Nie wieder verpasste Buchungen',
    description: 'Wie ein automatischer WhatsApp-Bot Friseuren hilft, täglich mehr Kunden zu gewinnen — und keine einzige Buchungsanfrage mehr zu verpassen.',
    date: '1. Mai 2026',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Du sitzt gerade beim Schneiden, beide Hände beschäftigt, Schere in der einen, Kamm in der anderen. Dein Handy vibriert. Wieder eine WhatsApp-Anfrage. Wieder kannst du nicht antworten. Wenn du zwei Stunden später nachschaust, hat der Kunde längst woanders gebucht.' },
      { type: 'p', text: 'Das ist der Alltag der meisten Friseure in Deutschland — und es kostet sie täglich Umsatz, ohne dass sie es überhaupt merken.' },

      { type: 'h2', text: 'Das Problem: Kunden warten nicht' },
      { type: 'p', text: 'Wer heute einen Friseur sucht, schreibt auf WhatsApp. Nicht weil er anrufen will, sondern weil es schneller geht — oder so denkt er. Wenn du in den ersten 10–15 Minuten nicht antwortest, ist die Wahrscheinlichkeit hoch, dass er beim nächsten Salon nachfragt. Nicht weil er ungeduldig ist, sondern weil er einfach weitergescrollt hat.' },
      { type: 'p', text: 'Das Tückische: Du weißt gar nicht, wie viele Kunden du so verlierst. Sie melden sich einfach nicht mehr. Du siehst nur einen leeren Kalender — aber nicht den Grund.' },

      { type: 'h2', text: 'Die Lösung: Ein WhatsApp Bot der für dich antwortet' },
      { type: 'p', text: 'Ein WhatsApp Bot ist kein Roboter, der deine Kunden mit unpersönlichen Nachrichten abspeist. Richtig eingerichtet verhält er sich wie ein höflicher Mitarbeiter am Empfang: Er begrüßt den Kunden sofort, beantwortet die häufigsten Fragen und sorgt dafür, dass die Anfrage nicht verloren geht.' },
      { type: 'p', text: 'Was ein gut eingerichteter Bot für deinen Friseursalon tun kann:' },
      { type: 'ul', items: [
        'Sofortige Antwort auf Buchungsanfragen — auch um 22 Uhr',
        'Automatisch Preisliste oder Leistungsübersicht senden',
        'Öffnungszeiten und Adresse auf Anfrage mitteilen',
        'Kunden an bevorstehende Termine erinnern',
        'Nachrichten außerhalb der Öffnungszeiten professionell beantworten',
        'Dich benachrichtigen, wenn ein Kunde eine konkrete Terminanfrage stellt',
      ]},

      { type: 'h2', text: 'Was das in der Praxis bedeutet' },
      { type: 'p', text: 'Stell dir vor: Ein Kunde schreibt dich um 20:30 Uhr an. "Habt ihr morgen früh noch was frei?" Ohne Bot: Keine Antwort bis morgen früh. Mit etwas Pech hat er dann schon woanders gebucht. Mit Bot: Er bekommt sofort eine Antwort, dass du morgen ab 9 Uhr verfügbar bist und er direkt einen Termin anfragen kann. Der Umsatz bleibt bei dir.' },
      { type: 'p', text: 'Das Besondere: Der Bot muss nicht jeden Schritt alleine machen. Er fängt die Anfrage auf, qualifiziert sie, und übergibt sie dir wenn es konkret wird. Du musst nicht mehr stundenlang auf dein Handy starren — aber du verpasst auch nichts mehr.' },

      { type: 'h2', text: 'Was ein WhatsApp Bot kostet — und was er bringt' },
      { type: 'p', text: 'Ein Mitarbeiter am Empfang kostet 1.500–2.000€ im Monat. Ein WhatsApp Bot kostet einen Bruchteil davon — und arbeitet rund um die Uhr, macht keine Fehler und braucht keinen Urlaub.' },
      { type: 'p', text: 'Wenn du durch schnellere Antworten auch nur zwei zusätzliche Kunden pro Woche gewinnst, hat sich der Bot bereits in der ersten Woche amortisiert. Bei einem durchschnittlichen Umsatz von 40–60€ pro Termin macht das 320–480€ extra im Monat.' },

      { type: 'h2', text: 'Wie der Einstieg aussieht' },
      { type: 'p', text: 'Du brauchst kein technisches Wissen. Du brauchst nur eine WhatsApp Business Nummer — die hast du wahrscheinlich schon. Ich richte alles ein, teste es mit dir, und du kannst in wenigen Tagen loslegen.' },
      { type: 'callout', text: 'Du willst das für deinen Salon testen? Schreib mir einfach — ich zeige dir in einem kurzen Gespräch was möglich ist und was es kostet. Kein Agentur-Overhead, kein langer Vertrag.' },
    ],
  },

  {
    slug: 'unternehmen-ohne-website',
    title: 'Warum kleine Unternehmen ohne Website täglich Kunden verlieren',
    description: 'Über 60% der Deutschen suchen Dienstleistungen zuerst online. Wer keine Website hat, existiert für diese Kunden schlicht nicht — und verliert täglich Aufträge.',
    date: '1. Mai 2026',
    readTime: '6 min',
    content: [
      { type: 'p', text: 'Jemand in deiner Stadt sucht heute nach einem Klempner. Er tippt in Google: "Klempner Notdienst [Stadtname]". Die ersten drei Ergebnisse bekommt er mit einem Klick. Du bist nicht dabei — weil du keine Website hast. Er ruft jemand anderen an.' },
      { type: 'p', text: 'Das passiert gerade, während du das hier liest. Nicht einmal, nicht zweimal — jeden Tag.' },

      { type: 'h2', text: 'Wie Kunden heute nach Dienstleistern suchen' },
      { type: 'p', text: 'Das Verhalten hat sich verändert. Früher hat man im Telefonbuch gesucht oder Freunde gefragt. Heute geht alles über das Smartphone. Eine kurze Google-Suche, ein paar Sekunden die Ergebnisse überfliegen, und dann wird entschieden.' },
      { type: 'p', text: 'Laut Studien recherchieren über 80% der Verbraucher vor einem lokalen Kauf oder einer Buchung online. Wer in diesem Moment nicht sichtbar ist, hat keine Chance — egal wie gut seine Arbeit ist.' },
      { type: 'ul', items: [
        'Google-Suche nach lokalem Dienstleister',
        'Google Maps — Bewertungen und Öffnungszeiten',
        'Website — Leistungen, Preise, Kontakt',
        'Entscheidung: anrufen oder weiterschauen',
      ]},
      { type: 'p', text: 'Ohne Website fällst du nach Schritt zwei raus. Dein Google Maps Eintrag kann helfen, aber ohne eine verlinkte Website wirkt er unvollständig. Und unvollständig bedeutet im Kopf des Kunden: nicht professionell.' },

      { type: 'h2', text: 'Das Argument "Ich hab genug Kunden durch Empfehlungen"' },
      { type: 'p', text: 'Das stimmt vielleicht gerade noch. Aber Empfehlungen sind nicht planbar. Sie können ausbleiben. Sie skalieren nicht. Und wenn ein Stammkunde weg zieht, musst du von vorne anfangen.' },
      { type: 'p', text: 'Eine Website arbeitet 24 Stunden am Tag, 365 Tage im Jahr für dich. Sie schläft nicht, macht keinen Urlaub und erklärt dein Angebot genauso überzeugend wie du es persönlich würdest — nur automatisch, an alle gleichzeitig.' },

      { type: 'h2', text: 'Was eine Website für Kleinunternehmer konkret bringt' },
      { type: 'ul', items: [
        'Neue Kunden finden dich über Google — ohne dass du aktiv etwas tun musst',
        'Du wirkst sofort professioneller als Mitbewerber ohne Web-Präsenz',
        'Kunden können dich außerhalb der Öffnungszeiten kontaktieren',
        'Du kannst Bewertungen und Referenzen zeigen',
        'Du bist unabhängig von Instagram-Algorithmen und Empfehlungsnetzwerken',
      ]},

      { type: 'h2', text: 'Was eine gute Website nicht braucht' },
      { type: 'p', text: 'Viele Kleinunternehmer denken, eine Website muss teuer, aufwändig und kompliziert sein. Das stimmt nicht. Du brauchst keine 20 Unterseiten, keinen Online-Shop und kein aufwändiges CMS das du jeden Tag pflegen musst.' },
      { type: 'p', text: 'Was du brauchst: Eine Seite die in drei Sekunden lädt, auf dem Handy gut aussieht, klar zeigt was du anbietest — und einen Kontakt-Button der tatsächlich funktioniert. Das reicht.' },

      { type: 'h2', text: 'Was eine Website kostet — und was sie kostet wenn du keine hast' },
      { type: 'p', text: 'Eine Agentur nimmt für eine einfache Unternehmenswebsite 2.000–8.000€. Das ist für viele Kleinunternehmer unrealistisch.' },
      { type: 'p', text: 'Mit modernen KI-Tools und effizienter Entwicklung lässt sich das erheblich günstiger umsetzen — ohne dass Qualität oder Design leiden. Ich baue Websites für Kleinunternehmer, die in wenigen Tagen fertig sind und tatsächlich Kunden bringen.' },

      { type: 'callout', text: 'Kein Online-Auftritt oder eine veraltete Seite? Schreib mir kurz — ich schaue mir an was du brauchst und was realistisch ist. Kein Verkaufsgespräch, einfach ein ehrlicher Blick.' },
    ],
  },

  {
    slug: 'ki-sekretaerin-handwerker',
    title: 'KI-Sekretärin für Handwerker: Anrufe und Nachrichten automatisch beantworten',
    description: 'Handwerker können nicht gleichzeitig auf dem Dach stehen und ans Handy gehen. Eine KI-Sekretärin beantwortet Anfragen automatisch — und du verpasst keinen Auftrag mehr.',
    date: '1. Mai 2026',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Du bist oben auf dem Dach, ein Kunde ruft an. Geht nicht dran. Er schreibt auf WhatsApp. Keine Antwort. Er versucht es noch einmal am Nachmittag — du bist noch auf der Baustelle. Abends rufst du zurück. Zu spät. Er hat schon jemand anderen beauftragt.' },
      { type: 'p', text: 'Dieses Szenario kostet Handwerker in Deutschland täglich Aufträge. Nicht weil sie schlechte Arbeit leisten — sondern weil sie keine Zeit haben, permanent erreichbar zu sein.' },

      { type: 'h2', text: 'Das Kernproblem: Handwerker können nicht multitasken' },
      { type: 'p', text: 'Ein Bürojob lässt sich unterbrechen. Handwerk nicht. Wer gerade fliesen, schweißt, verdrahtet oder auf einem Gerüst steht, kann nicht nebenbei telefonieren. Und wer sich einen Mitarbeiter nur für den Empfang leisten könnte, würde ihn schon längst haben.' },
      { type: 'p', text: 'Das Ergebnis: Anfragen werden stundenlang nicht beantwortet. Kunden sind ungeduldig. Aufträge gehen verloren. Und am Ende des Tages gibt es noch einen Berg nicht beantworteter Nachrichten.' },

      { type: 'h2', text: 'Was eine KI-Sekretärin macht' },
      { type: 'p', text: 'Eine KI-Sekretärin ist kein simpler Autoresponder mit dem Text "Ich melde mich später". Sie ist ein intelligentes System das Anfragen versteht, sinnvoll antwortet und dir nur das Wichtige weiterleitet.' },
      { type: 'ul', items: [
        'Sofortige Antwort auf WhatsApp-Nachrichten — rund um die Uhr',
        'Versteht die Anfrage und antwortet passend (Termin, Kosten, Notfall)',
        'Unterscheidet zwischen dringlich und nicht-dringlich',
        'Leitet echte Notfälle sofort an dich weiter',
        'Sammelt alle nötigen Infos (Adresse, Problem, Wunschtermin)',
        'Schreibt professionell — auf Deutsch, ohne Rechtschreibfehler',
      ]},

      { type: 'h2', text: 'Konkrete Anwendungsfälle im Handwerk' },
      { type: 'h3', text: 'Terminanfragen' },
      { type: 'p', text: 'Kunde: "Wann könntet ihr bei uns vorbeischauen? Wir haben ein Problem mit der Heizung." Bot: Fragt nach Adresse, Art des Problems und verfügbaren Terminen — du bekommst alle Infos gesammelt, kannst direkt bestätigen.' },
      { type: 'h3', text: 'Kostenvoranschläge' },
      { type: 'p', text: 'Kunde fragt nach ungefähren Kosten. Bot gibt realistische Einschätzung auf Basis deiner Standard-Preise und weist darauf hin, dass ein genaues Angebot eine Besichtigung erfordert. Kein Auftrag geht verloren, kein falsches Versprechen.' },
      { type: 'h3', text: 'Notfälle' },
      { type: 'p', text: 'Wenn jemand schreibt "Rohrbruch" oder "kein Strom im ganzen Haus" — das erkennt die KI als dringend und benachrichtigt dich sofort, egal was du gerade machst.' },

      { type: 'h2', text: 'Was das in Zahlen bedeutet' },
      { type: 'p', text: 'Ein verpasster Auftrag im Handwerk kostet je nach Gewerk 150–800€ oder mehr. Wenn du durch eine KI-Sekretärin auch nur zwei Aufträge pro Monat rettest, die du sonst verloren hättest, hat sich das System mehr als bezahlt gemacht.' },
      { type: 'p', text: 'Dazu kommt: Weniger Stress. Kein schlechtes Gewissen wegen unbeantworteter Nachrichten. Und ein professionellerer Eindruck bei Neukunden.' },

      { type: 'h2', text: 'Einrichtung ohne technisches Wissen' },
      { type: 'p', text: 'Du musst nichts installieren, nichts programmieren, nichts konfigurieren. Du brauchst nur deine WhatsApp Business Nummer. Ich richte alles ein, erkläre dir in einem kurzen Call wie es funktioniert, und du kannst in wenigen Tagen loslegen.' },

      { type: 'callout', text: 'Interessiert? Ich zeige dir live wie die KI-Sekretärin auf typische Handwerker-Anfragen antwortet. Einfach melden — kein Pitch, einfach eine Demo.' },
    ],
  },

  {
    slug: 'website-3-tage',
    title: 'Website in 3 Tagen: Modernes Webdesign für Kleinunternehmer ohne Agentur',
    description: 'Agenturen brauchen 3 Monate und kosten 5.000€+. Mit moderner Entwicklung und KI-Tools ist eine professionelle Website für Kleinunternehmer in 3 Tagen machbar — für einen Bruchteil des Preises.',
    date: '1. Mai 2026',
    readTime: '6 min',
    content: [
      { type: 'p', text: 'Du rufst eine Webdesign-Agentur an. Erstgespräch: eine Stunde. Briefing: eine Woche. Konzept: noch eine Woche. Design: drei Wochen. Umsetzung: sechs Wochen. Finale Abstimmung: zwei Wochen. Gesamtkosten: 4.800€. Und das ist das Angebot der günstigeren Agentur.' },
      { type: 'p', text: 'Für ein kleines Unternehmen ist das meistens keine Option. Nicht wegen dem Geld allein — sondern wegen der Zeit. Drei Monate bis zur fertigen Website, während du jeden Tag ohne Online-Präsenz weiterarbeitest.' },

      { type: 'h2', text: 'Warum Agenturen so langsam und teuer sind' },
      { type: 'p', text: 'Das liegt nicht daran, dass Agenturen schlechte Arbeit leisten. Das liegt am Modell. Eine Agentur hat Projektmanager, Designer, Entwickler, Account-Manager — alle wollen bezahlt werden. Ein einfaches Projekt wandert durch fünf Hände, jede Übergabe kostet Zeit.' },
      { type: 'p', text: 'Dazu kommt: Agenturen bauen für viele Kunden gleichzeitig. Dein Projekt steht in der Warteschlange. Feedback-Schleifen ziehen sich hin. Am Ende hast du eine Website die zwar gut aussieht, aber mehr Zeit und Geld gekostet hat als nötig.' },

      { type: 'h2', text: 'Was sich verändert hat' },
      { type: 'p', text: 'KI-Tools haben die Webentwicklung grundlegend verändert. Was früher Tage an Coding bedeutete, lässt sich heute in Stunden umsetzen. Das senkt den Aufwand drastisch — ohne dass Qualität oder Design leiden.' },
      { type: 'p', text: 'Als Einzelentwickler habe ich keinen Overhead. Keine Konferenzräume, kein Projektmanagement-Tool das 500€ im Monat kostet, kein Team das koordiniert werden muss. Das spart Kosten die ich direkt an dich weitergebe.' },

      { type: 'h2', text: 'Was in 3 Tagen realistisch möglich ist' },
      { type: 'ul', items: [
        'Moderne, mobile-optimierte One-Page-Website',
        'Individuelles Design passend zu deinem Betrieb',
        'Klare Leistungsübersicht, Kontaktformular, Anfahrt',
        'Google-optimiert (SEO-Grundlagen, Ladezeit, Meta-Tags)',
        'Eigene Domain und Hosting eingerichtet',
        'Bewertungen und Referenzen integriert',
      ]},
      { type: 'p', text: 'Was in 3 Tagen nicht geht: ein komplexer Online-Shop mit 500 Produkten, ein Buchungssystem mit Datenbankanbindung, oder eine Website mit 20 individuellen Unterseiten. Aber das brauchst du für den Anfang auch nicht.' },

      { type: 'h2', text: 'Wie der Prozess aussieht' },
      { type: 'h3', text: 'Tag 1 — Briefing und Konzept' },
      { type: 'p', text: 'Wir reden 30 Minuten. Du erzählst mir was du machst, für wen, und was Kunden wissen müssen. Ich mache mir Notizen, schaue mir Mitbewerber an und entwickle eine klare Idee.' },
      { type: 'h3', text: 'Tag 2 — Design und Entwicklung' },
      { type: 'p', text: 'Ich baue die Seite. Du bekommst einen ersten Link zum Ansehen. Feedback per WhatsApp, Änderungen sofort.' },
      { type: 'h3', text: 'Tag 3 — Feinschliff und Launch' },
      { type: 'p', text: 'Letzte Anpassungen, Domain einrichten, Live schalten. Fertig.' },

      { type: 'h2', text: 'Was es kostet' },
      { type: 'p', text: 'Ich baue gerade mein Portfolio auf und arbeite derzeit zu Pilotpreisen, die erheblich unter Agentur-Preisen liegen. Dafür zeige ich die fertigen Projekte als Referenz. Ein faires Tauschgeschäft.' },

      { type: 'callout', text: 'Kein Online-Auftritt oder eine Seite die nicht mehr zu deinem Betrieb passt? Schreib mir kurz was du machst — ich schau mir das an und sag dir ehrlich was sinnvoll ist und was es kostet.' },
    ],
  },

  {
    slug: 'whatsapp-business-automatisieren',
    title: 'WhatsApp Business automatisieren: Schritt-für-Schritt für Selbstständige',
    description: 'WhatsApp Business hat eingebaute Automatisierungsfunktionen — aber die meisten Selbstständigen nutzen nur 10% davon. Dieser Guide zeigt was möglich ist und wo die Grenzen liegen.',
    date: '1. Mai 2026',
    readTime: '7 min',
    content: [
      { type: 'p', text: 'WhatsApp Business ist auf über 200 Millionen Geräten weltweit installiert. Die meisten Selbstständigen nutzen es wie die normale WhatsApp — schreiben, lesen, antworten. Dass die App selbst schon Automatisierungsfunktionen mitbringt, wissen die wenigsten.' },
      { type: 'p', text: 'Dieser Guide zeigt was WhatsApp Business kostenlos kann, wo die Grenzen sind, und wann es Sinn macht, auf einen echten Bot umzustellen.' },

      { type: 'h2', text: 'Was WhatsApp Business kostenlos kann' },
      { type: 'h3', text: 'Begrüßungsnachricht' },
      { type: 'p', text: 'Wenn dich jemand zum ersten Mal anschreibt, sendet WhatsApp automatisch eine von dir hinterlegte Begrüßung. Zum Beispiel: "Hallo, schön dass du dich meldest! Ich melde mich so schnell wie möglich. Für dringende Anfragen ruf bitte an unter: [Nummer]".' },
      { type: 'p', text: 'Einstellen: Einstellungen → Unternehmenstools → Begrüßungsnachricht.' },
      { type: 'h3', text: 'Abwesenheitsnachricht' },
      { type: 'p', text: 'Außerhalb deiner Öffnungszeiten antwortet WhatsApp automatisch mit einer hinterlegten Nachricht. Du kannst festlegen, wann diese aktiv ist — z.B. abends nach 18 Uhr und vor 8 Uhr morgens.' },
      { type: 'h3', text: 'Schnellantworten' },
      { type: 'p', text: 'Texte die du häufig schreibst (Preisliste, Wegbeschreibung, "Ich bin gerade auf der Baustelle") lassen sich als Schnellantworten hinterlegen. Mit "/" kannst du sie blitzschnell aufrufen.' },
      { type: 'h3', text: 'Labels und Katalog' },
      { type: 'p', text: 'Chats lassen sich mit Labels organisieren (Neu, Wartet auf Antwort, Erledigt). Ein Produktkatalog lässt sich direkt in der App hinterlegen.' },

      { type: 'h2', text: 'Wo die Grenzen von WhatsApp Business sind' },
      { type: 'p', text: 'All das klingt gut — aber es hat einen entscheidenden Haken: Diese Funktionen sind statisch. Eine Begrüßungsnachricht ist immer dieselbe. Sie versteht nicht, was der Kunde will. Sie kann keine Fragen beantworten, keine Termine koordinieren, keine Preise nennen.' },
      { type: 'p', text: 'Wenn jemand um 22 Uhr schreibt "Habt ihr morgen früh noch einen Termin frei?", bekommt er deine Begrüßungsnachricht — und fühlt sich ignoriert. Das ist besser als gar keine Antwort, aber weit entfernt von professionell.' },

      { type: 'h2', text: 'Was ein echter WhatsApp Bot darüber hinaus kann' },
      { type: 'ul', items: [
        'Versteht die konkrete Anfrage und antwortet passend',
        'Kann Folgefragen stellen ("Welcher Termin passt dir am besten?")',
        'Erkennt dringende Nachrichten und leitet sie weiter',
        'Arbeitet mehrsprachig (z.B. Deutsch und Türkisch bei Friseuren)',
        'Lernt aus häufigen Fragen und wird besser',
        'Integriert sich in Kalender oder Buchungssysteme',
      ]},

      { type: 'h2', text: 'Für wen lohnt sich welche Lösung' },
      { type: 'h3', text: 'Nur WhatsApp Business Bordmittel — wenn:' },
      { type: 'ul', items: [
        'Du weniger als 10 Nachrichten pro Tag bekommst',
        'Du immer innerhalb einer Stunde antwortest',
        'Deine Anfragen sehr einfach und vorhersehbar sind',
      ]},
      { type: 'h3', text: 'Ein echter Bot lohnt sich — wenn:' },
      { type: 'ul', items: [
        'Du regelmäßig Nachrichten nicht sofort beantworten kannst',
        'Du außerhalb der Öffnungszeiten Anfragen bekommst',
        'Du merkst, dass Kunden ungeduldig werden oder woanders hingehen',
        'Du mehr als 20 Nachrichten pro Tag verwaltest',
      ]},

      { type: 'h2', text: 'Der erste Schritt' },
      { type: 'p', text: 'Wenn du WhatsApp Business noch nicht verwendest: Jetzt herunterladen und einrichten. Begrüßungsnachricht und Abwesenheitsnachricht hinterlegen. Das dauert 10 Minuten und macht sofort einen Unterschied.' },
      { type: 'p', text: 'Wenn du schon WhatsApp Business nutzt aber merkst, dass Anfragen verloren gehen: Dann ist ein Bot der nächste sinnvolle Schritt.' },

      { type: 'callout', text: 'Willst du wissen ob ein WhatsApp Bot für dein Business Sinn macht? Ich berate dich kurz und kostenlos — und sage dir ehrlich, ob sich das lohnt oder ob die Bordmittel reichen.' },
    ],
  },
]
