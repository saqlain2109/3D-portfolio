import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const featuredProjects = [
  {
    id: "zentry",
    title: "Modern Cybersecurity Website Clone (Zentry.com)",
    category: "3D Interactive Web",
    badge: "Awwwards Clone",
    desc: "A visually rich and animated 3D clone of Zentry.com, built using React, GSAP, and Tailwind CSS. Features silky smooth scroll animations, interactive video modals, and modern design precision.",
    image: "/images/Frontend-1.png",
    imageBg: "bg-[#080d1a]",
    imageFit: "object-cover",
    link: "https://zentryclonebyme.netlify.app/",
    tags: ["React", "GSAP", "Tailwind CSS", "3D Motion"],
  },
  {
    id: "fizzi",
    title: "Fizzi 3D Interactive Soda Showcase",
    category: "3D Floating Experience",
    badge: "Next.js 14 · Three.js",
    desc: "An immersive 3D ecommerce showcase featuring real-time floating 3D soda cans, dynamic flavor shifting, and silky smooth GSAP ScrollTrigger timeline choreography.",
    image: "/images/fizzi.png",
    imageBg: "bg-[#131b2e]",
    imageFit: "object-cover",
    link: "https://fizzi-xi-one.vercel.app/",
    tags: ["Next.js 14", "Three.js", "GSAP ScrollTrigger", "Prismic"],
  },
  {
    id: "golf",
    title: "Sidcup Family Golf Club Experience",
    category: "High-Energy Web",
    badge: "Sports & Luxury",
    desc: "A dynamic, high-energy golf club web experience featuring custom cursor physics, video backgrounds, and interactive navigation.",
    image: "/images/project2.png",
    imageBg: "bg-[#ffefdb]",
    imageFit: "object-contain",
    link: "https://golfclube.netlify.app/",
    tags: ["HTML5/CSS3", "JavaScript", "GSAP", "Locomotive"],
  },
  {
    id: "macos",
    title: "macOS Interactive Web Portfolio",
    category: "Browser Operating System",
    badge: "Interactive Desktop OS",
    desc: "A fully interactive macOS operating system replica running directly in the browser, featuring draggable desktop windows, terminal, Safari, and custom apps.",
    image: "/images/macos.png",
    imageBg: "bg-[#1a1a24]",
    imageFit: "object-contain",
    link: "https://mac-ios-portfolio.netlify.app/",
    tags: ["React", "Tailwind CSS", "Lucide Icons", "Web OS"],
  },
];

const additionalProjects = [
  {
    title: "Enterprise E-Procurement Portal",
    category: "Full-Stack Enterprise MERN",
    desc: "A scalable, multi-tenant procurement & vendor management platform with automated purchase orders, RFQ bidding, and role-based approval workflows.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Vite"],
    liveUrl: "https://e-procument.vercel.app/",
    githubUrl: "https://github.com/saqlain2109/E-procument",
    badge: "Enterprise Platform",
  },
  {
    title: "Travel & Expense Claim System",
    category: "Corporate FinTech / Workflow",
    desc: "Comprehensive corporate travel booking and employee expense reimbursement portal with real-time currency conversions, budget audits, and manager approvals.",
    tags: ["MERN Stack", "Redux Toolkit", "REST API", "Tailwind"],
    githubUrl: "https://github.com/saqlain2109/newtravel",
    badge: "Workflow App",
  },
  {
    title: "Lazarev Design Agency Clone",
    category: "Creative Frontend & Motion",
    desc: "Pixel-perfect clone of the award-winning Lazarev agency website featuring advanced layout transitions, kinetic typography, and smooth interaction states.",
    tags: ["JavaScript", "GSAP", "Locomotive Scroll", "CSS3"],
    liveUrl: "https://lazarev-clone-1.netlify.app/",
    badge: "Motion Web",
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [showMore, setShowMore] = useState(false);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.15 * index,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80',
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* 4 Featured Projects Frame (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="h-full"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-border rounded-2xl p-5 md:p-6 bg-black-100/80 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-all duration-500 group hover:-translate-y-1.5 h-full overflow-hidden"
              >
                <div>
                  <div className={`overflow-hidden rounded-xl h-64 md:h-72 lg:h-80 w-full relative ${project.imageBg} flex items-center justify-center p-2`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${project.imageFit} rounded-lg transition-transform duration-700 ease-out group-hover:scale-105`}
                    />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between gap-2 mb-2 font-tech">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {project.badge}
                      </span>
                      <span className="text-xs text-blue-50">{project.category}</span>
                    </div>

                    <h2 className="font-display font-bold text-2xl lg:text-3xl text-white group-hover:text-cyan-300 transition-colors mt-3 mb-2">
                      {project.title}
                    </h2>

                    <p className="text-white-50 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10 font-tech">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-tech text-sm mt-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View Live Experience</span>
                    <span>→</span>
                  </div>
                  <span className="text-xs text-white/40 group-hover:text-cyan-300/80 transition-colors">Live Production ↗</span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Expand / View More Projects Section */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <p className="font-calligraphy text-xl text-cyan-300/80 -rotate-1">~ curated archive of scalable web apps ~</p>
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="px-6 py-3 rounded-full border border-cyan-500/40 bg-black-100/90 hover:bg-cyan-500/10 text-cyan-300 hover:border-cyan-400 font-tech font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.15)] cursor-pointer group"
          >
            <span>{showMore ? 'Show Less Projects' : 'Explore More Projects (3 More)'}</span>
            <span className={`transition-transform duration-300 ${showMore ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}>
              ↓
            </span>
          </button>

          {/* Collapsible Additional Projects Grid */}
          {showMore && (
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
              {additionalProjects.map((item, index) => (
                <div
                  key={index}
                  className="card-border rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden bg-black-100/80 backdrop-blur-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 font-tech">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                        {item.badge}
                      </span>
                      <span className="text-xs text-blue-50">{item.category}</span>
                    </div>

                    <h3 className="font-display text-white text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white-50 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-tech font-bold uppercase tracking-wider transition-all"
                        >
                          <span>Live Demo</span>
                          <span>↗</span>
                        </a>
                      )}
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10 text-xs font-tech font-bold uppercase tracking-wider transition-all"
                        >
                          <span>GitHub Repo</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
