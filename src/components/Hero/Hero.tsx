import { motion } from 'framer-motion'
import { ChevronDown, Linkedin } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import ScientificParticles from './ScientificParticles'
import StatsCounter from './StatsCounter'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()
  
  const scrollToValue = () => {
    document.querySelector('#value-proposition')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <ScientificParticles />
      <div className="hero-content">
        <div className="hero-layout">
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="hero-image-wrapper glass-academic">
              <img 
                src="/gilberto.png" 
                alt="Gilberto Dalesio Delpini" 
                className="hero-image"
              />
              <div className="academic-halo"></div>
            </div>
          </motion.div>

          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="hero-name text-large"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t.hero.name}
            </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            className="hero-tagline text-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button 
              className="cta-primary" 
              onClick={() => window.open('https://www.linkedin.com/in/gilbertodalesio/', '_blank')}
            >
              <Linkedin size={20} />
              {t.hero.ctaPrimary}
            </button>
            <button className="cta-secondary" onClick={() => window.open('#contact', '_self')}>
              {t.hero.ctaSecondary}
            </button>
          </motion.div>
          
          <StatsCounter />
          </motion.div>
        </div>

        <motion.button
          className="hero-scroll-indicator"
          onClick={scrollToValue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ y: 5 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero

