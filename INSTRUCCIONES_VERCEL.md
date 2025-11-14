# ⚡ SOLUCIÓN RÁPIDA - Vercel 404 en /api/contact

## 🚨 Problema Actual

El deployment en Vercel NO tiene la carpeta `/api` porque fue deployado ANTES de crear los archivos de serverless functions.

## ✅ SOLUCIÓN (3 pasos)

### 1️⃣ Hacer Push de los Nuevos Archivos

```bash
cd /home/nacho/Programacion/papa-portfolio

# Añadir todos los archivos nuevos
git add api/ vercel.json server-production.js package-production.json

# Commit
git commit -m "Add Vercel serverless functions for contact form with Nodemailer"

# Push
git push origin main
```

### 2️⃣ Configurar Variables de Entorno en Vercel

1. Ve a: https://vercel.com
2. Selecciona tu proyecto: **portfolio-gilberto-nine**
3. Settings → **Environment Variables**
4. Añade estas 4 variables:

```
Name: SMTP_USER
Value: tu-email@gmail.com

Name: SMTP_PASS  
Value: tu-app-password-16-caracteres

Name: SMTP_HOST
Value: smtp.gmail.com

Name: SMTP_PORT
Value: 587
```

5. Click **Save** en cada una

### 3️⃣ Esperar el Redeploy Automático

- Vercel detectará el push y re-deployará automáticamente
- Tarda ~2 minutos
- Ve a **Deployments** para ver el progreso

---

## 🧪 Verificar que Funciona

1. Espera a que el deployment termine (status: Ready)
2. Ve a: https://portfolio-gilberto-nine.vercel.app
3. Scroll a **Contact**
4. Llena el formulario con datos de prueba
5. Click **"Enviar Consulta"**
6. Deberías ver: **"✅ Mensaje enviado exitosamente!"**

### Verificar Emails:

- Email a **gilberto.dalesio@gmail.com** (detalles de la consulta)
- Email de confirmación al email que pusiste en el formulario

---

## 📋 Checklist Completo

- [ ] `git add api/`
- [ ] `git add vercel.json`
- [ ] `git commit -m "..."`
- [ ] `git push origin main`
- [ ] Añadir `SMTP_USER` en Vercel
- [ ] Añadir `SMTP_PASS` en Vercel  
- [ ] Añadir `SMTP_HOST` en Vercel
- [ ] Añadir `SMTP_PORT` en Vercel
- [ ] Esperar redeploy (2 min)
- [ ] Probar formulario
- [ ] Verificar email recibido

---

## 🎯 Estructura de Archivos para Vercel

```
papa-portfolio/
├── api/
│   ├── contact.js      ← Serverless function
│   └── package.json    ← Dependencias (nodemailer)
├── vercel.json         ← Config de rutas
├── dist/               ← Frontend (generado por build)
└── ...
```

---

## 🚨 Si sigue dando 404

1. Verifica que `api/contact.js` exista en el repositorio
2. Verifica que `vercel.json` esté en la raíz
3. Haz un redeploy manual:
   - Deployments → ... → Redeploy
4. Revisa los logs del deployment

---

**¡Después del git push y configurar las variables, el formulario funcionará perfectamente!** 🚀📧

