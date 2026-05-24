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
      <footer style={{
  background: '#0B1F3A',
  borderTop: '1px solid rgba(201,168,76,0.2)',
  padding: '40px 48px',
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: '30px', height: '30px',
        background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
        borderRadius: '4px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '15px', fontWeight: '700', color: '#0B1F3A',
        fontFamily: 'Georgia, serif'
      }}>V</div>
      <div>
        <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', fontFamily: 'Georgia, serif' }}>ValenciaCity Properties</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Arial, sans-serif' }}>© 2026 Todos los derechos reservados</div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
      {[
        { href: '/', label: 'Inicio' },
        { href: '/conocenos', label: 'Conócenos' },
        { href: '/contactanos', label: 'Contáctanos' },
        { href: 'https://www.valenciacity.properties/privacidad', label: 'Privacidad' },
      ].map(item => (
        <a key={item.href} href={item.href} style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '12px',
          textDecoration: 'none',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontFamily: 'Arial, sans-serif',
          transition: 'color 0.2s',
        }}>{item.label}</a>
      ))}
    </div>
  </div>
</footer>
    </html>
  )
}