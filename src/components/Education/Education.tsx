import { motion } from 'framer-motion'
import { GraduationCap, Award, Globe, Languages } from 'lucide-react'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">Formación & Credenciales</h2>
          <p className="text-body">
            Sólida base académica combinada con experiencia ejecutiva internacional
          </p>
        </motion.div>

        <div className="education-grid">
          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-icon">
              <GraduationCap size={36} />
            </div>
            <h3 className="education-title">Farmacéutico y Bioquímico</h3>
            <p className="education-institution">Universidad de Buenos Aires</p>
            <div className="education-distinction">
              <Award size={18} />
              <span>Suma Cum Laude</span>
            </div>
            <p className="education-description">
              Formación técnica y científica que fundamenta el conocimiento profundo de la industria
              farmacéutica y ciencias de la vida.
            </p>
          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="education-icon">
              <Award size={36} />
            </div>
            <h3 className="education-title">Executive Education</h3>
            <p className="education-institution">London Business School</p>
            <p className="education-focus">Seminarios Ejecutivos en Finanzas</p>
            <p className="education-description">
              Formación complementaria en gestión financiera y estrategia empresarial de una de las
              escuelas de negocios más prestigiosas del mundo.
            </p>
          </motion.div>
        </div>

        <div className="education-additional">
          <motion.div
            className="additional-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Globe size={28} />
            <h4>Experiencia Internacional</h4>
            <p>Europa • LATAM • Asia • MENA (Middle East & North Africa)</p>
          </motion.div>

          <motion.div
            className="additional-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Languages size={28} />
            <h4>Idiomas</h4>
            <p>Español (Nativo) • Inglés (Profesional) • Francés (Básico)</p>
          </motion.div>
        </div>

        <motion.div
          className="education-highlight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <blockquote>
            "La combinación de formación técnica farmacéutica con visión estratégica de negocios
            permite una comprensión integral de los desafíos en ciencias de la vida."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

