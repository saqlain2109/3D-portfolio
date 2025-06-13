import React from 'react';

const TextEffect = ({ text, backgroundImage }) => {
  return (
    <div 
      className="ml-[-0.12ch] text-[clamp(100px,50vw,900px)] xs:mb-[-0.15ch] bg-clip-text bg-[size:100%] leading-none text-transparent tracking-[-0.02em] mt-[-0.24ch] select-none"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: '-5%'
      }}
    >
      <span>{text}</span>
    </div>
  );
};

export default TextEffect; 