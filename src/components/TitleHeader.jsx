import React from 'react'

const TitleHeader = ({title, sub}) => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <div className='hero-badge font-tech tracking-wider uppercase text-xs md:text-sm text-cyan-300 border border-cyan-500/25 bg-cyan-950/20 shadow-[0_0_12px_rgba(6,182,212,0.1)]'>
            <p>{sub}</p>
        </div>
        <h2 className="font-display font-bold md:text-5xl text-3xl text-center tracking-tight text-white">
            {title}
        </h2>
    </div>
  )
}

export default TitleHeader
