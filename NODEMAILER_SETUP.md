# 📧 Configuración de Nodemailer

El portfolio ahora tiene un backend integrado con Nodemailer.

## 🔧 Configurar Gmail App Password

### Paso 1: Habilitar Verificación en 2 Pasos

1. Ve a https://myaccount.google.com/security
2. Click en "Verificación en 2 pasos"
3. Sigue los pasos para habilitarla

### Paso 2: Generar App Password

1. Ve a https://myaccount.google.com/apppasswords
2. Nombre: "Portfolio Nodemailer"
3. Click "Crear"
4. Copia la contraseña de 16 caracteres (sin espacios)

### Paso 3: Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=gilberto.dalesio@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
CONTACT_EMAIL=gilberto.dalesio@gmail.com
```

## 🚀 Ejecutar Localmente con Backend

```bash
# Terminal 1 - Backend
cd server
npm install
npm start

# Terminal 2 - Frontend
npm run dev
```

## 🐳 Docker con Backend

```bash
# Build con variables de entorno
docker-compose build

# Ejecutar (necesitas .env en la raíz)
SMTP_PASS=tu-app-password docker-compose up -d
```

O edita `docker-compose.yml` con tus credenciales.

## 🌐 Vercel Deployment

En Vercel, añade estas variables de entorno:

- `SMTP_HOST` = smtp.gmail.com
- `SMTP_PORT` = 587
- `SMTP_USER` = gilberto.dalesio@gmail.com
- `SMTP_PASS` = tu-app-password
- `CONTACT_EMAIL` = gilberto.dalesio@gmail.com

El backend funcionará automáticamente como Serverless Function.

## ✅ Verificar que Funciona

1. Abre el portfolio
2. Ve a Contact
3. Llena el formulario
4. Click "Enviar Consulta"
5. Deberías ver "✅ Mensaje enviado"
6. Revisa tu email (gilberto.dalesio@gmail.com)

---

**Nota**: Sin el App Password configurado, el formulario mostrará error. Es necesario configurarlo para que funcione.

