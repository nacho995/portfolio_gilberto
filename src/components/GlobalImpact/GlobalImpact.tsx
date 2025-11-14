import { motion } from 'framer-motion'
import { Globe, MapPin, TrendingUp, Users } from 'lucide-react'
import { useInView } from '@hooks/useInView'
import './GlobalImpact.css'

const regions = [
  {
    id: '1',
    name: 'Europa',
    icon: '🇪🇺',
    years: '15+',
    projects: '40+',
    impact: 'Liderazgo de expansión en 12 países, transformación de operaciones Alcon',
    position: { top: '25%', left: '48%' },
  },
  {
    id: '2',
    name: 'Asia',
    icon: '🌏',
    years: '10+',
    projects: '25+',
    impact: 'Entrada a mercados emergentes, gestión de equipos multinacionales',
    position: { top: '35%', left: '75%' },
  },
  {
    id: '3',
    name: 'Medio Oriente',
    icon: '🕌',
    years: '8+',
    projects: '20+',
    impact: 'Desarrollo de estrategias regionales, expansión en MENA',
    position: { top: '40%', left: '58%' },
  },
  {
    id: '4',
    name: 'África',
    icon: '🌍',
    years: '6+',
    projects: '15+',
    impact: 'Proyectos de acceso a medicamentos, desarrollo de mercados',
    position: { top: '55%', left: '50%' },
  },
  {
    id: '5',
    name: 'Latinoamérica',
    icon: '🌎',
    years: '20+',
    projects: '35+',
    impact: 'Origen profesional, liderazgo regional extensivo',
    position: { top: '60%', left: '22%' },
  },
]

const GlobalImpact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="global-impact" className="global-impact" ref={ref as any}>
      <div className="global-container">
        <motion.div
          className="global-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display">Global Impact</h2>
          <p className="text-body">
            Transformando organizaciones en cuatro continentes con liderazgo estratégico probado
          </p>
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
                <h4>{region.name}</h4>
                <div className="tooltip-stats">
                  <div className="stat-mini">
                    <TrendingUp size={16} />
                    <span>{region.years} años</span>
                  </div>
                  <div className="stat-mini">
                    <Users size={16} />
                    <span>{region.projects} proyectos</span>
                  </div>
                </div>
                <p>{region.impact}</p>
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
          <p className="summary-text">
            <strong>Impacto Global Comprobado:</strong> Gestión de operaciones en 50+ mercados,
            liderazgo de equipos multiculturales de 1000+ personas, y responsabilidad P&L de
            múltiples millones de euros en sectores altamente regulados.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalImpact

