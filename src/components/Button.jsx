import React from 'react'

const Button = ({ text = "Explore My Work", className = "", id = "work" }) => {
  return (
    <a 
      href={`#${id}`}
      onClick={(e)=>{
        e.preventDefault();

        const target = document.getElementById(id) || document.getElementById('work') || document.getElementById('counter');

        if(target){
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: 'smooth' });
        }
      }}
      className={`${className} cta-wrapper`}
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <span className='text'>{text}</span>
        <div className='arrow-wrapper'>
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button
