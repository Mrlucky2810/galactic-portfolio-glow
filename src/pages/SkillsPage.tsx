
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Smartphone, Cloud, Wrench, Brain } from 'lucide-react';

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: 'Backend Development',
      icon: Code,
      color: 'neon-cyan',
      skills: [
        { name: 'Java', level: 95, description: 'Enterprise applications with Spring Boot' },
        { name: 'Spring Framework', level: 90, description: 'Microservices and REST APIs' },
        { name: 'Hibernate/JPA', level: 88, description: 'Object-relational mapping' },
        { name: 'Maven/Gradle', level: 85, description: 'Build automation and dependency management' },
        { name: 'JUnit/Mockito', level: 87, description: 'Unit testing and test-driven development' },
        { name: 'Apache Kafka', level: 80, description: 'Event streaming and messaging' },
      ],
    },
    mobile: {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'neon-purple',
      skills: [
        { name: 'Flutter', level: 92, description: 'Cross-platform mobile applications' },
        { name: 'Dart', level: 90, description: 'Modern programming language for Flutter' },
        { name: 'Firebase', level: 88, description: 'Backend-as-a-Service integration' },
        { name: 'State Management', level: 85, description: 'Provider, Bloc, Riverpod patterns' },
        { name: 'Native Integration', level: 82, description: 'Platform-specific features' },
        { name: 'App Store Deployment', level: 87, description: 'Publishing to Google Play & App Store' },
      ],
    },
    frontend: {
      title: 'Frontend Development',
      icon: Brain,
      color: 'neon-pink',
      skills: [
        { name: 'React', level: 90, description: 'Component-based UI development' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript development' },
        { name: 'Next.js', level: 85, description: 'Server-side rendering and static generation' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework' },
        { name: 'React Query', level: 80, description: 'Data fetching and caching' },
        { name: 'Framer Motion', level: 82, description: 'Advanced animations and interactions' },
      ],
    },
    database: {
      title: 'Database & Cloud',
      icon: Database,
      color: 'neon-lime',
      skills: [
        { name: 'PostgreSQL', level: 88, description: 'Advanced relational database management' },
        { name: 'Supabase', level: 90, description: 'Backend-as-a-Service with real-time features' },
        { name: 'Firebase Firestore', level: 85, description: 'NoSQL document database' },
        { name: 'Redis', level: 80, description: 'In-memory data structure store' },
        { name: 'MongoDB', level: 78, description: 'Document-based NoSQL database' },
        { name: 'SQL Optimization', level: 85, description: 'Query performance and indexing' },
      ],
    },
    devops: {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'neon-orange',
      skills: [
        { name: 'Vercel', level: 92, description: 'Seamless frontend deployment' },
        { name: 'Git & GitHub', level: 95, description: 'Version control and collaboration' },
        { name: 'Docker', level: 80, description: 'Containerization and deployment' },
        { name: 'CI/CD', level: 82, description: 'Automated testing and deployment' },
        { name: 'AWS Basics', level: 75, description: 'Cloud services and infrastructure' },
        { name: 'Linux/Ubuntu', level: 83, description: 'Server administration and scripting' },
      ],
    },
    tools: {
      title: 'Development Tools',
      icon: Wrench,
      color: 'neon-yellow',
      skills: [
        { name: 'IntelliJ IDEA', level: 95, description: 'Java development environment' },
        { name: 'VS Code', level: 92, description: 'Lightweight code editor' },
        { name: 'Android Studio', level: 88, description: 'Flutter and Android development' },
        { name: 'Postman', level: 90, description: 'API testing and documentation' },
        { name: 'Figma', level: 80, description: 'UI/UX design collaboration' },
        { name: 'Jira/Confluence', level: 85, description: 'Project management and documentation' },
      ],
    },
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-space font-bold text-gradient mb-4 sm:mb-6">
            Skills & Expertise
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            A comprehensive toolkit spanning backend, mobile, and modern web technologies
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 sm:mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neon-cyan/30">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
              Interactive Skills Universe
            </h3>
            <div className="h-64 sm:h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
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
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 max-w-full overflow-x-auto">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`p-2 sm:p-4 rounded-lg font-semibold transition-all duration-300 flex flex-col items-center gap-1 sm:gap-2 min-w-0 text-xs sm:text-sm ${
                  selectedCategory === key
                    ? `bg-${category.color} text-black shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <category.icon className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="truncate w-full text-center">{category.title}</span>
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20"
          >
            {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-neon-cyan font-mono text-sm">{skill.level}%</span>
                </div>
                
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{skill.description}</p>
                
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
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8">Certifications & Learning</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: 'Java SE 11 Developer', issuer: 'Oracle', year: '2023' },
              { title: 'Flutter Development', issuer: 'Google', year: '2022' },
              { title: 'Spring Professional', issuer: 'VMware', year: '2023' },
              { title: 'Firebase Certified', issuer: 'Google Cloud', year: '2022' },
              { title: 'React Developer', issuer: 'Meta', year: '2023' },
              { title: 'PostgreSQL Administration', issuer: 'PostgreSQL', year: '2024' },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.05 }}
                className="p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{cert.title}</h4>
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
