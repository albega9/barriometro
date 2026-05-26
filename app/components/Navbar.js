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
    setMenuOpen(false)
  }

  const tr = t[idioma]

  const links = [
    { href: '/', label: tr.nav.inicio },
    { href: '/conocenos', label: tr.nav.conocenos },
    { href: '/noticias', label: idioma === 'es' ? 'Noticias' : idioma === 'en' ? 'News' : idioma === 'fr' ? 'Actualités' : 'Nachrichten' },
  ]

  return (
    <>
      <nav style={{
        background: scrolled ? 'rgba(11,31,58,0.98)' : '#0B1F3A',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        position: 'sticky',
        top: 0,
        zIndex: 200,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}>

        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif' }}>V</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', fontFamily: 'Georgia, serif' }}>ValenciaCity</div>
            <div style={{ fontSize: '9px', color: '#C9A84C', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Properties</div>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', '@media(max-width:768px)': { display: 'none' } }} className="desktop-nav">
          {links.map(item => (
            <Link key={item.href} href={item.href} style={{ fontSize: '12px', fontWeight: '500', color: pathname === item.href ? '#C9A84C' : 'rgba(255,255,255,0.8)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: pathname === item.href ? '1px solid #C9A84C' : '1px solid transparent', paddingBottom: '2px' }}>{item.label}</Link>
          ))}
          <div style={{ display: 'flex', gap: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', padding: '3px', border: '1px solid rgba(201,168,76,0.2)' }}>
            {['es', 'en', 'fr', 'de'].map(lang => (
              <button key={lang} onClick={() => cambiarIdioma(lang)} style={{ padding: '4px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: '600', background: idioma === lang ? '#C9A84C' : 'transparent', color: idioma === lang ? '#0B1F3A' : 'rgba(255,255,255,0.6)' }}>{lang.toUpperCase()}</button>
            ))}
          </div>
          <Link href="/contactanos" style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '9px 18px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>{tr.nav.contactanos}</Link>
        </div>

        {/* HAMBURGER MÓVIL */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }} className="hamburger">
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#C9A84C' : '#fff', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#C9A84C' : '#fff', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0, background: '#0B1F3A', zIndex: 199, padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {links.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontSize: '22px', fontWeight: '700', color: pathname === item.href ? '#C9A84C' : '#FFFFFF', textDecoration: 'none', fontFamily: 'Georgia, serif', borderBottom: '1px solid rgba(201,168,76,0.15)', paddingBottom: '20px' }}>{item.label}</Link>
          ))}
          <Link href="/contactanos" onClick={() => setMenuOpen(false)} style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '16px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{tr.nav.contactanos}</Link>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '8px' }}>
            {['es', 'en', 'fr', 'de'].map(lang => (
              <button key={lang} onClick={() => cambiarIdioma(lang)} style={{ padding: '10px 16px', borderRadius: '4px', border: '1px solid rgba(201,168,76,0.3)', cursor: 'pointer', fontSize: '13px', fontWeight: '700', background: idioma === lang ? '#C9A84C' : 'transparent', color: idioma === lang ? '#0B1F3A' : 'rgba(255,255,255,0.7)' }}>{lang.toUpperCase()}</button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}