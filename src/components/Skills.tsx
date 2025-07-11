
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      color: 'neon-cyan',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Three.js', level: 85, icon: '🎮' },
        { name: 'Framer Motion', level: 87, icon: '🎭' },
      ],
    },
    backend: {
      title: 'Backend',
      color: 'neon-purple',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'GraphQL', level: 78, icon: '🔗' },
        { name: 'Docker', level: 83, icon: '🐳' },
      ],
    },
    tools: {
      title: 'Tools & Others',
      color: 'neon-pink',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Figma', level: 88, icon: '🎯' },
        { name: 'VSCode', level: 95, icon: '💻' },
        { name: 'Linux', level: 80, icon: '🐧' },
        { name: 'Webpack', level: 82, icon: '📦' },
      ],
    },
  };

  const categories = Object.entries(skillCategories);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-2 border border-white/10">
            {categories.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === key
                    ? `bg-${category.color} text-black shadow-lg`
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-neon-cyan font-mono text-sm">{skill.level}%</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full bg-gradient-to-r from-${skillCategories[selectedCategory as keyof typeof skillCategories].color} to-neon-pink rounded-full`}
                  />
                </div>
                
                {/* Skill Level Indicator */}
                <div className="flex justify-between text-sm text-white/60">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Interactive 3D Skills Orbit - Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full animate-pulse">
              <div className="absolute inset-4 bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 rounded-full">
                <div className="absolute inset-4 bg-gradient-dark/50 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="text-4xl text-gradient font-bold"
                  >
                    &lt;Code/&gt;
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Orbiting Icons */}
            {['⚛️', '🔷', '🐍', '🎨', '🚀', '💻'].map((icon, index) => (
              <motion.div
                key={index}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 10 + index * 2, 
                  repeat: Infinity, 
                  ease: 'linear',
                  delay: index * 0.5 
                }}
                className="absolute w-12 h-12 bg-gradient-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-neon-cyan/30"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: `${60 + index * 20}px center`,
                  transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateX(${60 + index * 20}px) rotate(-${index * 60}deg)`,
                }}
              >
                <span className="text-lg">{icon}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
