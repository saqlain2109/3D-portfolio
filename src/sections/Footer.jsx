import React from 'react'
import { socialImgs } from '../constants'
import AnimatedSignature from '../components/AnimatedSignature'

const Footer = () => {
  return (
    <footer className='footer'>
      {/* Animated Handwriting Stroke Signature for Saqlain */}
      <AnimatedSignature />

      <div className='footer-container border-t border-white/5 pt-8'>
        {/* Left Section - Terms & Conditions */}
        <div className='flex flex-col gap-2'>
          <p className='text-white-50'>Terms & Conditions</p>
          <p className='text-blue-50 text-sm'>Privacy Policy</p>
          <p className='text-blue-50 text-sm'>Cookie Policy</p>
        </div>

        {/* Center Section - Social Media Links */}
        <div className='socials'>
          {socialImgs.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.name}
              className='icon'
            >
              <img src={social.imgPath} alt={social.name} className='size-5 object-contain' />
            </a>
          ))}
        </div>

        {/* Right Section - Copyright */}
        <div className='flex flex-col gap-1.5 items-center md:items-end'>
          <p className='text-white-50 flex items-center gap-1.5 flex-wrap justify-center md:justify-end'>
            © {new Date().getFullYear()} <span className="font-display font-bold text-white">Saqlain</span> <span className="text-cyan-400">·</span> <span className="font-calligraphy text-lg text-cyan-300">handcrafted with passion</span>
          </p>
          <p className='text-blue-50 text-xs font-tech tracking-wider uppercase'>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
