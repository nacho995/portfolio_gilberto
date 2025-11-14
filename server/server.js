import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['POST'],
}))
app.use(express.json())

// Rate limiting - 5 emails por hora por IP
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5,
  message: 'Demasiadas solicitudes desde esta IP, por favor intente más tarde.',
})

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Verificar conexión
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Error en configuración SMTP:', error)
  } else {
    console.log('✅ Servidor SMTP listo para enviar emails')
  }
})

// Endpoint de contacto
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos',
      })
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email inválido',
      })
    }

    // Configurar email
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'gilberto.dalesio@gmail.com',
      replyTo: email,
      subject: `Nueva consulta de ${name} - Portfolio Académico`,
      html: `
        <div style="font-family: 'Lato', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #0B3D91, #00856F); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nueva Consulta Académica</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #0B3D91; margin-top: 0;">Información del Contacto</h2>
            
            <p style="margin: 15px 0;">
              <strong style="color: #00856F;">Nombre:</strong><br/>
              <span style="color: #4A5F7F; font-size: 16px;">${name}</span>
            </p>
            
            <p style="margin: 15px 0;">
              <strong style="color: #00856F;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #1557B0; text-decoration: none;">${email}</a>
            </p>
            
            <p style="margin: 15px 0;">
              <strong style="color: #00856F;">Mensaje:</strong>
            </p>
            <div style="background: #F5F7FA; padding: 20px; border-left: 4px solid #00856F; border-radius: 4px;">
              <p style="color: #2C3E50; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #D1D8E0; margin: 30px 0;" />
            
            <p style="color: #7F8C9F; font-size: 14px; text-align: center; margin: 0;">
              Enviado desde el Portfolio Académico de Gilberto Dalesio Delpini
            </p>
          </div>
        </div>
      `,
      text: `
Nueva Consulta Académica

Nombre: ${name}
Email: ${email}

Mensaje:
${message}

---
Enviado desde el Portfolio Académico de Gilberto Dalesio Delpini
      `,
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    console.log(`✅ Email enviado desde: ${email}`)

    res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente',
    })
  } catch (error) {
    console.error('❌ Error al enviar email:', error)
    res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Por favor intente más tarde.',
    })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando correctamente' })
})

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en puerto ${PORT}`)
  console.log(`📧 Email configurado: ${process.env.SMTP_USER}`)
})

