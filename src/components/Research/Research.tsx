import { motion } from 'framer-motion'
import { FileText, ExternalLink, Award, TrendingUp } from 'lucide-react'
import './Research.css'

const insights = [
  {
    id: '1',
    type: 'Case Study',
    title: 'SIFI → Faes Farma: A Strategic Acquisition Case Study',
    description: 'Análisis profundo de la estrategia de M&A que resultó en una adquisición exitosa de €XXX millones.',
    category: 'M&A Strategy',
    featured: true,
    size: 'large',
  },
  {
    id: '2',
    type: 'White Paper',
    title: 'Post-Merger Integration in Pharmaceutical Industry',
    description: 'Metodología para PMI exitosa en sectores altamente regulados.',
    category: 'Integration',
    featured: true,
    size: 'medium',
  },
  {
    id: '3',
    type: 'Industry Insight',
    title: 'Global Expansion Strategies in MedTech',
    description: 'Framework para entrada a mercados emergentes en dispositivos médicos.',
    category: 'Strategy',
    size: 'medium',
  },
  {
    id: '4',
    type: 'Thought Leadership',
    title: 'Transforming Life Sciences Organizations',
    description: 'Principios de liderazgo transformacional aplicados a pharma y biotech.',
    category: 'Leadership',
    size: 'small',
  },
  {
    id: '5',
    type: 'Case Study',
    title: 'Leading Multi-Cultural Teams Across 4 Continents',
    description: 'Lecciones de liderazgo global en entornos complejos.',
    category: 'Leadership',
    size: 'small',
  },
  {
    id: '6',
    type: 'Framework',
    title: 'Board Advisory Best Practices',
    description: 'Modelo de gobierno corporativo para juntas directivas en Life Sciences.',
    category: 'Governance',
    size: 'small',
  },
]

const Research = () => {
  return (
    <section id="research" className="research">
      <div className="research-container">
        <motion.div
          className="research-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">Research & Thought Leadership</h2>
          <p className="text-body">
            Contribuciones académicas y insights estratégicos basados en experiencia ejecutiva real
          </p>
        </motion.div>

        <div className="bento-grid">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.id}
              className={`insight-card glass-academic ${insight.size}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {insight.featured && (
                <div className="featured-badge">
                  <Award size={16} />
                  Featured
                </div>
              )}

              <div className="insight-type">
                <FileText size={20} />
                {insight.type}
              </div>

              <h3 className="insight-title">{insight.title}</h3>
              <p className="insight-description">{insight.description}</p>

              <div className="insight-footer">
                <span className="insight-category">{insight.category}</span>
                <button className="insight-read">
                  <ExternalLink size={18} />
                  Read More
                </button>
              </div>

              {insight.featured && (
                <div className="trend-indicator">
                  <TrendingUp size={24} />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research

