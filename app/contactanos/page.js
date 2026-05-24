'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const contenido = {
  es: {
    hero: { titulo: 'Hablemos', subtitulo: 'Cuéntanos qué buscas y te respondemos en menos de 24 horas.' },
    form: { titulo: 'Envíanos un mensaje', subtitulo: 'Rellena el formulario y te contactamos personalmente.', nombre: 'Nombre *', email: 'Email *', telefono: 'Teléfono', telefonoOpc: '(opcional)', mensaje: 'Mensaje *', placeholder: 'Cuéntanos qué buscas — zona, presupuesto, si es para vivir o invertir...', boton: 'Enviar mensaje →', enviando: 'Enviando...' },
    ok: { titulo: 'Mensaje enviado', subtitulo: 'Te respondemos en menos de 24 horas.', boton: 'Volver al mapa →' },
    error: 'Hubo un error. Escríbenos directamente a todosloscod@gmail.com',
    directo: { email: 'Email directo', tiempo: 'Tiempo de respuesta', tiempoVal: 'Menos de 24 horas' },
  },
  en: {
    hero: { titulo: "Let's talk", subtitulo: 'Tell us what you are looking for and we will get back to you within 24 hours.' },
    form: { titulo: 'Send us a message', subtitulo: 'Fill in the form and we will contact you personally.', nombre: 'Name *', email: 'Email *', telefono: 'Phone', telefonoOpc: '(optional)', mensaje: 'Message *', placeholder: 'Tell us what you are looking for — area, budget, whether to live or invest...', boton: 'Send message →', enviando: 'Sending...' },
    ok: { titulo: 'Message sent', subtitulo: 'We will get back to you within 24 hours.', boton: 'Back to map →' },
    error: 'There was an error. Write to us directly at todosloscod@gmail.com',
    directo: { email: 'Direct email', tiempo: 'Response time', tiempoVal: 'Less than 24 hours' },
  },
  fr: {
    hero: { titulo: 'Parlons-en', subtitulo: 'Dites-nous ce que vous cherchez et nous vous répondons en moins de 24 heures.' },
    form: { titulo: 'Envoyez-nous un message', subtitulo: 'Remplissez le formulaire et nous vous contacterons personnellement.', nombre: 'Nom *', email: 'Email *', telefono: 'Téléphone', telefonoOpc: '(optionnel)', mensaje: 'Message *', placeholder: 'Dites-nous ce que vous cherchez — quartier, budget, pour vivre ou investir...', boton: 'Envoyer le message →', enviando: 'Envoi...' },
    ok: { titulo: 'Message envoyé', subtitulo: 'Nous vous répondons en moins de 24 heures.', boton: 'Retour à la carte →' },
    error: 'Une erreur s\'est produite. Écrivez-nous directement à todosloscod@gmail.com',
    directo: { email: 'Email direct', tiempo: 'Temps de réponse', tiempoVal: 'Moins de 24 heures' },
  },
  de: {
    hero: { titulo: 'Sprechen wir', subtitulo: 'Sagen Sie uns, was Sie suchen, und wir melden uns innerhalb von 24 Stunden.' },
    form: { titulo: 'Senden Sie uns eine Nachricht', subtitulo: 'Füllen Sie das Formular aus und wir kontaktieren Sie persönlich.', nombre: 'Name *', email: 'Email *', telefono: 'Telefon', telefonoOpc: '(optional)', mensaje: 'Nachricht *', placeholder: 'Sagen Sie uns, was Sie suchen — Stadtteil, Budget, zum Leben oder Investieren...', boton: 'Nachricht senden →', enviando: 'Senden...' },
    ok: { titulo: 'Nachricht gesendet', subtitulo: 'Wir melden uns innerhalb von 24 Stunden.', boton: 'Zurück zur Karte →' },
    error: 'Es gab einen Fehler. Schreiben Sie uns direkt an todosloscod@gmail.com',
    directo: { email: 'Direkte E-Mail', tiempo: 'Antwortzeit', tiempoVal: 'Weniger als 24 Stunden' },
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
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f8faf8' }}>
      <div style={{ background: 'linear-gradient(135deg, #2d5a0e 0%, #4a8c1c 100%)', padding: '64px 32px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 16px' }}>{c.hero.titulo}</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '500px', margin: '0 auto' }}>{c.hero.subtitulo}</p>
      </div>

      <div style={{ maxWidth: '620px', margin: '0 auto', padding: '64px 24px' }}>
        {estado === 'ok' ? (
          <div style={{ background: '#f0f7ec', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#2d5a0e', marginBottom: '8px' }}>{c.ok.titulo}</h2>
            <p style={{ fontSize: '15px', color: '#555', marginBottom: '24px' }}>{c.ok.subtitulo}</p>
            <Link href="/" style={{ background: '#2d5a0e', color: '#fff', padding: '12px 28px', borderRadius: '30px', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>{c.ok.boton}</Link>
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', border: '1px solid #e8f0e8', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#2d5a0e', marginBottom: '8px' }}>{c.form.titulo}</h2>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '28px' }}>{c.form.subtitulo}</p>

            {[
              { label: c.form.nombre, key: 'nombre', type: 'text', placeholder: idioma === 'es' ? 'Tu nombre' : idioma === 'en' ? 'Your name' : idioma === 'fr' ? 'Votre nom' : 'Ihr Name' },
              { label: c.form.email, key: 'email', type: 'email', placeholder: 'email@example.com' },
              { label: `${c.form.telefono} ${c.form.telefonoOpc}`, key: 'telefono', type: 'tel', placeholder: '+34 600 000 000' },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            ))}

            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', display: 'block', marginBottom: '6px' }}>{c.form.mensaje}</label>
              <textarea placeholder={c.form.placeholder} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} rows={5}
                style={{ width: '100%', padding: '12px 14px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'sans-serif' }} />
            </div>

            <button onClick={handleSubmit} disabled={estado === 'enviando'}
              style={{ width: '100%', background: estado === 'enviando' ? '#aaa' : '#2d5a0e', color: '#fff', padding: '14px', borderRadius: '30px', border: 'none', fontSize: '16px', fontWeight: '700', cursor: estado === 'enviando' ? 'not-allowed' : 'pointer' }}>
              {estado === 'enviando' ? c.form.enviando : c.form.boton}
            </button>

            {estado === 'error' && <p style={{ color: '#e74c3c', fontSize: '13px', textAlign: 'center', marginTop: '12px' }}>{c.error}</p>}
          </div>
        )}

       <div style={{ marginTop: '32px', background: '#fff', borderRadius: '16px', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
  <div style={{
    width: '56px', height: '56px', flexShrink: 0,
    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
    borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '24px'
  }}>👔</div>
  <div>
    <div style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', fontFamily: 'Georgia, serif', marginBottom: '6px' }}>
      {idioma === 'es' ? 'Un asesor especialista te contactará' :
       idioma === 'en' ? 'A specialist advisor will contact you' :
       idioma === 'fr' ? 'Un conseiller spécialisé vous contactera' :
       'Ein Fachberater wird Sie kontaktieren'}
    </div>
    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      {idioma === 'es' ? 'Analizamos tu consulta y te asignamos el profesional con mayor experiencia en la zona que te interesa. Respuesta garantizada en menos de 24 horas.' :
       idioma === 'en' ? 'We analyze your inquiry and assign you the professional with the most experience in your area of interest. Response guaranteed within 24 hours.' :
       idioma === 'fr' ? 'Nous analysons votre demande et vous assignons le professionnel le plus expérimenté dans votre zone d\'intérêt. Réponse garantie en moins de 24 heures.' :
       'Wir analysieren Ihre Anfrage und weisen Ihnen den erfahrensten Fachmann für Ihre Interessenregion zu. Antwort garantiert innerhalb von 24 Stunden.'}
    </div>
  </div>
</div>
          <div style={{ background: '#fff', borderRadius: '14px', padding: '20px', border: '1px solid #e8f0e8', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⏱️</div>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>{c.directo.tiempo}</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#2d5a0e' }}>{c.directo.tiempoVal}</div>
          </div>
        </div>
      
    </main>
  )
}