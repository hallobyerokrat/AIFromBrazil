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
      { type: 'callout', text: 'Neugierig geworden? Ich zeige dir kostenlos wie ein Bot für deinen Salon konkret aussehen würde — personalisiert auf deine Anfragen, nicht irgendein Standard-Beispiel. Einfach kurz schreiben.' },
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

      { type: 'callout', text: 'Hast du Fragen — oder bist du einfach neugierig wie das bei dir aussehen könnte? Ich freue mich über jede Nachricht und helfe dir gerne weiter, egal wo du gerade stehst.' },
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

      { type: 'callout', text: 'Klingt das interessant? Ich zeige dir kostenlos wie eine KI-Sekretärin auf echte Anfragen aus deinem Handwerksbetrieb antwortet — personalisiert, nicht irgendein Demo-Text. Einfach kurz schreiben.' },
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

      { type: 'callout', text: 'Du fragst dich ob das auch für dein Business funktionieren würde? Schreib mir kurz was du machst — ich schaue mir das gerne an und gebe dir eine ehrliche Einschätzung. Ich freue mich über deine Nachricht.' },
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

      { type: 'callout', text: 'Du willst sehen wie das für dein Business konkret aussehen würde? Ich zeige dir kostenlos eine personalisierte Demo — damit du nicht raten musst, sondern es einfach siehst. Einfach kurz schreiben.' },
    ],
  },

  // --- Artikel 6 ---
  {
    slug: 'whatsapp-bot-klempner',
    title: 'WhatsApp Bot für Klempner: Notfälle und Termine automatisch beantworten',
    description: 'Ein Wasserrohrbruch um 23 Uhr — wer als erstes antwortet, bekommt den Auftrag. Wie ein WhatsApp Bot deinen Klempnerbetrieb rund um die Uhr erreichbar macht.',
    date: '2. Mai 2026',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Es ist 23:15 Uhr. Irgendwo in der Stadt platzt gerade ein Wasserrohr. Der Hausbesitzer greift zum Handy, tippt "Klempner Notfall" und schreibt den ersten drei Ergebnissen eine WhatsApp. Wer zuerst antwortet, bekommt den Auftrag. Wer schläft, verliert ihn.' },
      { type: 'p', text: 'Klempner gehören zu den wenigen Branchen, in denen Kunden buchstäblich keine Zeit haben zu warten. Und genau das macht einen automatischen WhatsApp-Bot für Klempnerbetriebe so wertvoll.' },

      { type: 'h2', text: 'Warum Notfall-Anfragen so wichtig sind' },
      { type: 'p', text: 'Ein normaler Sanitärauftrag — eine neue Armatur, ein verstopfter Abfluss — kann bis morgen warten. Ein Rohrbruch, eine defekte Heizung im Winter oder ein verstopftes Abwassersystem nicht. Diese Notfall-Aufträge sind die lukrativsten: höhere Stundensätze, keine Preis-Diskussionen, sofortige Beauftragung.' },
      { type: 'p', text: 'Das Problem: Genau diese Kunden rufen oft nicht an — sie schreiben. Und wenn du nachts nicht antwortest, googeln sie weiter. Ein Konkurrent mit automatischer Antwort gewinnt den Auftrag, der eigentlich deiner hätte sein können.' },

      { type: 'h2', text: 'Was ein WhatsApp Bot für Klempner leistet' },
      { type: 'p', text: 'Ein gut eingerichteter Bot erkennt den Unterschied zwischen einer normalen Terminanfrage und einem echten Notfall — und reagiert entsprechend.' },
      { type: 'ul', items: [
        'Sofortige Antwort rund um die Uhr — auch nachts und am Wochenende',
        'Notfall-Erkennung: Bei "Rohrbruch", "Überschwemmung" oder "Heizung aus" kommt eine andere Antwort als bei normalen Anfragen',
        'Dich direkt per SMS oder Anruf benachrichtigen wenn ein echter Notfall reinkommt',
        'Öffnungszeiten, Notdienst-Preise und Einzugsgebiet automatisch mitteilen',
        'Terminanfragen für normale Aufträge aufnehmen und in deinen Kalender eintragen',
        'Bilder vom Schaden anfordern damit du vor dem Termin weißt was dich erwartet',
      ]},

      { type: 'h2', text: 'Der Unterschied zu einer normalen Abwesenheitsnachricht' },
      { type: 'p', text: 'Eine Abwesenheitsnachricht sagt: "Ich bin gerade nicht erreichbar." Ein Bot sagt: "Ich bin da. Was kann ich für dich tun?" Das ist ein riesiger Unterschied — psychologisch und praktisch.' },
      { type: 'p', text: 'Wenn ein Kunde um 23 Uhr in einer Notlage ist und eine Abwesenheitsnachricht bekommt, sucht er weiter. Wenn er eine strukturierte Antwort bekommt — "Beschreib bitte kurz was passiert ist, wir melden uns dringend bei dir" — bleibt er bei dir. Er hat das Gefühl, dass jemand da ist.' },

      { type: 'h2', text: 'Normale Termine: Auch hier spart der Bot Zeit' },
      { type: 'p', text: 'Neben Notfällen gibt es die normalen Aufträge: Neue Armatur einbauen, Heizung warten, Badezimmer sanieren. Hier kommen täglich Anfragen rein — Preisfragen, Terminwünsche, Rückfragen zu deinen Leistungen.' },
      { type: 'p', text: 'Ein Bot kann diese Anfragen automatisch qualifizieren: Was braucht der Kunde? Wann soll es gemacht werden? In welchem Stadtgebiet? So kommst du zum Telefonat oder zum Termin bereits mit allen wichtigen Infos — statt erst 10 Minuten lang die Grundlagen abzuklären.' },

      { type: 'h2', text: 'Was ein solcher Bot kostet' },
      { type: 'p', text: 'Im Vergleich zu einem Notdienst-Anrufbeantworter oder einer Telefonzentrale ist ein WhatsApp Bot günstiger und effizienter. Wenn er dir auch nur einen zusätzlichen Notfall-Auftrag pro Woche sichert — bei typischen Sätzen von 150–300€ für Notdienste — hat er sich in einem Monat mehrfach amortisiert.' },

      { type: 'callout', text: 'Neugierig wie das für deinen Betrieb konkret aussehen würde? Ich zeige dir kostenlos eine personalisierte Demo — mit echten Beispiel-Nachrichten aus dem Klempner-Alltag. Einfach kurz schreiben.' },
    ],
  },

  // --- Artikel 7 ---
  {
    slug: 'website-friseure',
    title: 'Website für Friseure: So buchst du mehr Termine über Google',
    description: 'Instagram reicht nicht. Wer bei Google nicht gefunden wird, verliert täglich Neukunden. Warum Friseure eine eigene Website brauchen — und was drauf stehen muss.',
    date: '2. Mai 2026',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Dein Instagram-Profil sieht toll aus. Schöne Vorher-Nachher-Bilder, regelmäßige Stories, ein paar Hundert Follower. Und trotzdem ist der Kalender nicht voll. Das Problem: Instagram bringt dir Likes — aber nicht unbedingt Kunden, die aktiv nach einem Friseur in deiner Stadt suchen.' },
      { type: 'p', text: 'Der entscheidende Kanal für Neukunden heißt Google. Und für Google brauchst du eine eigene Website.' },

      { type: 'h2', text: 'Wie Kunden heute einen Friseur suchen' },
      { type: 'p', text: 'Jemand zieht in eine neue Stadt. Jemand ist mit seinem Friseur unzufrieden. Jemand sucht einen Barber für seinen Sohn. In allen drei Fällen passiert dasselbe: Sie öffnen Google und tippen "Friseur [Stadtname]" oder "Friseur in meiner Nähe".' },
      { type: 'p', text: 'Was sehen sie? Die ersten drei Google Maps-Einträge — und die erste Seite der normalen Suchergebnisse. Wenn du dort nicht auftauchst, existierst du für diesen potenziellen Kunden nicht. Nicht weil du schlecht bist, sondern weil du nicht sichtbar bist.' },

      { type: 'h2', text: 'Was eine gute Friseur-Website leisten muss' },
      { type: 'p', text: 'Eine Friseur-Website ist kein Kunstprojekt. Sie hat eine einzige Aufgabe: Den Besucher so schnell wie möglich zum Termin bringen. Dafür braucht sie genau diese Dinge:' },
      { type: 'ul', items: [
        'Deinen genauen Standort mit eingebetteter Google-Karte',
        'Deine Öffnungszeiten — aktuell und gut sichtbar',
        'Deine Leistungen mit Preisen (Kunden wollen wissen was sie erwartet)',
        'Echte Fotos deiner Arbeit — kein Stock-Material',
        'Einen klaren Call-to-Action: "Jetzt Termin buchen" oder "WhatsApp schreiben"',
        'Kundenbewertungen — am besten direkt von Google eingebunden',
      ]},

      { type: 'h2', text: 'Google My Business: Der erste Schritt vor der Website' },
      { type: 'p', text: 'Bevor du überhaupt eine Website brauchst, solltest du deinen Google My Business-Eintrag vollständig ausfüllen. Das ist kostenlos und bringt dich in die lokalen Suchergebnisse. Aber: Ein vollständiger Eintrag allein reicht nicht — du brauchst auch eine Website, auf die Google verlinken kann.' },
      { type: 'p', text: 'Salons mit einer eigenen Website ranken in den lokalen Ergebnissen deutlich besser als solche ohne. Google interpretiert eine fehlende Website als Zeichen dafür, dass das Business möglicherweise inaktiv oder nicht professionell ist.' },

      { type: 'h2', text: 'Was Instagram nicht ersetzen kann' },
      { type: 'p', text: 'Instagram ist gut für Inspiration und für Menschen, die dir bereits folgen. Aber Instagram funktioniert nur bei aktiven Nutzern — und du hast keinen Einfluss darauf, wer deinen Content sieht. Der Algorithmus entscheidet.' },
      { type: 'p', text: 'Google funktioniert anders: Jemand hat aktiv eine Absicht ("Ich suche einen Friseur") und sucht danach. Das ist der wertvollste Moment — und genau dort musst du sichtbar sein. Eine Website ist dein Hebel.' },

      { type: 'h2', text: 'Wie schnell du Ergebnisse siehst' },
      { type: 'p', text: 'SEO braucht Zeit. Die ersten Ergebnisse siehst du in der Regel nach 4–8 Wochen. Aber: Wenn du heute anfängst, bist du in 2 Monaten sichtbar. Wenn du nichts tust, bist du auch in 2 Monaten noch unsichtbar.' },
      { type: 'p', text: 'Eine professionell aufgebaute Website mit lokalem SEO kann dir dauerhaft 3–8 Neukunden pro Monat bringen — ohne dass du dafür Geld für Anzeigen ausgibst.' },

      { type: 'callout', text: 'Hast du Fragen zur Website oder zur Google-Sichtbarkeit? Ich freue mich über deine Nachricht und helfe dir gerne weiter — egal ob du konkrete Pläne hast oder einfach nur mehr wissen möchtest.' },
    ],
  },

  // --- Artikel 8 ---
  {
    slug: 'whatsapp-bot-elektriker',
    title: 'WhatsApp Bot für Elektriker: Anfragen außerhalb der Arbeitszeit beantworten',
    description: 'Elektriker bekommen viele Anfragen abends und am Wochenende — genau dann wenn sie nicht im Büro sind. So beantwortet ein Bot die Anfragen für dich.',
    date: '2. Mai 2026',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Steckdose defekt, Sicherung fliegt raus, Licht funktioniert nicht mehr. Solche Probleme passieren selten zwischen 9 und 17 Uhr. Sie passieren abends, am Wochenende, vor Feiertagen — genau dann wenn du nicht ans Telefon gehst und kein Büro besetzt ist.' },
      { type: 'p', text: 'Das Ergebnis: Anfragen gehen verloren, Kunden beauftragen Konkurrenten, und du weißt am nächsten Morgen nicht mal, was du verpasst hast.' },

      { type: 'h2', text: 'Wann Elektriker-Anfragen reinkommen' },
      { type: 'p', text: 'Daten aus verschiedenen Handwerksbetrieben zeigen: Über 40% der Kundenanfragen kommen außerhalb der regulären Arbeitszeiten. Abends zwischen 18 und 22 Uhr ist die aktivste Zeit — Menschen kommen von der Arbeit nach Hause, bemerken ein Problem und greifen sofort zum Handy.' },
      { type: 'p', text: 'Wer in diesem Fenster nicht antwortet, verliert einen großen Teil seines potenziellen Umsatzes. Nicht weil die Kunden ungeduldig wären, sondern weil sie schlicht zum nächsten Anbieter wechseln — der sich vielleicht schon einen Bot eingerichtet hat.' },

      { type: 'h2', text: 'Was ein WhatsApp Bot für deinen Elektrikerbetrieb tut' },
      { type: 'ul', items: [
        'Sofortige Bestätigung: Deine Nachricht ist angekommen, wir melden uns bald',
        'Erste Einschätzung: Ist es ein Notfall (Kurzschluss, Gefahr) oder ein normaler Auftrag?',
        'Bilder anfordern: "Kannst du ein Foto von dem Problem schicken?"',
        'Einzugsgebiet klären: In welcher Stadt oder welchem Bezirk bist du?',
        'Preisrahmen kommunizieren: Grobe Orientierung ohne verbindliche Zusage',
        'Dich bei echten Notfällen sofort benachrichtigen',
      ]},

      { type: 'h2', text: 'Der Unterschied zwischen Notfall und Normalauftrag' },
      { type: 'p', text: 'Ein kaputter Lichtschalter kann warten. Ein Hauptsicherungskasten der qualmt nicht. Ein guter WhatsApp Bot erkennt diesen Unterschied — durch Schlüsselwörter in der Nachricht — und reagiert entsprechend.' },
      { type: 'p', text: 'Bei einem Notfall: Sofortige Weiterleitung an dich, klarer Hinweis dass du dich sofort meldest. Bei einem normalen Auftrag: Freundliche Bestätigung, Terminvorschlag für die nächsten Tage, alle nötigen Infos vorab sammeln.' },
      { type: 'p', text: 'Das spart dir beim Rückruf wertvolle Zeit — du weißt schon bevor du anrufst, was dich erwartet.' },

      { type: 'h2', text: 'Konkurrenzvorsprung durch schnelle Reaktion' },
      { type: 'p', text: 'Elektriker sind in vielen Städten rar. Kunden, die abends einen Elektriker suchen, nehmen oft den ersten, der antwortet — nicht zwingend den günstigsten. Wenn du der erste bist der sich meldet (auch wenn es ein Bot ist), hast du einen entscheidenden Vorteil.' },
      { type: 'p', text: 'Studien zeigen: Die Wahrscheinlichkeit, einen Auftrag zu bekommen, sinkt nach 5 Minuten ohne Antwort um über 80%. Nach einer Stunde ist sie fast null. Ein Bot antwortet in Sekunden.' },

      { type: 'h2', text: 'Einrichtungsaufwand und laufende Kosten' },
      { type: 'p', text: 'Ein WhatsApp Bot muss nicht komplex sein. Für einen Elektrikerbetrieb reicht oft eine einfache Version: Begrüßung, Notfall-Erkennung, Infos sammeln, weiterleiten. Das ist in wenigen Tagen eingerichtet und danach läuft es.' },
      { type: 'p', text: 'Die laufenden Kosten liegen weit unter dem Umsatz, den ein einziger zusätzlicher Auftrag pro Woche bringt. Bei typischen Stundensätzen von 80–120€ plus Material rechnet sich der Bot sehr schnell.' },

      { type: 'callout', text: 'Willst du sehen wie ein Bot auf echte Anfragen aus deinem Elektrikerbetrieb antwortet? Ich zeige dir das kostenlos und personalisiert — nicht irgendein Beispiel, sondern dein Betrieb, deine Anfragen. Einfach kurz schreiben.' },
    ],
  },

  // --- Artikel 9 ---
  {
    slug: 'whatsapp-bot-barbiere',
    title: 'WhatsApp Bot für Barbiere: Wartelisten und Buchungen automatisieren',
    description: 'Barbershops boomen — aber die Verwaltung von Buchungen kostet täglich wertvolle Zeit. Wie ein WhatsApp Bot Wartelisten und Termine für dich managt.',
    date: '2. Mai 2026',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Dein Barbershop ist beliebt. Zu beliebt manchmal: Das Telefon klingelt ständig, WhatsApp-Nachrichten stapeln sich, und du verbringst mehr Zeit mit Terminen koordinieren als mit dem eigentlichen Handwerk. Gleichzeitig tauchen Kunden auf, die du nicht erwartet hast, und andere die einen Termin hatten erscheinen nicht.' },
      { type: 'p', text: 'Das ist das typische Wachstumsproblem moderner Barbershops. Und ein WhatsApp Bot ist eine der einfachsten Lösungen.' },

      { type: 'h2', text: 'Das Besondere an Barbershop-Buchungen' },
      { type: 'p', text: 'Barbier-Kunden sind oft jünger, digitalaffin und erwarten schnelle Kommunikation. Sie schreiben lieber als dass sie anrufen. Und sie wollen Antworten in Minuten, nicht in Stunden.' },
      { type: 'p', text: 'Gleichzeitig sind Buchungen in Barbershops oft kurzfristiger als bei normalen Friseuren: Heute anschreiben, morgen einen Termin haben. Das macht eine manuelle Verwaltung stressig — besonders wenn du nebenbei noch schneidest.' },

      { type: 'h2', text: 'Was ein Bot für deinen Barbershop übernimmt' },
      { type: 'ul', items: [
        'Buchungsanfragen sofort bestätigen und Wunschtermin abfragen',
        'Warteliste führen: Wenn kein Termin frei ist, automatisch auf die Warteliste setzen',
        'Terminerinnerungen senden: 24 Stunden vorher automatisch erinnern',
        'No-Show reduzieren: Kunden bitten zu bestätigen ob sie kommen',
        'Preisliste und Leistungen auf Anfrage senden',
        'Neue Kunden nach ihrer bevorzugten Zeit und ihrem Stil fragen',
      ]},

      { type: 'h2', text: 'Wartelisten: Aus Verlust wird Umsatz' },
      { type: 'p', text: 'Wenn du ausgebucht bist und ein Kunde anschreibt, verlierst du ohne Bot diesen Kunden wahrscheinlich. Er sucht einen anderen Barbier. Mit einem Bot passiert folgendes: Er kommt auf die Warteliste, bekommt sofort eine Bestätigung und wird automatisch benachrichtigt wenn ein Platz frei wird — zum Beispiel weil jemand storniert hat.' },
      { type: 'p', text: 'Das bedeutet: Stornierungen kosten dich nicht mehr Umsatz, weil der Platz sofort wieder gefüllt wird. Der Umsatz bleibt konstant, du musst dich nicht darum kümmern.' },

      { type: 'h2', text: 'No-Shows: Das größte Problem für Barbershops' },
      { type: 'p', text: 'Kunden die nicht erscheinen kosten Zeit und Geld. Eine automatische Erinnerung 24 oder 48 Stunden vor dem Termin reduziert No-Shows deutlich — in der Praxis um 30–60%.' },
      { type: 'p', text: 'Noch effektiver: Der Bot bittet den Kunden explizit zu bestätigen. Wer bestätigt, erscheint fast immer. Wer nicht antwortet, kann rechtzeitig ersetzt werden. Du weißt immer vorher wer kommt.' },

      { type: 'h2', text: 'Für Walk-ins und Stammkunden' },
      { type: 'p', text: 'Nicht jeder Barbier will ein reines Buchungssystem. Viele leben von Walk-ins und Stammkunden. Ein Bot muss das nicht ersetzen — er ergänzt es. Er managt die digitalen Anfragen, während du weiterhin spontane Kunden begrüßen kannst.' },
      { type: 'p', text: 'Stammkunden können sogar einen eigenen schnellen Buchungspfad bekommen: Einfach "Termin" schreiben und der Bot schlägt automatisch den nächsten freien Slot vor — ohne Fragen, weil der Bot bereits weiß was der Kunde normalerweise bucht.' },

      { type: 'callout', text: 'Willst du sehen wie ein Bot Buchungen und Wartelisten für deinen Barbershop managt? Ich zeige dir kostenlos eine personalisierte Demo — damit du genau weißt was deine Kunden sehen würden. Einfach kurz schreiben.' },
    ],
  },

  // --- Artikel 10 ---
  {
    slug: 'website-klempner',
    title: 'Website für Klempner: So wirst du bei Google gefunden wenn jemand "Klempner Notdienst" sucht',
    description: 'Wer einen Klempner sucht, googelt — und ruft den ersten an der antwortet. Warum eine gute Website für Klempner nicht nur Visitenkarte ist, sondern Auftragsgenerator.',
    date: '2. Mai 2026',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Rohrbruch um Mitternacht. Der Hausbesitzer greift zum Handy und googelt "Klempner Notdienst [Stadt]". Was er sieht, entscheidet innerhalb von Sekunden: Wer hat eine professionelle Website, wer hat gute Bewertungen, wer wirkt vertrauenswürdig? Dieser erste Eindruck bestimmt, wen er anruft.' },
      { type: 'p', text: 'Ohne eigene Website bist du bei dieser Suche unsichtbar. Und unsichtbar bedeutet: kein Auftrag.' },

      { type: 'h2', text: 'Wie Klempner-Kunden suchen' },
      { type: 'p', text: 'Die meisten Kunden, die einen Klempner brauchen, suchen lokal und mit konkreter Absicht. Sie tippen nicht "Klempner" — sie tippen "Klempner Berlin Mitte", "Notfall Klempner Köln" oder "Rohrreinigung München günstig". Das sind Long-Tail-Keywords mit hoher Kaufabsicht.' },
      { type: 'p', text: 'Genau für solche Suchanfragen sollte deine Website optimiert sein. Wenn jemand "Klempner Notdienst Hannover" sucht und du auf Seite 1 erscheinst, bekommst du den Anruf — ohne Marketingbudget, ohne Werbeanzeigen.' },

      { type: 'h2', text: 'Was eine Klempner-Website unbedingt braucht' },
      { type: 'ul', items: [
        'Klare Angabe deines Einsatzgebiets — welche Städte und Stadtteile du abdeckst',
        'Notdienst-Hinweis auf der Startseite: Bist du 24/7 erreichbar? Sag es laut',
        'Deine Telefonnummer groß und gut sichtbar — am besten klickbar für Mobilgeräte',
        'Leistungsübersicht: Was machst du, was machst du nicht',
        'Echte Google-Bewertungen eingebunden oder verlinkt',
        'Reaktionszeit kommunizieren: "Bei Notfällen innerhalb von 60 Minuten vor Ort"',
      ]},

      { type: 'h2', text: 'Notdienst-SEO: Das lukrativste Keyword-Segment' },
      { type: 'p', text: 'Kunden die "Notdienst" in ihre Suche eintippen, sind bereit mehr zu zahlen. Sie brauchen sofort Hilfe und verhandeln nicht lange über den Preis. Das macht Notdienst-Keywords besonders wertvoll.' },
      { type: 'p', text: 'Eine Seite auf deiner Website, die speziell für "Klempner Notdienst [deine Stadt]" optimiert ist, kann dir dauerhaft Notfall-Aufträge bringen. Das sind oft die profitabelsten Aufträge — Anfahrt, Stundensatz, Material — alles ohne große Preisdiskussion.' },

      { type: 'h2', text: 'Google My Business: Dein lokaler Hebel' },
      { type: 'p', text: 'Vor der Website kommt Google My Business. Dieser kostenlose Eintrag erscheint in der Karte, die Google bei lokalen Suchen anzeigt. Vollständig ausgefüllt mit Fotos, Bewertungen und aktuellen Infos ist er dein erster Sichtbarkeits-Booster.' },
      { type: 'p', text: 'Aber: Google My Business und Website ergänzen sich. Ein vollständiger Eintrag ohne Website wirkt weniger vertrauenswürdig. Und eine Website ohne Google My Business verpasst den lokalen Map-Pack — die drei Einträge die ganz oben in den lokalen Ergebnissen erscheinen.' },

      { type: 'h2', text: 'Was eine gute Klempner-Website kostet — und was sie bringt' },
      { type: 'p', text: 'Eine professionelle Website mit lokalem SEO ist eine Investition, keine Ausgabe. Wenn sie dir auch nur zwei zusätzliche Aufträge pro Monat bringt — bei einem durchschnittlichen Auftragswert von 200–500€ — hat sie sich in wenigen Monaten amortisiert. Und dann arbeitet sie weiter für dich, jeden Tag, ohne zusätzliche Kosten.' },

      { type: 'callout', text: 'Du willst mehr lokale Kunden über Google gewinnen und weißt nicht wo du anfangen sollst? Ich helfe dir gerne weiter — schreib mir einfach, ich schaue mir deine Situation an und wir finden gemeinsam den richtigen Weg.' },
    ],
  },
]
