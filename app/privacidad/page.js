import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad — ValenciaCity Properties',
  description: 'Política de privacidad y protección de datos de ValenciaCity Properties.'
}

export default function Privacidad() {
  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f8faf8' }}>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>

        <Link href="/" style={{ color: '#2d5a0e', fontSize: '13px', textDecoration: 'none' }}>← Volver al inicio</Link>

        <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#222', margin: '24px 0 8px' }}>Política de Privacidad</h1>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '40px' }}>Última actualización: mayo 2026</p>

        {[
          {
            titulo: '1. Responsable del tratamiento',
            contenido: `El responsable del tratamiento de los datos personales recogidos a través de este sitio web es ValenciaCity Properties, con correo electrónico de contacto: todosloscod@gmail.com.\n\nEste sitio web es accesible en la dirección valenciacity.properties.`
          },
          {
            titulo: '2. Datos que recopilamos',
            contenido: `Recopilamos los siguientes datos personales:\n\n• Datos de contacto: nombre, dirección de correo electrónico, número de teléfono y mensaje, cuando el usuario rellena el formulario de contacto.\n\n• Datos de navegación: a través de Google Analytics recopilamos datos anónimos sobre el uso del sitio web (páginas visitadas, tiempo de permanencia, dispositivo utilizado, país de origen). Estos datos no permiten identificar al usuario de forma individual.`
          },
          {
            titulo: '3. Finalidad del tratamiento',
            contenido: `Los datos personales recogidos a través del formulario de contacto se utilizan exclusivamente para:\n\n• Responder a las consultas enviadas por el usuario.\n• Proporcionar información sobre nuestros servicios de asesoramiento inmobiliario en Valencia.\n\nNo utilizamos los datos para enviar comunicaciones comerciales sin consentimiento previo.`
          },
          {
            titulo: '4. Base legal',
            contenido: `El tratamiento de los datos se basa en el consentimiento del usuario, otorgado de forma libre e informada al rellenar y enviar el formulario de contacto.\n\nPuedes retirar tu consentimiento en cualquier momento enviando un email a todosloscod@gmail.com.`
          },
          {
            titulo: '5. Conservación de los datos',
            contenido: `Los datos personales se conservarán únicamente durante el tiempo necesario para gestionar tu consulta y, en todo caso, no más de 12 meses desde la última comunicación.`
          },
          {
            titulo: '6. Destinatarios',
            contenido: `Los datos no se ceden ni se venden a terceros.\n\nUtilizamos los siguientes servicios de terceros que pueden tener acceso a datos de navegación:\n\n• Google Analytics (Google LLC) — análisis de tráfico web. Política de privacidad: https://policies.google.com/privacy\n• Formspree — gestión del formulario de contacto. Política de privacidad: https://formspree.io/legal/privacy-policy`
          },
          {
            titulo: '7. Derechos del usuario',
            contenido: `De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), tienes derecho a:\n\n• Acceder a tus datos personales.\n• Rectificar los datos inexactos.\n• Solicitar la supresión de tus datos.\n• Oponerte al tratamiento.\n• Solicitar la limitación del tratamiento.\n• Portabilidad de los datos.\n\nPara ejercer cualquiera de estos derechos, envía un email a todosloscod@gmail.com indicando el derecho que deseas ejercer.`
          },
          {
            titulo: '8. Cookies',
            contenido: `Este sitio web utiliza cookies de Google Analytics para analizar el tráfico de forma anónima. No utilizamos cookies de publicidad ni de seguimiento individual.\n\nPuedes desactivar las cookies en la configuración de tu navegador en cualquier momento.`
          },
          {
            titulo: '9. Seguridad',
            contenido: `Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos y evitar su alteración, pérdida o acceso no autorizado.`
          },
          {
            titulo: '10. Cambios en la política de privacidad',
            contenido: `Nos reservamos el derecho a modificar esta política de privacidad para adaptarla a novedades legislativas o cambios en nuestros servicios. Te recomendamos revisarla periódicamente.`
          },
          {
            titulo: '11. Reclamaciones',
            contenido: `Si consideras que el tratamiento de tus datos no es adecuado, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en www.aepd.es.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#2d5a0e', marginBottom: '12px' }}>{s.titulo}</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{s.contenido}</p>
          </div>
        ))}

        <div style={{ background: '#f0f7ec', borderRadius: '16px', padding: '24px', marginTop: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#555', margin: '0 0 12px' }}>¿Tienes alguna pregunta sobre tu privacidad?</p>
          <Link href="/contactanos" style={{ background: '#2d5a0e', color: '#fff', padding: '12px 28px', borderRadius: '30px', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
            Contáctanos →
          </Link>
        </div>

      </div>
    </main>
  )
}