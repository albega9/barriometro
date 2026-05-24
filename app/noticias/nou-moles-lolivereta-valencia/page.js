import Link from 'next/link'
import Image from 'next/image'
import foto1 from './foto1.jpeg'

export const metadata = {
  title: 'Nou Moles Valencia: precios, inversión y revalorización en L\'Olivereta 2026',
  description:
    'Nou Moles en L\'Olivereta (Valencia) está viviendo una transformación inmobiliaria con subida de precios, llegada de nuevos perfiles y fuerte potencial de revalorización.',
  keywords:
    "comprar piso Nou Moles Valencia, precio vivienda Nou Moles, L'Olivereta Valencia, invertir Nou Moles, pisos baratos Valencia",
}

export default function NoticiaNouMoles() {
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

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/noticias" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none' }}>
              ← Volver a Noticias
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              background: 'rgba(201,168,76,0.1)',
              padding: '4px 12px',
              borderRadius: '4px',
              border: '1px solid rgba(201,168,76,0.3)'
            }}>
              Análisis de barrio
            </span>

            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
              Mayo 2026 · 5 min lectura
            </span>
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#fff', lineHeight: '1.2' }}>
            Nou Moles (L'Olivereta): el barrio que se está revalorizando en Valencia
          </h1>

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7' }}>
            Un barrio con precios todavía asequibles en Valencia que está viviendo un fuerte proceso de transformación urbana e inmobiliaria.
          </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px' }}>

        {/* IMAGEN SEO */}
        <Image
          src={foto1}
          alt="Barrio de Nou Moles en Valencia L'Olivereta"
          style={{ width: '100%', height: 'auto', borderRadius: '16px', marginBottom: '40px' }}
          priority
        />

        {/* MÉTRICAS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {[
            { valor: '2.050€', label: 'Precio actual /m²' },
            { valor: '+17%', label: 'Subida en 24 meses' },
            { valor: 'Alta', label: 'Demanda actual' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #D4C9B0', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#C9A84C' }}>{stat.valor}</div>
              <div style={{ fontSize: '12px', color: '#8A9BB0', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ARTÍCULO */}
        <div style={{ fontSize: '17px', color: '#2D3748', lineHeight: '1.85' }}>

          <p style={{ marginBottom: '24px' }}>
            <strong>Nou Moles en Valencia</strong> es uno de los barrios con mayor potencial de revalorización dentro del distrito de L'Olivereta.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Su ubicación, precios todavía asequibles y mejora progresiva de servicios lo convierten en una opción muy interesante para comprar vivienda en Valencia.
          </p>

          <h2 style={{ fontSize: '24px', color: '#0B1F3A', margin: '40px 0 16px' }}>
            Evolución del precio en Nou Moles
          </h2>

          <p style={{ marginBottom: '24px' }}>
            En los últimos años, el barrio ha experimentado una subida constante del precio por metro cuadrado, impulsado por la demanda de jóvenes compradores y familias.
          </p>

          <h2 style={{ fontSize: '24px', color: '#0B1F3A', margin: '40px 0 16px' }}>
            Comparación con otros barrios de Valencia
          </h2>

          <p style={{ marginBottom: '24px' }}>
            Puedes comparar este análisis con la evolución de otro barrio cercano como{' '}
            <Link
              href="/noticias/la-pechina-extramurs-revalorizacion"
              style={{ color: '#C9A84C', textDecoration: 'underline' }}
            >
              La Pechina (Extramurs)
            </Link>, que también está en fase de revalorización inmobiliaria.
          </p>

          <h2 style={{ fontSize: '24px', color: '#0B1F3A', margin: '40px 0 16px' }}>
            ¿Es buena inversión Nou Moles?
          </h2>

          <p style={{ marginBottom: '24px' }}>
            Muchos expertos consideran Nou Moles una zona de entrada al mercado inmobiliario de Valencia con potencial de crecimiento a medio plazo.
          </p>

          <p style={{ marginBottom: '40px' }}>
            La combinación de precio, ubicación y transformación urbana lo convierten en un barrio muy interesante para invertir.
          </p>

        </div>

        {/* CTA */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', border: '1px solid #D4C9B0', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', color: '#0B1F3A', marginBottom: '12px' }}>
            ¿Buscas piso en Nou Moles?
          </h3>

          <p style={{ fontSize: '15px', color: '#4A5568', marginBottom: '24px' }}>
            Te ayudamos a encontrar oportunidades antes de que suban los precios.
          </p>

          <Link
            href="/contactanos"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              color: '#0B1F3A',
              padding: '14px 32px',
              borderRadius: '4px',
              fontWeight: '700',
              textDecoration: 'none'
            }}
          >
            Hablar con un asesor →
          </Link>
        </div>

      </div>
    </main>
  )
}