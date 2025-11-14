import { motion } from 'framer-motion'
import { Workflow, Globe2, Handshake, BarChart3, Heart, Users2, Zap, Target } from 'lucide-react'
import './Consulting.css'

const consultingAreas = [
  {
    id: '1',
    icon: Workflow,
    title: 'Transformación Organizacional',
    description: 'Rediseño de estructuras, procesos y cultura para maximizar eficiencia operacional y adaptabilidad al cambio.',
    keywords: ['Change Management', 'Organizational Design', 'Process Optimization'],
  },
  {
    id: '2',
    icon: Globe2,
    title: 'Expansión Internacional',
    description: 'Estrategias de entrada a nuevos mercados, análisis de oportunidades y gestión de operaciones globales.',
    keywords: ['Market Entry', 'International Growth', 'Business Development'],
  },
  {
    id: '3',
    icon: Handshake,
    title: 'M&A & Post-Merger Integration',
    description: 'Due diligence estratégico, gestión de fusiones y adquisiciones, e integración operacional post-transacción.',
    keywords: ['M&A Strategy', 'PMI', 'Synergy Realization'],
  },
  {
    id: '4',
    icon: BarChart3,
    title: 'Estrategia Comercial Global',
    description: 'Desarrollo de estrategias go-to-market, optimización de canales y gestión de P&L con impacto internacional.',
    keywords: ['Commercial Excellence', 'P&L Management', 'Sales Strategy'],
  },
  {
    id: '5',
    icon: Heart,
    title: 'Life Sciences & MedTech Advisory',
    description: 'Consultoría especializada en industria farmacéutica, biotecnología y dispositivos médicos.',
    keywords: ['Pharma', 'Regulatory Affairs', 'MedTech Innovation'],
  },
  {
    id: '6',
    icon: Users2,
    title: 'Desarrollo de Liderazgo',
    description: 'Formación de equipos ejecutivos, coaching de alta dirección y programas de desarrollo de liderazgo.',
    keywords: ['Executive Coaching', 'Talent Development', 'Leadership Programs'],
  },
  {
    id: '7',
    icon: Zap,
    title: 'Innovación & Transformación Digital',
    description: 'Implementación de tecnologías disruptivas, digitalización de procesos y modelos de negocio innovadores.',
    keywords: ['Digital Strategy', 'Innovation Management', 'Technology Adoption'],
  },
  {
    id: '8',
    icon: Target,
    title: 'Board Advisory & Governance',
    description: 'Asesoría a juntas directivas en toma de decisiones estratégicas, gobierno corporativo y gestión de riesgos.',
    keywords: ['Board Strategy', 'Corporate Governance', 'Risk Management'],
  },
]

const Consulting = () => {
  return (
    <section id="consulting" className="consulting">
      <div className="consulting-container">
        <motion.div
          className="consulting-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">Áreas de Consultoría</h2>
          <p className="text-body">
            Servicios de consultoría ejecutiva especializados en transformación empresarial
            y liderazgo estratégico
          </p>
        </motion.div>

        <div className="consulting-grid">
          {consultingAreas.map((area, index) => (
            <motion.div
              key={area.id}
              className="consulting-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="consulting-icon">
                <area.icon size={32} />
              </div>
              <h3 className="consulting-title">{area.title}</h3>
              <p className="consulting-description">{area.description}</p>
              <div className="consulting-keywords">
                {area.keywords.map(keyword => (
                  <span key={keyword} className="keyword-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Consulting

