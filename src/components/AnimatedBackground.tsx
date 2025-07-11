
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-nebula" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(199, 125, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(255, 60, 172, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 opacity-60"
      />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 80% 50%, rgba(199, 125, 255, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 80%, rgba(0, 255, 171, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 60% 20%, rgba(255, 60, 172, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, rgba(199, 125, 255, 0.2) 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute inset-0 opacity-50"
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-neon-cyan rounded-full"
        />
      ))}
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
