import React, { useState, useEffect } from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Loading from './components/Loading.jsx'
import TerminalModal from './components/TerminalModal.jsx'
import { useGLTF, useTexture } from '@react-three/drei'

// Preload 3D room and texture immediately at startup so it loads instantly
useGLTF.preload('/models/optimized-room.glb')
useTexture.preload('/images/textures/mat1.png')

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick initial loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <TerminalModal />
    </>
  )
}

export default App
