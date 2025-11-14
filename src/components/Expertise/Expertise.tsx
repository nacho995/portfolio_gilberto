import { motion } from 'framer-motion'
import { Workflow, TrendingUp, Users, Microscope, Globe2, Lightbulb, Network, Brain } from 'lucide-react'
import './Expertise.css'

const expertiseAreas = [
  {
    icon: Workflow,
    title: 'Transformación Organizacional',
    description: 'Rediseño de estructuras y procesos para maximizar eficiencia y adaptabilidad',
  },
  {
    icon: Globe2,
    title: 'Expansión Internacional',
    description: 'Desarrollo de estrategias de entrada y crecimiento en mercados globales',
  },
  {
    icon: Users,
    title: 'Gobierno Estratégico',
    description: 'Asesoría a juntas directivas en toma de decisiones críticas',
  },
  {
    icon: Network,
    title: 'Integración Post-Fusión',
    description: 'Gestión experta de PMI en operaciones complejas de M&A',
  },
  {
    icon: TrendingUp,
    title: 'Liderazgo Comercial Global',
    description: 'Dirección de estrategias comerciales con responsabilidad P&L',
  },
  {
    icon: Microscope,
    title: 'Life Sciences & MedTech',
    description: 'Conocimiento profundo de industria farmacéutica y dispositivos médicos',
  },
  {
    icon: Brain,
    title: 'Transformación Digital',
    description: 'Implementación de tecnologías disruptivas y modelos de negocio innovadores',
  },
  {
    icon: Lightbulb,
    title: 'Desarrollo de Liderazgo',
    description: 'Formación de equipos ejecutivos de alto rendimiento',
  },
]

const Expertise = () => {
  return (
    <section id="expertise" className="expertise">
      <div className="expertise-container">
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">Áreas de Expertise</h2>
          <p className="text-body">
            Especialización integral en transformación empresarial y liderazgo estratégico
          </p>
        </motion.div>

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="expertise-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="expertise-icon">
                <area.icon size={28} />
              </div>
              <h3 className="expertise-title">{area.title}</h3>
              <p className="expertise-description">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise

