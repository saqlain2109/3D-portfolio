import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three';

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath)

    useEffect(()=>{
        if(model.name === 'Interactive Developer'){
            scene.scene.traverse((child)=>{
                if(child.isMesh && child.name === 'Object_5'){
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' })
                }
            })
        }
    }, [model.name, scene.scene])
  return (
    <Canvas dpr={[1, 1.5]} gl={{ powerPreference: 'default', antialias: false }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset='city' />

        <OrbitControls enableZoom={false} enablePan={false} />

        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon
