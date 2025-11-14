import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Users, Award, ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import './Teaching.css'

const Teaching = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const { t } = useLanguage()

  const courses = [
    { id: 'strategic', key: 'strategic' as const },
    { id: 'mna', key: 'mna' as const },
    { id: 'international', key: 'international' as const },
  ]

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

        <div className="teaching-philosophy glass-academic">
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
        </div>

        <h3 className="courses-title">{t.teaching.coursesTitle}</h3>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="course-card glass-academic-dark"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="course-header">
                <div>
                  <h3 className="course-title">{t.teaching.courses[course.key].title}</h3>
                  <span className="course-level">{t.teaching.courses[course.key].institution}</span>
                </div>
                <motion.button
                  className="course-toggle"
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedCourse === course.id ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </motion.button>
              </div>

              <p className="course-description">{t.teaching.courses[course.key].description}</p>

              <AnimatePresence>
                {expandedCourse === course.id && (
                  <motion.div
                    className="course-syllabus"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>{t.teaching.courses[course.key].syllabus}</h4>
                    <ul>
                      {t.teaching.courses[course.key].topics.map((topic: string, idx: number) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {topic}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teaching

