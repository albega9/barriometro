export async function POST(request) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json()

    const contenido = `
Nuevo mensaje de Barriometro:

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono || 'No indicado'}
Mensaje: ${mensaje}
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Barriometro <onboarding@resend.dev>',
        to: 'todosloscod@gmail.com',
        reply_to: email,
        subject: `Nuevo contacto de ${nombre}`,
        text: contenido
      })
    })

    if (res.ok) return Response.json({ ok: true })
    return Response.json({ ok: false }, { status: 500 })

  } catch {
    return Response.json({ ok: false }, { status: 500 })
  }
}