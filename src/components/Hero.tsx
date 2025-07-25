// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const typingText = "Full-Stack • Mobile • Cloud Developer";

  useEffect(() => {
    if (currentIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + typingText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typingText]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
          >
            {/* Profile Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-cyan/50 shadow-2xl shadow-neon-cyan/20 glow-effect">
                  <div className="w-full h-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SJ</span>
                  </div>
                </div>

                {/* Floating rings around profile */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-neon-purple/20 rounded-full"
                    style={{ transform: 'scale(1.2)' }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-neon-pink/20 rounded-full border-dashed"
                    style={{ transform: 'scale(1.4)' }}
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-space font-bold mb-4">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent block sm:inline font-extrabold glow-text">
                Shriyan Jaiswal
              </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-lg sm:text-xl md:text-2xl text-white/90 font-mono text-center max-w-2xl">
              <span className="inline-block">
                {displayText}
                <span className="animate-pulse text-neon-cyan ml-1">|</span>
              </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(0, 229, 255, 0.6)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg glow-effect transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View My Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex justify-center space-x-6">
                {[
                  {
                    icon: Github,
                    href: 'https://github.com/shriyanjaiswal',
                    label: 'GitHub'
                  },
                  {
                    icon: Linkedin,
                    href: 'https://linkedin.com/in/shriyan-jaiswal',
                    label: 'LinkedIn'
                  },
                  {
                    icon: Mail,
                    href: "mailto:shriyan.jaiswal0906@gmail.com?subject=Inquiry%20from%20Your%20Portfolio%20Website&body=Hi%20Shriyan,%0A%0AI'm%20impressed%20with%20your%20work.%20I'd%20love%20to%20connect%20and%20discuss%20a%20potential%20opportunity.%0A%0ABest%20regards,%0A[Your%20Name]",
                    label: 'Email'
                  }
                ].map((social) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="p-3 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
                    >
                      <social.icon className="w-6 h-6 text-neon-cyan group-hover:text-white" />
                    </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;

