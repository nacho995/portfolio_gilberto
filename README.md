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

## 📧 Formulario de Contacto

El formulario usa `mailto:` por defecto. Para usar un backend:

### Opción 1: Formspree (Recomendado)
1. Ir a https://formspree.io
2. Crear form gratis
3. Reemplazar `YOUR_FORM_ID` en `src/components/Contact/Contact.tsx` línea 37

### Opción 2: Backend propio
```bash
cd server
npm install
# Configurar .env con credenciales SMTP
npm start
```

Ver `server/README.md` para detalles.

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
