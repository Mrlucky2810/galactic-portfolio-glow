
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingCodeSnippets = [
    'const developer = "passionate";',
    'function createArt() { return code; }',
    'console.log("Hello World!");',
    'npm install creativity',
    '{ innovation: true }',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Code Snippets */}
      <div className="absolute inset-0 z-10">
        {floatingCodeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut",
            }}
            className="absolute font-mono text-neon-cyan/50 text-sm pointer-events-none floating-animation"
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 z-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-neon-cyan font-mono text-lg glow-text">
              {"<hello_world>"}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-space font-bold mb-6"
          >
            <span className="text-white">I'm a </span>
            <span className="text-gradient glow-text">
              Developer
            </span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl md:text-2xl text-white/80 font-mono typewriter-effect">
              Full-Stack • Creative • Problem Solver
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting digital experiences with cutting-edge technologies. 
            Passionate about creating beautiful, functional, and innovative solutions 
            that push the boundaries of what's possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 229, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg glow-effect transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
              >
                <social.icon className="w-6 h-6 text-neon-cyan group-hover:text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Closing Tag */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-neon-cyan font-mono text-lg glow-text">
              {"</hello_world>"}
            </span>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-neon-cyan/70 hover:text-neon-cyan transition-colors cursor-pointer"
            >
              <span className="text-sm font-mono mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
