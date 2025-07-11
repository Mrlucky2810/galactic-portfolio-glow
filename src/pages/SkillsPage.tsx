
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Palette, Wrench, Brain, Zap } from 'lucide-react';

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'neon-cyan',
      skills: [
        { name: 'React', level: 95, description: 'Component-based UI development' },
        { name: 'TypeScript', level: 90, description: 'Type-safe JavaScript development' },
        { name: 'Next.js', level: 88, description: 'Full-stack React framework' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework' },
        { name: 'Three.js', level: 85, description: '3D graphics and animations' },
        { name: 'Framer Motion', level: 87, description: 'Advanced animations' },
      ],
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      color: 'neon-purple',
      skills: [
        { name: 'Node.js', level: 88, description: 'Server-side JavaScript runtime' },
        { name: 'Python', level: 85, description: 'Versatile programming language' },
        { name: 'PostgreSQL', level: 82, description: 'Advanced relational database' },
        { name: 'MongoDB', level: 80, description: 'NoSQL document database' },
        { name: 'GraphQL', level: 78, description: 'Query language for APIs' },
        { name: 'Docker', level: 83, description: 'Containerization platform' },
      ],
    },
    design: {
      title: 'Design & UX',
      icon: Palette,
      color: 'neon-pink',
      skills: [
        { name: 'Figma', level: 88, description: 'UI/UX design and prototyping' },
        { name: 'Adobe Creative Suite', level: 82, description: 'Professional design tools' },
        { name: 'Blender', level: 75, description: '3D modeling and animation' },
        { name: 'User Research', level: 80, description: 'Understanding user needs' },
        { name: 'Prototyping', level: 85, description: 'Interactive design mockups' },
        { name: 'Design Systems', level: 87, description: 'Scalable design frameworks' },
      ],
    },
    tools: {
      title: 'Tools & DevOps',
      icon: Wrench,
      color: 'neon-lime',
      skills: [
        { name: 'Git', level: 90, description: 'Version control system' },
        { name: 'AWS', level: 75, description: 'Cloud computing platform' },
        { name: 'VSCode', level: 95, description: 'Code editor and IDE' },
        { name: 'Linux', level: 80, description: 'Unix-like operating system' },
        { name: 'Webpack', level: 82, description: 'Module bundler' },
        { name: 'CI/CD', level: 78, description: 'Continuous integration/deployment' },
      ],
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-space font-bold text-gradient mb-6">
            Skills & Expertise
          </h1>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Interactive Skills Universe
            </h3>
            <div className="h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
              <iframe
                src="https://my.spline.design/untitled-2b8f7b9a3c5d4e6f7a8b9c0d1e2f3a4b/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`p-4 rounded-lg font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
                  selectedCategory === key
                    ? `bg-${category.color} text-black shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <category.icon className="w-6 h-6" />
                <span className="text-sm">{category.title}</span>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
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
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-neon-cyan font-mono text-sm">{skill.level}%</span>
                </div>
                
                <p className="text-white/70 text-sm mb-4">{skill.description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full bg-gradient-to-r from-${skillCategories[selectedCategory as keyof typeof skillCategories].color} to-neon-pink rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-white mb-8">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
              { title: 'React Professional', issuer: 'Meta', year: '2022' },
              { title: 'Full Stack Web Development', issuer: 'FreeCodeCamp', year: '2021' },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-neon-cyan text-sm mb-1">{cert.issuer}</p>
                <p className="text-white/60 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
