import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSignature = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const playAnimation = () => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('.signature-path');
    
    // Set dash arrays and offsets
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    // Animate strokes sequentially like writing with a pen
    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 1.8,
      stagger: 0.12,
      ease: 'power2.inOut',
      overwrite: 'auto',
    });
  };

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const paths = svgRef.current.querySelectorAll('.signature-path');
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      onEnter: () => playAnimation(),
      once: false,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center py-10 md:py-16 relative overflow-hidden group cursor-pointer"
      onClick={playAnimation}
      title="Click to replay signature animation"
    >
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />

      <div className="flex items-center gap-2 mb-3 z-10">
        <span className="font-tech text-xs uppercase tracking-[0.25em] text-cyan-400/80">
          ✦ Creative Signature
        </span>
        <span className="font-calligraphy text-sm text-yellow-300/80 hidden sm:inline-block">
          (click to replay)
        </span>
      </div>

      {/* SVG Signature of "Saqlain" with animated stroke path */}
      <div className="w-full max-w-3xl px-4 flex justify-center z-10">
        <svg
          ref={svgRef}
          id="Visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 920 320"
          className="w-full h-auto max-h-48 md:max-h-64 object-contain filter drop-shadow-[0_0_16px_rgba(34,211,238,0.4)]"
        >
          <defs>
            <linearGradient id="signature-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="45%" stopColor="#38bdf8" />
              <stop offset="75%" stopColor="#19f7ad" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <filter id="sig-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            fill="none"
            stroke="url(#signature-grad)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#sig-glow)"
          >
            {/* Letter S */}
            <path
              className="signature-path"
              d="M 80 185 C 60 155, 80 75, 140 60 C 185 48, 195 85, 160 115 C 120 150, 75 170, 70 205 C 65 238, 115 245, 165 218 C 188 205, 205 195, 218 195"
            />

            {/* Letter a (first) */}
            <path
              className="signature-path"
              d="M 280 150 C 255 145, 230 165, 230 190 C 230 218, 255 225, 280 225 C 295 225, 310 212, 310 190 C 310 165, 295 150, 280 150"
            />
            <path
              className="signature-path"
              d="M 310 152 L 310 218 C 310 226, 320 228, 330 220"
            />

            {/* Letter q */}
            <path
              className="signature-path"
              d="M 390 150 C 365 145, 340 165, 340 190 C 340 218, 365 225, 390 225 C 405 225, 418 212, 418 190 C 418 165, 405 150, 390 150"
            />
            <path
              className="signature-path"
              d="M 418 152 L 418 278 C 418 288, 432 285, 442 260 L 452 222"
            />

            {/* Letter l */}
            <path
              className="signature-path"
              d="M 452 222 C 470 170, 492 75, 510 62 C 522 52, 532 60, 525 90 C 510 140, 492 195, 500 218 C 505 228, 520 228, 536 215"
            />

            {/* Letter a (second) */}
            <path
              className="signature-path"
              d="M 595 150 C 570 145, 545 165, 545 190 C 545 218, 570 225, 595 225 C 610 225, 622 212, 622 190 C 622 165, 610 150, 595 150"
            />
            <path
              className="signature-path"
              d="M 622 152 L 622 218 C 622 226, 632 228, 646 218"
            />

            {/* Letter i */}
            <path
              className="signature-path"
              d="M 646 218 C 655 185, 665 160, 676 152 L 676 218 C 676 226, 686 228, 702 215"
            />
            <path
              className="signature-path"
              d="M 674 120 C 674 116, 678 116, 678 120 C 678 124, 674 124, 674 120"
            />

            {/* Letter n */}
            <path
              className="signature-path"
              d="M 702 215 C 712 185, 718 165, 722 155 L 722 218"
            />
            <path
              className="signature-path"
              d="M 722 175 C 734 152, 756 145, 774 145 C 792 145, 800 160, 800 185 L 800 218 C 800 228, 812 228, 830 215"
            />

            {/* Flourish underline */}
            <path
              className="signature-path"
              d="M 120 258 C 260 242, 480 270, 680 248 C 760 238, 830 226, 868 212"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedSignature;
