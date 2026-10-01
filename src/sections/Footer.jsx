import React from 'react'
import { socialImgs } from '../constants'
import AnimatedSignature from '../components/AnimatedSignature'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
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

        {/* Right Section - Signature & Copyright */}
        <div className='flex flex-col gap-2 items-center md:items-end'>
          <AnimatedSignature className="w-44 sm:w-52 md:w-56 h-12 md:h-14 mb-0.5" />
          <p className='text-white-50 flex items-center gap-1.5 flex-wrap justify-center md:justify-end text-sm'>
            © {new Date().getFullYear()} <span className="font-display font-bold text-white">Saqlain</span> <span className="text-cyan-400">·</span> <span className="font-calligraphy text-base text-cyan-300">handcrafted with passion</span>
          </p>
          <p className='text-blue-50 text-xs font-tech tracking-wider uppercase'>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
