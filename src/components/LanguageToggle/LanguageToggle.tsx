import { motion } from 'framer-motion'
import { useLanguage } from '@hooks/useLanguage'
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-toggle">
      <motion.button
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ES
      </motion.button>
      <motion.button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  )
}

export default LanguageToggle

