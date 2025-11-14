const nodemailer = require('nodemailer')

module.exports = async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  console.log('📨 Recibida solicitud de contacto')

  try {
    const { name, email, message } = req.body

    // Validación
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos',
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email inválido',
      })
    }

    // Configurar Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email 1: Para Gilberto
    const mailToGilberto = {
      from: `"Gilberto Dalesio Portfolio" <${process.env.SMTP_USER}>`,
      to: 'gilberto.dalesio@gmail.com',
      replyTo: email,
      subject: `✨ Nueva Consulta Ejecutiva de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #F5F7FA 0%, #E8F1FA 100%); font-family: 'Lato', Arial, sans-serif;">
          <div style="max-width: 650px; margin: 40px auto; background: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(11, 61, 145, 0.15);">
            <div style="background: linear-gradient(135deg, #072654 0%, #0B3D91 30%, #00856F 70%, #D4AF37 100%); padding: 50px 40px; text-align: center;">
              <h1 style="color: #FFFFFF; margin: 0; font-size: 32px; font-weight: 700;">📧 Nueva Consulta Ejecutiva</h1>
            </div>
            <div style="padding: 40px;">
              <div style="background: linear-gradient(135deg, rgba(11, 61, 145, 0.03), rgba(0, 133, 111, 0.03)); padding: 30px; border-radius: 16px; border: 2px solid rgba(212, 175, 55, 0.2); margin-bottom: 30px;">
                <h2 style="color: #0B3D91; margin: 0 0 20px; font-size: 24px; font-weight: 700;">Información del Prospecto</h2>
                <div style="margin: 20px 0;">
                  <p style="color: #00856F; font-weight: 700; margin: 0; font-size: 14px; text-transform: uppercase;">👤 Nombre</p>
                  <p style="color: #2C3E50; font-size: 18px; font-weight: 600; margin: 8px 0 0;">${name}</p>
                </div>
                <div style="margin: 20px 0;">
                  <p style="color: #00856F; font-weight: 700; margin: 0; font-size: 14px; text-transform: uppercase;">📧 Email</p>
                  <p style="margin: 8px 0 0;"><a href="mailto:${email}" style="color: #1557B0; text-decoration: none; font-size: 16px; font-weight: 600;">${email}</a></p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #FBF8EC, #FFFFFF); padding: 30px; border-radius: 16px; border-left: 6px solid #D4AF37; box-shadow: 0 8px 24px rgba(212, 175, 55, 0.12);">
                <p style="color: #00856F; font-weight: 700; margin: 0 0 15px; font-size: 14px; text-transform: uppercase;">💬 Consulta</p>
                <p style="color: #2C3E50; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <div style="text-align: center; margin: 35px 0;">
                <a href="mailto:${email}" style="background: linear-gradient(135deg, #0B3D91, #00856F); color: #FFFFFF; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-weight: 700; display: inline-block; box-shadow: 0 10px 30px rgba(11, 61, 145, 0.3);">✉️ Responder</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Email 2: Confirmación al cliente
    const mailToSender = {
      from: `"Gilberto Dalesio Delpini" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: 'gilberto.dalesio@gmail.com',
      subject: '✅ Consulta Recibida - Gilberto Dalesio Delpini',
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #F5F7FA 0%, #FBF8EC 100%); font-family: 'Lato', Arial, sans-serif;">
          <div style="max-width: 650px; margin: 40px auto; background: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(11, 61, 145, 0.15);">
            <div style="background: linear-gradient(135deg, #0B3D91 0%, #00856F 50%, #D4AF37 100%); padding: 50px 40px; text-align: center;">
              <div style="width: 80px; height: 80px; background: rgba(255, 255, 255, 0.15); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; border: 3px solid rgba(212, 175, 55, 0.4);">
                <span style="font-size: 40px;">✅</span>
              </div>
              <h1 style="color: #FFFFFF; margin: 0; font-size: 32px; font-weight: 700;">Consulta Recibida</h1>
            </div>
            <div style="padding: 40px;">
              <h2 style="color: #0B3D91; font-size: 26px; font-weight: 700; margin: 0 0 15px;">Estimado/a ${name},</h2>
              <p style="color: #2C3E50; line-height: 1.8; margin: 0 0 25px;">Gracias por contactarme. He recibido tu consulta y la revisaré personalmente.</p>
              <div style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(255, 215, 0, 0.05)); padding: 25px; border-radius: 16px; border: 2px solid rgba(212, 175, 55, 0.25); margin: 25px 0;">
                <h3 style="color: #0B3D91; margin: 0 0 15px;">📋 Resumen</h3>
                <p style="color: #2C3E50; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #4A5F7F; line-height: 1.7;">Te contactaré en las próximas <strong style="color: #0B3D91;">24-48 horas hábiles</strong>.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://www.linkedin.com/in/gilbertodalesio/" style="background: #0077B5; color: #FFFFFF; text-decoration: none; padding: 14px 35px; border-radius: 10px; font-weight: 700; display: inline-block;">🔗 LinkedIn</a>
              </div>
              <div style="text-align: center; padding: 25px; border-top: 2px solid #D1D8E0; margin-top: 30px;">
                <p style="color: #2C3E50; font-weight: 700; margin: 0;">Gilberto Dalesio Delpini</p>
                <p style="color: #00856F; margin: 5px 0;">Global Executive Leader | Life Sciences & MedTech</p>
                <p style="color: #7F8C9F; font-size: 14px; margin: 15px 0 0;">📧 gilberto.dalesio@gmail.com</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Verificar credenciales SMTP antes de enviar
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('❌ Faltan credenciales SMTP')
      return res.status(500).json({
        success: false,
        message: 'Configuración de email incompleta. Contacta al administrador.',
      })
    }

    // Verificar conexión SMTP
    await transporter.verify()
    console.log('✅ Conexión SMTP verificada')

    // Enviar ambos emails
    console.log('📧 Enviando emails...')
    const results = await Promise.all([
      transporter.sendMail(mailToGilberto),
      transporter.sendMail(mailToSender),
    ])

    console.log(`✅ Emails enviados exitosamente:`)
    console.log(`   - A Gilberto: ${results[0].messageId}`)
    console.log(`   - Al cliente (${email}): ${results[1].messageId}`)

    res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente',
    })
  } catch (error) {
    console.error('❌ Error detallado:', error)
    console.error('   Code:', error.code)
    console.error('   Command:', error.command)
    
    let errorMessage = 'Error al enviar el mensaje'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación SMTP. Verifica las credenciales.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Error de conexión con el servidor SMTP.'
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}

