import React, { useState } from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import CharacterExperience from '../components/HeroModels/CharacterExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'
import confetti from 'canvas-confetti'

const Hero = () => {
  const [modelMode, setModelMode] = useState('character');
  const [theme, setTheme] = useState('cyberpunk');

  const handleDownloadCV = () => {
    // Multi-stage confetti celebration
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#f472b6']
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 250);

    // Provide CV or prompt contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    }
  };

  useGSAP(()=>{
      gsap.fromTo('.hero-text h1',{
          y: 50,
          opacity: 0
      },
      {
          y:0,
          opacity: 1,
          stagger : 0.2,
          duration: 1,
          ease: 'power2.inOut'
      })
  })

  return (
    <section id='hero' className='relative overflow-hidden bg-black min-h-screen flex flex-col justify-between pb-4 md:pb-6 xl:pb-8'>
      {/* Background Graphic */}
      <div className='absolute top-0 left-0 z-10 pointer-events-none'>
        <img src="/images/bg.png" alt="background" />
      </div>

      {/* When character mode is active, full-bleed native GPU video backdrop */}
      {modelMode === 'character' && <CharacterExperience />}

      <div className='hero-layout relative z-20'>
        {/* Left Hero Content */}
        <header className='flex flex-col justify-center w-full xl:w-1/2 md:px-20 px-5 relative z-20 pt-2 sm:pt-6 xl:pt-0'>
          <div className='flex flex-col gap-4 sm:gap-6 md:gap-7'>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="hero-badge font-tech tracking-wider uppercase text-xs text-cyan-300 border border-cyan-500/25 bg-cyan-950/40 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                ✦ Available for Work
              </span>

              {/* Model Mode Switcher Badge - Integrated cleanly without colliding with top navbar */}
              <div className="flex items-center gap-1.5 bg-black/60 border border-white/20 px-2.5 py-1 rounded-full backdrop-blur-md shadow-md pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setModelMode(prev => prev === 'character' ? 'room' : 'character')}
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer bg-white text-black hover:bg-white/90 flex items-center gap-1 shadow-sm"
                  title="Switch 3D Model"
                >
                  <span>{modelMode === 'character' ? '🧑 3D Character' : '🏠 3D Room'}</span>
                  <span className="text-[10px] opacity-70 font-normal underline">(switch)</span>
                </button>

                {modelMode === 'room' && (
                  <button
                    type="button"
                    onClick={() => setTheme(prev => prev === 'cyberpunk' ? 'studio' : 'cyberpunk')}
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                      theme === 'cyberpunk' 
                        ? 'bg-purple-500/30 text-purple-300 border border-purple-400/40 hover:bg-purple-500/50' 
                        : 'bg-amber-500/30 text-amber-300 border border-amber-400/40 hover:bg-amber-500/50'
                    }`}
                    title="Toggle Room Lighting"
                  >
                    {theme === 'cyberpunk' ? '⚡ Neon' : '☀️ Warm'}
                  </button>
                )}
              </div>

              <span className="font-calligraphy text-xl md:text-2xl text-yellow-300 font-medium -rotate-2 hidden lg:inline-block">
                ~ handcrafted with code & 3D art ✦
              </span>
            </div>

            <div className='hero-text font-display'>
              <h1>Shaping 
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, idx) => (
                      <span key={`${word.text}-${idx}`} className='flex items-center md:gap-3 gap-1'>
                        <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50 ' />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into <span className="font-serif-italic font-normal text-cyan-300 tracking-wide">Real Projects</span></h1>
              <h1>that <span className="font-serif-italic font-normal text-purple-300 tracking-wide">Deliver Results</span></h1>
            </div>

            <p className='text-white/80 md:text-xl text-base relative z-10 pointer-events-auto max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'>
              Hi, I am <span className="font-calligraphy text-2xl md:text-3xl text-white font-bold tracking-wide underline decoration-cyan-400/60 decoration-wavy underline-offset-4">Saqlain</span>, a Creative Developer with a passion for building immersive 3D experiences, scalable web apps, and modern digital interfaces.
            </p>
            
            <div className='flex flex-wrap items-center gap-3.5 relative z-10'>
              <Button className="md:w-64 md:h-14 w-56 h-12" id='work' text='Explore My Work'/> 
              
              <button
                onClick={handleDownloadCV}
                className="px-5 py-3 md:px-6 md:py-4 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-semibold uppercase tracking-wider text-xs md:text-sm hover:bg-cyan-500/25 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer group shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                <span>Get In Touch / CV</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </header>

        {/* Right side container - on desktop gives space for character; on mobile hidden if character mode is active */}
        <figure className={`relative w-full xl:w-[50%] h-[360px] sm:h-[440px] md:h-[480px] xl:h-[480px] 2xl:h-[540px] flex flex-col items-center justify-center mt-4 xl:mt-0 ${
          modelMode === 'character' ? 'hidden xl:flex pointer-events-none' : 'flex'
        }`}>
          {modelMode === 'room' && (
            <div className='hero-3d-layout flex items-center justify-center'>
              <HeroExperience theme={theme} />
            </div>
          )}
        </figure>
      </div>

      <div className="relative z-20 w-full mt-auto pt-10 sm:pt-14 md:pt-16 xl:pt-20">
        <AnimatedCounter />
      </div>
    </section>
  )
}

export default Hero
