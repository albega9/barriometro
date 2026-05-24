'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { t } from '../data/traducciones'

export default function Navbar() {
  const pathname = usePathname()
  const [idioma, setIdioma] = useState('es')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const guardado = localStorage.getItem('idioma') || 'es'
    setIdioma(guardado)
    const handler = () => setIdioma(localStorage.getItem('idioma') || 'es')
    window.addEventListener('idiomaChange', handler)

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('idiomaChange', handler)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const cambiarIdioma = (lang) => {
    setIdioma(lang)
    localStorage.setItem('idioma', lang)
    window.dispatchEvent(new Event('idiomaChange'))
  }

  const tr = t[idioma]

  return (
    <nav style={{
      background: scrolled ? 'rgba(11,31,58,0.98)' : '#0B1F3A',
      borderBottom: '1px solid rgba(201,168,76,0.2)',
      padding: '0 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '72px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>

      {/* LOGO */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{
          width: '36px', height: '36px',
          background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
          borderRadius: '6px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', fontWeight: '700', color: '#0B1F3A',
          fontFamily: 'Georgia, serif'
        }}>V</div>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', fontFamily: 'Georgia, serif', letterSpacing: '0.02em' }}>ValenciaCity</div>
          <div style={{ fontSize: '10px', color: '#C9A84C', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Properties</div>
        </div>
      </Link>

      {/* LINKS */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {[
          { href: '/', label: tr.nav.inicio },
          { href: '/conocenos', label: tr.nav.conocenos },
          { href: '/noticias', label: idioma === 'es' ? 'Noticias' : idioma === 'en' ? 'News' : idioma === 'fr' ? 'Actualités' : 'Nachrichten' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{
            fontSize: '13px',
            fontWeight: '500',
            color: pathname === item.href ? '#C9A84C' : 'rgba(255,255,255,0.8)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderBottom: pathname === item.href ? '1px solid #C9A84C' : '1px solid transparent',
            paddingBottom: '2px',
            transition: 'all 0.2s',
          }}>{item.label}</Link>
        ))}

        {/* Selector idioma */}
        <div style={{ display: 'flex', gap: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', padding: '3px', border: '1px solid rgba(201,168,76,0.2)' }}>
          {['es', 'en', 'fr', 'de'].map(lang => (
            <button key={lang} onClick={() => cambiarIdioma(lang)} style={{
              padding: '4px 10px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              background: idioma === lang ? '#C9A84C' : 'transparent',
              color: idioma === lang ? '#0B1F3A' : 'rgba(255,255,255,0.6)',
              transition: 'all 0.2s'
            }}>{lang.toUpperCase()}</button>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contactanos" style={{
          background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
          color: '#0B1F3A',
          padding: '10px 22px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}>{tr.nav.contactanos}</Link>
      </div>
    </nav>
  )
}