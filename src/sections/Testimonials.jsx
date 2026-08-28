import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { testimonials } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.testimonial-card',
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What Clients & Collaborators Say"
          sub="⭐ Testimonials & Social Proof"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="testimonial-card card-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle neon gradient corner glow on hover */}
              <div className="absolute -top-12 -right-12 size-28 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <img
                      key={i}
                      src="/images/gold-star.png"
                      alt="gold star"
                      className="size-4"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-white-50 text-base leading-relaxed mb-6 font-normal">
                  "{item.review}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={item.imgPath}
                  alt={item.name}
                  className="size-12 rounded-full object-cover border border-cyan-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-semibold text-base flex items-center gap-1.5">
                    {item.name}
                    <span className="text-cyan-400 text-xs" title="Verified Client">✓</span>
                  </h4>
                  <p className="text-blue-50 text-xs">{item.mentions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
