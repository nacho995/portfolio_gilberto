import { motion } from 'framer-motion'
import { Workflow, Globe2, Handshake, Users2 } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import './Consulting.css'

const Consulting = () => {
  const { t } = useLanguage()

  const consultingAreas = [
    { id: '1', icon: Users2, key: 'board' as const },
    { id: '2', icon: Workflow, key: 'transformation' as const },
    { id: '3', icon: Handshake, key: 'mna' as const },
    { id: '4', icon: Globe2, key: 'international' as const },
  ]

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
          <h2 className="text-display">{t.consulting.title}</h2>
          <p className="text-body">{t.consulting.subtitle}</p>
        </motion.div>

        <p className="consulting-intro">{t.consulting.intro}</p>

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
              <h3 className="consulting-title">{t.consulting.services[area.key].title}</h3>
              <p className="consulting-description">{t.consulting.services[area.key].description}</p>
              <div className="consulting-keywords">
                <h4>Deliverables:</h4>
                <ul>
                  {t.consulting.services[area.key].deliverables.map((deliverable: string, idx: number) => (
                    <li key={idx}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Consulting

