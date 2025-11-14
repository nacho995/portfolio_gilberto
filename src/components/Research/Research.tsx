import { motion } from 'framer-motion'
import { FileText, ExternalLink, Award, TrendingUp } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import './Research.css'

const Research = () => {
  const { t } = useLanguage()

  const insights = [
    {
      id: '1',
      key: 'transformation' as const,
      featured: true,
      size: 'large',
    },
    {
      id: '2',
      key: 'mna' as const,
      featured: true,
      size: 'medium',
    },
    {
      id: '3',
      key: 'emerging' as const,
      featured: false,
      size: 'medium',
    },
    {
      id: '4',
      key: 'leadership' as const,
      featured: false,
      size: 'small',
    },
  ]

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
          <h2 className="text-display">{t.research.title}</h2>
          <p className="text-body">{t.research.subtitle}</p>
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
                  {t.research.featured}
                </div>
              )}

              <div className="insight-type">
                <FileText size={20} />
                {t.research.papers[insight.key].category}
              </div>

              <h3 className="insight-title">{t.research.papers[insight.key].title}</h3>
              <p className="insight-description">{t.research.papers[insight.key].description}</p>

              <div className="insight-footer">
                <div className="insight-tags">
                  {t.research.papers[insight.key].tags.map((tag: string, idx: number) => (
                    <span key={idx} className="insight-tag">{tag}</span>
                  ))}
                </div>
                <button className="insight-read">
                  <ExternalLink size={18} />
                  {t.research.viewFull}
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

