import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Navbar from "./components/Navbar"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata = {
  title: "Barriometro Valencia — Barrios baratos con más revalorización",
  description: "Descubre qué zonas de Valencia están baratas y tienen más potencial de subida. Precio real de cierre, predicción a 2 años y estrategias de compra para cada distrito.",
  keywords: "comprar piso Valencia, barrios baratos Valencia, precio vivienda Valencia, invertir Valencia, distritos Valencia precio",
  verification: {
    google: "J9POSJEUXm0ahLhMIQ4Jxo46uHop1dN4vgHWVXy3wwI"
  },
  openGraph: {
    title: "Barriometro Valencia",
    description: "Descubre qué zonas de Valencia están baratas antes de que suban de precio.",
    url: "https://valenciacity.properties",
    type: "website",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="J9POSJEUXm0ahLhMIQ4Jxo46uHop1dN4vgHWVXy3wwI" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W4RY0K6PH1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W4RY0K6PH1');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
      <footer style={{ background: '#1a1a1a', padding: '24px 32px', textAlign: 'center' }}>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
    <a href="https://www.valenciacity.properties/privacidad" style={{ color: '#aaa', fontSize: '13px', textDecoration: 'none' }}>Política de Privacidad</a>
  </div>
  <p style={{ color: '#666', fontSize: '12px', marginTop: '12px' }}>© 2026 ValenciaCity Properties. Todos los derechos reservados.</p>
</footer>
    </html>
  )
}