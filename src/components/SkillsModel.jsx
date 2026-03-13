import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Preload the GLB model
useGLTF.preload('/desk.glb');

function Desk() {
  const modelRef = useRef();
  const { scene, error } = useGLTF('/desk.glb');

  // Add subtle rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  useEffect(() => {
    if (scene) {
      // Keep original materials and colors
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  if (error) {
    return (
      <mesh ref={modelRef}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    );
  }

  if (!scene) {
    return <LoadingFallback />;
  }

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={[0.5, 0.5, 0.5]}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function LoadingFallback() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.25, 16, 16]} />
      <meshBasicMaterial color="#06b6d4" />
    </mesh>
  );
}

export default function SkillsModel() {
  return (
    <div style={{ 
      width: '100%', 
      height: '300px',
      position: 'relative',
      background: 'transparent'
    }}>
      <Canvas
        camera={{ position: [4, 4, 4], fov: 45 }}
        style={{ 
          width: '100%',
          height: '100%'
        }}
        gl={{ 
          alpha: true, 
          antialias: true
        }}
      >
        {/* Clean lighting for Skills section */}
        <ambientLight intensity={0.7} />
        <directionalLight 
          position={[8, 8, 4]} 
          intensity={1.0}
          castShadow
        />
        <pointLight position={[-5, 5, 5]} intensity={0.4} color="#06b6d4" />
        <pointLight position={[5, -5, 5]} intensity={0.4} color="#8b5cf6" />

        {/* Desk Model */}
        <Suspense fallback={<LoadingFallback />}>
          <Desk />
        </Suspense>

        {/* Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
          enableDamping={true}
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
}