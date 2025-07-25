//
// import React, { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial } from '@react-three/drei';
// import * as THREE from 'three';
//
// const Stars = ({ count = 5000 }) => {
//   const ref = useRef<THREE.Points>(null);
//
//   const [positions, colors] = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     const colors = new Float32Array(count * 3);
//
//     for (let i = 0; i < count; i++) {
//       // Random sphere distribution
//       const radius = Math.random() * 25 + 5;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//
//       positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//       positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       positions[i * 3 + 2] = radius * Math.cos(phi);
//
//       // Neon colors
//       const colorChoice = Math.random();
//       if (colorChoice < 0.33) {
//         colors[i * 3] = 0;     // R
//         colors[i * 3 + 1] = 229 / 255; // G
//         colors[i * 3 + 2] = 255 / 255; // B (cyan)
//       } else if (colorChoice < 0.66) {
//         colors[i * 3] = 199 / 255;     // R
//         colors[i * 3 + 1] = 125 / 255; // G
//         colors[i * 3 + 2] = 255 / 255; // B (purple)
//       } else {
//         colors[i * 3] = 255 / 255;     // R
//         colors[i * 3 + 1] = 60 / 255;  // G
//         colors[i * 3 + 2] = 172 / 255; // B (pink)
//       }
//     }
//
//     return [positions, colors];
//   }, [count]);
//
//   useFrame((state) => {
//     if (ref.current) {
//       ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
//       ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
//     }
//   });
//
//   return (
//     <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
//       <PointMaterial
//         transparent
//         vertexColors
//         size={0.8}
//         sizeAttenuation={true}
//         depthWrite={false}
//         blending={THREE.AdditiveBlending}
//       />
//     </Points>
//   );
// };
//
// const StarField = () => {
//   return (
//     <div className="fixed inset-0 z-0">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Stars />
//       </Canvas>
//     </div>
//   );
// };
//
// export default StarField;

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      color: string;
    }> = [];

    const colors = ['#00e5ff', '#c77dff', '#ff3cac', '#00ffab'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;
        const size = star.size * (1000 / star.z);

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = star.color;
          ctx.fill();
        }

        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    createStars();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      <motion.canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
      />
  );
}
