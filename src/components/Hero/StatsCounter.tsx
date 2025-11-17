import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from '@hooks/useInView'
import { useLanguage } from '@hooks/useLanguage'
import './StatsCounter.css'

const StatsCounter = () => {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true })
  const { t } = useLanguage()

  const stats = [
    { value: 40, suffix: '+', label: t.hero.stats.years, icon: '🎓' },
    { value: 500, prefix: '€', suffix: 'M+', label: t.hero.stats.mna, icon: '💼' },
  ]

  return (
    <motion.div
      ref={ref as any}
      className="stats-counter"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card glass-academic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">
              {stat.prefix}
              {isInView && <CountUp end={stat.value} duration={2.5} separator="," decimals={0} />}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default StatsCounter
