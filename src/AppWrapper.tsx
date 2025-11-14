import { useLanguage } from './hooks/useLanguage'
import App from './App'

function AppWrapper() {
  const { language } = useLanguage()
  
  // Force re-render when language changes
  return <App key={language} />
}

export default AppWrapper

