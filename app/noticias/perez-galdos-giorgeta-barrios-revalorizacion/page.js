'use client'
import Link from 'next/link'

export default function NoticiaPerezGaldos() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#F8F5EF' }}>

      <div style={{
        background: 'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)',
        padding: '80px 48px 60px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          <Link
            href="/noticias"
            style={{
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              fontSize: '13px'
            }}
          >
            ← Volver a Noticias
          </Link>

          <div style={{ marginTop: '24px' }}>
            <span style={{
              background: 'rgba(201,168,76,0.15)',
              color: '#C9A84C',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Análisis urbano
            </span>
          </div>

          <h1 style={{
            fontSize: '46px',
            color: '#fff',
            marginTop: '20px',
            lineHeight: '1.2'
          }}>
            Pérez Galdós y Giorgeta: la obra que puede impulsar los precios en Nou Moles, Arrancapins y Patraix
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '18px',
            lineHeight: '1.8'
          }}>
            La transformación de una de las arterias más congestionadas de Valencia promete más zonas verdes, mejores aceras y una nueva calidad urbana que ya está atrayendo la atención de compradores e inversores.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '16px',
          marginBottom: '48px'
        }}>
          <Stat valor="23,9M€" label="Inversión" />
          <Stat valor="6.800m²" label="Zonas verdes" />
          <Stat valor="14 meses" label="Ejecución" />
        </div>

        <Article>
          <p>
            Durante décadas, las avenidas Pérez Galdós y Giorgeta han funcionado como una gran autopista urbana que separaba barrios y generaba ruido, contaminación y tráfico constante.
          </p>

          <h2>El efecto barrio ya ha comenzado</h2>

          <p>
            Las grandes transformaciones urbanas suelen generar un patrón repetido en el mercado inmobiliario: primero llegan las obras, después mejora la percepción del barrio y finalmente suben los precios.
          </p>

          <p>
            Es precisamente lo que podría ocurrir en zonas como Nou Moles, Arrancapins, La Petxina y parte de Patraix.
          </p>

          <h2>Menos tráfico, más calidad de vida</h2>

          <p>
            El proyecto contempla una importante renaturalización de la avenida, con arbolado, espacios peatonales y prioridad para modos de transporte sostenibles.
          </p>

          <p>
            Para muchos compradores, especialmente familias y teletrabajadores, la calidad del entorno urbano se ha convertido en un factor decisivo.
          </p>

          <h2>¿Qué barrios tienen más recorrido?</h2>

          <ul>
            <li>Nou Moles</li>
            <li>Arrancapins</li>
            <li>La Petxina</li>
            <li>Patraix Norte</li>
            <li>Tres Forques</li>
          </ul>

          <Quote>
            Las mejores oportunidades suelen aparecer cuando las obras todavía generan molestias, pero el mercado ya empieza a descontar la mejora futura.
          </Quote>
        </Article>

      </div>

    </main>
  )
}

function Stat({ valor, label }) {
  return (
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #D4C9B0',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '28px', color: '#C9A84C', fontWeight: '700' }}>{valor}</div>
      <div style={{ fontSize: '12px', color: '#8A9BB0' }}>{label}</div>
    </div>
  )
}

function Article({ children }) {
  return (
    <div style={{
      fontFamily: 'Arial',
      fontSize: '17px',
      lineHeight: '1.9',
      color: '#2D3748'
    }}>
      {children}
    </div>
  )
}

function Quote({ children }) {
  return (
    <div style={{
      background: '#0B1F3A',
      padding: '28px',
      borderRadius: '12px',
      marginTop: '40px'
    }}>
      <p style={{
        color: '#E8C97A',
        fontSize: '20px',
        fontStyle: 'italic',
        margin: 0
      }}>
        "{children}"
      </p>
    </div>
  )
}