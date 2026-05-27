'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { t } from '../data/traducciones'

const Mapa = dynamic(() => import('../components/Mapa'), { ssr: false })

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
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f8faf8' }}>
      <div style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)', padding: '48px 32px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 12px', color: '#fff' }}>{tr.hero.titulo}</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, margin: '0 0 24px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>{tr.hero.subtitulo}</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.15)', padding: '10px 20px', borderRadius: '30px', fontSize: '14px' }}>{tr.hero.badge1}</div>
          <div style={{ background: 'rgba(255,255,255,0.15)', padding: '10px 20px', borderRadius: '30px', fontSize: '14px' }}>{tr.hero.badge2}</div>
          <div style={{ background: 'rgba(255,255,255,0.15)', padding: '10px 20px', borderRadius: '30px', fontSize: '14px' }}>{tr.hero.badge3}</div>
        </div>
      </div>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 20px' }}>
        <Mapa idioma={idioma} />
      </div>
      <div style={{ background: '#2d5a0e', padding: '48px 32px', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 12px' }}>{tr.cta.titulo}</h2>
        <p style={{ fontSize: '16px', opacity: 0.9, margin: '0 0 24px' }}>{tr.cta.subtitulo}</p>
        <Link href="/contactanos" style={{ background: '#fff', color: '#2d5a0e', padding: '14px 32px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', display: 'inline-block' }}>
          {tr.cta.boton}
        </Link>
      </div>
    </main>
  )
}