'use client'
import { useState, useEffect } from 'react'

const slides = [
  { bg: 'hp-slide-1', emoji: '🏛️', label: 'Ciudad de las Artes · Valencia' },
  { bg: 'hp-slide-2', emoji: '🏘️', label: 'Barrio del Carmen · Extramurs' },
  { bg: 'hp-slide-3', emoji: '🛋️', label: 'Reforma & Interiorismo' },
]
const sceneNames = ['Ciudad de las Artes', 'Barrio del Carmen', 'Reforma & Interiorismo']

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hp-hero" id="hp-hero">
      <div className="hp-hero-slides">
        {slides.map((slide, i) => (
          <div key={i} className={`hp-slide ${slide.bg}${current === i ? '' : ' hidden'}`}>
            <div className="hp-slide-inner">
              <div className="hp-slide-icon">{slide.emoji}</div>
              <span className="hp-slide-sublabel">{slide.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="hp-hero-overlay" />
      <div className="hp-hero-goldline" />
      <div className="hp-hero-overlay-bottom" />

      <div className="hp-hero-content">
        <div className="hp-hero-eyebrow">
          <span className="hp-hero-eyebrow-line" />
          <span>Asesores inmobiliarios · Valencia</span>
        </div>
        <h1>Tu piso en Valencia,<br /><em>encontrado.</em></h1>
        <p className="hp-hero-sub">
          Buscamos, negociamos, reformamos y decoramos. Tú solo tienes que llamarnos — nosotros nos encargamos de todo lo demás.
        </p>
        <div className="hp-hero-actions">
          <a href="/contactanos" className="hp-btn-gold">Busca mi piso →</a>
          <a href="/servicios" className="hp-btn-ghost">Ver servicios</a>
        </div>
      </div>

      <div className="hp-hero-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`hp-dot${current === i ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <div className="hp-hero-scene">
        <div className="hp-hero-scene-label">Escena</div>
        <div className="hp-hero-scene-name">{sceneNames[current]}</div>
      </div>
    </div>
  )
}
