import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Sparkles, ContactShadows } from '@react-three/drei'
import React, { Suspense, useMemo } from 'react'

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
  return (
    <Canvas dpr={[1, 1.5]} gl={{ powerPreference: 'default' }} shadows camera={{ position: [-3, 2, 4], fov: 45 }}>
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
        
        <group scale={0.3} position={[0, -1, 0]} rotation={[0, -Math.PI / 4, 0]}>
          <LowPolyScene />
        </group>

        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.75}
          scale={10}
          blur={2.5}
          far={4}
        />

        <Sparkles 
          count={30} 
          scale={4} 
          size={2} 
          speed={0.4} 
          opacity={0.3} 
          color="#62e0ff"
          position={[0, 0, 0]}
        />
      </Suspense>

      <ambientLight intensity={0.8} />
      <directionalLight 
        castShadow
        position={[-2, 3, -2]} 
        intensity={1.5}
        shadow-mapSize={1024}
      />
      <spotLight
        position={[5, 5, 0]}
        angle={0.15}
        penumbra={1}
        intensity={0.8}
        castShadow
      />
    </Canvas>
  )
}

useGLTF.preload('/models/low_poly_man_working_at_a_table_with_a_laptop.glb')

export default ContactExperience
