import Link from 'next/link'
import { zonas, colores, etiquetas } from '../../data/zonas'

export async function generateStaticParams() {
  return zonas.map(z => ({ slug: z.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const zona = zonas.find(z => z.slug === slug)
  if (!zona) return {}

  const base = 'https://valenciacity.properties'
  const titulo = `Comprar piso en ${zona.nombre} Valencia — Precio real ${zona.precioReal.toLocaleString()}€/m²`
  const descripcion = `Precio real de cierre en ${zona.nombre}: ${zona.precioReal.toLocaleString()}€/m² (anunciado: ${zona.precio.toLocaleString()}€/m²). Revalorización estimada +${zona.prediccion24}% en 2 años. Estrategias de compra, calles y códigos postales.`

  return {
    title: titulo,
    description: descripcion,
    keywords: `comprar piso ${zona.nombre} Valencia, precio vivienda ${zona.nombre}, invertir ${zona.nombre} Valencia, barrio ${zona.nombre} precio`,
    alternates: {
      canonical: `${base}/distrito/${zona.slug}`,
    },
    openGraph: {
      title: titulo,
      description: descripcion,
      url: `${base}/distrito/${zona.slug}`,
      type: 'website',
      siteName: 'ValenciaCity Properties',
    },
    twitter: {
      card: 'summary_large_image',
      title: titulo,
      description: descripcion,
    }
  }
}f

export default async function DistritoPage({ params }) {
  const { slug } = await params
  const zona = zonas.find(z => z.slug === slug)
  if (!zona) return (
    <main style={{ fontFamily: 'sans-serif', padding: '64px 32px', textAlign: 'center' }}>
      <h1>Distrito no encontrado</h1>
      <Link href="/">Volver al mapa</Link>
    </main>
  )

  const ganancia = Math.round(zona.precioReal * zona.prediccion24 / 100)
  const totalFuturo = Math.round(zona.precioReal * (1 + zona.prediccion24 / 100))
  const descuento = Math.round((zona.precio - zona.precioReal) / zona.precio * 100)

const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": `Propiedades en ${zona.nombre}, Valencia`,
    "description": zona.descripcion,
    "areaServed": {
      "@type": "Place",
      "name": `${zona.nombre}, Valencia, España`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valencia",
        "addressRegion": "Comunidad Valenciana",
        "addressCountry": "ES",
        "postalCode": zona.cp[0]
      }
    },
    "offers": {
      "@type": "Offer",
      "price": zona.precioReal,
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": zona.precioReal,
        "priceCurrency": "EUR",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": 1,
          "unitCode": "MTK"
        }
      }
    }
  }

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f8faf8' }}>

<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${colores[zona.tipo]} 0%, ${colores[zona.tipo]}cc 100%)`, padding: '56px 32px', color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', textDecoration: 'none' }}>← Volver al mapa</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '38px', fontWeight: '800', margin: 0 }}>{zona.nombre}</h1>
            <span style={{ background: 'rgba(255,255,255,0.25)', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
              {etiquetas[zona.tipo]}
            </span>
          </div>
          <p style={{ fontSize: '17px', opacity: 0.92, maxWidth: '680px', lineHeight: '1.6', margin: 0 }}>{zona.resumen}</p>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        {/* MÉTRICAS PRINCIPALES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px', marginBottom: '32px' }}>
          {[
            { label: 'Precio anunciado', valor: `${zona.precio.toLocaleString()} €/m²`, sub: 'en portales', color: '#555' },
            { label: 'Precio real cierre', valor: `${zona.precioReal.toLocaleString()} €/m²`, sub: `${descuento}% bajo el anunciado`, color: '#e65100' },
            { label: 'Revalorización 2 años', valor: `+${zona.prediccion24}%`, sub: `+${ganancia.toLocaleString()} €/m²`, color: '#2e7d32' },
            { label: 'Precio futuro estimado', valor: `${totalFuturo.toLocaleString()} €/m²`, sub: 'en 2 años', color: '#2e7d32' },
          ].map((m, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '18px', border: '1px solid #e8e8e8', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
              <div style={{ fontSize: '22px', fontWeight: '700', color: m.color, marginBottom: '4px' }}>{m.valor}</div>
              <div style={{ fontSize: '12px', color: '#888' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* DESCRIPCIÓN */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #e8e8e8', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#222', marginBottom: '14px' }}>Sobre {zona.nombre}</h2>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', margin: 0 }}>{zona.descripcion}</p>
        </div>

        {/* PERFIL COMPRADOR */}
        <div style={{ background: '#f0f7ec', borderRadius: '16px', padding: '20px 28px', border: '1px solid #d4eac8', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ fontSize: '28px' }}>👤</div>
          <div>
            <div style={{ fontSize: '12px', color: '#5a8a3a', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Perfil ideal de comprador</div>
            <div style={{ fontSize: '15px', color: '#2d5a0e', fontWeight: '500' }}>{zona.perfil}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>

          {/* CÓDIGOS POSTALES */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #e8e8e8' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#222', marginBottom: '16px' }}>📮 Códigos postales</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {zona.cp.map(cp => (
                <span key={cp} style={{ background: '#e3f2fd', color: '#1565c0', padding: '6px 14px', borderRadius: '20px', fontSize: '14px', fontWeight: '600' }}>
                  {cp}
                </span>
              ))}
            </div>
          </div>

          {/* CALLES */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #e8e8e8' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#222', marginBottom: '16px' }}>🗺️ Calles principales</h3>
            {zona.calles.map(calle => (
              <div key={calle} style={{ fontSize: '14px', color: '#444', padding: '6px 0', borderBottom: '1px solid #f5f5f5', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#4CAF50', fontWeight: '700' }}>→</span> {calle}
              </div>
            ))}
          </div>
        </div>

        {/* ESTRATEGIAS */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #e8e8e8', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#222', marginBottom: '20px' }}>💡 Estrategias de compra recomendadas</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {zona.estrategias.map((e, i) => (
              <div key={i} style={{ background: '#fff8e1', borderLeft: '4px solid #FF9800', borderRadius: '0 12px 12px 0', padding: '14px 18px' }}>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>{e.titulo}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{e.descripcion}</div>
              </div>
            ))}
          </div>
        </div>

        {/* OTROS DISTRITOS */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#222', marginBottom: '16px' }}>🗺️ Otros distritos que pueden interesarte</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px' }}>
            {zonas.filter(z => z.slug !== zona.slug && z.tipo === zona.tipo).slice(0, 4).map(z => (
              <Link key={z.slug} href={`/distrito/${z.slug}`} style={{ background: '#fff', borderRadius: '12px', padding: '16px', border: `2px solid ${colores[z.tipo]}33`, textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#222', marginBottom: '4px' }}>{z.nombre}</div>
                <div style={{ fontSize: '13px', color: colores[z.tipo], fontWeight: '600' }}>{z.precioReal.toLocaleString()}€/m²</div>
                <div style={{ fontSize: '12px', color: '#888' }}>+{z.prediccion24}% en 2 años</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA CONTACTO */}
        <div style={{ background: 'linear-gradient(135deg, #2d5a0e 0%, #4a8c1c 100%)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 10px' }}>¿Te interesa {zona.nombre}?</h2>
          <p style={{ fontSize: '15px', opacity: 0.9, margin: '0 0 24px' }}>Te ayudamos a encontrar el piso ideal en esta zona y negociamos el mejor precio por ti.</p>
          <Link href="/contactanos" style={{ background: '#fff', color: '#2d5a0e', padding: '14px 32px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', display: 'inline-block' }}>
            Quiero que me ayudéis →
          </Link>
        </div>

      </div>
    </main>
  )
}