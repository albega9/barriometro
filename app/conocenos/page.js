'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { t } from '../data/traducciones'

const contenido = {
  es: {
    hero: { titulo: 'Somos tu equipo en Valencia', subtitulo: 'Especialistas en encontrar el lugar perfecto para vivir o invertir en Valencia. Te acompañamos en cada paso.' },
    quienes: { titulo: '¿Quiénes somos?', texto1: 'Somos un equipo especializado en el mercado inmobiliario de Valencia. Combinamos tecnología, datos reales del mercado y conocimiento profundo de cada distrito para ayudarte a tomar la mejor decisión de compra de tu vida.', texto2: 'No somos una agencia inmobiliaria tradicional. Somos tu asesor de confianza — trabajamos exclusivamente para el comprador, sin conflicto de intereses, buscando siempre el mejor precio y la mejor zona para ti.' },
    servicios: 'Lo que hacemos por ti',
    porque: '¿Por qué elegirnos?',
    cta: { titulo: '¿Empezamos?', subtitulo: 'Cuéntanos qué buscas y te respondemos en menos de 24 horas.', boton: 'Contáctanos →' },
    items: [
      { emoji: '🗺️', titulo: 'Elección de zona', desc: 'Analizamos tu presupuesto, estilo de vida y objetivos para recomendarte el distrito que más te conviene.' },
      { emoji: '💬', titulo: 'Negociación', desc: 'Negociamos en tu nombre. Conocemos los precios reales de cierre de cada zona.' },
      { emoji: '📋', titulo: 'Gestión de la compra', desc: 'Te acompañamos en toda la burocracia: nota simple, escrituras, notaría, impuestos.' },
      { emoji: '🔨', titulo: 'Reforma', desc: 'Coordinamos todo con nuestros arquitectos y constructores de confianza. Presupuesto cerrado desde el primer día.' },
      { emoji: '🔑', titulo: 'Llave en mano', desc: 'Desde que decides comprar hasta que tienes las llaves. Te gestionamos absolutamente todo.' },
      { emoji: '📈', titulo: 'Asesoramiento de inversión', desc: 'Te identificamos las oportunidades con mayor potencial de revalorización antes de que el mercado las descubra.' },
    ],
    razones: ['✅ Trabajamos solo para el comprador — sin comisiones del vendedor', '✅ Conocemos el precio real de cierre de cada distrito', '✅ Más de 100 operaciones acompañadas en Valencia', '✅ Proceso 100% transparente', '✅ Servicio integral desde la búsqueda hasta la reforma'],
  },
  en: {
    hero: { titulo: 'We are your team in Valencia', subtitulo: 'Specialists in finding the perfect place to live or invest in Valencia. We guide you every step of the way.' },
    quienes: { titulo: 'Who are we?', texto1: 'We are a team specialized in the Valencia real estate market. We combine technology, real market data and deep knowledge of each district to help you make the best purchase decision of your life.', texto2: 'We are not a traditional real estate agency. We are your trusted advisor — we work exclusively for the buyer, with no conflict of interest, always seeking the best price and the best area for you.' },
    servicios: 'What we do for you',
    porque: 'Why choose us?',
    cta: { titulo: 'Shall we start?', subtitulo: 'Tell us what you are looking for and we will get back to you within 24 hours.', boton: 'Contact us →' },
    items: [
      { emoji: '🗺️', titulo: 'Area selection', desc: 'We analyze your budget, lifestyle and goals to recommend the best district for you.' },
      { emoji: '💬', titulo: 'Negotiation', desc: 'We negotiate on your behalf. We know the real closing prices in each area.' },
      { emoji: '📋', titulo: 'Purchase management', desc: 'We guide you through all the paperwork: title search, deeds, notary, taxes.' },
      { emoji: '🔨', titulo: 'Renovation', desc: 'We coordinate everything with our trusted architects and builders. Fixed budget from day one.' },
      { emoji: '🔑', titulo: 'Turnkey', desc: 'From the moment you decide to buy until you have the keys. We manage absolutely everything.' },
      { emoji: '📈', titulo: 'Investment advice', desc: 'We identify opportunities with the highest appreciation potential before the market discovers them.' },
    ],
    razones: ['✅ We work only for the buyer — no seller commissions', '✅ We know the real closing price of each district', '✅ Over 100 transactions accompanied in Valencia', '✅ 100% transparent process', '✅ Full service from search to renovation'],
  },
  fr: {
    hero: { titulo: 'Nous sommes votre équipe à Valence', subtitulo: 'Spécialistes pour trouver le lieu parfait pour vivre ou investir à Valence. Nous vous accompagnons à chaque étape.' },
    quienes: { titulo: 'Qui sommes-nous?', texto1: 'Nous sommes une équipe spécialisée dans le marché immobilier de Valence. Nous combinons technologie, données réelles du marché et connaissance approfondie de chaque quartier.', texto2: 'Nous ne sommes pas une agence immobilière traditionnelle. Nous sommes votre conseiller de confiance — nous travaillons exclusivement pour l\'acheteur, sans conflit d\'intérêts.' },
    servicios: 'Ce que nous faisons pour vous',
    porque: 'Pourquoi nous choisir?',
    cta: { titulo: 'On commence?', subtitulo: 'Dites-nous ce que vous cherchez et nous vous répondons en moins de 24 heures.', boton: 'Nous contacter →' },
    items: [
      { emoji: '🗺️', titulo: 'Choix du quartier', desc: 'Nous analysons votre budget, style de vie et objectifs pour vous recommander le meilleur quartier.' },
      { emoji: '💬', titulo: 'Négociation', desc: 'Nous négocions en votre nom. Nous connaissons les prix réels de clôture de chaque zone.' },
      { emoji: '📋', titulo: 'Gestion de l\'achat', desc: 'Nous vous accompagnons dans toute la bureaucratie: acte, notaire, impôts.' },
      { emoji: '🔨', titulo: 'Rénovation', desc: 'Nous coordonnons tout avec nos architectes et constructeurs de confiance.' },
      { emoji: '🔑', titulo: 'Clé en main', desc: 'De la décision d\'achat jusqu\'aux clés. Nous gérons absolument tout.' },
      { emoji: '📈', titulo: 'Conseil en investissement', desc: 'Nous identifions les opportunités à plus fort potentiel de valorisation.' },
    ],
    razones: ['✅ Nous travaillons uniquement pour l\'acheteur', '✅ Nous connaissons le prix réel de clôture de chaque quartier', '✅ Plus de 100 transactions accompagnées à Valence', '✅ Processus 100% transparent', '✅ Service complet de la recherche à la rénovation'],
  },
  de: {
    hero: { titulo: 'Wir sind Ihr Team in Valencia', subtitulo: 'Spezialisten für die Suche nach dem perfekten Ort zum Leben oder Investieren in Valencia.' },
    quienes: { titulo: 'Wer sind wir?', texto1: 'Wir sind ein Team, das auf den Immobilienmarkt in Valencia spezialisiert ist. Wir kombinieren Technologie, echte Marktdaten und tiefes Wissen über jeden Stadtteil.', texto2: 'Wir sind keine traditionelle Immobilienagentur. Wir sind Ihr vertrauenswürdiger Berater — wir arbeiten ausschließlich für den Käufer, ohne Interessenkonflikt.' },
    servicios: 'Was wir für Sie tun',
    porque: 'Warum uns wählen?',
    cta: { titulo: 'Fangen wir an?', subtitulo: 'Sagen Sie uns, was Sie suchen, und wir melden uns innerhalb von 24 Stunden.', boton: 'Kontaktieren Sie uns →' },
    items: [
      { emoji: '🗺️', titulo: 'Stadtteilauswahl', desc: 'Wir analysieren Ihr Budget, Ihren Lebensstil und Ihre Ziele, um den besten Stadtteil zu empfehlen.' },
      { emoji: '💬', titulo: 'Verhandlung', desc: 'Wir verhandeln in Ihrem Namen. Wir kennen die realen Abschlusspreise in jeder Zone.' },
      { emoji: '📋', titulo: 'Kaufabwicklung', desc: 'Wir begleiten Sie durch den gesamten Papierkram: Grundbuch, Notar, Steuern.' },
      { emoji: '🔨', titulo: 'Renovierung', desc: 'Wir koordinieren alles mit unseren vertrauenswürdigen Architekten und Bauunternehmern.' },
      { emoji: '🔑', titulo: 'Schlüsselfertig', desc: 'Von der Kaufentscheidung bis zur Schlüsselübergabe. Wir regeln absolut alles.' },
      { emoji: '📈', titulo: 'Anlageberatung', desc: 'Wir identifizieren Chancen mit dem höchsten Wertsteigerungspotenzial.' },
    ],
    razones: ['✅ Wir arbeiten nur für den Käufer — keine Verkäuferprovisionen', '✅ Wir kennen den realen Abschlusspreis jedes Stadtteils', '✅ Über 100 begleitete Transaktionen in Valencia', '✅ 100% transparenter Prozess', '✅ Vollservice von der Suche bis zur Renovierung'],
  },
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

  const c = contenido[idioma]

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f8faf8' }}>
      <div style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)', padding: '64px 32px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 16px', color: '#fff' }}>{c.hero.titulo}</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>{c.hero.subtitulo}</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#2d5a0e', margin: '0 0 16px' }}>{c.quienes.titulo}</h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>{c.quienes.texto1}</p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', maxWidth: '700px', margin: '16px auto 0' }}>{c.quienes.texto2}</p>
        </div>

        <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#2d5a0e', textAlign: 'center', marginBottom: '32px' }}>{c.servicios}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginBottom: '64px' }}>
          {c.items.map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #e8f0e8', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.emoji}</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#2d5a0e', marginBottom: '8px' }}>{s.titulo}</div>
              <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{s.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#f0f7ec', borderRadius: '20px', padding: '40px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2d5a0e', marginBottom: '24px', textAlign: 'center' }}>{c.porque}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {c.razones.map((item, i) => (
              <div key={i} style={{ fontSize: '15px', color: '#444', lineHeight: '1.6' }}>{item}</div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2d5a0e', marginBottom: '12px' }}>{c.cta.titulo}</h3>
          <p style={{ fontSize: '15px', color: '#666', marginBottom: '24px' }}>{c.cta.subtitulo}</p>
          <Link href="/contactanos" style={{ background: '#2d5a0e', color: '#fff', padding: '14px 36px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', display: 'inline-block' }}>
            {c.cta.boton}
          </Link>
        </div>
      </div>
    </main>
  )
}