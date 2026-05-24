import Link from 'next/link'

export const metadata = {
  title: 'La Pechina (Extramurs): el barrio que alcanza los 3.000€/m² — ValenciaCity Properties',
  description: 'Zonas verdes, nuevos parques y zona naranja de aparcamiento están transformando La Pechina en Extramurs y disparando los precios hasta los 3.000€/m².'
}

export default function NoticiaPechina() {
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
            <Link href="/noticias" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>← Volver a Noticias</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontWeight: '600', background: 'rgba(201,168,76,0.1)', padding: '4px 12px', borderRadius: '4px', border: '1px solid rgba(201,168,76,0.3)' }}>Análisis de barrio</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Arial, sans-serif' }}>Mayo 2026 · 3 min lectura</span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#FFFFFF', marginBottom: '20px', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            La Pechina (Extramurs): el barrio que se transforma y alcanza los 3.000€/m²
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>
            Zonas verdes, nuevos parques y la zona naranja de aparcamiento están cambiando la cara de uno de los barrios más céntricos de Valencia.
          </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Métricas destacadas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {[
            { valor: '3.000€', label: 'Precio actual /m²' },
            { valor: '+18%', label: 'Subida en 18 meses' },
            { valor: 'Alta', label: 'Demanda actual' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #D4C9B0', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#C9A84C', fontFamily: 'Georgia, serif', marginBottom: '4px' }}>{stat.valor}</div>
              <div style={{ fontSize: '12px', color: '#8A9BB0', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Artículo */}
        <div style={{ fontSize: '17px', color: '#2D3748', lineHeight: '1.85', fontFamily: 'Arial, sans-serif' }}>

          <p style={{ marginBottom: '24px' }}>
            El barrio de <strong style={{ color: '#0B1F3A' }}>La Pechina</strong>, enclavado en el distrito de Extramurs, vive una transformación silenciosa pero profunda que está capturando la atención de compradores e inversores. En los últimos dieciocho meses, una combinación de mejoras urbanas y una demanda sostenida ha empujado los precios hasta rozar los <strong style={{ color: '#0B1F3A' }}>3.000 euros por metro cuadrado</strong>, una cifra que habría parecido optimista hace apenas dos años.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>Zonas verdes y parques: el gran catalizador</h2>

          <p style={{ marginBottom: '24px' }}>
            La apuesta del Ayuntamiento de Valencia por recuperar el espacio público en La Pechina ha sido determinante. La creación de nuevas zonas verdes y la rehabilitación de parques existentes han transformado la calidad de vida del barrio de forma notoria. Los vecinos cuentan hoy con espacios de descanso y ocio que antes no existían, y eso tiene un precio en el mercado inmobiliario.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Este tipo de inversión pública tiene un efecto demostrado sobre los precios de la vivienda: los inmuebles situados a menos de 300 metros de un parque o zona verde cotizan sistemáticamente por encima de la media del barrio. La Pechina no es una excepción.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>La zona naranja: más orden, más valor</h2>

          <p style={{ marginBottom: '24px' }}>
            Uno de los cambios más comentados entre los residentes es la implantación de la <strong style={{ color: '#0B1F3A' }}>zona naranja de aparcamiento regulado</strong>. Aunque inicialmente generó resistencias, el resultado ha sido una mejora significativa en la circulación y en la disponibilidad de plazas para los vecinos durante la noche.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Este tipo de medidas, que ordenan el espacio público y reducen el caos del aparcamiento, son valoradas muy positivamente por los compradores, especialmente por aquellos que priorizan la calidad de vida sobre el precio por metro cuadrado. El barrio transmite ahora una imagen más cuidada y ordenada, lo que atrae a un perfil de comprador con mayor poder adquisitivo.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>¿Qué esperar en los próximos meses?</h2>

          <p style={{ marginBottom: '24px' }}>
            Las señales apuntan a que la tendencia alcista tiene recorrido. La Pechina sigue siendo más asequible que sus vecinos inmediatos — el Eixample o Extramurs centro — y mantiene una ubicación privilegiada a pocos minutos a pie del centro histórico y del Jardí del Túria.
          </p>

          <p style={{ marginBottom: '40px' }}>
            Para el comprador que busca valor real, La Pechina representa hoy una oportunidad en su tramo final. Los precios están subiendo, pero todavía hay margen antes de que el barrio se equipare completamente a las zonas premium adyacentes.
          </p>

          {/* Destacado */}
          <div style={{ background: '#0B1F3A', borderRadius: '12px', padding: '28px 32px', marginBottom: '40px', borderLeft: '4px solid #C9A84C' }}>
            <p style={{ fontSize: '18px', color: '#E8C97A', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
              "La Pechina está en ese momento clave que los inversores conocen bien: cuando el barrio ya ha mejorado visiblemente pero el precio todavía no ha recogido toda la subida."
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Arial, sans-serif', margin: '12px 0 0', letterSpacing: '0.05em' }}>— Equipo de análisis, ValenciaCity Properties</p>
          </div>

        </div>

        {/* CTA */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', border: '1px solid #D4C9B0', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0B1F3A', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>¿Te interesa Extramurs o La Pechina?</h3>
          <p style={{ fontSize: '15px', color: '#4A5568', marginBottom: '24px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>Nuestros asesores conocen cada calle del barrio y pueden ayudarte a encontrar la mejor oportunidad antes de que el mercado la descubra.</p>
          <Link href="/contactanos" style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '14px 32px', borderRadius: '4px', fontWeight: '700', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif', display: 'inline-block' }}>
            Hablar con un asesor →
          </Link>
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/noticias" style={{ color: '#C9A84C', fontSize: '13px', fontFamily: 'Arial, sans-serif', textDecoration: 'none', letterSpacing: '0.08em' }}>← Ver todas las noticias</Link>
        </div>

      </div>
    </main>
  )
}