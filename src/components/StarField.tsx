// src/components/StarField.tsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  color: string;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#00e5ff', '#c77dff', '#ff3cac', '#00ffab'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      starsRef.current = [];
      for (let i = 0; i < 150; i++) {
        starsRef.current.push({
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
      ctx.save();

      starsRef.current.forEach((star) => {
        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;
        const size = star.size * (1000 / star.z);

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height && size > 0.1) {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.shadowBlur = 5;
          ctx.shadowColor = star.color;
          ctx.globalAlpha = Math.min(1, (1000 - star.z) / 1000);
          ctx.fill();
        }

        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      ctx.restore();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
      <motion.canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ willChange: 'transform' }}
      />
  );
}