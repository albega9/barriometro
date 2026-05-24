'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { t } from './data/traducciones'

const Mapa = dynamic(() => import('./components/Mapa'), { ssr: false })

export default function Home() {
  const [idioma, setIdioma] = useState('es')

  useEffect(() => {
    const guardado = localStorage.getItem('idioma') || 'es'
    setIdioma(guardado)
    const handler = () => setIdioma(localStorage.getItem('idioma') || 'es')
    window.addEventListener('idiomaChange', handler)
    return () => window.removeEventListener('idiomaChange', handler)
  }, [])

  const tr = t[idioma]

  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#F8F5EF' }}>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)',
        padding: '100px 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decoración dorada */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div style={{ position: 'absolute', top: '40px', right: '80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif' }}>Valencia Real Estate Intelligence</span>
          </div>

          <h1 style={{
            fontSize: '54px',
            fontWeight: '700',
            color: '#FFFFFF',
            lineHeight: '1.15',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif',
          }}>{tr.hero.titulo}</h1>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.7',
            maxWidth: '580px',
            marginBottom: '48px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: '400',
          }}>{tr.hero.subtitulo}</p>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {[tr.hero.badge1, tr.hero.badge2, tr.hero.badge3].map((badge, i) => (
              <div key={i} style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '13px',
                color: '#E8C97A',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '0.02em',
              }}>{badge}</div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', paddingTop: '40px', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
            {[
              { valor: '19', label: idioma === 'es' ? 'Distritos analizados' : idioma === 'en' ? 'Districts analyzed' : idioma === 'fr' ? 'Quartiers analysés' : 'Stadtteile analysiert' },
              { valor: '-8%', label: idioma === 'es' ? 'Margen de negociación medio' : idioma === 'en' ? 'Average negotiation margin' : idioma === 'fr' ? 'Marge de négociation moyenne' : 'Durchschn. Verhandlungsspielraum' },
              { valor: '+26%', label: idioma === 'es' ? 'Máx. revalorización estimada' : idioma === 'en' ? 'Max. estimated appreciation' : idioma === 'fr' ? 'Valorisation max. estimée' : 'Max. geschätzte Wertsteigerung' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '36px', fontWeight: '700', color: '#C9A84C', fontFamily: 'Georgia, serif', marginBottom: '4px' }}>{stat.valor}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTRO SECCIÓN MAPA */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 48px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif' }}>
            {idioma === 'es' ? 'Análisis de mercado' : idioma === 'en' ? 'Market analysis' : idioma === 'fr' ? 'Analyse du marché' : 'Marktanalyse'}
          </span>
        </div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#0B1F3A', marginBottom: '12px' }}>
          {idioma === 'es' ? 'Mapa de oportunidades' : idioma === 'en' ? 'Opportunity map' : idioma === 'fr' ? 'Carte des opportunités' : 'Chancenkarte'}
        </h2>
        <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: '1.7', fontFamily: 'Arial, sans-serif', maxWidth: '600px' }}>
          {idioma === 'es' ? 'Clica cualquier distrito para ver el precio real de cierre, la revalorización estimada y las estrategias de compra recomendadas.' : idioma === 'en' ? 'Click any district to see the real closing price, estimated appreciation and recommended purchase strategies.' : idioma === 'fr' ? 'Cliquez sur un quartier pour voir le prix réel, la valorisation estimée et les stratégies d\'achat.' : 'Klicken Sie auf einen Stadtteil für den realen Abschlusspreis, geschätzte Wertsteigerung und Kaufstrategien.'}
        </p>
      </div>

      {/* MAPA */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px 80px' }}>
        <Mapa idioma={idioma} />
      </div>

      {/* CTA */}
      <div style={{
        background: '#0B1F3A',
        padding: '80px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif' }}>Advisory</span>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>{tr.cta.titulo}</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>{tr.cta.subtitulo}</p>
          <Link href="/contactanos" style={{
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            color: '#0B1F3A',
            padding: '16px 40px',
            borderRadius: '4px',
            fontWeight: '700',
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-block',
            fontFamily: 'Arial, sans-serif',
          }}>{tr.cta.boton}</Link>
        </div>
      </div>

    </main>
  )
}