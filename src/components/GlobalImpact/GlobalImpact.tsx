import { motion } from 'framer-motion'
import { Globe, MapPin, TrendingUp, Users } from 'lucide-react'
import { useInView } from '@hooks/useInView'
import { useLanguage } from '@hooks/useLanguage'
import './GlobalImpact.css'

const GlobalImpact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { t } = useLanguage()

  const regions = [
    {
      id: '1',
      key: 'europe' as const,
      icon: '🇪🇺',
      position: { top: '16%', left: '48%' },
    },
    {
      id: '2',
      key: 'middle_east' as const,
      icon: '🏝️',
      position: { top: '32%', left: '59%' },
    },
    {
      id: '3',
      key: 'central_asia' as const,
      icon: '🏔️',
      position: { top: '25%', left: '66%' },
    },
    {
      id: '4',
      key: 'latam' as const,
      icon: '🌎',
      position: { top: '65%', left: '28%' },
    },
  ]

  return (
    <section id="global-impact" className="global-impact" ref={ref}>
      <div className="global-container">
        <motion.div
          className="global-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">{t.globalImpact.title}</h2>
          <p className="text-body">{t.globalImpact.subtitle}</p>
        </motion.div>

        <div className="world-map-container">
          <div className="world-map-background"></div>

          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              className="region-pin"
              style={{
                top: region.position.top,
                left: region.position.left,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="pin-marker">
                <MapPin size={24} />
              </div>
              <div className="region-tooltip glass-academic">
                <div className="tooltip-icon">{region.icon}</div>
                <h4>{t.globalImpact.regions[region.key].title}</h4>
                <div className="tooltip-stats">
                  <div className="stat-mini">
                    <TrendingUp size={16} />
                    <span>{t.globalImpact.regions[region.key].years}</span>
                  </div>
                  <div className="stat-mini">
                    <Users size={16} />
                    <span>{t.globalImpact.regions[region.key].description}</span>
                  </div>
                </div>
                <ul>
                  {t.globalImpact.regions[region.key].highlights.map(
                    (highlight: string, idx: number) => (
                      <li key={idx}>{highlight}</li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Líneas conectoras animadas */}
          <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            {regions.map((region, index) => {
              if (index === regions.length - 1) return null
              const next = regions[index + 1]
              return (
                <motion.line
                  key={`line-${region.id}`}
                  x1={region.position.left}
                  y1={region.position.top}
                  x2={next.position.left}
                  y2={next.position.top}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                  transition={{ delay: 1 + index * 0.3, duration: 1 }}
                />
              )
            })}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B3D91" />
                <stop offset="50%" stopColor="#00856F" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          className="global-summary glass-academic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Globe size={40} className="summary-icon" />
          <p className="summary-text">{t.globalImpact.intro}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalImpact
