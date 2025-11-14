import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import nodemailer from 'nodemailer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 80

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(join(__dirname, 'dist')))

// Configuración de Nodemailer
// IMPORTANTE: Usa TU cuenta Gmail con TU App Password
// Los emails se enviarán DESDE tu cuenta PERO aparecerán como de Gilberto
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // TU email (ej: tu-email@gmail.com)
    pass: process.env.SMTP_PASS, // TU App Password
  },
})

// Health check PRIMERO
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando correctamente' })
})

// Endpoint de contacto
app.post('/api/contact', async (req, res) => {
  console.log('📨 Recibida solicitud de contacto:', req.body)
  
  try {
    const { name, email, message } = req.body

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

    // Email 1: Para Gilberto con los detalles - DISEÑO PREMIUM
    const mailToGilberto = {
      from: `"Gilberto Dalesio Portfolio" <${process.env.SMTP_USER}>`, // Se envía desde TU cuenta
      to: 'gilberto.dalesio@gmail.com', // Llegará a Gilberto
      replyTo: email, // Cuando Gilberto responda, irá directo al cliente
      subject: `✨ Nueva Consulta Ejecutiva de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #F5F7FA 0%, #E8F1FA 100%); font-family: 'Playfair Display', Georgia, serif;">
          <div style="max-width: 650px; margin: 40px auto; background: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(11, 61, 145, 0.15);">
            
            <!-- Header Premium con Gradiente -->
            <div style="background: linear-gradient(135deg, #072654 0%, #0B3D91 30%, #00856F 70%, #D4AF37 100%); padding: 50px 40px; text-align: center; position: relative;">
              <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #D4AF37, #00856F, #D4AF37);"></div>
              <h1 style="color: #FFFFFF; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">📧 Nueva Consulta Ejecutiva</h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0; font-size: 16px; font-family: 'Lato', Arial, sans-serif;">Portfolio Académico</p>
            </div>

            <!-- Contenido -->
            <div style="padding: 40px;">
              
              <!-- Información del Contacto -->
              <div style="background: linear-gradient(135deg, rgba(11, 61, 145, 0.03), rgba(0, 133, 111, 0.03)); padding: 30px; border-radius: 16px; border: 2px solid rgba(212, 175, 55, 0.2); margin-bottom: 30px;">
                <h2 style="color: #0B3D91; margin: 0 0 20px; font-size: 24px; font-weight: 700; font-family: 'Playfair Display', Georgia, serif;">Información del Prospecto</h2>
                
                <div style="margin: 20px 0;">
                  <p style="color: #00856F; font-weight: 700; margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; font-family: 'Lato', Arial, sans-serif;">👤 Nombre Completo</p>
                  <p style="color: #2C3E50; font-size: 18px; font-weight: 600; margin: 8px 0 0; font-family: 'Lato', Arial, sans-serif;">${name}</p>
                </div>

                <div style="margin: 20px 0;">
                  <p style="color: #00856F; font-weight: 700; margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; font-family: 'Lato', Arial, sans-serif;">📧 Email de Contacto</p>
                  <p style="margin: 8px 0 0;"><a href="mailto:${email}" style="color: #1557B0; text-decoration: none; font-size: 16px; font-weight: 600; font-family: 'Lato', Arial, sans-serif; padding: 8px 16px; background: rgba(21, 87, 176, 0.08); border-radius: 8px; display: inline-block;">${email}</a></p>
                </div>
              </div>

              <!-- Mensaje -->
              <div style="margin: 30px 0;">
                <div style="background: linear-gradient(135deg, #FBF8EC, #FFFFFF); padding: 30px; border-radius: 16px; border-left: 6px solid #D4AF37; box-shadow: 0 8px 24px rgba(212, 175, 55, 0.12);">
                  <p style="color: #00856F; font-weight: 700; margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; font-family: 'Lato', Arial, sans-serif;">💬 Consulta del Cliente</p>
                  <p style="color: #2C3E50; line-height: 1.8; margin: 0; white-space: pre-wrap; font-size: 16px; font-family: 'Lato', Arial, sans-serif;">${message}</p>
                </div>
              </div>

              <!-- CTA -->
              <div style="text-align: center; margin: 35px 0;">
                <a href="mailto:${email}" style="background: linear-gradient(135deg, #0B3D91, #00856F); color: #FFFFFF; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-weight: 700; font-size: 16px; display: inline-block; box-shadow: 0 10px 30px rgba(11, 61, 145, 0.3); font-family: 'Lato', Arial, sans-serif;">✉️ Responder Ahora</a>
              </div>

            </div>

            <!-- Footer Elegante -->
            <div style="background: linear-gradient(135deg, rgba(11, 61, 145, 0.05), rgba(0, 133, 111, 0.05)); padding: 30px; text-align: center; border-top: 2px solid rgba(212, 175, 55, 0.2);">
              <p style="color: #7F8C9F; font-size: 13px; margin: 0; line-height: 1.6; font-family: 'Lato', Arial, sans-serif;">
                Este mensaje fue enviado desde el formulario de contacto de<br/>
                <strong style="color: #0B3D91;">Portfolio Académico - Gilberto Dalesio Delpini</strong><br/>
                <span style="color: #00856F;">Global Executive Leader | Life Sciences & MedTech</span>
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
      text: `Nueva Consulta Ejecutiva\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    }

    // Email 2: Confirmación PREMIUM para quien envió el formulario
    const mailToSender = {
      from: `"Gilberto Dalesio Delpini" <${process.env.SMTP_USER}>`, // Se envía desde TU cuenta PERO aparece como Gilberto
      to: email, // Al cliente
      replyTo: 'gilberto.dalesio@gmail.com', // Si el cliente responde, va a Gilberto
      subject: '✅ Consulta Recibida - Gilberto Dalesio Delpini',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #F5F7FA 0%, #FBF8EC 100%); font-family: 'Playfair Display', Georgia, serif;">
          <div style="max-width: 650px; margin: 40px auto; background: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(11, 61, 145, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.1);">
            
            <!-- Header Elegante -->
            <div style="background: linear-gradient(135deg, #0B3D91 0%, #00856F 50%, #D4AF37 100%); padding: 50px 40px; text-align: center; position: relative;">
              <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, transparent, #D4AF37, transparent);"></div>
              <div style="width: 80px; height: 80px; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; border: 3px solid rgba(212, 175, 55, 0.4); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);">
                <span style="font-size: 40px;">✅</span>
              </div>
              <h1 style="color: #FFFFFF; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">Consulta Recibida</h1>
              <p style="color: rgba(255, 255, 255, 0.95); margin: 10px 0 0; font-size: 16px; font-family: 'Lato', Arial, sans-serif; font-weight: 300;">Responderé a la brevedad</p>
            </div>

            <!-- Contenido Principal -->
            <div style="padding: 40px;">
              
              <!-- Saludo Personal -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #0B3D91; font-size: 26px; font-weight: 700; margin: 0 0 15px; font-family: 'Playfair Display', Georgia, serif;">Estimado/a ${name},</h2>
                <p style="color: #2C3E50; line-height: 1.8; margin: 0; font-size: 16px; font-family: 'Lato', Arial, sans-serif;">Gracias por ponerte en contacto conmigo a través de mi portfolio académico. He recibido tu consulta y quiero confirmarte que la revisaré personalmente.</p>
              </div>

              <!-- Resumen de Consulta -->
              <div style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(255, 215, 0, 0.05)); padding: 30px; border-radius: 16px; border: 2px solid rgba(212, 175, 55, 0.25); margin: 30px 0; box-shadow: 0 4px 16px rgba(212, 175, 55, 0.08);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #D4AF37, #E6C968); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <span style="font-size: 24px;">📋</span>
                  </div>
                  <h3 style="color: #0B3D91; margin: 0; font-size: 20px; font-weight: 700; font-family: 'Playfair Display', Georgia, serif;">Resumen de Tu Consulta</h3>
                </div>
                <div style="background: #FFFFFF; padding: 20px; border-radius: 12px; border-left: 4px solid #D4AF37;">
                  <p style="color: #2C3E50; line-height: 1.8; margin: 0; white-space: pre-wrap; font-size: 15px; font-family: 'Lato', Arial, sans-serif;">${message}</p>
                </div>
              </div>

              <!-- Próximos Pasos -->
              <div style="background: linear-gradient(135deg, rgba(0, 133, 111, 0.05), rgba(0, 163, 137, 0.03)); padding: 25px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #00856F;">
                <h3 style="color: #00856F; font-size: 18px; font-weight: 700; margin: 0 0 15px; font-family: 'Playfair Display', Georgia, serif;">⏭️ Próximos Pasos</h3>
                <ul style="margin: 0; padding-left: 20px; color: #4A5F7F; line-height: 1.8; font-family: 'Lato', Arial, sans-serif;">
                  <li style="margin: 8px 0;">Revisaré tu consulta en detalle</li>
                  <li style="margin: 8px 0;">Te contactaré en las próximas <strong style="color: #0B3D91;">24-48 horas hábiles</strong></li>
                  <li style="margin: 8px 0;">Discutiremos cómo puedo aportar valor a tu organización</li>
                </ul>
              </div>

              <!-- Conecta Conmigo -->
              <div style="text-align: center; margin: 35px 0; padding: 25px; background: linear-gradient(135deg, rgba(11, 61, 145, 0.03), rgba(212, 175, 55, 0.03)); border-radius: 12px;">
                <p style="color: #2C3E50; margin: 0 0 20px; font-size: 16px; font-weight: 600; font-family: 'Lato', Arial, sans-serif;">Mientras tanto, conectemos en LinkedIn</p>
                <a href="https://www.linkedin.com/in/gilbertodalesio/" style="background: #0077B5; color: #FFFFFF; text-decoration: none; padding: 14px 35px; border-radius: 10px; font-weight: 700; font-size: 15px; display: inline-block; box-shadow: 0 8px 20px rgba(0, 119, 181, 0.25); font-family: 'Lato', Arial, sans-serif;">🔗 Ver Perfil en LinkedIn</a>
              </div>

            </div>

            <!-- Firma Profesional -->
            <div style="background: linear-gradient(to bottom, #FFFFFF, #F8F9FA); padding: 35px 40px; border-top: 3px solid; border-image: linear-gradient(90deg, #0B3D91, #00856F, #D4AF37) 1;">
              <div style="text-align: center; margin-bottom: 20px;">
                <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #0B3D91, #00856F); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(11, 61, 145, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2);">
                  <span style="color: #FFFFFF; font-size: 42px; font-weight: 700; font-family: 'Playfair Display', Georgia, serif;">GDD</span>
                </div>
              </div>
              <p style="color: #2C3E50; font-weight: 700; margin: 0; text-align: center; font-size: 16px; font-family: 'Lato', Arial, sans-serif;">Saludos cordiales,</p>
              <h3 style="color: #0B3D91; font-size: 24px; font-weight: 700; margin: 10px 0 5px; text-align: center; font-family: 'Playfair Display', Georgia, serif;">Gilberto Dalesio Delpini</h3>
              <p style="color: #00856F; font-size: 15px; margin: 0; text-align: center; font-weight: 600; font-family: 'Lato', Arial, sans-serif;">Global Executive Leader</p>
              <p style="color: #7F8C9F; font-size: 14px; margin: 5px 0 20px; text-align: center; font-family: 'Lato', Arial, sans-serif;">Life Sciences & MedTech Transformation</p>
              
              <!-- Contacto -->
              <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #D1D8E0;">
                <p style="color: #7F8C9F; font-size: 14px; margin: 5px 0; font-family: 'Lato', Arial, sans-serif;">
                  📧 <a href="mailto:gilberto.dalesio@gmail.com" style="color: #1557B0; text-decoration: none; font-weight: 600;">gilberto.dalesio@gmail.com</a>
                </p>
                <p style="color: #7F8C9F; font-size: 14px; margin: 5px 0; font-family: 'Lato', Arial, sans-serif;">
                  🔗 <a href="https://www.linkedin.com/in/gilbertodalesio/" style="color: #1557B0; text-decoration: none; font-weight: 600;">LinkedIn Profile</a>
                </p>
                <p style="color: #00856F; font-size: 13px; margin: 15px 0 0; font-weight: 600; font-family: 'Lato', Arial, sans-serif;">30+ Years | 4 Continents | 100+ Transformed Companies</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: linear-gradient(135deg, rgba(11, 61, 145, 0.05), rgba(0, 133, 111, 0.05)); padding: 20px; text-align: center;">
              <p style="color: #7F8C9F; font-size: 12px; margin: 0; line-height: 1.5; font-family: 'Lato', Arial, sans-serif;">
                Este es un email automático de confirmación.<br/>
                © 2024 Gilberto Dalesio Delpini. Executive Consulting & Board Advisory.
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
      text: `Hola ${name},\n\nGracias por ponerte en contacto conmigo. He recibido tu consulta y la revisaré a la brevedad.\n\nResumen de tu consulta:\n${message}\n\nMe pondré en contacto contigo en las próximas 24-48 horas hábiles.\n\nSaludos cordiales,\nGilberto Dalesio Delpini\nGlobal Executive Leader | Life Sciences & MedTech\n\nEmail: gilberto.dalesio@gmail.com\nLinkedIn: https://www.linkedin.com/in/gilbertodalesio/`,
    }

    // Enviar ambos emails
    console.log('📧 Enviando emails...')
    await Promise.all([
      transporter.sendMail(mailToGilberto),
      transporter.sendMail(mailToSender),
    ])
    
    console.log(`✅ Emails enviados exitosamente a ${email} y gilberto.dalesio@gmail.com`)

    res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente',
    })
  } catch (error) {
    console.error('Error al enviar email:', error)
    res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje',
    })
  }
})

// Servir el frontend para todas las rutas
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📧 Email: ${process.env.SMTP_USER || 'gilberto.dalesio@gmail.com'}`)
  console.log(`🌐 Frontend served from: /dist`)
  console.log(`📬 API endpoint: POST /api/contact`)
  console.log(`💚 Health check: GET /api/health`)
})

