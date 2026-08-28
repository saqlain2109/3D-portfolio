import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles } from '@react-three/drei';

const LoadingCube = () => {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.8;
      meshRef.current.rotation.y += delta * 1.2;
    }
  });

  return (
    <mesh ref={meshRef}>
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
        return Math.min(100, prev + 5);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black-100 flex flex-col items-center justify-center z-50">
      <div className="w-36 h-36 mb-6">
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
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-white-50 text-base tracking-wider font-mono">{progress}%</p>
    </div>
  );
};

export default Loading;