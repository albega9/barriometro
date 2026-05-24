import Link from 'next/link'

export const metadata = {
  title: 'Noticias del mercado inmobiliario de Valencia — ValenciaCity Properties',
  description: 'Análisis y noticias sobre el mercado inmobiliario de Valencia. Descubre qué barrios están subiendo y por qué.'
}

const noticias = [
  {
    slug: 'la-pechina-extramurs-revalorizacion',
    fecha: 'Mayo 2026',
    categoria: 'Análisis de barrio',
    titulo: 'La Pechina (Extramurs): el barrio que se transforma y alcanza los 3.000€/m²',
    subtitulo: 'Zonas verdes, nuevos parques y la zona naranja de aparcamiento están cambiando la cara de uno de los barrios más céntricos de Valencia.',
    imagen: '🌿',
    tiempo: '3 min lectura',
  
  slug: 'nou-moles-lolivereta-valencia',
  fecha: 'Mayo 2026',
  categoria: 'Análisis de barrio',
  titulo: "Nou Moles (L'Olivereta): el barrio humilde que Valencia redescubre",
  subtitulo: "De barrio obrero olvidado a una de las zonas con mayor crecimiento de la ciudad. La gentrificación orgánica más interesante de Valencia.",
  imagen: '🏘️',
  tiempo: '5 min lectura',
}
]

export default function Noticias() {
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif' }}>Market Intelligence</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>Noticias</h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Arial, sans-serif', lineHeight: '1.7', maxWidth: '520px' }}>
            Análisis y tendencias del mercado inmobiliario de Valencia. Lo que necesitas saber antes de comprar.
          </p>
        </div>
      </div>

      {/* LISTA NOTICIAS */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px' }}>
        {noticias.map((noticia, i) => (
          <Link key={i} href={`/noticias/${noticia.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid #D4C9B0',
              boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
              marginBottom: '24px',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{
                  fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontWeight: '600',
                  background: 'rgba(201,168,76,0.1)', padding: '4px 12px', borderRadius: '4px',
                  border: '1px solid rgba(201,168,76,0.3)'
                }}>{noticia.categoria}</span>
                <span style={{ fontSize: '12px', color: '#8A9BB0', fontFamily: 'Arial, sans-serif' }}>{noticia.fecha}</span>
                <span style={{ fontSize: '12px', color: '#8A9BB0', fontFamily: 'Arial, sans-serif' }}>· {noticia.tiempo}</span>
              </div>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '64px', height: '64px', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.2))',
                  borderRadius: '12px', border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px'
                }}>{noticia.imagen}</div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0B1F3A', marginBottom: '10px', fontFamily: 'Georgia, serif', lineHeight: '1.3' }}>{noticia.titulo}</h2>
                  <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: '1.7', fontFamily: 'Arial, sans-serif', margin: 0 }}>{noticia.subtitulo}</p>
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #EDE8DE', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontWeight: '600', letterSpacing: '0.05em' }}>Leer análisis completo</span>
                <span style={{ color: '#C9A84C' }}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  )
}