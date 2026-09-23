import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const additionalProjects = [
  {
    title: "Enterprise E-Procurement Portal",
    category: "Full-Stack Enterprise MERN",
    desc: "A scalable, multi-tenant procurement & vendor management platform with automated purchase orders, RFQ bidding, and role-based approval workflows.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Vite"],
    link: "https://github.com/saqlain2109/E-procument",
    badge: "Enterprise App",
    isGitHub: true,
  },
  {
    title: "Travel & Expense Claim System",
    category: "Corporate FinTech / Workflow",
    desc: "Comprehensive corporate travel booking and employee expense reimbursement portal with real-time currency conversions, budget audits, and manager approvals.",
    tags: ["MERN Stack", "Redux Toolkit", "REST API", "Tailwind"],
    link: "https://github.com/saqlain2109/newtravel",
    badge: "Workflow App",
    isGitHub: true,
  },
  {
    title: "Lazarev Design Agency Clone",
    category: "Creative Frontend & Motion",
    desc: "Pixel-perfect clone of the award-winning Lazarev agency website featuring advanced layout transitions, kinetic typography, and smooth interaction states.",
    tags: ["JavaScript", "GSAP", "Locomotive Scroll", "CSS3"],
    link: "https://lazarev-clone-1.netlify.app/",
    badge: "Motion Web",
    isGitHub: false,
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const [showMore, setShowMore] = useState(false);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
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
          delay: 0.2 * (index + 1),
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
        {/* Top 3 Featured Showcase Projects */}
        <div className="showcaselayout">
          {/* Left Side: Primary Big Featured Project (Zentry Clone) */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <a href="https://zentryclonebyme.netlify.app/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="image-wrapper overflow-hidden rounded-xl">
                <img
                  src="/images/Frontend-1.png"
                  alt="Modern Cybersecurity Website Clone (Zentry)"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-content mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    Awwwards Clone
                  </span>
                  <span className="text-xs text-blue-50">3D Interactive</span>
                </div>
                <h2>Modern Cybersecurity Website Clone (Zentry.com)</h2>
                <p className="text-white-50 md:text-xl text-base leading-relaxed">
                  A visually rich and animated 3D clone of Zentry.com, built using React, GSAP, and Tailwind CSS.
                  Features silky smooth scroll animations, interactive video modals, and modern design precision.
                </p>
                <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Live Experience</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Right Side: 2 Featured Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {/* Project 2: Golf Club */}
            <a href="https://golfclube.netlify.app/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-[#ffefdb] overflow-hidden">
                  <img
                    src="/images/project2.png"
                    alt="Golf Club Project"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Sports & Hospitality
                    </span>
                  </div>
                  <h2>Golf Club Experience</h2>
                </div>
              </div>
            </a>

            {/* Project 3: macOS Portfolio (Replaced Lazarev) */}
            <a href="https://mac-ios-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-[#1a1a24] overflow-hidden">
                  <img
                    src="/images/macos.png"
                    alt="macOS Interactive Portfolio"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Interactive Desktop OS
                    </span>
                  </div>
                  <h2>macOS Interactive Web Portfolio</h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Expand / View More Projects Section */}
        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="px-6 py-3 rounded-full border border-cyan-500/40 bg-black-100/90 hover:bg-cyan-500/10 text-cyan-300 hover:border-cyan-400 font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.15)] cursor-pointer group"
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
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                        {item.badge}
                      </span>
                      <span className="text-xs text-blue-50">{item.category}</span>
                    </div>

                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
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

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>{item.isGitHub ? 'View Source on GitHub' : 'View Live Demo'}</span>
                      <span>→</span>
                    </a>
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
