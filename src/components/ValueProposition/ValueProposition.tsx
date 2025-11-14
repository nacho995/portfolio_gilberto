import { motion } from 'framer-motion'
import { Target, TrendingUp, Globe, Building2 } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import './ValueProposition.css'

const ValueProposition = () => {
  const { t } = useLanguage()

  const pillars = [
    {
      icon: Target,
      title: t.valueProposition.pillars.transformation.title,
      description: t.valueProposition.pillars.transformation.description,
    },
    {
      icon: TrendingUp,
      title: t.valueProposition.pillars.mna.title,
      description: t.valueProposition.pillars.mna.description,
    },
    {
      icon: Globe,
      title: t.valueProposition.pillars.expansion.title,
      description: t.valueProposition.pillars.expansion.description,
    },
    {
      icon: Building2,
      title: t.valueProposition.pillars.governance.title,
      description: t.valueProposition.pillars.governance.description,
    },
  ]
  return (
    <section id="value-proposition" className="value-proposition">
      <div className="value-container">
        <motion.div
          className="value-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">{t.valueProposition.title}</h2>
          <p className="text-body">
            {t.valueProposition.subtitle}
          </p>
        </motion.div>

        <div className="value-pillars">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="value-pillar"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="pillar-icon">
                <pillar.icon size={36} />
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition

