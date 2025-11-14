# Backend - Formulario de Contacto

Backend con Express y Nodemailer para el formulario de contacto del portfolio.

## 🚀 Configuración

### 1. Instalar dependencias

```bash
cd server
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la carpeta `server/`:

```env
# Gmail (recomendado)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password-aqui

# Email donde recibirás las consultas
CONTACT_EMAIL=gilberto.dalesio@executive-consulting.com

# URL del frontend
FRONTEND_URL=http://localhost:3000

# Puerto del servidor
PORT=3001
```

### 3. Configurar Gmail App Password

1. Ve a tu cuenta de Google
2. Seguridad → Verificación en 2 pasos (actívala si no está)
3. Seguridad → Contraseñas de aplicaciones
4. Genera una nueva contraseña para "Mail"
5. Copia la contraseña de 16 caracteres
6. Úsala en `SMTP_PASS`

### 4. Iniciar el servidor

```bash
# Desarrollo
npm run dev

# Producción
npm start
```

El backend estará en `http://localhost:3001`

## 📧 Endpoints

### POST /api/contact
Envía un email de contacto.

**Request:**
```json
{
  "name": "Nombre Completo",
  "email": "email@ejemplo.com",
  "message": "Mensaje de consulta..."
}
```

**Response Success:**
```json
{
  "success": true,
  "message": "Mensaje enviado exitosamente"
}
```

**Response Error:**
```json
{
  "success": false,
  "message": "Error descriptivo"
}
```

### GET /api/health
Health check del servidor.

## 🔒 Seguridad

- ✅ Helmet para headers de seguridad
- ✅ CORS configurado
- ✅ Rate limiting: 5 emails/hora por IP
- ✅ Validación de datos
- ✅ Sanitización de inputs

## 📝 Uso con el Frontend

El frontend ya está configurado para usar este backend:

1. Asegúrate de que el backend esté corriendo en puerto 3001
2. El proxy de Vite redirige `/api/*` al backend
3. El formulario funcionará automáticamente

## 🐳 Docker

El backend se puede incluir en Docker Compose:

```yaml
services:
  backend:
    build: ./server
    ports:
      - "3001:3001"
    env_file:
      - ./server/.env
```

## 🚨 Troubleshooting

### Error: "Invalid login"
- Verifica que SMTP_USER y SMTP_PASS sean correctos
- Usa App Password de Gmail, no tu contraseña normal

### Error: "Connection timeout"
- Verifica que SMTP_HOST y SMTP_PORT sean correctos
- Asegúrate de tener internet

### Emails no llegan
- Revisa spam/promotions
- Verifica CONTACT_EMAIL
- Revisa logs del servidor

