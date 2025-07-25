import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Code2, Palette, Rocket } from 'lucide-react';

const EnhancedHero = () => {
  const [isClient, setIsClient] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const typingText = "Full-Stack • Mobile • Cloud Developer";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (currentIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + typingText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typingText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingElements = [
    'React.js', 'TypeScript', 'Java', 'Flutter', 'Spring Boot', 'Firebase',
    'Docker', 'AWS', 'Next.js', 'Tailwind', 'Supabase', 'PostgreSQL'
  ];

  // Pre-defined positions for floating particles
  const particlePositions = [
    {left: 20, top: 30}, {left: 80, top: 60}, {left: 40, top: 10},
    {left: 70, top: 80}, {left: 10, top: 50}, {left: 90, top: 20},
    {left: 30, top: 70}, {left: 60, top: 40}, {left: 15, top: 85},
    {left: 85, top: 15}, {left: 45, top: 65}, {left: 75, top: 35}
  ];

  return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Enhanced Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Gradient Animations */}
          {/*<motion.div*/}
          {/*    className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10"*/}
          {/*    animate={{*/}
          {/*      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 10,*/}
          {/*      repeat: Infinity,*/}
          {/*      ease: "linear",*/}
          {/*    }}*/}
          {/*    style={{ backgroundSize: '200% 200%' }}*/}
          {/*/>*/}

          {/*/!* Radial Gradient Animations *!/*/}
          {/*<motion.div*/}
          {/*    className="absolute inset-0"*/}
          {/*    animate={{*/}
          {/*      background: [*/}
          {/*        'radial-gradient(circle at 20% 20%, rgba(0,229,255,0.1) 0%, transparent 50%)',*/}
          {/*        'radial-gradient(circle at 80% 80%, rgba(199,125,255,0.1) 0%, transparent 50%)',*/}
          {/*        'radial-gradient(circle at 50% 50%, rgba(255,60,172,0.1) 0%, transparent 50%)',*/}
          {/*        'radial-gradient(circle at 20% 80%, rgba(0,255,171,0.1) 0%, transparent 50%)',*/}
          {/*        'radial-gradient(circle at 20% 20%, rgba(0,229,255,0.1) 0%, transparent 50%)',*/}
          {/*      ],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 20,*/}
          {/*      repeat: Infinity,*/}
          {/*      ease: "easeInOut",*/}
          {/*    }}*/}
          {/*/>*/}

          {/*/!* Moving Gradient Orbs *!/*/}
          {/*<motion.div*/}
          {/*    className="absolute w-96 h-96 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl"*/}
          {/*    animate={{*/}
          {/*      x: [0, 300, -200, 0],*/}
          {/*      y: [0, -200, 300, 0],*/}
          {/*      scale: [1, 1.2, 0.8, 1],*/}
          {/*    }}*/}
          {/*    transition={{*/}
          {/*      duration: 25,*/}
          {/*      repeat: Infinity,*/}
          {/*      ease: "easeInOut",*/}
          {/*    }}*/}
          {/*/>*/}

          <motion.div
              className="absolute bottom-0 right-0 w-80 h-80"
              animate={{
                x: [0, -250, 150, 0],
                y: [0, 150, -250, 0],
                scale: [0.8, 1.3, 1, 0.8],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
              }}
          />

          {/* Floating Tech Elements */}
          {isClient && (
              <div className="absolute inset-0 pointer-events-none">
                {floatingElements.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: `${Math.random() * 80 + 10}%`,
                          y: `${Math.random() * 80 + 10}%`
                        }}
                        animate={{
                          opacity: [0, 0.3, 0],
                          scale: [0, 1, 0],
                          x: [`${Math.random() * 80 + 10}%`, `${Math.random() * 80 + 10}%`],
                          y: [`${Math.random() * 80 + 10}%`, `${Math.random() * 80 + 10}%`]
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          delay: index * 2,
                          ease: "linear"
                        }}
                        className="absolute font-mono text-neon-cyan/30 text-sm"
                    >
                      {tech}
                    </motion.div>
                ))}
              </div>
          )}

          {/* Floating Gradient Particles */}
          {isClient && (
              <div className="absolute inset-0">
                {particlePositions.map((position, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full blur-sm"
                        style={{
                          left: `${position.left}%`,
                          top: `${position.top}%`,
                        }}
                        animate={{
                          y: [0, -50, 0],
                          x: [0, (i % 2 === 0 ? 50 : -50), 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                          duration: 5 + (i % 3),
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                    />
                ))}
              </div>
          )}
        </div>

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
                  <img
                      src="/placeholder.svg"
                      alt="Shriyan Jaiswal"
                      className="w-full h-full object-cover"
                  />
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

            {/* Greeting */}
            {/*<motion.div variants={itemVariants} className="mb-4">*/}
            {/*<span className="text-neon-cyan font-mono text-lg glow-text">*/}
            {/*  {"<hello_world>"}*/}
            {/*</span>*/}
            {/*</motion.div>*/}

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-space font-bold mb-4">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent block sm:inline font-extrabold glow-text">
                Shriyan Jaiswal
              </span>
              </h1>
            </motion.div>

            {/* Dev Tag */}
            {/*<motion.div variants={itemVariants} className="mb-6">*/}
            {/*  <div className="inline-flex items-center justify-center">*/}
            {/*    <span className="text-neon-lime font-mono text-xl glow-text">{"<"}</span>*/}
            {/*    <span className="text-neon-orange font-mono text-xl mx-2 glow-text">Dev</span>*/}
            {/*    <span className="text-neon-lime font-mono text-xl glow-text">{"/>"}</span>*/}
            {/*  </div>*/}
            {/*</motion.div>*/}

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

            {/* Closing Tag */}
            {/*<motion.div variants={itemVariants} className="mb-16">*/}
            {/*<span className="text-neon-cyan font-mono text-lg glow-text">*/}
            {/*  {"</hello_world>"}*/}
            {/*</span>*/}
            {/*</motion.div>*/}

            {/* Scroll Indicator */}
            {/*<motion.div*/}
            {/*    initial={{ opacity: 0 }}*/}
            {/*    animate={{ opacity: 1 }}*/}
            {/*    transition={{ delay: 2, duration: 1 }}*/}
            {/*    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"*/}
            {/*>*/}
            {/*  <motion.div*/}
            {/*      animate={{ y: [0, 10, 0] }}*/}
            {/*      transition={{ duration: 2, repeat: Infinity }}*/}
            {/*      className="flex flex-col items-center text-neon-cyan/70 hover:text-neon-cyan transition-colors cursor-pointer"*/}
            {/*  >*/}
            {/*    <span className="text-sm font-mono mb-2 hidden sm:block">Scroll to explore</span>*/}
            {/*    <div className="w-6 h-6 border-2 border-current rounded-full relative">*/}
            {/*      <motion.div*/}
            {/*          animate={{ y: [0, 8, 0] }}*/}
            {/*          transition={{ duration: 2, repeat: Infinity }}*/}
            {/*          className="w-1 h-1 bg-current rounded-full absolute left-1/2 top-1 transform -translate-x-1/2"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </motion.div>*/}
            {/*</motion.div>*/}
          </motion.div>
        </div>
      </section>
  );
};

export default EnhancedHero;