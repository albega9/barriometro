'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export const metadata = {
  title:
    'Asesor inmobiliario para comprar vivienda en Valencia | Valencia Home Advisors',
  description:
    'Especialistas en ayudar a compradores e inversores a encontrar vivienda en Valencia. Negociación, búsqueda, reforma y gestión integral.',
  keywords: [
    'comprar piso Valencia',
    'asesor inmobiliario Valencia',
    'buyer agent Valencia',
    'invertir en Valencia',
    'comprar vivienda Valencia',
    'property finder Valencia',
  ],
  alternates: {
    canonical: 'https://tuweb.com/conocenos',
    languages: {
      es: 'https://tuweb.com/es/conocenos',
      en: 'https://tuweb.com/en/about',
      fr: 'https://tuweb.com/fr/a-propos',
      de: 'https://tuweb.com/de/uber-uns',
    },
  },
  openGraph: {
    title: 'Asesor inmobiliario en Valencia',
    description:
      'Ayudamos a compradores e inversores a encontrar propiedades en Valencia.',
    url: 'https://tuweb.com/conocenos',
    siteName: 'Valencia Home Advisors',
    images: [
      {
        url: '/og-valencia.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

const contenido = {
  es: {
    hero: {
      titulo: 'Asesor inmobiliario para comprar vivienda en Valencia',
      subtitulo:
        'Especialistas en ayudar a compradores e inversores a encontrar propiedades en Valencia al mejor precio.',
    },

    quienes: {
      titulo: '¿Quiénes somos?',
      texto1:
        'Somos un equipo especializado en el mercado inmobiliario de Valencia. Combinamos tecnología, datos reales del mercado y conocimiento profundo de cada distrito para ayudarte a tomar la mejor decisión de compra.',
      texto2:
        'No somos una agencia inmobiliaria tradicional. Trabajamos exclusivamente para el comprador, sin conflicto de intereses, buscando siempre el mejor precio y la mejor zona para ti.',
    },

    servicios: 'Qué hacemos por ti',

    porque: '¿Por qué elegirnos?',

    local: {
      titulo: 'Expertos en el mercado inmobiliario de Valencia',
      texto:
        'Trabajamos en zonas como Ruzafa, El Carmen, Pla del Remei, Gran Vía, Cabanyal y Patacona, ayudando tanto a compradores nacionales como internacionales.',
    },

    faq: {
      titulo: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Trabajáis solo para compradores?',
          a: 'Sí. Defendemos exclusivamente los intereses del comprador.',
        },
        {
          q: '¿Ayudáis a inversores extranjeros?',
          a: 'Sí. Trabajamos con clientes internacionales que desean invertir en Valencia.',
        },
        {
          q: '¿Gestionáis también reformas?',
          a: 'Sí. Coordinamos arquitectos, constructores y todo el proceso de reforma.',
        },
      ],
    },

    cta: {
      titulo: 'Empieza a buscar tu vivienda en Valencia',
      subtitulo:
        'Cuéntanos qué buscas y te responderemos en menos de 24 horas.',
      boton: 'Contáctanos →',
    },

    items: [
      {
        emoji: '🗺️',
        titulo: 'Elección de zona',
        desc:
          'Analizamos tu presupuesto, estilo de vida y objetivos para recomendarte el distrito ideal.',
      },

      {
        emoji: '💬',
        titulo: 'Negociación',
        desc:
          'Negociamos en tu nombre. Conocemos los precios reales de cierre de cada zona.',
      },

      {
        emoji: '📋',
        titulo: 'Gestión de la compra',
        desc:
          'Te acompañamos en toda la burocracia: nota simple, escrituras, notaría e impuestos.',
      },

      {
        emoji: '🔨',
        titulo: 'Reforma',
        desc:
          'Coordinamos todo con arquitectos y constructores de confianza.',
      },

      {
        emoji: '🔑',
        titulo: 'Llave en mano',
        desc:
          'Desde que decides comprar hasta que recibes las llaves.',
      },

      {
        emoji: '📈',
        titulo: 'Asesoramiento de inversión',
        desc:
          'Identificamos oportunidades con alto potencial de revalorización.',
      },
    ],

    razones: [
      '✅ Trabajamos exclusivamente para compradores',
      '✅ Conocemos el precio real de cierre de cada distrito',
      '✅ Más de 100 operaciones acompañadas en Valencia',
      '✅ Proceso 100% transparente',
      '✅ Servicio integral de búsqueda, compra y reforma',
    ],
  },
}

export default function Conocenos() {
  const [idioma, setIdioma] = useState('es')

  useEffect(() => {
    const guardado = localStorage.getItem('idioma') || 'es'

    setIdioma(guardado)

    const handler = () =>
      setIdioma(localStorage.getItem('idioma') || 'es')

    window.addEventListener('idiomaChange', handler)

    return () =>
      window.removeEventListener('idiomaChange', handler)
  }, [])

  const c = contenido[idioma]

  return (
    <>
      {/* Schema.org SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Valencia Home Advisors',
            areaServed: 'Valencia',
            url: 'https://tuweb.com',
            description:
              'Asesoramiento inmobiliario para compradores en Valencia.',
          }),
        }}
      />

      <main
        style={{
          fontFamily: 'sans-serif',
          minHeight: '100vh',
          background: '#f8faf8',
        }}
      >
        {/* HERO */}
        <header
          style={{
            background:
              'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)',
            padding: '80px 32px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            <Image
              src="/buyer-agent-valencia.webp"
              alt="Asesor inmobiliario en Valencia"
              width={1200}
              height={700}
              priority
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '20px',
                marginBottom: '40px',
              }}
            />

            <h1
              style={{
                fontSize: '42px',
                fontWeight: '800',
                marginBottom: '20px',
                lineHeight: '1.2',
              }}
            >
              {c.hero.titulo}
            </h1>

            <p
              style={{
                fontSize: '20px',
                opacity: 0.92,
                maxWidth: '760px',
                margin: '0 auto',
                lineHeight: '1.7',
              }}
            >
              {c.hero.subtitulo}
            </p>
          </div>
        </header>

        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '72px 24px',
          }}
        >
          {/* QUIENES SOMOS */}
          <section
            style={{
              marginBottom: '80px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#2d5a0e',
                marginBottom: '24px',
              }}
            >
              {c.quienes.titulo}
            </h2>

            <p
              style={{
                fontSize: '17px',
                color: '#555',
                lineHeight: '1.9',
                maxWidth: '800px',
                margin: '0 auto 20px',
              }}
            >
              {c.quienes.texto1}
            </p>

            <p
              style={{
                fontSize: '17px',
                color: '#555',
                lineHeight: '1.9',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {c.quienes.texto2}
            </p>
          </section>

          {/* SEO LOCAL */}
          <section
            style={{
              background: '#fff',
              padding: '40px',
              borderRadius: '20px',
              marginBottom: '80px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
            }}
          >
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#2d5a0e',
                marginBottom: '20px',
              }}
            >
              {c.local.titulo}
            </h2>

            <p
              style={{
                color: '#555',
                lineHeight: '1.9',
                fontSize: '16px',
              }}
            >
              {c.local.texto}
            </p>
          </section>

          {/* SERVICIOS */}
          <section style={{ marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#2d5a0e',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              {c.servicios}
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {c.items.map((s, i) => (
                <article
                  key={i}
                  style={{
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '28px',
                    border: '1px solid #e8f0e8',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '38px',
                      marginBottom: '14px',
                    }}
                  >
                    {s.emoji}
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#2d5a0e',
                      marginBottom: '12px',
                    }}
                  >
                    {s.titulo}
                  </h3>

                  <p
                    style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* RAZONES */}
          <section
            style={{
              background: '#f0f7ec',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '80px',
            }}
          >
            <h2
              style={{
                fontSize: '30px',
                fontWeight: '700',
                color: '#2d5a0e',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              {c.porque}
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              {c.razones.map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '16px',
                    color: '#444',
                    lineHeight: '1.7',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ SEO */}
          <section
            style={{
              marginBottom: '80px',
            }}
          >
            <h2
              style={{
                fontSize: '30px',
                fontWeight: '700',
                color: '#2d5a0e',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              {c.faq.titulo}
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {c.faq.items.map((faq, i) => (
                <article
                  key={i}
                  style={{
                    background: '#fff',
                    padding: '28px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '18px',
                      color: '#2d5a0e',
                      marginBottom: '12px',
                    }}
                  >
                    {faq.q}
                  </h3>

                  <p
                    style={{
                      color: '#666',
                      lineHeight: '1.8',
                    }}
                  >
                    {faq.a}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ENLACES INTERNOS */}
          <section
            style={{
              marginBottom: '80px',
            }}
          >
            <h2
              style={{
                fontSize: '28px',
                color: '#2d5a0e',
                marginBottom: '24px',
              }}
            >
              Guías inmobiliarias en Valencia
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <Link
                href="/mejores-zonas-valencia"
                style={{
                  color: '#1A3A6B',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                Mejores zonas para vivir en Valencia
              </Link>

              <Link
                href="/invertir-en-cabanyal"
                style={{
                  color: '#1A3A6B',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                Invertir en Cabanyal en 2026
              </Link>

              <Link
                href="/comprar-piso-en-ruzafa"
                style={{
                  color: '#1A3A6B',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                Comprar piso en Ruzafa
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section
            style={{
              textAlign: 'center',
              background: '#fff',
              borderRadius: '24px',
              padding: '56px 32px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
            }}
          >
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#2d5a0e',
                marginBottom: '16px',
              }}
            >
              {c.cta.titulo}
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: '#666',
                marginBottom: '32px',
              }}
            >
              {c.cta.subtitulo}
            </p>

            <Link
              href="/contactanos"
              style={{
                background: '#2d5a0e',
                color: '#fff',
                padding: '16px 42px',
                borderRadius: '40px',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {c.cta.boton}
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}