
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 3000 }) => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create a more complex distribution
      const radius = Math.random() * 50 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Dynamic colors based on position
      const colorChoice = Math.random();
      if (colorChoice < 0.2) {
        colors[i * 3] = 0;           // R
        colors[i * 3 + 1] = 0.9;     // G  
        colors[i * 3 + 2] = 1;       // B (cyan)
      } else if (colorChoice < 0.4) {
        colors[i * 3] = 0.78;        // R
        colors[i * 3 + 1] = 0.49;    // G
        colors[i * 3 + 2] = 1;       // B (purple)
      } else if (colorChoice < 0.6) {
        colors[i * 3] = 1;           // R
        colors[i * 3 + 1] = 0.24;    // G
        colors[i * 3 + 2] = 0.67;    // B (pink)
      } else if (colorChoice < 0.8) {
        colors[i * 3] = 0;           // R
        colors[i * 3 + 1] = 1;       // G
        colors[i * 3 + 2] = 0.67;    // B (lime)
      } else {
        colors[i * 3] = 1;           // R
        colors[i * 3 + 1] = 0.62;    // G
        colors[i * 3 + 2] = 0.26;    // B (orange)
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      ref.current.rotation.x = Math.sin(time * 0.1) * 0.2;
      ref.current.rotation.y = Math.sin(time * 0.15) * 0.3;
      ref.current.rotation.z = Math.sin(time * 0.08) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial 
        transparent 
        vertexColors 
        size={1.2} 
        sizeAttenuation={true} 
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Enhanced3DBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleField />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Enhanced3DBackground;
