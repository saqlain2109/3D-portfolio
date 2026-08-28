import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({ icon, index }) => (
    <div className="flex-none flex-center marquee-item">
        <img src={icon.imgPath} alt={icon.name || `Company Logo ${index + 1}`} loading="lazy" />
    </div>
)

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge'/>
      <div className='gradient-edge'/>

      <div className='marquee h-52'>
        <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon, index)=>(
                <LogoIcon key={`logo-1-${index}`} icon={icon} index={index}/>
            ))}
            {logoIconsList.map((icon, index)=>(
                <LogoIcon key={`logo-2-${index}`} icon={icon} index={index}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection
