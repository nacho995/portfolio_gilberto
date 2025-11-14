import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Users, Award, ChevronDown, ChevronUp } from 'lucide-react'
import './Teaching.css'

const courses = [
  {
    id: '1',
    title: 'Strategic Management in Life Sciences',
    level: 'MBA / Executive MBA',
    description: 'Estrategias competitivas y gestión en industrias altamente reguladas',
    topics: [
      'Competitive Strategy in Pharmaceutical Industry',
      'Regulatory Environment & Strategic Planning',
      'Innovation Management in MedTech',
      'Global Market Entry Strategies',
    ],
  },
  {
    id: '2',
    title: 'Mergers & Acquisitions',
    level: 'MBA / DBA',
    description: 'Teoría y práctica de M&A con casos reales de la industria',
    topics: [
      'M&A Strategy & Deal Structuring',
      'Due Diligence & Valuation',
      'Post-Merger Integration (PMI)',
      'Case Study: SIFI → Faes Farma Acquisition',
    ],
  },
  {
    id: '3',
    title: 'International Business Development',
    level: 'MBA',
    description: 'Expansión global y gestión de operaciones multinacionales',
    topics: [
      'Global Market Analysis',
      'Cross-Cultural Management',
      'International P&L Management',
      'Emerging Markets Strategy',
    ],
  },
  {
    id: '4',
    title: 'Executive Leadership & Transformation',
    level: 'Executive Education',
    description: 'Liderazgo transformacional en organizaciones complejas',
    topics: [
      'Organizational Transformation',
      'Change Management',
      'Team Leadership at Scale',
      'Performance Management Systems',
    ],
  },
]

const Teaching = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

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
          <h2 className="text-display">Academic Offerings</h2>
          <p className="text-body">
            Cursos diseñados para conectar teoría estratégica con práctica ejecutiva real
          </p>
        </motion.div>

        <div className="teaching-philosophy glass-academic">
          <div className="philosophy-icon">
            <BookOpen size={48} />
          </div>
          <h3>Teaching Philosophy</h3>
          <p className="philosophy-statement">
            "Mi enfoque pedagógico se fundamenta en el <strong>método de casos</strong> basado en
            experiencias reales de transformación empresarial. Creo que el aprendizaje más profundo
            ocurre cuando la teoría estratégica se confronta con la complejidad del mundo real.
            Cada sesión combina rigor académico con insights prácticos de 30+ años liderando
            organizaciones globales en sectores altamente regulados."
          </p>
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
                  <h3 className="course-title">{course.title}</h3>
                  <span className="course-level">{course.level}</span>
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

              <p className="course-description">{course.description}</p>

              <AnimatePresence>
                {expandedCourse === course.id && (
                  <motion.div
                    className="course-syllabus"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>Syllabus Highlights:</h4>
                    <ul>
                      {course.topics.map(topic => (
                        <motion.li
                          key={topic}
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

