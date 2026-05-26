'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
 
const contenido = {
  es: {
    meta: { titulo: 'Contacto — Asesoramiento inmobiliario en Valencia', desc: 'Contacta con nuestro equipo de asesores inmobiliarios especializados en Valencia. Te ayudamos a comprar o invertir en el distrito perfecto.' },
    hero: {
      eyebrow: 'Asesoramiento Personalizado',
      titulo: 'Hablemos sobre tu próxima inversión en Valencia',
      subtitulo: 'Tanto si buscas tu primera vivienda como si quieres invertir en el mercado inmobiliario de Valencia, nuestro equipo de especialistas te guía en cada paso.',
    },
    perfiles: [
      { icono: '🏠', titulo: 'Primera vivienda', desc: 'Te ayudamos a encontrar el barrio ideal según tu presupuesto y estilo de vida, y negociamos el mejor precio por ti.' },
      { icono: '📈', titulo: 'Inversión inmobiliaria', desc: 'Identificamos los distritos con mayor potencial de revalorización antes de que el mercado los descubra.' },
      { icono: '🌍', titulo: 'Comprador internacional', desc: 'Gestionamos todo el proceso de compra en Valencia desde el extranjero. Sin sorpresas ni barreras idiomáticas.' },
    ],
    form: {
      titulo: 'Cuéntanos qué buscas',
      subtitulo: 'Rellena el formulario y un asesor especializado te contactará en menos de 24 horas.',
      nombre: 'Nombre completo *',
      email: 'Email *',
      telefono: 'Teléfono',
      telefonoOpc: '(opcional)',
      perfil: 'Soy...',
      perfilOpciones: ['Comprador de primera vivienda', 'Inversor nacional', 'Inversor internacional', 'Busco vivienda para reformar', 'Otro'],
      presupuesto: 'Presupuesto aproximado',
      presupuestoOpciones: ['Menos de 150.000€', '150.000€ - 250.000€', '250.000€ - 400.000€', '400.000€ - 600.000€', 'Más de 600.000€'],
      mensaje: 'Cuéntanos más *',
      placeholder: 'Describe qué buscas — zona de interés, tamaño, si es para vivir o invertir, plazos...',
      boton: 'Solicitar asesoramiento →',
      enviando: 'Enviando...',
    },
    ok: { titulo: 'Solicitud recibida', subtitulo: 'Un asesor especializado revisará tu consulta y te contactará en menos de 24 horas.', boton: 'Volver al mapa →' },
    error: 'Hubo un error. Escríbenos directamente a todosloscod@gmail.com',
    garantias: [
      { icono: '⚡', titulo: 'Respuesta en 24h', desc: 'Garantizamos respuesta en menos de 24 horas en días laborables.' },
      { icono: '🎯', titulo: 'Asesor especializado', desc: 'Te asignamos el profesional con más experiencia en tu zona de interés.' },
      { icono: '🔒', titulo: 'Sin compromiso', desc: 'La primera consulta es gratuita y sin ningún tipo de compromiso.' },
      { icono: '🌐', titulo: 'Atención internacional', desc: 'Atendemos en español, inglés, francés y alemán.' },
    ],
    faq: {
      titulo: 'Preguntas frecuentes',
      items: [
        { p: '¿Cuánto cuesta vuestro servicio de asesoramiento?', r: 'La primera consulta es completamente gratuita. Si decides continuar con nosotros, nuestros honorarios se acuerdan antes de empezar y son siempre transparentes.' },
        { p: '¿Trabajáis solo en Valencia ciudad?', r: 'Nos especializamos en Valencia ciudad y su área metropolitana, incluyendo todos los 19 distritos y municipios limítrofes.' },
        { p: '¿Podéis ayudar a compradores desde el extranjero?', r: 'Sí, gestionamos procesos completos de compra para clientes internacionales, incluyendo representación legal, gestión de hipoteca y coordinación con notaría.' },
        { p: '¿Cómo sabéis qué barrios van a subir?', r: 'Combinamos datos del Registro de la Propiedad, el Catastro, el INE y señales urbanísticas (nuevas infraestructuras, inversión pública, cambios de zonificación) para identificar oportunidades antes de que el mercado las descubra.' },
      ]
    },
    volver: '← Volver al inicio',
  },
  en: {
    hero: {
      eyebrow: 'Personalised Advisory',
      titulo: "Let's talk about your next investment in Valencia",
      subtitulo: 'Whether you are looking for your first home or want to invest in the Valencia real estate market, our team of specialists guides you every step of the way.',
    },
    perfiles: [
      { icono: '🏠', titulo: 'First home', desc: 'We help you find the ideal neighbourhood according to your budget and lifestyle, and negotiate the best price for you.' },
      { icono: '📈', titulo: 'Real estate investment', desc: 'We identify districts with the highest appreciation potential before the market discovers them.' },
      { icono: '🌍', titulo: 'International buyer', desc: 'We manage the entire purchase process in Valencia from abroad. No surprises or language barriers.' },
    ],
    form: {
      titulo: 'Tell us what you are looking for',
      subtitulo: 'Fill in the form and a specialist advisor will contact you within 24 hours.',
      nombre: 'Full name *',
      email: 'Email *',
      telefono: 'Phone',
      telefonoOpc: '(optional)',
      perfil: 'I am...',
      perfilOpciones: ['First-time buyer', 'National investor', 'International investor', 'Looking for a renovation project', 'Other'],
      presupuesto: 'Approximate budget',
      presupuestoOpciones: ['Under €150,000', '€150,000 - €250,000', '€250,000 - €400,000', '€400,000 - €600,000', 'Over €600,000'],
      mensaje: 'Tell us more *',
      placeholder: 'Describe what you are looking for — area of interest, size, whether to live or invest, timeframe...',
      boton: 'Request advisory →',
      enviando: 'Sending...',
    },
    ok: { titulo: 'Request received', subtitulo: 'A specialist advisor will review your inquiry and contact you within 24 hours.', boton: 'Back to map →' },
    error: 'There was an error. Write to us directly at todosloscod@gmail.com',
    garantias: [
      { icono: '⚡', titulo: 'Response within 24h', desc: 'We guarantee a response within 24 hours on working days.' },
      { icono: '🎯', titulo: 'Specialist advisor', desc: 'We assign you the professional with the most experience in your area of interest.' },
      { icono: '🔒', titulo: 'No commitment', desc: 'The first consultation is free and with no commitment whatsoever.' },
      { icono: '🌐', titulo: 'International service', desc: 'We attend in Spanish, English, French and German.' },
    ],
    faq: {
      titulo: 'Frequently asked questions',
      items: [
        { p: 'How much does your advisory service cost?', r: 'The first consultation is completely free. If you decide to continue with us, our fees are agreed before we start and are always transparent.' },
        { p: 'Do you only work in Valencia city?', r: 'We specialise in Valencia city and its metropolitan area, including all 19 districts and neighbouring municipalities.' },
        { p: 'Can you help buyers from abroad?', r: 'Yes, we manage complete purchase processes for international clients, including legal representation, mortgage management and notary coordination.' },
        { p: 'How do you know which neighbourhoods will rise in value?', r: 'We combine data from the Property Registry, the Cadastre, the INE and urban signals (new infrastructure, public investment, zoning changes) to identify opportunities before the market discovers them.' },
      ]
    },
    volver: '← Back to home',
  },
  fr: {
    hero: {
      eyebrow: 'Conseil Personnalisé',
      titulo: 'Parlons de votre prochain investissement à Valence',
      subtitulo: 'Que vous cherchiez votre premier logement ou souhaitiez investir sur le marché immobilier valencien, notre équipe de spécialistes vous guide à chaque étape.',
    },
    perfiles: [
      { icono: '🏠', titulo: 'Premier logement', desc: 'Nous vous aidons à trouver le quartier idéal selon votre budget et votre style de vie, et négocions le meilleur prix pour vous.' },
      { icono: '📈', titulo: 'Investissement immobilier', desc: 'Nous identifions les quartiers au plus fort potentiel de valorisation avant que le marché ne les découvre.' },
      { icono: '🌍', titulo: 'Acheteur international', desc: 'Nous gérons l\'ensemble du processus d\'achat à Valence depuis l\'étranger. Sans surprises ni barrières linguistiques.' },
    ],
    form: {
      titulo: 'Dites-nous ce que vous cherchez',
      subtitulo: 'Remplissez le formulaire et un conseiller spécialisé vous contactera en moins de 24 heures.',
      nombre: 'Nom complet *',
      email: 'Email *',
      telefono: 'Téléphone',
      telefonoOpc: '(optionnel)',
      perfil: 'Je suis...',
      perfilOpciones: ['Primo-accédant', 'Investisseur national', 'Investisseur international', 'Cherche un projet de rénovation', 'Autre'],
      presupuesto: 'Budget approximatif',
      presupuestoOpciones: ['Moins de 150.000€', '150.000€ - 250.000€', '250.000€ - 400.000€', '400.000€ - 600.000€', 'Plus de 600.000€'],
      mensaje: 'Dites-nous en plus *',
      placeholder: 'Décrivez ce que vous cherchez — zone d\'intérêt, surface, pour vivre ou investir, délais...',
      boton: 'Demander un conseil →',
      enviando: 'Envoi...',
    },
    ok: { titulo: 'Demande reçue', subtitulo: 'Un conseiller spécialisé examinera votre demande et vous contactera en moins de 24 heures.', boton: 'Retour à la carte →' },
    error: 'Une erreur s\'est produite. Écrivez-nous directement à todosloscod@gmail.com',
    garantias: [
      { icono: '⚡', titulo: 'Réponse en 24h', desc: 'Nous garantissons une réponse en moins de 24 heures les jours ouvrables.' },
      { icono: '🎯', titulo: 'Conseiller spécialisé', desc: 'Nous vous assignons le professionnel le plus expérimenté dans votre zone d\'intérêt.' },
      { icono: '🔒', titulo: 'Sans engagement', desc: 'La première consultation est gratuite et sans aucun engagement.' },
      { icono: '🌐', titulo: 'Service international', desc: 'Nous répondons en espagnol, anglais, français et allemand.' },
    ],
    faq: {
      titulo: 'Questions fréquentes',
      items: [
        { p: 'Combien coûte votre service de conseil?', r: 'La première consultation est entièrement gratuite. Si vous décidez de continuer avec nous, nos honoraires sont convenus avant de commencer et sont toujours transparents.' },
        { p: 'Travaillez-vous uniquement à Valence ville?', r: 'Nous nous spécialisons dans la ville de Valence et son aire métropolitaine, incluant les 19 districts et les municipalités limitrophes.' },
        { p: 'Pouvez-vous aider des acheteurs de l\'étranger?', r: 'Oui, nous gérons des processus d\'achat complets pour des clients internationaux, incluant la représentation juridique, la gestion hypothécaire et la coordination notariale.' },
        { p: 'Comment savez-vous quels quartiers vont monter?', r: 'Nous combinons les données du Registre de la Propriété, du Cadastre, de l\'INE et des signaux urbanistiques pour identifier les opportunités avant que le marché ne les découvre.' },
      ]
    },
    volver: '← Retour à l\'accueil',
  },
  de: {
    hero: {
      eyebrow: 'Persönliche Beratung',
      titulo: 'Lassen Sie uns über Ihre nächste Investition in Valencia sprechen',
      subtitulo: 'Ob Sie Ihr erstes Zuhause suchen oder in den Immobilienmarkt Valencia investieren möchten, unser Spezialistenteam begleitet Sie bei jedem Schritt.',
    },
    perfiles: [
      { icono: '🏠', titulo: 'Erstkauf', desc: 'Wir helfen Ihnen, das ideale Viertel nach Ihrem Budget und Lebensstil zu finden, und verhandeln den besten Preis für Sie.' },
      { icono: '📈', titulo: 'Immobilieninvestition', desc: 'Wir identifizieren Stadtteile mit dem höchsten Wertsteigerungspotenzial, bevor der Markt sie entdeckt.' },
      { icono: '🌍', titulo: 'Internationaler Käufer', desc: 'Wir verwalten den gesamten Kaufprozess in Valencia vom Ausland aus. Keine Überraschungen oder Sprachbarrieren.' },
    ],
    form: {
      titulo: 'Sagen Sie uns, was Sie suchen',
      subtitulo: 'Füllen Sie das Formular aus und ein spezialisierter Berater wird sich innerhalb von 24 Stunden bei Ihnen melden.',
      nombre: 'Vollständiger Name *',
      email: 'Email *',
      telefono: 'Telefon',
      telefonoOpc: '(optional)',
      perfil: 'Ich bin...',
      perfilOpciones: ['Erstkäufer', 'Nationaler Investor', 'Internationaler Investor', 'Suche Renovierungsprojekt', 'Sonstiges'],
      presupuesto: 'Ungefähres Budget',
      presupuestoOpciones: ['Unter 150.000€', '150.000€ - 250.000€', '250.000€ - 400.000€', '400.000€ - 600.000€', 'Über 600.000€'],
      mensaje: 'Erzählen Sie uns mehr *',
      placeholder: 'Beschreiben Sie, was Sie suchen — Interessensgebiet, Größe, zum Leben oder Investieren, Zeitrahmen...',
      boton: 'Beratung anfordern →',
      enviando: 'Senden...',
    },
    ok: { titulo: 'Anfrage erhalten', subtitulo: 'Ein spezialisierter Berater wird Ihre Anfrage prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.', boton: 'Zurück zur Karte →' },
    error: 'Es gab einen Fehler. Schreiben Sie uns direkt an todosloscod@gmail.com',
    garantias: [
      { icono: '⚡', titulo: 'Antwort in 24h', desc: 'Wir garantieren eine Antwort innerhalb von 24 Stunden an Werktagen.' },
      { icono: '🎯', titulo: 'Spezialisierter Berater', desc: 'Wir weisen Ihnen den erfahrensten Fachmann für Ihr Interessensgebiet zu.' },
      { icono: '🔒', titulo: 'Ohne Verpflichtung', desc: 'Die erste Beratung ist kostenlos und ohne jegliche Verpflichtung.' },
      { icono: '🌐', titulo: 'Internationaler Service', desc: 'Wir betreuen auf Spanisch, Englisch, Französisch und Deutsch.' },
    ],
    faq: {
      titulo: 'Häufig gestellte Fragen',
      items: [
        { p: 'Was kostet Ihr Beratungsservice?', r: 'Die erste Beratung ist völlig kostenlos. Wenn Sie sich entscheiden, mit uns weiterzumachen, werden unsere Honorare vor Beginn vereinbart und sind immer transparent.' },
        { p: 'Arbeiten Sie nur in der Stadt Valencia?', r: 'Wir sind auf die Stadt Valencia und ihre Metropolregion spezialisiert, einschließlich aller 19 Stadtteile und angrenzenden Gemeinden.' },
        { p: 'Können Sie Käufern aus dem Ausland helfen?', r: 'Ja, wir verwalten vollständige Kaufprozesse für internationale Kunden, einschließlich rechtlicher Vertretung, Hypothekenverwaltung und Notarkoordination.' },
        { p: 'Wie wissen Sie, welche Viertel im Wert steigen werden?', r: 'Wir kombinieren Daten aus dem Grundbuch, dem Kataster, dem INE und urbanistischen Signalen, um Chancen zu identifizieren, bevor der Markt sie entdeckt.' },
      ]
    },
    volver: '← Zurück zur Startseite',
  },
}
 
const inputStyle = { width: '100%', padding: '12px 16px', border: '1px solid #D4C9B0', borderRadius: '6px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'Arial, sans-serif', background: '#FAFAF8', color: '#0B1F3A' }
const labelStyle = { fontSize: '12px', fontWeight: '600', color: '#0B1F3A', display: 'block', marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }
 
export default function Contactanos() {
  const [idioma, setIdioma] = useState('es')
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', perfil: '', presupuesto: '', mensaje: '' })
  const [estado, setEstado] = useState(null)
  const [faqAbierto, setFaqAbierto] = useState(null)
 
  useEffect(() => {
    const guardado = localStorage.getItem('idioma') || 'es'
    setIdioma(guardado)
    const handler = () => setIdioma(localStorage.getItem('idioma') || 'es')
    window.addEventListener('idiomaChange', handler)
    return () => window.removeEventListener('idiomaChange', handler)
  }, [])
 
  const c = contenido[idioma]
 
  const handleSubmit = async () => {
    if (!form.nombre || !form.email || !form.mensaje) {
      alert(idioma === 'es' ? 'Por favor rellena nombre, email y mensaje' : 'Please fill in name, email and message')
      return
    }
    setEstado('enviando')
    try {
      const res = await fetch('https://formspree.io/f/xlgzdzpl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) { setEstado('ok'); setForm({ nombre: '', email: '', telefono: '', perfil: '', presupuesto: '', mensaje: '' }) }
      else setEstado('error')
    } catch { setEstado('error') }
  }
 
  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#F8F5EF' }}>
 
      {/* HERO */}
      <div style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)', padding: '80px 48px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif' }}>{c.hero.eyebrow}</span>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          </div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#FFFFFF', marginBottom: '20px', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>{c.hero.titulo}</h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Arial, sans-serif', lineHeight: '1.7', maxWidth: '620px', margin: '0 auto' }}>{c.hero.subtitulo}</p>
        </div>
      </div>
 
      {/* PERFILES */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '64px' }}>
          {c.perfiles.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #D4C9B0', boxShadow: '0 2px 12px rgba(11,31,58,0.06)' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>{p.icono}</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>{p.titulo}</div>
              <div style={{ fontSize: '14px', color: '#4A5568', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>{p.desc}</div>
            </div>
          ))}
        </div>
 
        {/* FORMULARIO */}
        {estado === 'ok' ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '64px 48px', textAlign: 'center', border: '1px solid #D4C9B0', marginBottom: '64px' }}>
            <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#0B1F3A', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>{c.ok.titulo}</h2>
            <p style={{ fontSize: '16px', color: '#4A5568', marginBottom: '32px', fontFamily: 'Arial, sans-serif' }}>{c.ok.subtitulo}</p>
            <Link href="/" style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '14px 32px', borderRadius: '4px', fontWeight: '700', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>{c.ok.boton}</Link>
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: '20px', padding: '48px', border: '1px solid #D4C9B0', boxShadow: '0 4px 32px rgba(11,31,58,0.08)', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#0B1F3A', marginBottom: '8px', fontFamily: 'Georgia, serif' }}>{c.form.titulo}</h2>
            <p style={{ fontSize: '15px', color: '#8A9BB0', marginBottom: '36px', fontFamily: 'Arial, sans-serif' }}>{c.form.subtitulo}</p>
 
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>{c.form.nombre}</label>
                <input type="text" placeholder={idioma === 'es' ? 'Tu nombre completo' : idioma === 'en' ? 'Your full name' : idioma === 'fr' ? 'Votre nom complet' : 'Ihr vollständiger Name'} value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{c.form.email}</label>
                <input type="email" placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
              </div>
            </div>
 
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>{c.form.telefono} <span style={{ color: '#8A9BB0', fontWeight: '400' }}>{c.form.telefonoOpc}</span></label>
                <input type="tel" placeholder="+34 600 000 000" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{c.form.perfil}</label>
                <select value={form.perfil} onChange={e => setForm({ ...form, perfil: e.target.value })} style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="">—</option>
                  {c.form.perfilOpciones.map((op, i) => <option key={i} value={op}>{op}</option>)}
                </select>
              </div>
            </div>
 
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>{c.form.presupuesto}</label>
              <select value={form.presupuesto} onChange={e => setForm({ ...form, presupuesto: e.target.value })} style={{ ...inputStyle, appearance: 'none' }}>
                <option value="">—</option>
                {c.form.presupuestoOpciones.map((op, i) => <option key={i} value={op}>{op}</option>)}
              </select>
            </div>
 
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>{c.form.mensaje}</label>
              <textarea placeholder={c.form.placeholder} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
 
            <button onClick={handleSubmit} disabled={estado === 'enviando'} style={{ width: '100%', background: estado === 'enviando' ? '#aaa' : 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '16px', borderRadius: '4px', border: 'none', fontSize: '13px', fontWeight: '700', cursor: estado === 'enviando' ? 'not-allowed' : 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>
              {estado === 'enviando' ? c.form.enviando : c.form.boton}
            </button>
 
            {estado === 'error' && <p style={{ color: '#e74c3c', fontSize: '13px', textAlign: 'center', marginTop: '12px', fontFamily: 'Arial, sans-serif' }}>{c.error}</p>}
          </div>
        )}
 
        {/* GARANTÍAS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '64px' }}>
          {c.garantias.map((g, i) => (
            <div key={i} style={{ background: '#0B1F3A', borderRadius: '12px', padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{g.icono}</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#E8C97A', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>{g.titulo}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>{g.desc}</div>
            </div>
          ))}
        </div>
 
        {/* FAQ */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif' }}>{c.faq.titulo}</h2>
          </div>
          {c.faq.items.map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', marginBottom: '12px', border: '1px solid #D4C9B0', overflow: 'hidden' }}>
              <button onClick={() => setFaqAbierto(faqAbierto === i ? null : i)} style={{ width: '100%', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#0B1F3A', fontFamily: 'Georgia, serif' }}>{item.p}</span>
                <span style={{ color: '#C9A84C', fontSize: '20px', flexShrink: 0, marginLeft: '16px' }}>{faqAbierto === i ? '−' : '+'}</span>
              </button>
              {faqAbierto === i && (
                <div style={{ padding: '0 24px 20px', fontSize: '14px', color: '#4A5568', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>{item.r}</div>
              )}
            </div>
          ))}
        </div>
 
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Link href="/" style={{ color: '#C9A84C', fontSize: '13px', fontFamily: 'Arial, sans-serif', textDecoration: 'none', letterSpacing: '0.08em' }}>{c.volver}</Link>
        </div>
      </div>
    </main>
  )
}