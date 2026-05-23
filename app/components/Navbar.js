'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { t } from '../data/traducciones'

export default function Navbar() {
  const pathname = usePathname()
  const [idioma, setIdioma] = useState('es')

  useEffect(() => {
    const guardado = localStorage.getItem('idioma') || 'es'
    setIdioma(guardado)
  }, [])

  const cambiarIdioma = (lang) => {
    setIdioma(lang)
    localStorage.setItem('idioma', lang)
    window.dispatchEvent(new Event('idiomaChange'))
  }

  const tr = t[idioma]

  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', position: 'sticky', top: 0, zIndex: 100 }}>
      <Link href="/" style={{ fontSize: '20px', fontWeight: '700', color: '#2d5a0e', textDecoration: 'none' }}>🏡 ValenciaCity</Link>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '14px', fontWeight: pathname === '/' ? '700' : '500', color: pathname === '/' ? '#2d5a0e' : '#555', textDecoration: 'none' }}>{tr.nav.inicio}</Link>
        <Link href="/conocenos" style={{ fontSize: '14px', fontWeight: pathname === '/conocenos' ? '700' : '500', color: pathname === '/conocenos' ? '#2d5a0e' : '#555', textDecoration: 'none' }}>{tr.nav.conocenos}</Link>
        <Link href="/contactanos" style={{ fontSize: '14px', fontWeight: pathname === '/contactanos' ? '700' : '500', color: pathname === '/contactanos' ? '#2d5a0e' : '#555', textDecoration: 'none' }}>{tr.nav.contactanos}</Link>
        {/* Selector de idioma */}
        <div style={{ display: 'flex', gap: '4px', background: '#f5f5f5', borderRadius: '20px', padding: '3px' }}>
          {['es', 'en', 'fr', 'de'].map(lang => (
            <button
              key={lang}
              onClick={() => cambiarIdioma(lang)}
              style={{
                padding: '4px 10px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600',
                background: idioma === lang ? '#2d5a0e' : 'transparent',
                color: idioma === lang ? '#fff' : '#666',
                transition: 'all 0.2s'
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}