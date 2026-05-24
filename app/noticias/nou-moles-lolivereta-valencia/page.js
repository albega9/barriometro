import Link from 'next/link'

export const metadata = {
  title: 'Nou Moles (L\'Olivereta): el barrio humilde que se reinventa — ValenciaCity Properties',
  description: 'Nou Moles, en el distrito L\'Olivereta de Valencia, ha pasado de ser un barrio olvidado a una de las zonas con mayor crecimiento de la ciudad. Precios aún asequibles y alta revalorización esperada.',
  keywords: 'comprar piso Nou Moles Valencia, precio vivienda Nou Moles, L\'Olivereta Valencia, barrios baratos Valencia, invertir Nou Moles'
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
            <Link href="/noticias" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>← Volver a Noticias</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontWeight: '600', background: 'rgba(201,168,76,0.1)', padding: '4px 12px', borderRadius: '4px', border: '1px solid rgba(201,168,76,0.3)' }}>Análisis de barrio</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Arial, sans-serif' }}>Mayo 2026 · 5 min lectura</span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#FFFFFF', marginBottom: '20px', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            Nou Moles (L'Olivereta): el barrio humilde que Valencia redescubre
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>
            Un barrio con historia, carácter y precios todavía asequibles que está viviendo su momento de transformación. La gentrificación orgánica más interesante de Valencia.
          </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Métricas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {[
            { valor: '2.050€', label: 'Precio actual /m²' },
            { valor: '+17%', label: 'Subida en 24 meses' },
            { valor: 'Creciente', label: 'Demanda actual' },
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
            Hay barrios en Valencia que durante décadas han vivido a la sombra de sus vecinos más célebres. <strong style={{ color: '#0B1F3A' }}>Nou Moles</strong>, perteneciente al distrito de <strong style={{ color: '#0B1F3A' }}>L'Olivereta</strong>, es uno de ellos. Un barrio obrero, de comunidad consolidada, con una identidad propia que nunca ha necesitado estar de moda para existir. Pero algo está cambiando. Y los que lo ven primero, ganan.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Durante años, Nou Moles cargó con una reputación que no siempre le hacía justicia. Era el barrio que los valencianos conocían de oídas pero que pocos consideraban a la hora de comprar. Los precios bajos se interpretaban como señal de riesgo en lugar de como oportunidad. Hoy, con el mercado inmobiliario de Valencia en máximos históricos en muchas zonas, esa lectura ha cambiado radicalmente.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>El efecto expulsión: cuando lo caro de al lado se convierte en tu oportunidad</h2>

          <p style={{ marginBottom: '24px' }}>
            El fenómeno que está impulsando Nou Moles tiene un nombre claro en economía urbana: <strong style={{ color: '#0B1F3A' }}>efecto expulsión</strong>. Los hijos de familias de Ruzafa, Eixample, Extramurs o Campanar — barrios que en los últimos años han visto dispararse sus precios — no pueden permitirse comprar en el barrio donde crecieron. Necesitan alejarse, pero tampoco quieren irse demasiado lejos.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Nou Moles cumple exactamente ese papel. Está bien conectado con el centro mediante la línea 5 del metro y varias líneas de autobús. Tiene todos los servicios básicos — supermercados, colegios, centros de salud, bares de toda la vida. Y sobre todo, tiene precios que todavía permiten comprar un piso de 90 metros cuadrados por menos de lo que costaría un estudio en Ruzafa.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Esta llegada de población joven, con estudios y con un perfil socioeconómico diferente al tradicional del barrio, está generando un proceso de transformación gradual pero sostenido. Nuevos negocios abren donde antes había locales cerrados. Las fachadas se renuevan. La demanda de alquiler sube. Y con ella, los precios de compra.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>Un barrio con alma: lo que los datos no cuentan</h2>

          <p style={{ marginBottom: '24px' }}>
            Nou Moles tiene algo que los barrios más gentrificados han perdido por el camino: <strong style={{ color: '#0B1F3A' }}>autenticidad</strong>. Las plazas siguen siendo de los vecinos. Los bares de siempre siguen abiertos. La comunidad es fuerte y arraigada. Para muchos compradores jóvenes, eso es exactamente lo que buscan — un barrio real, no un escaparate.
          </p>

          <p style={{ marginBottom: '24px' }}>
            El comercio de proximidad resiste en Nou Moles mejor que en zonas más turísticas, lo que contribuye a una calidad de vida cotidiana superior. Ir a comprar el pan, conocer al tendero, tener una plaza donde los niños juegan: cosas que en el centro de Valencia se están perdiendo, aquí todavía existen.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>El stock de vivienda: grande, antiguo y reformable</h2>

          <p style={{ marginBottom: '24px' }}>
            El parque de viviendas de Nou Moles es mayoritariamente de los años 60 y 70, lo que significa pisos <strong style={{ color: '#0B1F3A' }}>grandes, con superficies de entre 80 y 120 metros cuadrados</strong>, que en muchos casos no han sido reformados. Para el comprador que sabe lo que está haciendo, esto es una oportunidad extraordinaria: comprar a precio de barrio sin reformar y actualizar la vivienda para obtener un inmueble de alta calidad a un coste total muy por debajo del mercado.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Una reforma integral en Valencia ronda hoy los 600-900 euros por metro cuadrado. Un piso de 100 metros en Nou Moles más una reforma completa puede salir por menos de 300.000 euros — una cifra que en Ruzafa o el Eixample apenas alcanzaría para un piso sin reformar de 70 metros.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>¿Cuánto ha subido y cuánto le queda?</h2>

          <p style={{ marginBottom: '24px' }}>
            En los últimos 24 meses, el precio medio en Nou Moles ha subido aproximadamente un <strong style={{ color: '#0B1F3A' }}>17%</strong>, pasando de entornos de 1.750€/m² a los actuales 2.050€/m². Es una subida significativa, pero todavía muy inferior a la de barrios como Ruzafa (+32% en el mismo período) o Benimaclet (+24%).
          </p>

          <p style={{ marginBottom: '24px' }}>
            La brecha de precio entre Nou Moles y sus vecinos más caros sigue siendo amplia — lo que sugiere que el proceso de convergencia tiene todavía varios años de recorrido. Nuestros modelos apuntan a una revalorización adicional del <strong style={{ color: '#0B1F3A' }}>15-20% en los próximos dos años</strong>, impulsada por la presión de demanda sostenida y la escasez de oferta en zonas adyacentes.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>¿Para quién es Nou Moles?</h2>

          <p style={{ marginBottom: '24px' }}>
            Nou Moles no es para todo el mundo — y eso es precisamente su valor. Es para el comprador que entiende que el precio de un barrio hoy no es el precio de mañana. Es para quien prefiere metros cuadrados reales a dirección de postal. Es para quien quiere vivir en un lugar con vida propia, no en un barrio diseñado para turistas o para Instagram.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Y es para el inversor que llega antes de que lleguen los demás. Porque cuando un barrio sale en los titulares de los medios como "zona en auge", el tren suele haber pasado ya. En Nou Moles, el tren está entrando en la estación.
          </p>

          {/* Destacado */}
          <div style={{ background: '#0B1F3A', borderRadius: '12px', padding: '28px 32px', marginBottom: '40px', borderLeft: '4px solid #C9A84C' }}>
            <p style={{ fontSize: '18px', color: '#E8C97A', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
              "Nou Moles es hoy lo que Ruzafa era hace diez años: un barrio auténtico, asequible y con todo el recorrido por delante. La diferencia es que ahora sabemos reconocerlo antes."
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Arial, sans-serif', margin: '12px 0 0', letterSpacing: '0.05em' }}>— Equipo de análisis, ValenciaCity Properties</p>
          </div>

          {/* Lo que mirar */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #D4C9B0', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>Lo que mirar si buscas piso en Nou Moles</h3>
            {[
              'Pisos de los años 70 sin reformar en plantas altas — máximo potencial de revalorización tras reforma',
              'Calles próximas a la Avenida del Cid y Calle Pius XII — mejor conectividad y más demanda',
              'Inmuebles con ascensor o posibilidad de instalarlo — diferencial clave para el comprador actual',
              'Locales comerciales en planta baja — potencial de conversión a vivienda con precios muy bajos',
              'Pisos grandes de más de 90m² — escasos en el mercado y muy demandados por familias jóvenes',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0 }}>→</span>
                <span style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.6' }}>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', border: '1px solid #D4C9B0', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0B1F3A', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>¿Buscas piso en Nou Moles o L'Olivereta?</h3>
          <p style={{ fontSize: '15px', color: '#4A5568', marginBottom: '24px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            Nuestros asesores conocen cada calle del barrio y tienen acceso a oportunidades antes de que salgan al mercado. Cuéntanos qué buscas y te ayudamos a encontrarlo.
          </p>
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
