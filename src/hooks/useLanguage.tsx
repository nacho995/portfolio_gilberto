import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Language } from '../i18n/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const detectBrowserLanguage = (): Language => {
  // Detectar idioma del navegador
  const browserLang = navigator.language || navigator.languages?.[0] || 'es'
  
  // Si el idioma del navegador es inglés, usar 'en', sino 'es'
  if (browserLang.toLowerCase().startsWith('en')) {
    return 'en'
  }
  
  return 'es'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Intentar cargar del localStorage primero
    const savedLang = localStorage.getItem('preferred-language') as Language
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang
    }
    // Si no hay preferencia guardada, detectar del navegador
    return detectBrowserLanguage()
  })

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('preferred-language', lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

