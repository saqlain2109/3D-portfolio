import React from 'react'
import { socialImgs } from '../constants'

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
              href={social.name} 
              target="_blank" 
              rel="noopener noreferrer"
              className='icon'
            >
              <img src={social.imgPath} alt={social.name} />
            </a>
          ))}
        </div>

        {/* Right Section - Copyright */}
        <div className='flex flex-col gap-2 items-end'>
          <p className='text-white-50'>© 2024 Saqlain | Stuff</p>
          <p className='text-blue-50 text-sm'>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
