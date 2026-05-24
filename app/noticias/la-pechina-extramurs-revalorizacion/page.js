import Link from 'next/link'
import Image from 'next/image'
import foto1 from './foto1.jpg'

export const metadata = {
  title: 'Comprar vivienda en La Pechina Valencia: precios, revalorización y análisis 2026',
  description:
    'Descubre cómo está cambiando La Pechina en Valencia: precios por metro cuadrado, revalorización, zonas verdes, demanda inmobiliaria y oportunidades de inversión en 2026.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Es buena inversión comprar en La Pechina Valencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'La Pechina se ha convertido en una de las zonas con mayor potencial de revalorización de Valencia gracias a las mejoras urbanas, nuevas zonas verdes y su cercanía al centro histórico.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un piso en La Pechina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Actualmente los precios medios rondan los 3.000 euros por metro cuadrado, aunque algunas calles premium ya superan esa cifra.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Comprar vivienda en La Pechina Valencia: precios, revalorización y análisis 2026',
  description:
    'Análisis inmobiliario de La Pechina en Valencia y su crecimiento durante 2026.',
  author: {
    '@type': 'Organization',
    name: 'ValenciaCity Properties',
  },
}

export default function NoticiaPechina() {
  return (
    <main
      style={{
        fontFamily: 'Georgia, serif',
        minHeight: '100vh',
        background: '#F8F5EF',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        {/* HERO */}
        <div
          style={{
            background:
              'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)',
            padding: '80px 48px 60px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background:
                'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />

          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <Link
                href="/noticias"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                ← Volver a Noticias
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '600',
                  background: 'rgba(201,168,76,0.1)',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  border: '1px solid rgba(201,168,76,0.3)',
                }}
              >
                Análisis de barrio
              </span>

              <span
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                Mayo 2026 · 5 min lectura
              </span>
            </div>

            <h1
              style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#FFFFFF',
                marginBottom: '20px',
                lineHeight: '1.2',
              }}
            >
              Comprar vivienda en La Pechina Valencia: precios y
              revalorización en 2026
            </h1>

            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.75)',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.7',
              }}
            >
              La Pechina se está consolidando como uno de los barrios con
              mayor potencial inmobiliario de Valencia gracias a sus zonas
              verdes, mejoras urbanas y cercanía al centro.
            </p>
          </div>
        </div>

        {/* CONTENIDO */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '64px 24px',
          }}
        >
          {/* IMAGEN SEO */}
          <Image
            src={foto1}
            alt="Vista del barrio de La Pechina en Valencia"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              marginBottom: '40px',
            }}
            priority
          />

          {/* Métricas */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginBottom: '48px',
            }}
          >
            {[
              { valor: '3.000€', label: 'Precio actual /m²' },
              { valor: '+18%', label: 'Subida en 18 meses' },
              { valor: 'Alta', label: 'Demanda actual' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid #D4C9B0',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#C9A84C',
                    marginBottom: '4px',
                  }}
                >
                  {stat.valor}
                </div>

                <div
                  style={{
                    fontSize: '12px',
                    color: '#8A9BB0',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* TEXTO */}
          <div
            style={{
              fontSize: '17px',
              color: '#2D3748',
              lineHeight: '1.85',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              El mercado inmobiliario de <strong>La Pechina Valencia</strong>
              está viviendo una de las transformaciones más interesantes de la
              ciudad. Este barrio de Extramurs, tradicionalmente considerado una
              zona residencial tranquila, se ha convertido en un punto de interés
              para compradores e inversores que buscan una vivienda en Valencia
              con potencial de revalorización.
            </p>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#0B1F3A',
                margin: '40px 0 16px',
              }}
            >
              Precios de vivienda en La Pechina en 2026
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Actualmente, comprar piso en La Pechina supone acceder a un mercado
              donde los precios rondan los 3.000 euros por metro cuadrado. Aunque
              sigue siendo más asequible que otras zonas premium de Valencia,
              muchos expertos consideran que todavía existe margen de subida.
            </p>

            <p style={{ marginBottom: '24px' }}>
              La cercanía al Jardí del Túria, las mejoras urbanísticas y el
              aumento de demanda están impulsando el interés por este barrio.
              Además, la llegada de nuevos perfiles profesionales está elevando
              el nivel medio de las operaciones inmobiliarias.
            </p>

            <h2
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#0B1F3A',
                margin: '40px 0 16px',
              }}
            >
              ¿Merece la pena invertir en La Pechina Valencia?
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Muchos compradores consideran que invertir en Extramurs y La
              Pechina es una oportunidad estratégica por su ubicación céntrica y
              por el cambio progresivo del barrio.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Las nuevas zonas verdes, la mejora del espacio público y la
              implantación de la zona naranja de aparcamiento han incrementado la
              calidad de vida y reforzado la percepción positiva de la zona.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Puedes comparar este análisis con la evolución de otro barrio cercano como{' '}
              <Link
                href="/noticias/nou-moles-lolivereta-valencia"
                style={{ color: '#C9A84C', textDecoration: 'underline' }}
              >
                Nou Moles (L'Olivereta)
              </Link>, que también está experimentando un proceso de revalorización en Valencia.
            </p>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#0B1F3A',
                margin: '40px 0 16px',
              }}
            >
              Por qué La Pechina se está revalorizando
            </h2>

            <p style={{ marginBottom: '24px' }}>
              El crecimiento inmobiliario de La Pechina responde a varios
              factores: cercanía al centro histórico, mejor movilidad, aumento de
              servicios y mayor atractivo para compradores jóvenes.
            </p>

            <p style={{ marginBottom: '40px' }}>
              Todo apunta a que el barrio seguirá ganando valor durante los
              próximos años, especialmente si continúa el ritmo actual de mejora
              urbana y llegada de nuevos residentes.
            </p>

            {/* DESTACADO */}
            <div
              style={{
                background: '#0B1F3A',
                borderRadius: '12px',
                padding: '28px 32px',
                marginBottom: '40px',
                borderLeft: '4px solid #C9A84C',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  color: '#E8C97A',
                  fontStyle: 'italic',
                  margin: 0,
                  lineHeight: '1.6',
                }}
              >
                "La Pechina está entrando en esa fase donde el barrio ya ha
                cambiado visiblemente, pero el precio todavía no refleja todo su
                potencial futuro."
              </p>

              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'Arial, sans-serif',
                  margin: '12px 0 0',
                  letterSpacing: '0.05em',
                }}
              >
                — Equipo de análisis, ValenciaCity Properties
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid #D4C9B0',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#0B1F3A',
                marginBottom: '12px',
              }}
            >
              ¿Quieres comprar vivienda en La Pechina?
            </h3>

            <p
              style={{
                fontSize: '15px',
                color: '#4A5568',
                marginBottom: '24px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
              }}
            >
              Nuestros asesores conocen cada calle de Extramurs y La Pechina y
              pueden ayudarte a encontrar oportunidades antes de que suban los
              precios.
            </p>

            <Link
              href="/contactanos"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#0B1F3A',
                padding: '14px 32px',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '13px',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif',
                display: 'inline-block',
              }}
            >
              Hablar con un asesor →
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
