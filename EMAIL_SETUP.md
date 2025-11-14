# 📧 Configuración de Emails (IMPORTANTE)

## ⚠️ REQUISITO OBLIGATORIO

Para que el formulario de contacto funcione con Nodemailer, **DEBES** configurar las credenciales SMTP de Gmail.

---

## 🔧 Paso a Paso - Gmail App Password

### 1️⃣ Habilitar Verificación en 2 Pasos

1. Ve a: https://myaccount.google.com/security
2. Click en **"Verificación en 2 pasos"**
3. Sigue los pasos para habilitarla (si no está activa)

### 2️⃣ Generar App Password

1. Ve a: https://myaccount.google.com/apppasswords
2. Selecciona **"Correo"** como app
3. Selecciona **"Otro"** como dispositivo
4. Escribe: **"Portfolio Nodemailer"**
5. Click **"Generar"**
6. **Copia la contraseña de 16 caracteres** (sin espacios)
   - Ejemplo: `abcd efgh ijkl mnop` → usa `abcdefghijklmnop`

### 3️⃣ Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=gilberto.dalesio@gmail.com
SMTP_PASS=abcdefghijklmnop
CONTACT_EMAIL=gilberto.dalesio@gmail.com
```

**⚠️ IMPORTANTE**: Reemplaza `abcdefghijklmnop` con tu App Password real.

---

## 🐳 Docker con Variables de Entorno

### Opción 1: Usando archivo .env (Recomendado)

```bash
# 1. Crea .env con tus credenciales (ver arriba)

# 2. Ejecutar con docker-compose
docker-compose --env-file .env up -d
```

### Opción 2: Variables en línea de comando

```bash
docker run -d -p 9000:80 \
  --name gilberto-portfolio \
  -e SMTP_USER=gilberto.dalesio@gmail.com \
  -e SMTP_PASS=tu-app-password-aqui \
  -e CONTACT_EMAIL=gilberto.dalesio@gmail.com \
  papa-portfolio_portfolio:latest
```

### Opción 3: Editar docker-compose.yml directamente

```yaml
environment:
  - SMTP_USER=gilberto.dalesio@gmail.com
  - SMTP_PASS=tu-app-password-aqui
  - CONTACT_EMAIL=gilberto.dalesio@gmail.com
```

---

## ✅ Verificar que Funciona

### 1. Verificar que el servidor esté corriendo:

```bash
docker logs gilberto-portfolio
```

Deberías ver:
```
🚀 Server running on port 80
📧 Email: gilberto.dalesio@gmail.com
```

### 2. Probar el endpoint:

```bash
curl -X POST http://localhost:9000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'
```

Respuesta esperada:
```json
{"success":true,"message":"Mensaje enviado exitosamente"}
```

### 3. Verificar emails:

- Revisa la bandeja de entrada de `gilberto.dalesio@gmail.com`
- Revisa la bandeja del email de prueba

---

## 🌐 Deployment en Vercel/Netlify

### Vercel

En la configuración de tu proyecto en Vercel, añade estas variables de entorno:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = gilberto.dalesio@gmail.com
SMTP_PASS = tu-app-password-aqui
CONTACT_EMAIL = gilberto.dalesio@gmail.com
```

### Netlify

Similar a Vercel, en Site settings → Build & deploy → Environment variables.

---

## 🚨 Troubleshooting

### Error: "Invalid login"
- ✅ Verifica que SMTP_PASS sea el App Password (16 caracteres)
- ✅ NO uses tu contraseña normal de Gmail
- ✅ Verifica que la verificación en 2 pasos esté activa

### Error: "Connection timeout"
- ✅ Verifica tu conexión a internet
- ✅ Verifica que el puerto 587 no esté bloqueado

### Error: "Error al enviar el mensaje"
- ✅ Revisa los logs: `docker logs gilberto-portfolio`
- ✅ Verifica que todas las variables estén configuradas

---

## 📧 Los Emails que Recibirás

### Email 1 - Para Gilberto:
- ✨ Diseño premium con gradiente académico
- 📋 Información del contacto (nombre, email)
- 💬 Mensaje completo del cliente
- ✉️ Botón "Responder Ahora"

### Email 2 - Para el Cliente (Auto-confirmación):
- ✅ Checkmark en círculo glassmorphism
- 👋 Saludo personalizado
- 📋 Resumen de su consulta
- ⏭️ Próximos pasos
- 🔗 Link a LinkedIn
- 📧 Logo GDD y firma profesional

---

**¡Una vez configurado, el sistema de emails es completamente automático y profesional!** 📧✨

