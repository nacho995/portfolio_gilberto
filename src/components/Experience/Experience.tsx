import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import type { Experience as ExperienceType } from '@/types'
import './Experience.css'

const experiences: ExperienceType[] = [
  {
    id: '1',
    title: 'Executive Consultant & Board Advisor',
    company: 'Consultoría Independiente',
    period: '2025 - Presente',
    description:
      'Asesoría estratégica a juntas directivas y empresas en expansión de mercados, integración de fusiones y transformación comercial en sectores de ciencias de la vida, salud, tecnología médica e innovación.',
    technologies: ['Board Advisory', 'M&A Integration', 'Market Expansion', 'Commercial Transformation', 'Strategic Planning'],
    current: true,
  },
  {
    id: '2',
    title: 'Chief Commercial Officer',
    company: 'SIFI S.p.A. (Pharma & MedTech)',
    period: '2020 - 2025',
    description:
      'Liderazgo de estrategia de expansión global y gestión de adquisiciones estratégicas. Contribución clave en el posicionamiento de SIFI que resultó en su adquisición por Faes Farma en 2025, creando valor significativo para accionistas.',
    technologies: ['Global Strategy', 'M&A Leadership', 'P&L Management', 'Business Development', 'Ophthalmology'],
  },
  {
    id: '3',
    title: 'Senior Executive Roles',
    company: 'Alcon (Novartis Group)',
    period: '2005 - 2020',
    description:
      'Gestión de negocios multimillonarios con responsabilidad P&L completa. Liderazgo de equipos internacionales en Europa, África, Asia y Medio Oriente. Dirección de estrategias comerciales y operacionales en mercados emergentes y desarrollados.',
    technologies: ['P&L Management', 'International Leadership', 'Team Development', 'Strategic Execution', 'Surgical & Vision Care'],
  },
  {
    id: '4',
    title: 'Early Career & Technical Roles',
    company: 'Pharmaceutical Industry',
    period: '1990 - 2005',
    description:
      'Inicio de carrera como Farmacéutico y Bioquímico. Experiencia técnica de laboratorio en industria farmacéutica y docencia universitaria. Transición progresiva a roles de gestión comercial y liderazgo estratégico.',
    technologies: ['Pharmaceutical Science', 'Laboratory Management', 'Quality Control', 'University Teaching', 'Technical Leadership'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">
            Mi <span className="text-gradient">experiencia</span>
          </h2>
          <p className="text-body">
            Un recorrido por los proyectos y equipos que han moldeado mi trayectoria profesional
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-item ${exp.current ? 'current' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="experience-marker">
                <Briefcase size={24} />
              </div>

              <div className="experience-content">
                <div className="experience-header-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  {exp.current && <span className="experience-badge">Actual</span>}
                </div>

                <div className="experience-company">
                  <strong>{exp.company}</strong>
                  <span className="experience-period">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-technologies">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

