import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const LoadingCube = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <mesh rotation={[rotation, rotation * 1.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#4cc9f0"
        metalness={0.8}
        roughness={0.2}
        emissive="#4cc9f0"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black-100 flex flex-col items-center justify-center z-50">
      <div className="w-32 h-32 mb-8">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <LoadingCube />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Environment preset="city" />
          <Sparkles count={50} scale={5} size={2} speed={0.4} />
        </Canvas>
      </div>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-white text-lg">{progress}%</p>
    </div>
  );
};

export default Loading; 