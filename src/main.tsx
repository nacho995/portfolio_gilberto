import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './AppWrapper'
import { LanguageProvider } from './hooks/useLanguage'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppWrapper />
    </LanguageProvider>
  </React.StrictMode>
)

