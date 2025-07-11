
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Combining aesthetics with functionality to create beautiful user experiences.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user satisfaction.',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Dedicated to continuous learning and staying ahead of technology trends.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* 3D Avatar Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full p-8 backdrop-blur-sm border border-neon-cyan/30 glow-effect">
                <div className="w-full h-full bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="text-8xl text-gradient font-space font-bold"
                  >
                    &lt;/&gt;
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-neon-cyan/20 rounded-lg backdrop-blur-sm border border-neon-cyan/50 flex items-center justify-center"
              >
                <Code2 className="w-8 h-8 text-neon-cyan" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/20 rounded-lg backdrop-blur-sm border border-neon-purple/50 flex items-center justify-center"
              >
                <Rocket className="w-8 h-8 text-neon-purple" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-space font-semibold text-white">
                Passionate Developer & Creative Thinker
              </h3>
              
              <p className="text-lg text-white/80 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating 
                immersive digital experiences that combine cutting-edge technology with innovative design. 
                My journey began with a simple "Hello World" and has evolved into crafting complex, 
                scalable applications that make a real impact.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                I believe in the power of clean code, user-centered design, and continuous learning. 
                Every project is an opportunity to push boundaries and explore new possibilities in 
                the ever-evolving world of technology.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 bg-gradient-dark/50 rounded-lg border border-neon-cyan/30">
                <div className="text-3xl font-bold text-neon-cyan mb-2">50+</div>
                <div className="text-white/70">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-dark/50 rounded-lg border border-neon-purple/30">
                <div className="text-3xl font-bold text-neon-purple mb-2">5+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-neon-cyan" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
