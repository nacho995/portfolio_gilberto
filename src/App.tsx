import { useEffect } from 'react'
import Hero from '@components/Hero/Hero'
import ValueProposition from '@components/ValueProposition/ValueProposition'
import Expertise from '@components/Expertise/Expertise'
import Teaching from '@components/Teaching/Teaching'
import Experience from '@components/Experience/Experience'
import GlobalImpact from '@components/GlobalImpact/GlobalImpact'
import Research from '@components/Research/Research'
import Consulting from '@components/Consulting/Consulting'
import Education from '@components/Education/Education'
import Contact from '@components/Contact/Contact'
import Navigation from '@components/Navigation/Navigation'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

function App() {
  useScrollAnimation()

  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <Expertise />
        <Teaching />
        <Experience />
        <GlobalImpact />
        <Research />
        <Consulting />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App

