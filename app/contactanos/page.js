'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const contenido = {
  es: {
    hero: { titulo: 'Hablemos', subtitulo: 'Cuéntanos qué buscas y te respondemos en menos de 24 horas.' },
    form: { titulo: 'Envíanos un mensaje', subtitulo: 'Rellena el formulario y te contactamos personalmente.', nombre: 'Nombre *', email: 'Email *', telefono: 'Teléfono', telefonoOpc: '(opcional)', mensaje: 'Mensaje *', placeholder: 'Cuéntanos qué buscas — zona, presupuesto, si es para vivir o invertir...', boton: 'Enviar mensaje →', enviando: 'Enviando...' },
    ok: { titulo: 'Mensaje enviado', subtitulo: 'Te respondemos en menos de 24 horas.', boton: 'Volver al mapa →' },
    error: 'Hubo un error. Escríbenos directamente a todosloscod@gmail.com',
    asesor: { titulo: 'Un asesor especialista te contactará', desc: 'Analizamos tu consulta y te asignamos el profesional con mayor experiencia en la zona que te interesa. Respuesta garantizada en menos de 24 horas.' },
  },
  en: {
    hero: { titulo: "Let's talk", subtitulo: 'Tell us what you are looking for and we will get back to you within 24 hours.' },
    form: { titulo: 'Send us a message', subtitulo: 'Fill in the form and we will contact you personally.', nombre: 'Name *', email: 'Email *', telefono: 'Phone', telefonoOpc: '(optional)', mensaje: 'Message *', placeholder: 'Tell us what you are looking for — area, budget, whether to live or invest...', boton: 'Send message →', enviando: 'Sending...' },
    ok: { titulo: 'Message sent', subtitulo: 'We will get back to you within 24 hours.', boton: 'Back to map →' },
    error: 'There was an error. Write to us directly at todosloscod@gmail.com',
    asesor: { titulo: 'A specialist advisor will contact you', desc: 'We analyze your inquiry and assign you the professional with the most experience in your area of interest. Response guaranteed within 24 hours.' },
  },
  fr: {
    hero: { titulo: 'Parlons-en', subtitulo: 'Dites-nous ce que vous cherchez et nous vous répondons en moins de 24 heures.' },
    form: { titulo: 'Envoyez-nous un message', subtitulo: 'Remplissez le formulaire et nous vous contacterons personnellement.', nombre: 'Nom *', email: 'Email *', telefono: 'Téléphone', telefonoOpc: '(optionnel)', mensaje: 'Message *', placeholder: 'Dites-nous ce que vous cherchez — quartier, budget, pour vivre ou investir...', boton: 'Envoyer le message →', enviando: 'Envoi...' },
    ok: { titulo: 'Message envoyé', subtitulo: 'Nous vous répondons en moins de 24 heures.', boton: 'Retour à la carte →' },
    error: "Une erreur s'est produite. Écrivez-nous directement à todosloscod@gmail.com",
    asesor: { titulo: 'Un conseiller spécialisé vous contactera', desc: "Nous analysons votre demande et vous assignons le professionnel le plus expérimenté dans votre zone d'intérêt. Réponse garantie en moins de 24 heures." },
  },
  de: {
    hero: { titulo: 'Sprechen wir', subtitulo: 'Sagen Sie uns, was Sie suchen, und wir melden uns innerhalb von 24 Stunden.' },
    form: { titulo: 'Senden Sie uns eine Nachricht', subtitulo: 'Füllen Sie das Formular aus und wir kontaktieren Sie persönlich.', nombre: 'Name *', email: 'Email *', telefono: 'Telefon', telefonoOpc: '(optional)', mensaje: 'Nachricht *', placeholder: 'Sagen Sie uns, was Sie suchen — Stadtteil, Budget, zum Leben oder Investieren...', boton: 'Nachricht senden →', enviando: 'Senden...' },
    ok: { titulo: 'Nachricht gesendet', subtitulo: 'Wir melden uns innerhalb von 24 Stunden.', boton: 'Zurück zur Karte →' },
    error: 'Es gab einen Fehler. Schreiben Sie uns direkt an todosloscod@gmail.com',
    asesor: { titulo: 'Ein Fachberater wird Sie kontaktieren', desc: 'Wir analysieren Ihre Anfrage und weisen Ihnen den erfahrensten Fachmann für Ihre Interessenregion zu. Antwort garantiert innerhalb von 24 Stunden.' },
  },
}

export default function Contactanos() {
  const [idioma, setIdioma] = useState('es')
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [estado, setEstado] = useState(null)

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
      if (res.ok) { setEstado('ok'); setForm({ nombre: '', email: '', telefono: '', mensaje: '' }) }
      else setEstado('error')
    } catch { setEstado('error') }
  }

  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#F8F5EF' }}>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)',
        padding: '80px 48px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif' }}>Advisory</span>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>{c.hero.titulo}</h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>{c.hero.subtitulo}</p>
        </div>
      </div>

      <div style={{ maxWidth: '620px', margin: '0 auto', padding: '64px 24px' }}>

        {estado === 'ok' ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid #D4C9B0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0B1F3A', marginBottom: '8px', fontFamily: 'Georgia, serif' }}>{c.ok.titulo}</h2>
            <p style={{ fontSize: '15px', color: '#4A5568', marginBottom: '24px', fontFamily: 'Arial, sans-serif' }}>{c.ok.subtitulo}</p>
            <Link href="/" style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '12px 28px', borderRadius: '4px', fontWeight: '700', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>{c.ok.boton}</Link>
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #D4C9B0', boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0B1F3A', marginBottom: '8px', fontFamily: 'Georgia, serif' }}>{c.form.titulo}</h2>
            <p style={{ fontSize: '14px', color: '#8A9BB0', marginBottom: '28px', fontFamily: 'Arial, sans-serif' }}>{c.form.subtitulo}</p>

            {[
              { label: c.form.nombre, key: 'nombre', type: 'text', placeholder: idioma === 'es' ? 'Tu nombre' : idioma === 'en' ? 'Your name' : idioma === 'fr' ? 'Votre nom' : 'Ihr Name' },
              { label: c.form.email, key: 'email', type: 'email', placeholder: 'email@example.com' },
              { label: `${c.form.telefono} ${c.form.telefonoOpc}`, key: 'telefono', type: 'tel', placeholder: '+34 600 000 000' },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#0B1F3A', display: 'block', marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #D4C9B0', borderRadius: '6px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: 'Arial, sans-serif', background: '#FAFAF8', color: '#0B1F3A' }} />
              </div>
            ))}

            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#0B1F3A', display: 'block', marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>{c.form.mensaje}</label>
              <textarea placeholder={c.form.placeholder} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} rows={5}
                style={{ width: '100%', padding: '12px 16px', border: '1px solid #D4C9B0', borderRadius: '6px', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'Arial, sans-serif', background: '#FAFAF8', color: '#0B1F3A' }} />
            </div>

            <button onClick={handleSubmit} disabled={estado === 'enviando'}
              style={{ width: '100%', background: estado === 'enviando' ? '#aaa' : 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '14px', borderRadius: '4px', border: 'none', fontSize: '13px', fontWeight: '700', cursor: estado === 'enviando' ? 'not-allowed' : 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>
              {estado === 'enviando' ? c.form.enviando : c.form.boton}
            </button>

            {estado === 'error' && <p style={{ color: '#e74c3c', fontSize: '13px', textAlign: 'center', marginTop: '12px', fontFamily: 'Arial, sans-serif' }}>{c.error}</p>}
          </div>
        )}

        {/* ASESOR */}
        <div style={{ marginTop: '24px', background: '#F8F5EF', borderRadius: '16px', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #D4C9B0' }}>
          <div style={{
            width: '52px', height: '52px', flexShrink: 0,
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px'
          }}>👔</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', marginBottom: '6px' }}>{c.asesor.titulo}</div>
            <div style={{ fontSize: '13px', color: '#4A5568', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>{c.asesor.desc}</div>
          </div>
        </div>

      </div>
    </main>
  )
}
