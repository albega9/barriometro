import ConocenosClient from './ConocenosClient'

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

export default function Page() {
  return <ConocenosClient />
}