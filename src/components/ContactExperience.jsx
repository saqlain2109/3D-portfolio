import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Sparkles, ContactShadows } from '@react-three/drei'
import React, { Suspense, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'

function LowPolyScene(props) {
  const { scene } = useGLTF('/models/low_poly_man_working_at_a_table_with_a_laptop.glb')
  
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} {...props} />
}

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas 
      dpr={[1, 1.5]} 
      gl={{ powerPreference: 'default', antialias: !isMobile }} 
      camera={{ position: [-3, 2, 4], fov: 45 }}
    >
      <color attach="background" args={['#0e0e10']} />
      <fog attach="fog" args={['#0e0e10', 3, 10]} />
      <Suspense fallback={null}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />
        
        <Environment preset="sunset" />
        
        <group scale={isMobile ? 0.24 : 0.3} position={[0, -1, 0]} rotation={[0, -Math.PI / 4, 0]}>
          <LowPolyScene />
        </group>

        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.65}
          scale={10}
          blur={2}
          far={4}
        />

        <Sparkles 
          count={isMobile ? 15 : 30} 
          scale={4} 
          size={isMobile ? 1.5 : 2} 
          speed={0.4} 
          opacity={0.3} 
          color="#62e0ff"
          position={[0, 0, 0]}
        />
      </Suspense>

      <ambientLight intensity={0.9} />
      <directionalLight 
        position={[-2, 3, -2]} 
        intensity={1.2}
      />
      <spotLight
        position={[5, 5, 0]}
        angle={0.15}
        penumbra={1}
        intensity={0.8}
      />
    </Canvas>
  )
}

useGLTF.preload('/models/low_poly_man_working_at_a_table_with_a_laptop.glb')

export default ContactExperience
