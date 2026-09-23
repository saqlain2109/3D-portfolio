import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

function RoomPlaceholder() {
  return (
    <group position={[0, -2, 0]}>
      <mesh>
        <boxGeometry args={[4, 3, 4]} />
        <meshBasicMaterial wireframe color="#38bdf8" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

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
      <Particles count={isMobile ? 50 : 120}/>

      <OrbitControls 
        enablePan={false} 
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={<RoomPlaceholder />}>
        <group
          scale={isMobile ? 0.75 : 1}
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
