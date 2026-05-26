'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const contenido = {
  es: {
    meta: {
      titulo: 'Quiénes Somos | Asesores Inmobiliarios en Valencia para Compradores',
      descripcion: 'Somos tu asesor inmobiliario de confianza en Valencia. Trabajamos exclusivamente para el comprador: búsqueda, negociación, gestión y reforma. +100 operaciones acompañadas.',
    },
    hero: {
      eyebrow: 'Tu asesor inmobiliario en Valencia',
      titulo: 'Compramos mejor cuando alguien experto está de tu lado',
      subtitulo: 'Especialistas en acompañar a compradores e inversores en el mercado inmobiliario de Valencia. Sin conflicto de intereses, siempre en tu equipo.',
    },
    quienes: {
      titulo: '¿Quiénes somos?',
      texto1: 'Somos un equipo especializado en el mercado inmobiliario de Valencia. Combinamos tecnología, datos reales del mercado y conocimiento profundo de cada distrito para ayudarte a tomar la mejor decisión de compra de tu vida.',
      texto2: 'No somos una agencia inmobiliaria tradicional. Somos tu asesor de confianza — trabajamos exclusivamente para el comprador, sin conflicto de intereses, buscando siempre el mejor precio y la mejor zona para ti.',
    },
    stats: [
      { valor: '+100', etiqueta: 'operaciones acompañadas' },
      { valor: '100%', etiqueta: 'transparencia en el proceso' },
      { valor: '24h', etiqueta: 'tiempo de respuesta' },
      { valor: '0', etiqueta: 'comisiones del vendedor' },
    ],
    servicios: 'Lo que hacemos por ti',
    porque: '¿Por qué elegirnos?',
    cta: {
      titulo: '¿Empezamos?',
      subtitulo: 'Cuéntanos qué buscas y te respondemos en menos de 24 horas.',
      boton: 'Contáctanos →',
    },
    items: [
      { emoji: '🗺️', titulo: 'Elección de zona', desc: 'Analizamos tu presupuesto, estilo de vida y objetivos para recomendarte el distrito que más te conviene en Valencia.' },
      { emoji: '💬', titulo: 'Negociación', desc: 'Negociamos en tu nombre. Conocemos los precios reales de cierre de cada zona y barrio.' },
      { emoji: '📋', titulo: 'Gestión de la compra', desc: 'Te acompañamos en toda la burocracia: nota simple, escrituras, notaría, impuestos y más.' },
      { emoji: '🔨', titulo: 'Reforma', desc: 'Coordinamos todo con nuestros arquitectos y constructores de confianza. Presupuesto cerrado desde el primer día.' },
      { emoji: '🔑', titulo: 'Llave en mano', desc: 'Desde que decides comprar hasta que tienes las llaves. Te gestionamos absolutamente todo.' },
      { emoji: '📈', titulo: 'Asesoramiento de inversión', desc: 'Identificamos las oportunidades con mayor potencial de revalorización antes de que el mercado las descubra.' },
    ],
    razones: [
      { icono: '✅', texto: 'Trabajamos solo para el comprador — sin comisiones del vendedor' },
      { icono: '✅', texto: 'Conocemos el precio real de cierre de cada distrito' },
      { icono: '✅', texto: 'Más de 100 operaciones acompañadas en Valencia' },
      { icono: '✅', texto: 'Proceso 100% transparente' },
      { icono: '✅', texto: 'Servicio integral desde la búsqueda hasta la reforma' },
    ],
  },
  en: {
    meta: {
      titulo: 'About Us | Real Estate Advisors in Valencia for Buyers',
      descripcion: 'We are your trusted real estate advisor in Valencia. We work exclusively for the buyer: search, negotiation, management and renovation. +100 transactions accompanied.',
    },
    hero: {
      eyebrow: 'Your real estate advisor in Valencia',
      titulo: 'We buy better when an expert is on your side',
      subtitulo: 'Specialists in accompanying buyers and investors in the Valencia real estate market. No conflict of interest, always on your team.',
    },
    quienes: {
      titulo: 'Who are we?',
      texto1: 'We are a team specialized in the Valencia real estate market. We combine technology, real market data and deep knowledge of each district to help you make the best purchase decision of your life.',
      texto2: 'We are not a traditional real estate agency. We are your trusted advisor — we work exclusively for the buyer, with no conflict of interest, always seeking the best price and the best area for you.',
    },
    stats: [
      { valor: '+100', etiqueta: 'transactions accompanied' },
      { valor: '100%', etiqueta: 'process transparency' },
      { valor: '24h', etiqueta: 'response time' },
      { valor: '0', etiqueta: 'seller commissions' },
    ],
    servicios: 'What we do for you',
    porque: 'Why choose us?',
    cta: {
      titulo: 'Shall we start?',
      subtitulo: 'Tell us what you are looking for and we will get back to you within 24 hours.',
      boton: 'Contact us →',
    },
    items: [
      { emoji: '🗺️', titulo: 'Area selection', desc: 'We analyze your budget, lifestyle and goals to recommend the best district for you in Valencia.' },
      { emoji: '💬', titulo: 'Negotiation', desc: 'We negotiate on your behalf. We know the real closing prices in each area and neighborhood.' },
      { emoji: '📋', titulo: 'Purchase management', desc: 'We guide you through all the paperwork: title search, deeds, notary, taxes and more.' },
      { emoji: '🔨', titulo: 'Renovation', desc: 'We coordinate everything with our trusted architects and builders. Fixed budget from day one.' },
      { emoji: '🔑', titulo: 'Turnkey', desc: 'From the moment you decide to buy until you have the keys. We manage absolutely everything.' },
      { emoji: '📈', titulo: 'Investment advice', desc: 'We identify opportunities with the highest appreciation potential before the market discovers them.' },
    ],
    razones: [
      { icono: '✅', texto: 'We work only for the buyer — no seller commissions' },
      { icono: '✅', texto: 'We know the real closing price of each district' },
      { icono: '✅', texto: 'Over 100 transactions accompanied in Valencia' },
      { icono: '✅', texto: '100% transparent process' },
      { icono: '✅', texto: 'Full service from search to renovation' },
    ],
  },
  fr: {
    meta: {
      titulo: 'Qui Sommes-Nous | Conseillers Immobiliers à Valence pour Acheteurs',
      descripcion: "Nous sommes votre conseiller immobilier de confiance à Valence. Nous travaillons exclusivement pour l'acheteur. +100 transactions accompagnées.",
    },
    hero: {
      eyebrow: 'Votre conseiller immobilier à Valence',
      titulo: 'Nous achetons mieux quand un expert est de votre côté',
      subtitulo: "Spécialistes pour accompagner les acheteurs et investisseurs sur le marché immobilier de Valence. Sans conflit d'intérêts, toujours dans votre équipe.",
    },
    quienes: {
      titulo: 'Qui sommes-nous?',
      texto1: 'Nous sommes une équipe spécialisée dans le marché immobilier de Valence. Nous combinons technologie, données réelles du marché et connaissance approfondie de chaque quartier.',
      texto2: "Nous ne sommes pas une agence immobilière traditionnelle. Nous sommes votre conseiller de confiance — nous travaillons exclusivement pour l'acheteur, sans conflit d'intérêts.",
    },
    stats: [
      { valor: '+100', etiqueta: 'transactions accompagnées' },
      { valor: '100%', etiqueta: 'transparence du processus' },
      { valor: '24h', etiqueta: 'temps de réponse' },
      { valor: '0', etiqueta: 'commissions vendeur' },
    ],
    servicios: 'Ce que nous faisons pour vous',
    porque: 'Pourquoi nous choisir?',
    cta: {
      titulo: 'On commence?',
      subtitulo: 'Dites-nous ce que vous cherchez et nous vous répondons en moins de 24 heures.',
      boton: 'Nous contacter →',
    },
    items: [
      { emoji: '🗺️', titulo: 'Choix du quartier', desc: 'Nous analysons votre budget, style de vie et objectifs pour vous recommander le meilleur quartier à Valence.' },
      { emoji: '💬', titulo: 'Négociation', desc: 'Nous négocions en votre nom. Nous connaissons les prix réels de clôture de chaque zone.' },
      { emoji: '📋', titulo: "Gestion de l'achat", desc: 'Nous vous accompagnons dans toute la bureaucratie: acte, notaire, impôts et plus.' },
      { emoji: '🔨', titulo: 'Rénovation', desc: 'Nous coordonnons tout avec nos architectes et constructeurs de confiance.' },
      { emoji: '🔑', titulo: 'Clé en main', desc: "De la décision d'achat jusqu'aux clés. Nous gérons absolument tout." },
      { emoji: '📈', titulo: 'Conseil en investissement', desc: 'Nous identifions les opportunités à plus fort potentiel de valorisation.' },
    ],
    razones: [
      { icono: '✅', texto: "Nous travaillons uniquement pour l'acheteur" },
      { icono: '✅', texto: 'Nous connaissons le prix réel de clôture de chaque quartier' },
      { icono: '✅', texto: 'Plus de 100 transactions accompagnées à Valence' },
      { icono: '✅', texto: 'Processus 100% transparent' },
      { icono: '✅', texto: 'Service complet de la recherche à la rénovation' },
    ],
  },
  de: {
    meta: {
      titulo: 'Über Uns | Immobilienberater in Valencia für Käufer',
      descripcion: 'Wir sind Ihr vertrauenswürdiger Immobilienberater in Valencia. Wir arbeiten ausschließlich für den Käufer. +100 begleitete Transaktionen.',
    },
    hero: {
      eyebrow: 'Ihr Immobilienberater in Valencia',
      titulo: 'Wir kaufen besser, wenn ein Experte auf Ihrer Seite ist',
      subtitulo: 'Spezialisten für die Begleitung von Käufern und Investoren auf dem Immobilienmarkt in Valencia. Ohne Interessenkonflikt, immer in Ihrem Team.',
    },
    quienes: {
      titulo: 'Wer sind wir?',
      texto1: 'Wir sind ein Team, das auf den Immobilienmarkt in Valencia spezialisiert ist. Wir kombinieren Technologie, echte Marktdaten und tiefes Wissen über jeden Stadtteil.',
      texto2: 'Wir sind keine traditionelle Immobilienagentur. Wir sind Ihr vertrauenswürdiger Berater — wir arbeiten ausschließlich für den Käufer, ohne Interessenkonflikt.',
    },
    stats: [
      { valor: '+100', etiqueta: 'begleitete Transaktionen' },
      { valor: '100%', etiqueta: 'Prozesstransparenz' },
      { valor: '24h', etiqueta: 'Reaktionszeit' },
      { valor: '0', etiqueta: 'Verkäuferprovisionen' },
    ],
    servicios: 'Was wir für Sie tun',
    porque: 'Warum uns wählen?',
    cta: {
      titulo: 'Fangen wir an?',
      subtitulo: 'Sagen Sie uns, was Sie suchen, und wir melden uns innerhalb von 24 Stunden.',
      boton: 'Kontaktieren Sie uns →',
    },
    items: [
      { emoji: '🗺️', titulo: 'Stadtteilauswahl', desc: 'Wir analysieren Ihr Budget, Ihren Lebensstil und Ihre Ziele, um den besten Stadtteil in Valencia zu empfehlen.' },
      { emoji: '💬', titulo: 'Verhandlung', desc: 'Wir verhandeln in Ihrem Namen. Wir kennen die realen Abschlusspreise in jeder Zone.' },
      { emoji: '📋', titulo: 'Kaufabwicklung', desc: 'Wir begleiten Sie durch den gesamten Papierkram: Grundbuch, Notar, Steuern und mehr.' },
      { emoji: '🔨', titulo: 'Renovierung', desc: 'Wir koordinieren alles mit unseren vertrauenswürdigen Architekten und Bauunternehmern.' },
      { emoji: '🔑', titulo: 'Schlüsselfertig', desc: 'Von der Kaufentscheidung bis zur Schlüsselübergabe. Wir regeln absolut alles.' },
      { emoji: '📈', titulo: 'Anlageberatung', desc: 'Wir identifizieren Chancen mit dem höchsten Wertsteigerungspotenzial.' },
    ],
    razones: [
      { icono: '✅', texto: 'Wir arbeiten nur für den Käufer — keine Verkäuferprovisionen' },
      { icono: '✅', texto: 'Wir kennen den realen Abschlusspreis jedes Stadtteils' },
      { icono: '✅', texto: 'Über 100 begleitete Transaktionen in Valencia' },
      { icono: '✅', texto: '100% transparenter Prozess' },
      { icono: '✅', texto: 'Vollservice von der Suche bis zur Renovierung' },
    ],
  },
}

function SchemaOrg({ idioma }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Tu Asesor Inmobiliario Valencia',
    description: contenido[idioma]?.meta?.descripcion,
    areaServed: { '@type': 'City', name: 'Valencia', addressCountry: 'ES' },
    serviceType: ["Buyer's Agent", 'Property Search', 'Real Estate Negotiation', 'Property Management'],
    knowsLanguage: ['es', 'en', 'fr', 'de'],
    url: 'https://tusitio.com/conocenos',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function Conocenos() {
  const [idioma, setIdioma] = useState('es')

  useEffect(() => {
    const guardado = localStorage.getItem('idioma') || 'es'
    setIdioma(guardado)
    const handler = () => setIdioma(localStorage.getItem('idioma') || 'es')
    window.addEventListener('idiomaChange', handler)
    return () => window.removeEventListener('idiomaChange', handler)
  }, [])

  const c = contenido[idioma] || contenido.es

  return (
    <>
      <SchemaOrg idioma={idioma} />

      <style>{`
        :root {
          --navy:       #0B1F3A;
          --navy-mid:   #152D52;
          --navy-light: #1A3A6B;
          --gold:       #C9A84C;
          --gold-light: #D4B96A;
          --gold-bg:    rgba(201,168,76,0.08);
          --gold-border:rgba(201,168,76,0.25);
          --bg:         #F8F5EF;
          --bg-card:    #FFFFFF;
          --border:     #D4C9B0;
          --border-light:#EDE8DE;
          --text:       #0B1F3A;
          --text-muted: #4A5568;
          --text-light: #8A9BB0;
          --radius:     16px;
          --radius-lg:  20px;
          --shadow:     0 2px 16px rgba(11,31,58,0.06);
          --shadow-hover:0 8px 32px rgba(11,31,58,0.12);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .conocenos-page {
          font-family: Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .hero {
          background: linear-gradient(160deg, var(--navy) 0%, var(--navy-mid) 60%, var(--navy-light) 100%);
          padding: 80px 48px 68px;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: var(--gold);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .hero-eyebrow-line {
          width: 28px;
          height: 1px;
          background: var(--gold);
          display: inline-block;
        }
        .hero h1 {
          font-family: Georgia, serif;
          font-size: clamp(30px, 5vw, 48px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          max-width: 680px;
          margin: 0 auto 18px;
        }
        .hero-sub {
          font-size: clamp(15px, 2vw, 17px);
          color: rgba(255,255,255,0.65);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── STATS BAR ── */
        .stats-bar {
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-light);
          padding: 32px 24px;
        }
        .stats-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-item {
          text-align: center;
          padding: 8px 16px;
          border-right: 1px solid var(--border-light);
        }
        .stat-item:last-child { border-right: none; }
        .stat-valor {
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12px;
          color: var(--text-light);
        }

        /* ── MAIN ── */
        .main-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 24px;
        }

        /* ── SECTION DIVIDER ── */
        .section-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .section-label h2 {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--navy);
          white-space: nowrap;
        }
        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-light);
        }

        /* ── QUIÉNES SOMOS ── */
        .quienes-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 72px;
          align-items: center;
        }
        .quienes-left h2 {
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 18px;
          line-height: 1.3;
        }
        .quienes-left p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 14px;
        }
        .quienes-right {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          border-radius: var(--radius-lg);
          padding: 36px 32px;
          color: #fff;
        }
        .quienes-right-quote {
          font-family: Georgia, serif;
          font-size: 17px;
          line-height: 1.65;
          color: rgba(255,255,255,0.9);
          font-style: italic;
          border-left: 3px solid var(--gold);
          padding-left: 20px;
        }
        .quienes-right-tag {
          margin-top: 22px;
          display: inline-block;
          background: rgba(201,168,76,0.2);
          color: var(--gold);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 4px;
          border: 1px solid var(--gold-border);
        }

        /* ── SERVICIOS ── */
        .servicios-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 64px;
        }
        .servicio-card {
          background: var(--bg-card);
          border-radius: var(--radius);
          padding: 28px 24px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .servicio-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .servicio-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-3px);
          border-color: var(--gold-border);
        }
        .servicio-card:hover::before { opacity: 1; }
        .servicio-emoji {
          font-size: 26px;
          margin-bottom: 14px;
          display: block;
        }
        .servicio-titulo {
          font-family: Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .servicio-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* ── POR QUÉ ── */
        .porque-section {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          padding: 44px 40px;
          margin-bottom: 64px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .razones-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 28px;
          list-style: none;
        }
        .razon-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.55;
          padding: 14px 18px;
          background: var(--bg);
          border-radius: 10px;
          border: 1px solid var(--border-light);
        }
        .razon-icono { flex-shrink: 0; margin-top: 1px; }

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(160deg, var(--navy) 0%, var(--navy-mid) 60%, var(--navy-light) 100%);
          border-radius: var(--radius-lg);
          padding: 56px 40px;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .cta-section h2 {
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        .cta-section p {
          font-size: 16px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .cta-btn {
          display: inline-block;
          background: var(--gold);
          color: var(--navy);
          padding: 14px 40px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(201,168,76,0.35);
        }
        .cta-btn:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.45);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 720px) {
          .hero { padding: 56px 20px 52px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3), .stat-item:nth-child(4) {
            border-top: 1px solid var(--border-light);
            padding-top: 20px;
          }
          .quienes-section { grid-template-columns: 1fr; gap: 24px; }
          .servicios-grid { grid-template-columns: 1fr 1fr; }
          .razones-grid { grid-template-columns: 1fr; }
          .porque-section { padding: 28px 20px; }
          .cta-section { padding: 40px 20px; }
          .main-content { padding: 40px 16px; }
        }
        @media (max-width: 480px) {
          .servicios-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <main className="conocenos-page">

        {/* ── HERO ── */}
        <header className="hero" role="banner">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            {c.hero.eyebrow}
          </div>
          <h1>{c.hero.titulo}</h1>
          <p className="hero-sub">{c.hero.subtitulo}</p>
        </header>

        {/* ── STATS ── */}
        <section className="stats-bar" aria-label="Estadísticas">
          <div className="stats-inner">
            {c.stats.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-valor">{s.valor}</div>
                <div className="stat-label">{s.etiqueta}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="main-content">

          {/* ── QUIÉNES SOMOS ── */}
          <section className="quienes-section" aria-labelledby="quienes-heading">
            <div className="quienes-left">
              <h2 id="quienes-heading">{c.quienes.titulo}</h2>
              <p>{c.quienes.texto1}</p>
              <p>{c.quienes.texto2}</p>
            </div>
            <div className="quienes-right">
              <blockquote className="quienes-right-quote">{c.quienes.texto2}</blockquote>
              <span className="quienes-right-tag">Valencia · Buyer's Agent</span>
            </div>
          </section>

          {/* ── SERVICIOS ── */}
          <section aria-labelledby="servicios-heading">
            <div className="section-label">
              <h2 id="servicios-heading">{c.servicios}</h2>
            </div>
            <div className="servicios-grid">
              {c.items.map((s, i) => (
                <article key={i} className="servicio-card">
                  <span className="servicio-emoji" aria-hidden="true">{s.emoji}</span>
                  <h3 className="servicio-titulo">{s.titulo}</h3>
                  <p className="servicio-desc">{s.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── POR QUÉ ELEGIRNOS ── */}
          <section className="porque-section" aria-labelledby="porque-heading">
            <div className="section-label" style={{ marginBottom: 0 }}>
              <h2 id="porque-heading">{c.porque}</h2>
            </div>
            <ul className="razones-grid" role="list">
              {c.razones.map((r, i) => (
                <li key={i} className="razon-item">
                  <span className="razon-icono" aria-hidden="true">{r.icono}</span>
                  <span>{r.texto}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── CTA ── */}
          <section className="cta-section" aria-labelledby="cta-heading">
            <h2 id="cta-heading">{c.cta.titulo}</h2>
            <p>{c.cta.subtitulo}</p>
            <Link href="/contactanos" className="cta-btn" aria-label={c.cta.boton}>
              {c.cta.boton}
            </Link>
          </section>

        </div>
      </main>
    </>
  )
}
