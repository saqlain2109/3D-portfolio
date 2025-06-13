import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
const sectionRef = useRef(null);
const project1Ref = useRef(null);
const project2Ref = useRef(null);
const project3Ref = useRef(null);


useGSAP(()=>{
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    
    projects.forEach((card, index)=>{
       gsap.fromTo(
        card,
        {
        y:50,
        opacity: 0
       },
       {
        y:0,
        opacity: 1,
        duration: 1,
        delay: 0.3 * (index + 1),
        scrollTrigger:{
            trigger: card,
            start: 'top bottom-=100'
    
        }
       }
    )
    })
    gsap.fromTo(
        sectionRef.current, 
        {opacity: 0}, 
        {opacity: 1 , duration: 1.5 }
    )
},[])

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
               {/* {left side}  */}
               <div className="first-project-wrapper" ref={project1Ref}>
                <a href="https://zentryclonebyme.netlify.app/" target='_blank'>
                <div className="image-wrapper">
                    <img src="/images/Frontend-1.png" alt="" />
                </div>
                <div className="text-content">
                    <h2>Modern Cybersecurity Website Clone- Create a Clone of a Awward Winning Website from Srach</h2>
                    <p className='text-white-50 md:text-xl'>
                    This project is a visually rich and animated clone of Zentry.com, built using React, GSAP, and Tailwind CSS. The goal is to replicate the clean, minimal, and futuristic design of Zentry's landing page, complete with smooth scroll animations, animated hero sections, and responsive layouts.
                    </p>
                </div>
                </a>
               </div>
               {/* {Right side} */}
               <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src="/images/project2.png" alt="" />
                    </div>
                    <h2>Libraray managment Project</h2>
                </div>

                <div className="project" ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7db]'>
                        <img src="/images/project3.png" alt="" />
                    </div>
                    <h2>YC-directory- A startUp Project</h2>
                </div>

               </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection
