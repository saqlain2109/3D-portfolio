import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const HeroExperience = ({ theme = 'cyberpunk' }) => {
 const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
 const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas 
      dpr={[1, 1.5]} 
      gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }} 
      camera={{ position: [0, 0, 15], fov: 45 }}
    >
      <HeroLights theme={theme} />
      <Particles count={isMobile ? 60 : 150}/>

      <OrbitControls 
        enablePan={false} 
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -4.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room theme={theme} />
        </group>
      </Suspense>
    </Canvas>
  )
}

export default HeroExperience
