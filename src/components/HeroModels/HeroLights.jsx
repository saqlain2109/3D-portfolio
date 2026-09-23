import React from 'react'
import * as THREE from 'three'

const HeroLights = ({ theme = 'cyberpunk' }) => {
  const isCyberpunk = theme === 'cyberpunk';

  return (
    <>
      <ambientLight intensity={isCyberpunk ? 0.7 : 0.9} color={isCyberpunk ? "#ffffff" : "#fff8ee"} />
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={isCyberpunk ? 1.0 : 1.2} 
        color={isCyberpunk ? "#dbeafe" : "#fef3c7"} 
      />

      <spotLight 
        position={[2, 5, 3]}
        angle={0.15}
        intensity={isCyberpunk ? 180 : 220}
        penumbra={0.3}
        color={isCyberpunk ? "#ffffff" : "#fff4e6"}
      />

      <spotLight 
        position={[4, 5 , 4]}
        angle={0.3}
        intensity={isCyberpunk ? 140 : 100}
        penumbra={0.5}
        color={isCyberpunk ? '#4cc9f0' : '#ffd166'}
      />

      <spotLight 
        position={[-3, 8 , 2]}
        angle={0.4}
        intensity={isCyberpunk ? 120 : 80}
        penumbra={1}
        color={isCyberpunk ? '#9d4edd' : '#ff9f1c'}
      />
      
      <primitive 
        object={new THREE.RectAreaLight(isCyberpunk ? '#A259FF' : '#ffaa00', 10, 3, 2)}
        position={[1, 3, 4]}
        intensity={isCyberpunk ? 30 : 25}
        rotation={[Math.PI / 4, Math.PI / 4 , 0]}
      />

      <pointLight 
        position={[0, 1, 0]}
        intensity={isCyberpunk ? 20 : 25}
        color={isCyberpunk ? "#7209b7" : "#ffb703"}
      />

      <pointLight 
        position={[1, 2, -2]}
        intensity={isCyberpunk ? 20 : 15}
        color={isCyberpunk ? '#4cc9f0' : '#fb8500'}
      />
      <pointLight 
        position={[1, 2, 0]}
        intensity={isCyberpunk ? 20 : 15}
        color={isCyberpunk ? '#0d00a4' : '#d4a373'}
      />
    </>
  )
}

export default HeroLights
