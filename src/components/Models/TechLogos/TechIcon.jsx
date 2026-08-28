import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import * as THREE from 'three'

const ThreeModel = ({ model }) => {
  const scene = useGLTF(model.modelPath)

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' })
        }
      })
    }
  }, [model.name, scene.scene])

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group scale={model.scale} rotation={model.rotation}>
        <primitive object={scene.scene} />
      </group>
    </Float>
  )
}

const TechIcon = ({ model }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  // On mobile/tablets, use a lightweight, animated 3D-styled badge to prevent mobile WebGL context exhaustion crashes
  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="relative size-28 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.2)] group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 pointer-events-none" />
          <img
            src={model.imgPath}
            alt={model.name}
            className="size-16 object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] animate-pulse"
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  return (
    <Canvas dpr={[1, 1.5]} gl={{ powerPreference: 'default', antialias: false }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} enablePan={false} />

      <Suspense fallback={null}>
        <ThreeModel model={model} />
      </Suspense>
    </Canvas>
  )
}

export default TechIcon
