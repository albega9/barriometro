'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const contenido = {
  es: {
    meta: { titulo: 'La Pechina (Extramurs): el barrio que alcanza los 3.000€/m²', desc: 'Zonas verdes, nuevos parques y zona naranja de aparcamiento están transformando La Pechina en Extramurs y disparando los precios hasta los 3.000€/m².' },
    volver: '← Volver a Noticias',
    categoria: 'Análisis de barrio',
    fecha: 'Mayo 2026 · 3 min lectura',
    titulo: 'La Pechina (Extramurs): el barrio que se transforma y alcanza los 3.000€/m²',
    subtitulo: 'Zonas verdes, nuevos parques y la zona naranja de aparcamiento están cambiando la cara de uno de los barrios más céntricos de Valencia.',
    stats: [{ valor: '3.000€', label: 'Precio actual /m²' }, { valor: '+18%', label: 'Subida en 18 meses' }, { valor: 'Alta', label: 'Demanda actual' }],
    cta: { titulo: '¿Te interesa Extramurs o La Pechina?', desc: 'Nuestros asesores conocen cada calle del barrio y pueden ayudarte a encontrar la mejor oportunidad antes de que el mercado la descubra.', boton: 'Hablar con un asesor →' },
    verNoticias: '← Ver todas las noticias',
    cuerpo: [
      { tipo: 'p', texto: 'El barrio de La Pechina, enclavado en el distrito de Extramurs, vive una transformación silenciosa pero profunda que está capturando la atención de compradores e inversores. En los últimos dieciocho meses, una combinación de mejoras urbanas y una demanda sostenida ha empujado los precios hasta rozar los 3.000 euros por metro cuadrado.' },
      { tipo: 'h2', texto: 'Zonas verdes y parques: el gran catalizador' },
      { tipo: 'p', texto: 'La apuesta del Ayuntamiento de Valencia por recuperar el espacio público en La Pechina ha sido determinante. La creación de nuevas zonas verdes y la rehabilitación de parques existentes han transformado la calidad de vida del barrio de forma notoria. Los vecinos cuentan hoy con espacios de descanso y ocio que antes no existían, y eso tiene un precio en el mercado inmobiliario.' },
      { tipo: 'p', texto: 'Este tipo de inversión pública tiene un efecto demostrado sobre los precios de la vivienda: los inmuebles situados a menos de 300 metros de un parque o zona verde cotizan sistemáticamente por encima de la media del barrio. La Pechina no es una excepción.' },
      { tipo: 'h2', texto: 'La zona naranja: más orden, más valor' },
      { tipo: 'p', texto: 'Uno de los cambios más comentados entre los residentes es la implantación de la zona naranja de aparcamiento regulado. Aunque inicialmente generó resistencias, el resultado ha sido una mejora significativa en la circulación y en la disponibilidad de plazas para los vecinos durante la noche.' },
      { tipo: 'p', texto: 'Este tipo de medidas ordenan el espacio público y reducen el caos del aparcamiento. El barrio transmite ahora una imagen más cuidada y ordenada, lo que atrae a un perfil de comprador con mayor poder adquisitivo.' },
      { tipo: 'h2', texto: '¿Qué esperar en los próximos meses?' },
      { tipo: 'p', texto: 'Las señales apuntan a que la tendencia alcista tiene recorrido. La Pechina sigue siendo más asequible que sus vecinos inmediatos y mantiene una ubicación privilegiada a pocos minutos a pie del centro histórico y del Jardí del Túria.' },
      { tipo: 'quote', texto: '"La Pechina está en ese momento clave que los inversores conocen bien: cuando el barrio ya ha mejorado visiblemente pero el precio todavía no ha recogido toda la subida."' },
    ]
  },
  en: {
    meta: { titulo: 'La Pechina (Extramurs): the neighbourhood reaching 3,000€/m²', desc: 'Green spaces, new parks and regulated parking are transforming La Pechina in Extramurs, pushing prices up to 3,000€/m².' },
    volver: '← Back to News',
    categoria: 'Neighbourhood Analysis',
    fecha: 'May 2026 · 3 min read',
    titulo: 'La Pechina (Extramurs): the neighbourhood transforming and reaching 3,000€/m²',
    subtitulo: 'Green spaces, new parks and regulated parking are changing the face of one of Valencia\'s most central neighbourhoods.',
    stats: [{ valor: '3,000€', label: 'Current price /m²' }, { valor: '+18%', label: 'Rise in 18 months' }, { valor: 'High', label: 'Current demand' }],
    cta: { titulo: 'Interested in Extramurs or La Pechina?', desc: 'Our advisors know every street in the neighbourhood and can help you find the best opportunity before the market discovers it.', boton: 'Talk to an advisor →' },
    verNoticias: '← See all news',
    cuerpo: [
      { tipo: 'p', texto: 'The La Pechina neighbourhood, located in the Extramurs district, is undergoing a silent but profound transformation that is capturing the attention of buyers and investors. Over the last eighteen months, a combination of urban improvements and sustained demand has pushed prices close to 3,000 euros per square metre.' },
      { tipo: 'h2', texto: 'Green spaces and parks: the main catalyst' },
      { tipo: 'p', texto: 'The Valencia City Council\'s commitment to reclaiming public space in La Pechina has been decisive. The creation of new green spaces and the renovation of existing parks have noticeably transformed the quality of life in the neighbourhood. Residents now enjoy rest and leisure spaces that did not exist before, and that has a price in the real estate market.' },
      { tipo: 'p', texto: 'This type of public investment has a proven effect on housing prices: properties located less than 300 metres from a park or green space consistently trade above the neighbourhood average. La Pechina is no exception.' },
      { tipo: 'h2', texto: 'The orange zone: more order, more value' },
      { tipo: 'p', texto: 'One of the most discussed changes among residents is the introduction of the regulated orange parking zone. Although it initially met resistance, the result has been a significant improvement in traffic flow and parking availability for residents at night.' },
      { tipo: 'p', texto: 'These measures bring order to public space and reduce parking chaos. The neighbourhood now projects a more cared-for and orderly image, attracting buyers with higher purchasing power.' },
      { tipo: 'h2', texto: 'What to expect in the coming months?' },
      { tipo: 'p', texto: 'The signs point to the upward trend having further to run. La Pechina remains more affordable than its immediate neighbours and maintains a privileged location just a few minutes\' walk from the historic centre and the Jardí del Túria.' },
      { tipo: 'quote', texto: '"La Pechina is at that key moment investors know well: when the neighbourhood has visibly improved but the price has not yet fully reflected the rise."' },
    ]
  },
  fr: {
    meta: { titulo: 'La Pechina (Extramurs): le quartier qui atteint 3.000€/m²', desc: 'Espaces verts, nouveaux parcs et zone de stationnement réglementée transforment La Pechina à Extramurs, poussant les prix jusqu\'à 3.000€/m².' },
    volver: '← Retour aux actualités',
    categoria: 'Analyse de quartier',
    fecha: 'Mai 2026 · 3 min de lecture',
    titulo: 'La Pechina (Extramurs): le quartier qui se transforme et atteint 3.000€/m²',
    subtitulo: 'Espaces verts, nouveaux parcs et stationnement réglementé changent le visage de l\'un des quartiers les plus centraux de Valence.',
    stats: [{ valor: '3.000€', label: 'Prix actuel /m²' }, { valor: '+18%', label: 'Hausse en 18 mois' }, { valor: 'Élevée', label: 'Demande actuelle' }],
    cta: { titulo: 'Intéressé par Extramurs ou La Pechina?', desc: 'Nos conseillers connaissent chaque rue du quartier et peuvent vous aider à trouver la meilleure opportunité avant que le marché ne la découvre.', boton: 'Parler à un conseiller →' },
    verNoticias: '← Voir toutes les actualités',
    cuerpo: [
      { tipo: 'p', texto: 'Le quartier de La Pechina, situé dans le district d\'Extramurs, connaît une transformation silencieuse mais profonde qui attire l\'attention des acheteurs et des investisseurs. Au cours des dix-huit derniers mois, une combinaison d\'améliorations urbaines et d\'une demande soutenue a poussé les prix près de 3.000 euros par mètre carré.' },
      { tipo: 'h2', texto: 'Espaces verts et parcs: le principal catalyseur' },
      { tipo: 'p', texto: 'L\'engagement de la Mairie de Valence à récupérer l\'espace public à La Pechina a été déterminant. La création de nouveaux espaces verts et la réhabilitation des parcs existants ont transformé notablement la qualité de vie du quartier.' },
      { tipo: 'p', texto: 'Ce type d\'investissement public a un effet démontré sur les prix de l\'immobilier: les biens situés à moins de 300 mètres d\'un parc ou d\'un espace vert se négocient systématiquement au-dessus de la moyenne du quartier.' },
      { tipo: 'h2', texto: 'La zone orange: plus d\'ordre, plus de valeur' },
      { tipo: 'p', texto: 'L\'un des changements les plus commentés parmi les résidents est la mise en place de la zone de stationnement réglementé orange. Bien qu\'elle ait initialement rencontré des résistances, le résultat a été une amélioration significative de la circulation et de la disponibilité des places pour les résidents la nuit.' },
      { tipo: 'p', texto: 'Ces mesures mettent de l\'ordre dans l\'espace public et réduisent le chaos du stationnement. Le quartier projette désormais une image plus soignée et ordonnée, attirant des acheteurs au pouvoir d\'achat plus élevé.' },
      { tipo: 'h2', texto: 'Que faut-il attendre dans les prochains mois?' },
      { tipo: 'p', texto: 'Les signes indiquent que la tendance à la hausse a encore du chemin à parcourir. La Pechina reste plus abordable que ses voisins immédiats et maintient une position privilégiée à quelques minutes à pied du centre historique et du Jardí del Túria.' },
      { tipo: 'quote', texto: '"La Pechina est à ce moment clé que les investisseurs connaissent bien: quand le quartier s\'est visiblement amélioré mais que le prix n\'a pas encore pleinement reflété la hausse."' },
    ]
  },
  de: {
    meta: { titulo: 'La Pechina (Extramurs): das Viertel erreicht 3.000€/m²', desc: 'Grünflächen, neue Parks und geregelte Parkzonen transformieren La Pechina in Extramurs und treiben die Preise auf 3.000€/m².' },
    volver: '← Zurück zu den Nachrichten',
    categoria: 'Stadtteilanalyse',
    fecha: 'Mai 2026 · 3 Min. Lesezeit',
    titulo: 'La Pechina (Extramurs): das Viertel im Wandel erreicht 3.000€/m²',
    subtitulo: 'Grünflächen, neue Parks und geregelte Parkzonen verändern das Gesicht eines der zentralsten Viertel Valencias.',
    stats: [{ valor: '3.000€', label: 'Aktueller Preis /m²' }, { valor: '+18%', label: 'Anstieg in 18 Monaten' }, { valor: 'Hoch', label: 'Aktuelle Nachfrage' }],
    cta: { titulo: 'Interessiert an Extramurs oder La Pechina?', desc: 'Unsere Berater kennen jede Straße im Viertel und können Ihnen helfen, die beste Gelegenheit zu finden, bevor der Markt sie entdeckt.', boton: 'Mit einem Berater sprechen →' },
    verNoticias: '← Alle Nachrichten anzeigen',
    cuerpo: [
      { tipo: 'p', texto: 'Das Viertel La Pechina im Bezirk Extramurs erlebt eine stille, aber tiefgreifende Transformation, die die Aufmerksamkeit von Käufern und Investoren auf sich zieht. In den letzten achtzehn Monaten hat eine Kombination aus städtischen Verbesserungen und anhaltender Nachfrage die Preise auf fast 3.000 Euro pro Quadratmeter getrieben.' },
      { tipo: 'h2', texto: 'Grünflächen und Parks: der Hauptkatalysator' },
      { tipo: 'p', texto: 'Das Engagement der Stadt Valencia für die Rückgewinnung öffentlicher Räume in La Pechina war entscheidend. Die Schaffung neuer Grünflächen und die Renovierung bestehender Parks haben die Lebensqualität im Viertel spürbar verändert.' },
      { tipo: 'p', texto: 'Diese Art öffentlicher Investitionen hat nachweislich Auswirkungen auf die Immobilienpreise: Objekte in weniger als 300 Metern Entfernung von einem Park oder einer Grünfläche werden systematisch über dem Viertelsdurchschnitt gehandelt.' },
      { tipo: 'h2', texto: 'Die orange Zone: mehr Ordnung, mehr Wert' },
      { tipo: 'p', texto: 'Eine der meistdiskutierten Veränderungen unter den Bewohnern ist die Einführung der geregelten orangefarbenen Parkzone. Obwohl sie anfangs auf Widerstand stieß, hat sie zu einer deutlichen Verbesserung des Verkehrsflusses und der nächtlichen Parkplatzverfügbarkeit für Anwohner geführt.' },
      { tipo: 'p', texto: 'Das Viertel vermittelt jetzt ein gepflegteres und geordneteres Bild, was Käufer mit höherer Kaufkraft anzieht.' },
      { tipo: 'h2', texto: 'Was in den kommenden Monaten zu erwarten ist?' },
      { tipo: 'p', texto: 'Die Zeichen deuten darauf hin, dass der Aufwärtstrend noch weiteres Potenzial hat. La Pechina bleibt erschwinglicher als seine unmittelbaren Nachbarn und behält eine privilegierte Lage wenige Gehminuten vom historischen Zentrum und dem Jardí del Túria.' },
      { tipo: 'quote', texto: '"La Pechina befindet sich in jenem entscheidenden Moment, den Investoren kennen: wenn das Viertel sichtbar besser geworden ist, der Preis aber noch nicht vollständig gestiegen ist."' },
    ]
  },
}

export default function NoticiaPechina() {
  const [idioma, setIdioma] = useState('es')

  useEffect(() => {
    const guardado = localStorage.getItem('idioma') || 'es'
    setIdioma(guardado)
    const handler = () => setIdioma(localStorage.getItem('idioma') || 'es')
    window.addEventListener('idiomaChange', handler)
    return () => window.removeEventListener('idiomaChange', handler)
  }, [])

  const c = contenido[idioma]

  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#F8F5EF' }}>
      <div style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #152D52 60%, #1A3A6B 100%)', padding: '80px 48px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/noticias" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>{c.volver}</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontWeight: '600', background: 'rgba(201,168,76,0.1)', padding: '4px 12px', borderRadius: '4px', border: '1px solid rgba(201,168,76,0.3)' }}>{c.categoria}</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Arial, sans-serif' }}>{c.fecha}</span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#FFFFFF', marginBottom: '20px', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>{c.titulo}</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>{c.subtitulo}</p>
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {c.stats.map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #D4C9B0', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#C9A84C', fontFamily: 'Georgia, serif', marginBottom: '4px' }}>{stat.valor}</div>
              <div style={{ fontSize: '12px', color: '#8A9BB0', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '17px', color: '#2D3748', lineHeight: '1.85', fontFamily: 'Arial, sans-serif' }}>
          {c.cuerpo.map((bloque, i) => {
            if (bloque.tipo === 'h2') return <h2 key={i} style={{ fontSize: '24px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', margin: '40px 0 16px' }}>{bloque.texto}</h2>
            if (bloque.tipo === 'quote') return (
              <div key={i} style={{ background: '#0B1F3A', borderRadius: '12px', padding: '28px 32px', marginBottom: '40px', borderLeft: '4px solid #C9A84C' }}>
                <p style={{ fontSize: '18px', color: '#E8C97A', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>{bloque.texto}</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Arial, sans-serif', margin: '12px 0 0', letterSpacing: '0.05em' }}>— ValenciaCity Properties</p>
              </div>
            )
            return <p key={i} style={{ marginBottom: '24px' }}>{bloque.texto}</p>
          })}
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', border: '1px solid #D4C9B0', textAlign: 'center', marginTop: '40px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0B1F3A', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>{c.cta.titulo}</h3>
          <p style={{ fontSize: '15px', color: '#4A5568', marginBottom: '24px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>{c.cta.desc}</p>
          <Link href="/contactanos" style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0B1F3A', padding: '14px 32px', borderRadius: '4px', fontWeight: '700', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif', display: 'inline-block' }}>{c.cta.boton}</Link>
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/noticias" style={{ color: '#C9A84C', fontSize: '13px', fontFamily: 'Arial, sans-serif', textDecoration: 'none', letterSpacing: '0.08em' }}>{c.verNoticias}</Link>
        </div>
      </div>
    </main>
  )
}
