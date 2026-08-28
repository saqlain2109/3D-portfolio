import React, { useState } from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'
import confetti from 'canvas-confetti'

const Hero = () => {
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
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10 pointer-events-none'>
            <img src="/images/bg.png" alt="background" />
        </div>
    <div className='hero-layout'>
    {/*Left Hero Content */}
    <header className='flex flex-col justify-center w-full md:px-20 px-5'>
        <div className='flex flex-col gap-7'>
            <div className='hero-text'>
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
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-auto max-w-xl'>
                Hi, I am Saqlain, a Web Developer with a passion for building immersive 3D experiences, scalable web apps, and modern digital interfaces.
            </p>
            
            <div className='flex flex-wrap items-center gap-4 relative z-10'>
                <Button className="md:w-64 md:h-16 w-56 h-12" id='work' text='Explore My Work'/> 
                
                <button
                  onClick={handleDownloadCV}
                  className="px-6 py-4 rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-300 font-semibold uppercase tracking-wider text-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer group shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                >
                  <span>Get In Touch / CV</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    </header>
    {/*RIGHT: 3D Model */}
    <figure>
        {/* Room Lighting Switch Badge */}
        <div className="absolute top-28 right-6 md:right-16 z-30 flex items-center gap-2.5 bg-black-100/90 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-md shadow-2xl pointer-events-auto">
          <span className="text-xs text-white-50 font-medium">Room Mood:</span>
          <button
            type="button"
            onClick={() => setTheme(prev => prev === 'cyberpunk' ? 'studio' : 'cyberpunk')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
              theme === 'cyberpunk' 
                ? 'bg-cyan-400 text-black shadow-[0_0_12px_#38bdf8] hover:bg-cyan-300' 
                : 'bg-amber-400 text-black shadow-[0_0_12px_#fbbf24] hover:bg-amber-300'
            }`}
          >
            {theme === 'cyberpunk' ? '⚡ Cyberpunk Neon' : '☀️ Studio Warm'}
          </button>
        </div>

        <div className='hero-3d-layout'>
          <HeroExperience theme={theme} />
        </div>
    </figure>
    </div>
    <AnimatedCounter />
    </section>
  )
}

export default Hero
