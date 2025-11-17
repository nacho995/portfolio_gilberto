import { motion } from 'framer-motion'
import { BookOpen, Users, Award } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import './Teaching.css'

const Teaching = () => {
  const { t } = useLanguage()

  return (
    <section id="teaching" className="teaching">
      <div className="teaching-container">
        <motion.div
          className="teaching-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">{t.teaching.title}</h2>
          <p className="text-body">{t.teaching.subtitle}</p>
        </motion.div>

        <motion.div
          className="teaching-philosophy glass-academic"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="philosophy-icon">
            <BookOpen size={48} />
          </div>
          <h3>{t.teaching.intro}</h3>
          <div className="philosophy-pillars">
            <div className="pillar-item">
              <Users size={24} />
              <span>Case Method</span>
            </div>
            <div className="pillar-item">
              <Award size={24} />
              <span>Real-World Focus</span>
            </div>
            <div className="pillar-item">
              <BookOpen size={24} />
              <span>Theory + Practice</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Teaching
