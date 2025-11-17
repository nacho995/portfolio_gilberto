import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import type { Experience as ExperienceType } from '@/types'
import './Experience.css'

const Experience = () => {
  const { t } = useLanguage()

  const experiences: ExperienceType[] = [
    {
      id: '1',
      title: t.experience.positions.sifi.role,
      company: t.experience.positions.sifi.company,
      period: t.experience.positions.sifi.period,
      description: t.experience.positions.sifi.description,
      technologies: t.experience.positions.sifi.achievements,
      current: true,
    },
    {
      id: '2',
      title: t.experience.positions.alcon_vp.role,
      company: t.experience.positions.alcon_vp.company,
      period: t.experience.positions.alcon_vp.period,
      description: t.experience.positions.alcon_vp.description,
      technologies: t.experience.positions.alcon_vp.achievements,
      current: false,
    },
    {
      id: '3',
      title: t.experience.positions.alcon_marketing.role,
      company: t.experience.positions.alcon_marketing.company,
      period: t.experience.positions.alcon_marketing.period,
      description: t.experience.positions.alcon_marketing.description,
      technologies: t.experience.positions.alcon_marketing.achievements,
      current: false,
    },
    {
      id: '4',
      title: t.experience.positions.alcon_earlier.role,
      company: t.experience.positions.alcon_earlier.company,
      period: t.experience.positions.alcon_earlier.period,
      description: t.experience.positions.alcon_earlier.description,
      technologies: t.experience.positions.alcon_earlier.achievements,
      current: false,
    },
  ]

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
          <h2 className="text-display">{t.experience.title}</h2>
          <p className="text-body">{t.experience.subtitle}</p>
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
                  {exp.technologies.map((tech: string, idx: number) => (
                    <span key={idx} className="tech-tag">
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
