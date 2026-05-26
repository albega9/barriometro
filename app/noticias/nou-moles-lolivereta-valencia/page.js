'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const contenido = {
  es: {
    volver: '← Volver a Noticias',
    categoria: 'Análisis de barrio',
    fecha: 'Mayo 2026 · 5 min lectura',
    titulo: "Nou Moles (L'Olivereta): el barrio humilde que Valencia redescubre",
    subtitulo: 'De barrio obrero olvidado a una de las zonas con mayor crecimiento de la ciudad. La gentrificación orgánica más interesante de Valencia.',
    stats: [{ valor: '2.050€', label: 'Precio actual /m²' }, { valor: '+17%', label: 'Subida en 24 meses' }, { valor: 'Creciente', label: 'Demanda actual' }],
    cta: { titulo: "¿Buscas piso en Nou Moles o L'Olivereta?", desc: 'Nuestros asesores conocen cada calle del barrio y tienen acceso a oportunidades antes de que salgan al mercado.', boton: 'Hablar con un asesor →' },
    verNoticias: '← Ver todas las noticias',
    listaTitulo: 'Lo que mirar si buscas piso en Nou Moles',
    lista: [
      'Pisos de los años 70 sin reformar en plantas altas — máximo potencial de revalorización tras reforma',
      'Calles próximas a la Avenida del Cid y Calle Pius XII — mejor conectividad y más demanda',
      'Inmuebles con ascensor o posibilidad de instalarlo — diferencial clave para el comprador actual',
      'Locales comerciales en planta baja — potencial de conversión a vivienda con precios muy bajos',
      'Pisos grandes de más de 90m² — escasos en el mercado y muy demandados por familias jóvenes',
    ],
    cuerpo: [
      { tipo: 'p', texto: "Hay barrios en Valencia que durante décadas han vivido a la sombra de sus vecinos más célebres. Nou Moles, perteneciente al distrito de L'Olivereta, es uno de ellos. Un barrio obrero, de comunidad consolidada, con una identidad propia que nunca ha necesitado estar de moda para existir. Pero algo está cambiando. Y los que lo ven primero, ganan." },
      { tipo: 'p', texto: 'Durante años, Nou Moles cargó con una reputación que no siempre le hacía justicia. Era el barrio que los valencianos conocían de oídas pero que pocos consideraban a la hora de comprar. Los precios bajos se interpretaban como señal de riesgo en lugar de como oportunidad. Hoy, con el mercado inmobiliario de Valencia en máximos históricos en muchas zonas, esa lectura ha cambiado radicalmente.' },
      { tipo: 'h2', texto: 'El efecto expulsión: cuando lo caro de al lado se convierte en tu oportunidad' },
      { tipo: 'p', texto: 'El fenómeno que está impulsando Nou Moles tiene un nombre claro en economía urbana: efecto expulsión. Los hijos de familias de Ruzafa, Eixample, Extramurs o Campanar no pueden permitirse comprar en el barrio donde crecieron. Necesitan alejarse, pero tampoco quieren irse demasiado lejos.' },
      { tipo: 'p', texto: 'Nou Moles cumple exactamente ese papel. Está bien conectado con el centro mediante la línea 5 del metro y varias líneas de autobús. Tiene todos los servicios básicos y sobre todo, tiene precios que todavía permiten comprar un piso de 90 metros cuadrados por menos de lo que costaría un estudio en Ruzafa.' },
      { tipo: 'p', texto: 'Esta llegada de población joven está generando un proceso de transformación gradual pero sostenido. Nuevos negocios abren donde antes había locales cerrados. Las fachadas se renuevan. La demanda de alquiler sube. Y con ella, los precios de compra.' },
      { tipo: 'h2', texto: 'Un barrio con alma: lo que los datos no cuentan' },
      { tipo: 'p', texto: 'Nou Moles tiene algo que los barrios más gentrificados han perdido por el camino: autenticidad. Las plazas siguen siendo de los vecinos. Los bares de siempre siguen abiertos. La comunidad es fuerte y arraigada. Para muchos compradores jóvenes, eso es exactamente lo que buscan — un barrio real, no un escaparate.' },
      { tipo: 'h2', texto: 'El stock de vivienda: grande, antiguo y reformable' },
      { tipo: 'p', texto: 'El parque de viviendas de Nou Moles es mayoritariamente de los años 60 y 70, lo que significa pisos grandes, con superficies de entre 80 y 120 metros cuadrados, que en muchos casos no han sido reformados. Para el comprador que sabe lo que está haciendo, esto es una oportunidad extraordinaria.' },
      { tipo: 'p', texto: 'Una reforma integral en Valencia ronda hoy los 600-900 euros por metro cuadrado. Un piso de 100 metros en Nou Moles más una reforma completa puede salir por menos de 300.000 euros — una cifra que en Ruzafa apenas alcanzaría para un piso sin reformar de 70 metros.' },
      { tipo: 'h2', texto: '¿Cuánto ha subido y cuánto le queda?' },
      { tipo: 'p', texto: 'En los últimos 24 meses, el precio medio en Nou Moles ha subido aproximadamente un 17%, pasando de entornos de 1.750€/m² a los actuales 2.050€/m². Nuestros modelos apuntan a una revalorización adicional del 15-20% en los próximos dos años.' },
      { tipo: 'quote', texto: '"Nou Moles es hoy lo que Ruzafa era hace diez años: un barrio auténtico, asequible y con todo el recorrido por delante. La diferencia es que ahora sabemos reconocerlo antes."' },
    ]
  },
  en: {
    volver: '← Back to News',
    categoria: 'Neighbourhood Analysis',
    fecha: 'May 2026 · 5 min read',
    titulo: "Nou Moles (L'Olivereta): the humble neighbourhood Valencia is rediscovering",
    subtitulo: 'From forgotten working-class area to one of the city\'s fastest-growing zones. The most interesting organic gentrification in Valencia.',
    stats: [{ valor: '2,050€', label: 'Current price /m²' }, { valor: '+17%', label: 'Rise in 24 months' }, { valor: 'Growing', label: 'Current demand' }],
    cta: { titulo: "Looking for a flat in Nou Moles or L'Olivereta?", desc: 'Our advisors know every street in the neighbourhood and have access to opportunities before they hit the market.', boton: 'Talk to an advisor →' },
    verNoticias: '← See all news',
    listaTitulo: 'What to look for when buying in Nou Moles',
    lista: [
      'Unrenovated 1970s flats on upper floors — maximum appreciation potential after renovation',
      'Streets near Avenida del Cid and Calle Pius XII — better connectivity and higher demand',
      'Properties with lifts or lift installation potential — a key differentiator for today\'s buyer',
      'Ground-floor commercial premises — conversion to housing at very low prices',
      'Large flats over 90m² — scarce on the market and highly sought by young families',
    ],
    cuerpo: [
      { tipo: 'p', texto: "There are neighbourhoods in Valencia that have lived in the shadow of their more celebrated neighbours for decades. Nou Moles, in the L'Olivereta district, is one of them. A working-class neighbourhood with a consolidated community and its own identity that has never needed to be fashionable to exist. But something is changing. And those who see it first, win." },
      { tipo: 'p', texto: 'For years, Nou Moles carried a reputation that did not always do it justice. It was the neighbourhood Valencians knew by name but few considered when buying. Low prices were read as a sign of risk rather than opportunity. Today, with the Valencia real estate market at historic highs in many areas, that reading has changed radically.' },
      { tipo: 'h2', texto: 'The displacement effect: when expensive neighbours become your opportunity' },
      { tipo: 'p', texto: 'The phenomenon driving Nou Moles has a clear name in urban economics: the displacement effect. The children of families from Ruzafa, Eixample, Extramurs or Campanar cannot afford to buy in the neighbourhood where they grew up. They need to move, but they do not want to go too far.' },
      { tipo: 'p', texto: 'Nou Moles fills exactly that role. It is well connected to the centre via metro line 5 and several bus lines. It has all basic services and above all, prices that still allow buying a 90 square metre flat for less than a studio in Ruzafa would cost.' },
      { tipo: 'p', texto: 'This influx of young population is generating a gradual but sustained transformation. New businesses open where premises were closed. Facades are being renovated. Rental demand rises. And with it, purchase prices.' },
      { tipo: 'h2', texto: 'A neighbourhood with soul: what the data does not tell' },
      { tipo: 'p', texto: 'Nou Moles has something that more gentrified neighbourhoods have lost along the way: authenticity. The squares still belong to the residents. The old bars are still open. The community is strong and rooted. For many young buyers, that is exactly what they are looking for — a real neighbourhood, not a showcase.' },
      { tipo: 'h2', texto: 'The housing stock: large, old and ripe for renovation' },
      { tipo: 'p', texto: 'The housing stock in Nou Moles is mostly from the 1960s and 70s, meaning large flats with areas between 80 and 120 square metres, many of which have not been renovated. For the buyer who knows what they are doing, this is an extraordinary opportunity.' },
      { tipo: 'p', texto: 'A full renovation in Valencia currently costs around 600-900 euros per square metre. A 100-metre flat in Nou Moles plus a complete renovation can come to under 300,000 euros — a figure that in Ruzafa would barely cover an unrenovated 70-metre flat.' },
      { tipo: 'h2', texto: 'How much has it risen and how much further can it go?' },
      { tipo: 'p', texto: 'Over the last 24 months, the average price in Nou Moles has risen by approximately 17%, from around 1,750€/m² to the current 2,050€/m². Our models point to an additional appreciation of 15-20% over the next two years.' },
      { tipo: 'quote', texto: '"Nou Moles today is what Ruzafa was ten years ago: an authentic, affordable neighbourhood with all the road ahead of it. The difference is that now we know how to recognise it earlier."' },
    ]
  },
  fr: {
    volver: '← Retour aux actualités',
    categoria: 'Analyse de quartier',
    fecha: 'Mai 2026 · 5 min de lecture',
    titulo: "Nou Moles (L'Olivereta): le quartier modeste que Valence redécouvre",
    subtitulo: 'D\'ancien quartier ouvrier oublié à l\'une des zones à la plus forte croissance de la ville. La gentrification organique la plus intéressante de Valence.',
    stats: [{ valor: '2.050€', label: 'Prix actuel /m²' }, { valor: '+17%', label: 'Hausse en 24 mois' }, { valor: 'Croissante', label: 'Demande actuelle' }],
    cta: { titulo: "Vous cherchez un appartement à Nou Moles ou L'Olivereta?", desc: 'Nos conseillers connaissent chaque rue du quartier et ont accès à des opportunités avant qu\'elles n\'arrivent sur le marché.', boton: 'Parler à un conseiller →' },
    verNoticias: '← Voir toutes les actualités',
    listaTitulo: 'Ce qu\'il faut chercher si vous achetez à Nou Moles',
    lista: [
      'Appartements des années 70 non rénovés en étages supérieurs — potentiel de valorisation maximum après rénovation',
      'Rues proches de l\'Avenida del Cid et de la Calle Pius XII — meilleure connectivité et plus forte demande',
      'Biens avec ascenseur ou possibilité d\'en installer un — différenciateur clé pour l\'acheteur actuel',
      'Locaux commerciaux en rez-de-chaussée — conversion en logement à prix très bas',
      'Grands appartements de plus de 90m² — rares sur le marché et très demandés par les jeunes familles',
    ],
    cuerpo: [
      { tipo: 'p', texto: "Il y a des quartiers à Valence qui ont vécu pendant des décennies dans l'ombre de leurs voisins plus célèbres. Nou Moles, dans le district de L'Olivereta, en fait partie. Un quartier ouvrier à la communauté consolidée, avec une identité propre qui n'a jamais eu besoin d'être à la mode pour exister. Mais quelque chose change. Et ceux qui le voient en premier gagnent." },
      { tipo: 'p', texto: 'Pendant des années, Nou Moles a porté une réputation qui ne lui rendait pas toujours justice. C\'était le quartier que les Valenciens connaissaient de nom mais que peu considéraient lors d\'un achat. Les prix bas étaient perçus comme un signe de risque plutôt que d\'opportunité. Aujourd\'hui, avec le marché immobilier de Valence à des niveaux historiques dans de nombreuses zones, cette lecture a radicalement changé.' },
      { tipo: 'h2', texto: 'L\'effet d\'éviction: quand le cher d\'à côté devient votre opportunité' },
      { tipo: 'p', texto: 'Le phénomène qui pousse Nou Moles a un nom clair en économie urbaine: l\'effet d\'éviction. Les enfants des familles de Ruzafa, Eixample, Extramurs ou Campanar ne peuvent pas se permettre d\'acheter dans le quartier où ils ont grandi. Ils doivent s\'éloigner, mais ne veulent pas aller trop loin.' },
      { tipo: 'p', texto: 'Nou Moles remplit exactement ce rôle. Il est bien connecté au centre via la ligne 5 du métro et plusieurs lignes de bus. Il dispose de tous les services de base et surtout, de prix qui permettent encore d\'acheter un appartement de 90 mètres carrés pour moins que ne coûterait un studio à Ruzafa.' },
      { tipo: 'h2', texto: 'Un quartier avec une âme: ce que les données ne disent pas' },
      { tipo: 'p', texto: 'Nou Moles a quelque chose que les quartiers plus gentrifiés ont perdu en chemin: l\'authenticité. Les places appartiennent toujours aux résidents. Les bars d\'antan sont toujours ouverts. La communauté est forte et enracinée.' },
      { tipo: 'h2', texto: 'Le parc immobilier: grand, ancien et rénovable' },
      { tipo: 'p', texto: 'Le parc immobilier de Nou Moles est principalement des années 60 et 70, ce qui signifie de grands appartements, entre 80 et 120 mètres carrés, souvent non rénovés. Pour l\'acheteur qui sait ce qu\'il fait, c\'est une opportunité extraordinaire.' },
      { tipo: 'h2', texto: 'Combien a-t-il monté et combien lui reste-t-il?' },
      { tipo: 'p', texto: 'Au cours des 24 derniers mois, le prix moyen à Nou Moles a augmenté d\'environ 17%, passant d\'environ 1.750€/m² aux actuels 2.050€/m². Nos modèles indiquent une valorisation supplémentaire de 15-20% au cours des deux prochaines années.' },
      { tipo: 'quote', texto: '"Nou Moles aujourd\'hui, c\'est ce qu\'était Ruzafa il y a dix ans: un quartier authentique, abordable et avec tout le chemin devant lui. La différence, c\'est que maintenant nous savons le reconnaître plus tôt."' },
    ]
  },
  de: {
    volver: '← Zurück zu den Nachrichten',
    categoria: 'Stadtteilanalyse',
    fecha: 'Mai 2026 · 5 Min. Lesezeit',
    titulo: "Nou Moles (L'Olivereta): das bescheidene Viertel, das Valencia wiederentdeckt",
    subtitulo: 'Von einem vergessenen Arbeiterviertel zu einer der am schnellsten wachsenden Zonen der Stadt. Die interessanteste organische Gentrifizierung Valencias.',
    stats: [{ valor: '2.050€', label: 'Aktueller Preis /m²' }, { valor: '+17%', label: 'Anstieg in 24 Monaten' }, { valor: 'Wachsend', label: 'Aktuelle Nachfrage' }],
    cta: { titulo: "Suchen Sie eine Wohnung in Nou Moles oder L'Olivereta?", desc: 'Unsere Berater kennen jede Straße im Viertel und haben Zugang zu Gelegenheiten, bevor sie auf den Markt kommen.', boton: 'Mit einem Berater sprechen →' },
    verNoticias: '← Alle Nachrichten anzeigen',
    listaTitulo: 'Worauf Sie beim Kauf in Nou Moles achten sollten',
    lista: [
      'Unrenovierte Wohnungen aus den 70ern in oberen Stockwerken — maximales Wertsteigerungspotenzial nach Renovierung',
      'Straßen nahe der Avenida del Cid und Calle Pius XII — bessere Anbindung und höhere Nachfrage',
      'Objekte mit Aufzug oder Aufzugsmöglichkeit — wichtiges Unterscheidungsmerkmal für heutige Käufer',
      'Gewerbeflächen im Erdgeschoss — Umwandlung in Wohnraum zu sehr niedrigen Preisen',
      'Große Wohnungen über 90m² — selten auf dem Markt und sehr gefragt bei jungen Familien',
    ],
    cuerpo: [
      { tipo: 'p', texto: "Es gibt Stadtteile in Valencia, die jahrzehntelang im Schatten ihrer berühmteren Nachbarn gelebt haben. Nou Moles im Bezirk L'Olivereta gehört dazu. Ein Arbeiterviertel mit einer gefestigten Gemeinschaft und einer eigenen Identität, die nie modern sein musste, um zu existieren. Aber etwas verändert sich. Und wer es zuerst sieht, gewinnt." },
      { tipo: 'p', texto: 'Jahrelang trug Nou Moles einen Ruf, der ihm nicht immer gerecht wurde. Es war der Stadtteil, den Valencianer dem Namen nach kannten, den aber wenige beim Kauf in Betracht zogen. Niedrige Preise wurden als Risikozeichen statt als Chance gelesen. Heute, mit dem Immobilienmarkt Valencias auf historischen Höchstständen in vielen Bereichen, hat sich diese Lesart grundlegend geändert.' },
      { tipo: 'h2', texto: 'Der Verdrängungseffekt: wenn teure Nachbarn zur Chance werden' },
      { tipo: 'p', texto: 'Das Phänomen, das Nou Moles antreibt, hat in der Stadtökonomie einen klaren Namen: Verdrängungseffekt. Die Kinder von Familien aus Ruzafa, Eixample, Extramurs oder Campanar können es sich nicht leisten, in dem Viertel zu kaufen, in dem sie aufgewachsen sind.' },
      { tipo: 'p', texto: 'Nou Moles erfüllt genau diese Rolle. Es ist über die U-Bahn-Linie 5 und mehrere Buslinien gut mit dem Zentrum verbunden. Es verfügt über alle Grundversorgungseinrichtungen und vor allem über Preise, die es noch ermöglichen, eine 90-Quadratmeter-Wohnung für weniger zu kaufen, als ein Studio in Ruzafa kosten würde.' },
      { tipo: 'h2', texto: 'Ein Viertel mit Seele: was die Daten nicht erzählen' },
      { tipo: 'p', texto: 'Nou Moles hat etwas, das stärker gentrifizierte Viertel unterwegs verloren haben: Authentizität. Die Plätze gehören noch den Bewohnern. Die alten Bars sind noch geöffnet. Die Gemeinschaft ist stark und verwurzelt.' },
      { tipo: 'h2', texto: 'Der Wohnungsbestand: groß, alt und renovierbar' },
      { tipo: 'p', texto: 'Der Wohnungsbestand in Nou Moles stammt hauptsächlich aus den 1960er und 70er Jahren — große Wohnungen zwischen 80 und 120 Quadratmetern, die in vielen Fällen nicht renoviert wurden. Für den Käufer, der weiß, was er tut, ist das eine außergewöhnliche Chance.' },
      { tipo: 'h2', texto: 'Wie viel ist es gestiegen und wie viel Potenzial bleibt?' },
      { tipo: 'p', texto: 'In den letzten 24 Monaten ist der Durchschnittspreis in Nou Moles um etwa 17% gestiegen, von rund 1.750€/m² auf die aktuellen 2.050€/m². Unsere Modelle deuten auf eine zusätzliche Wertsteigerung von 15-20% in den nächsten zwei Jahren hin.' },
      { tipo: 'quote', texto: '"Nou Moles ist heute das, was Ruzafa vor zehn Jahren war: ein authentisches, erschwingliches Viertel mit dem gesamten Weg noch vor sich. Der Unterschied ist, dass wir es jetzt früher erkennen."' },
    ]
  },
}

export default function NoticiaNouMoles() {
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
              <div key={i} style={{ background: '#0B1F3A', borderRadius: '12px', padding: '28px 32px', margin: '32px 0 40px', borderLeft: '4px solid #C9A84C' }}>
                <p style={{ fontSize: '18px', color: '#E8C97A', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>{bloque.texto}</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Arial, sans-serif', margin: '12px 0 0', letterSpacing: '0.05em' }}>— ValenciaCity Properties</p>
              </div>
            )
            return <p key={i} style={{ marginBottom: '24px' }}>{bloque.texto}</p>
          })}
        </div>

        <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #D4C9B0', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0B1F3A', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>{c.listaTitulo}</h3>
          {c.lista.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0 }}>→</span>
              <span style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', border: '1px solid #D4C9B0', textAlign: 'center' }}>
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
