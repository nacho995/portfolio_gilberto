# 🔧 Solución Error de Autenticación SMTP

## ❌ Error Actual

```
Error de autenticación SMTP. Verifica las credenciales.
```

---

## ✅ SOLUCIÓN PASO A PASO

### 1️⃣ Generar NUEVO App Password de Gmail

#### A. Habilitar Verificación en 2 Pasos (si no está)

1. Ve a: https://myaccount.google.com/security
2. Busca: **"Verificación en 2 pasos"**
3. Click **"Empezar"** y sigue los pasos
4. **IMPORTANTE**: Debe estar ✅ ACTIVADA

#### B. Generar App Password

1. Ve a: https://myaccount.google.com/apppasswords
   - Si no puedes acceder, primero activa verificación en 2 pasos
   
2. Selecciona:
   - **App**: Correo
   - **Dispositivo**: Otro (dispositivo personalizado)
   
3. Escribe un nombre: **"Vercel Portfolio"**

4. Click **"Generar"**

5. Te mostrará una contraseña de 16 caracteres como:
   ```
   abcd efgh ijkl mnop
   ```

6. **COPIA SIN ESPACIOS**:
   ```
   abcdefghijklmnop
   ```

---

### 2️⃣ Actualizar en Vercel

1. Ve a: https://vercel.com/nacho995s-projects/portfolio-gilberto-nine/settings/environment-variables

2. **BORRA** la variable `SMTP_PASS` actual

3. **CREA NUEVA** `SMTP_PASS` con:
   - Value: **Los 16 caracteres SIN ESPACIOS**
   - Environment: ✅ Production ✅ Preview ✅ Development

4. Verifica que `SMTP_USER` sea TU email completo:
   ```
   tu-email@gmail.com
   ```

---

### 3️⃣ Redeploy en Vercel

Después de actualizar las variables:

1. Ve a: **Deployments**
2. Click en los **3 puntos** del último deployment
3. Click **"Redeploy"**
4. Espera 2-3 minutos

---

## ✅ Verificación Final

### Checklist de Variables en Vercel:

```
SMTP_USER = tu-email@gmail.com ✅
SMTP_PASS = abcdefghijklmnop (16 caracteres SIN espacios) ✅
SMTP_HOST = smtp.gmail.com ✅
SMTP_PORT = 587 ✅
```

### Probar el Formulario:

1. Ve a: https://portfolio-gilberto-nine.vercel.app
2. Contact → Llena formulario
3. Click "Enviar Consulta"
4. Deberías ver: **"✅ Mensaje enviado exitosamente!"**

---

## 🚨 Errores Comunes

### ❌ "Error de autenticación"
**Causa**: App Password incorrecto
**Solución**: Genera uno NUEVO y cópialo SIN espacios

### ❌ "Contraseña de aplicación"
**Causa**: Usaste tu contraseña normal de Gmail
**Solución**: Debes usar el App Password de 16 caracteres

### ❌ "No se puede generar App Password"
**Causa**: Verificación en 2 pasos no está activa
**Solución**: Actívala primero en https://myaccount.google.com/security

### ❌ "abcd efgh ijkl mnop"
**Causa**: Copiaste CON espacios
**Solución**: Usa: `abcdefghijklmnop` (todo junto)

---

## 📝 Formato Correcto del App Password

### ❌ INCORRECTO:
```
abcd efgh ijkl mnop
abcd-efgh-ijkl-mnop
```

### ✅ CORRECTO:
```
abcdefghijklmnop
```

---

## 🎯 Resumen

1. Genera NUEVO App Password en Gmail
2. Cópialo SIN espacios (16 caracteres juntos)
3. Actualiza `SMTP_PASS` en Vercel
4. Redeploy
5. Prueba formulario

---

**¡Con el App Password correcto, funcionará perfectamente!** 🔐✅

