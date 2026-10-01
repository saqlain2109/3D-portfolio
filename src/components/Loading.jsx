import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null);
  const fsRef = useRef(null);
  const elemRef = useRef(null);
  const whiteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // 1. Initial State
      gsap.set('.reveal-word', { y: 120, opacity: 0 });
      gsap.set(elemRef.current, { height: '0%' });
      gsap.set(whiteRef.current, { height: '0%' });

      // 2. Animate text in (slide up from mask)
      tl.to('.reveal-word', {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      })
      // 3. Brief hold to admire typography
      .to({}, { duration: 0.5 })
      // 4. Slide text up and out
      .to('.reveal-word', {
        y: -120,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.in',
      })
      // 5. Emerald curtain wipe (#elem)
      .to(elemRef.current, {
        height: '100%',
        duration: 0.8,
        ease: 'expo.inOut',
      }, '-=0.2')
      // 6. Main dark screen shrink
      .to(fsRef.current, {
        height: '0%',
        duration: 0.8,
        ease: 'expo.inOut',
      }, '-=0.6')
      // 7. Emerald curtain slides out to reveal the 3D portfolio
      .to(elemRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'expo.inOut',
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none select-none">
      {/* Accent Emerald / Mint Transition Layer */}
      <div
        ref={elemRef}
        className="fixed bottom-0 left-0 w-full bg-[#19f7ad] z-[9998] pointer-events-auto"
      />

      {/* Secondary Wipe Layer */}
      <div
        ref={whiteRef}
        className="fixed bottom-0 left-0 w-full bg-[#1a1a24] z-[9997]"
      />

      {/* Main Fullscreen Dark Preloader (#fs) */}
      <div
        ref={fsRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#111] text-white z-[9999] flex flex-col justify-between p-8 md:p-14 overflow-hidden pointer-events-auto"
      >
        {/* Top Header */}
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h5 className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-white/50 font-tech">
            Design Portfolio
          </h5>
          <h5 className="tracking-widest text-[10px] md:text-xs text-white/40 font-tech mt-1">
            © {new Date().getFullYear()}
          </h5>
        </div>

        {/* Center Kinetic Headline */}
        <div className="flex items-center justify-center w-full text-center my-auto">
          <h1 className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-6 gap-y-2 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight overflow-hidden py-4">
            <span className="overflow-hidden inline-block">
              <span className="reveal-word inline-block font-display font-semibold">
                Saqlain
              </span>
            </span>

            <span className="overflow-hidden inline-block">
              <span className="reveal-word inline-block font-serif-italic italic font-normal text-[#19f7ad] drop-shadow-[0_0_20px_rgba(25,247,173,0.5)]">
                Stuff
              </span>
            </span>

            <span className="overflow-hidden inline-block">
              <span className="reveal-word inline-block font-display text-white/80 font-light">
                is
              </span>
            </span>

            <span className="overflow-hidden inline-block">
              <span className="reveal-word inline-block font-display text-white/80 font-light">
                here
              </span>
            </span>
          </h1>
        </div>

        {/* Bottom Sub-indicator */}
        <div className="flex items-center justify-between text-white/30 text-xs font-tech tracking-wider uppercase">
          <span>Creative Engineering</span>
          <span className="animate-pulse text-[#19f7ad]">✦ loading universe</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;