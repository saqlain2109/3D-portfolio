import React, { useState, useEffect } from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Loading from './components/Loading.jsx'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
