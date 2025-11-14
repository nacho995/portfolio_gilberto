import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import './Education.css'

const Education = () => {
  const { t } = useLanguage()

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
          <h2 className="text-display">{t.education.title}</h2>
          <p className="text-body">{t.education.subtitle}</p>
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
            <h3 className="education-title">{t.education.degrees.biochemistry.degree}</h3>
            <p className="education-institution">{t.education.degrees.biochemistry.institution}</p>
            <div className="education-distinction">
              <Award size={18} />
              <span>{t.education.degrees.biochemistry.honor}</span>
            </div>
            <p className="education-location">{t.education.degrees.biochemistry.location}</p>
            <p className="education-description">{t.education.degrees.biochemistry.description}</p>
          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="education-icon">
              <GraduationCap size={36} />
            </div>
            <h3 className="education-title">{t.education.degrees.pharmacy.degree}</h3>
            <p className="education-institution">{t.education.degrees.pharmacy.institution}</p>
            <div className="education-distinction">
              <Award size={18} />
              <span>{t.education.degrees.pharmacy.honor}</span>
            </div>
            <p className="education-location">{t.education.degrees.pharmacy.location}</p>
            <p className="education-description">{t.education.degrees.pharmacy.description}</p>
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
            <h3 className="education-title">{t.education.degrees.business.degree}</h3>
            <p className="education-institution">{t.education.degrees.business.institution}</p>
            <p className="education-focus">{t.education.degrees.business.program}</p>
            <p className="education-location">{t.education.degrees.business.location}</p>
            <p className="education-description">{t.education.degrees.business.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

