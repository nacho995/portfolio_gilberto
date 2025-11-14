import { motion } from 'framer-motion'
import { Workflow, TrendingUp, Users, Microscope, Globe2, Lightbulb } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import './Expertise.css'

const Expertise = () => {
  const { t } = useLanguage()

  const expertiseAreas = [
    {
      icon: Microscope,
      key: 'lifesciences' as const,
    },
    {
      icon: TrendingUp,
      key: 'strategy' as const,
    },
    {
      icon: Workflow,
      key: 'mna' as const,
    },
    {
      icon: Globe2,
      key: 'international' as const,
    },
    {
      icon: Users,
      key: 'transformation' as const,
    },
    {
      icon: Lightbulb,
      key: 'governance' as const,
    },
  ]

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
          <h2 className="text-display">{t.expertise.title}</h2>
          <p className="text-body">{t.expertise.subtitle}</p>
        </motion.div>

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.key}
              className="expertise-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="expertise-icon">
                <area.icon size={28} />
              </div>
              <h3 className="expertise-title">{t.expertise.areas[area.key].title}</h3>
              <p className="expertise-description">{t.expertise.areas[area.key].description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise

