# Portfolio Gilberto Dalesio Delpini

Portfolio profesional académico para posiciones de Lecturer en universidades de élite mundial.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview
npm run preview
```

## 🐳 Docker

```bash
# Build y ejecutar
docker-compose build
docker run -d -p 9000:80 --name gilberto-portfolio papa-portfolio_portfolio:latest

# O con docker-compose
docker-compose up -d
```

El sitio estará en `http://localhost:9000`

## 📧 Formulario de Contacto con Nodemailer

### Vercel (Ya deployado)

1. Ve a Vercel → Settings → Environment Variables
2. Añade:
   - `SMTP_USER` = tu-email@gmail.com
   - `SMTP_PASS` = tu-app-password-16-caracteres
3. Redeploy

Ver **`VERCEL_DEPLOYMENT.md`** para guía completa.

### Docker Local

```bash
# Con variables de entorno
docker run -d -p 9000:80 \
  -e SMTP_USER=tu-email@gmail.com \
  -e SMTP_PASS=tu-app-password \
  papa-portfolio_portfolio:latest
```

Ver **`EMAIL_SETUP.md`** para detalles.

## 🎨 Características

- Portfolio académico de élite
- 10 secciones con backgrounds multi-capa
- Animaciones premium
- Glassmorphism effects
- Stats counters animados
- Mapa interactivo global
- Syllabus expandibles
- Bento grid asimétrico
- Responsive design
- Formulario de contacto

## 📝 Personalización

- **Contenido**: Editar componentes en `src/components/`
- **Colores**: `src/styles/index.css` (variables CSS)
- **Email**: `src/components/Contact/Contact.tsx`

## 📄 Licencia

MIT License - Ver LICENSE

---

**Gilberto Dalesio Delpini**  
📧 gilberto.dalesio@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/gilbertodalesio/)
