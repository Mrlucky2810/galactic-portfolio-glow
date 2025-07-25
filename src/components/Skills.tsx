// src/components/Skills.tsx
import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import StarField from '@/components/StarField';

interface Skill {
  name: string;
  level: number;
  color: string;
  experience: string;
  projects: number;
  category: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillCategories {
  [key: string]: SkillCategory;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

export default function SkillsPage() {
  const [filter, setFilter] = useState('all');

  const skillCategories: SkillCategories = {
    java: {
      title: 'Java Development',
      skills: [
        {name: 'Core Java', level: 94, color: '#f89820', experience: '4+ years', projects: 60, category: 'java'},
        {name: 'JavaFX / Swing', level: 91, color: '#007396', experience: '3+ years', projects: 30, category: 'java'},
        {name: 'JDBC', level: 89, color: '#E76F00', experience: '3+ years', projects: 25, category: 'java'},
        {name: 'File Handling', level: 87, color: '#F57C00', experience: '3+ years', projects: 20, category: 'java'},
        {name: 'OOP & Exception Handling', level: 92, color: '#f89820', experience: '4+ years', projects: 50, category: 'java'}
      ]
    },
    flutter: {
      title: 'Flutter Development',
      skills: [
        {name: 'Flutter Framework', level: 92, color: '#02569B', experience: '2+ years', projects: 40, category: 'flutter'},
        {name: 'Dart Language', level: 90, color: '#0175C2', experience: '2+ years', projects: 40, category: 'flutter'},
        {name: 'Provider / BLoC', level: 85, color: '#02569B', experience: '2+ years', projects: 30, category: 'flutter'},
        {name: 'Flutter Animations', level: 88, color: '#4CAF50', experience: '2+ years', projects: 25, category: 'flutter'},
        {name: 'UI & Navigation', level: 91, color: '#757575', experience: '2+ years', projects: 40, category: 'flutter'}
      ]
    },
    firebase: {
      title: 'Firebase Integration',
      skills: [
        {name: 'Firebase Auth', level: 90, color: '#ffca28', experience: '2+ years', projects: 30, category: 'firebase'},
        {name: 'Firestore Database', level: 88, color: '#ffca28', experience: '2+ years', projects: 35, category: 'firebase'},
        {name: 'Cloud Functions', level: 80, color: '#FFA000', experience: '1+ year', projects: 15, category: 'firebase'},
        {name: 'Firebase Storage', level: 85, color: '#FFC107', experience: '2+ years', projects: 20, category: 'firebase'},
        {name: 'Push Notifications', level: 83, color: '#FFB300', experience: '2+ years', projects: 20, category: 'firebase'}
      ]
    },
    react: {
      title: 'React Development',
      skills: [
        {name: 'React.js', level: 85, color: '#61DAFB', experience: '2+ years', projects: 30, category: 'react'},
        {name: 'Tailwind CSS', level: 90, color: '#06B6D4', experience: '2+ years', projects: 35, category: 'react'},
        {name: 'React Hooks', level: 86, color: '#61DAFB', experience: '2+ years', projects: 25, category: 'react'},
        {name: 'Responsive UI Design', level: 92, color: '#1E40AF', experience: '2+ years', projects: 30, category: 'react'},
        {name: 'Git & GitHub', level: 88, color: '#000000', experience: '3+ years', projects: 50, category: 'react'}
      ]
    },
    backend: {
      title: 'Backend & Database',
      skills: [
        {name: 'Node.js / Express.js', level: 85, color: '#68A063', experience: '2+ years', projects: 25, category: 'backend'},
        {name: 'REST APIs', level: 90, color: '#FF6C37', experience: '3+ years', projects: 40, category: 'backend'},
        {name: 'MySQL', level: 87, color: '#00758F', experience: '3+ years', projects: 30, category: 'backend'},
        {name: 'Supabase', level: 80, color: '#3ECF8E', experience: '1+ year', projects: 10, category: 'backend'},
        {name: 'Authentication & Authorization', level: 88, color: '#0F9D58', experience: '2+ years', projects: 30, category: 'backend'}
      ]
    }
  };

  // Flatten all skills for filtering
  const allSkills = Object.values(skillCategories).flatMap(category => category.skills);

  const categories: Category[] = [
    { id: 'all', name: 'All Skills', count: allSkills.length },
    { id: 'java', name: 'Java Development', count: skillCategories.java.skills.length },
    { id: 'flutter', name: 'Flutter Development', count: skillCategories.flutter.skills.length },
    { id: 'firebase', name: 'Firebase Integration', count: skillCategories.firebase.skills.length },
    { id: 'react', name: 'React Development', count: skillCategories.react.skills.length },
    { id: 'backend', name: 'Backend & Database', count: skillCategories.backend.skills.length }
  ];

  const filteredSkills = filter === 'all' ? allSkills : allSkills.filter(skill => skill.category === filter);

  const tools = [
    {name: 'IntelliJ IDEA', category: 'IDE'},
    {name: 'VS Code', category: 'Editor'},
    {name: 'Android Studio', category: 'IDE'},
    {name: 'Git', category: 'Version Control'},
    {name: 'GitHub', category: 'Version Control'},
    {name: 'Figma', category: 'Design'},
    {name: 'Adobe Photoshop', category: 'Design'},
    {name: 'Adobe Premiere Pro', category: 'Video Editing'},
    {name: 'Firebase Console', category: 'Backend'},
    {name: 'Supabase Studio', category: 'Backend'},
    {name: 'Postman', category: 'API Testing'},
    {name: 'Vercel', category: 'Deployment'},
    {name: 'Netlify', category: 'Deployment'},
    {name: 'Replit', category: 'Online IDE'},
    {name: 'LeetCode', category: 'Problem Solving'},
  ];

  const specializations = [
    {
      title: 'Java Enterprise Development',
      description: 'Building scalable enterprise applications with Spring Boot and microservices',
      technologies: ['JavaFx', 'MYSQL'],
      projects: 7,
      yearsExp: 3
    },
    {
      title: 'Cross-Platform Mobile Apps',
      description: 'Experienced in building responsive, high-performance mobile applications using Flutter.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Provider'],
      projects: 5,
      yearsExp: 2
    },
    {
      title: 'Modern Web Applications',
      description: 'Proficient in developing dynamic, responsive, and scalable web applications using React.js, Tailwind CSS, and modern JavaScript.',
      technologies: ['React', 'Next.js', 'Supabase', 'TypeScript'],
      projects: 2,
      yearsExp: 1
    },
    {
      title: 'UI/UX Design',
      description: 'Passionate about crafting clean, responsive, and intuitive interfaces using Figma, Tailwind CSS, and Flutter animations for modern design aesthetics.',
      technologies: ['Java', 'React', 'PostgreSQL', 'Vercel'],
      projects: 35,
      yearsExp: 3
    }
  ];

  // Enhanced animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
      <div className="relative">
        <StarField />

        <main className="relative z-10 pt-20 sm:pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Hero Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-16 sm:mb-20"
            >
              <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-space mb-6"
              >
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#c77dff] to-[#ff3cac] bg-clip-text text-transparent">
                My Skills
              </span>
              </motion.h1>
              <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg lg:text-2xl text-white/70 font-inter max-w-4xl mx-auto"
              >
                Comprehensive expertise in Java, Flutter, React, and modern development technologies
              </motion.p>
            </motion.section>

            {/* Specializations */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="mb-16 sm:mb-20"
            >
              <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-center mb-12 sm:mb-16"
              >
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                Specializations
              </span>
              </motion.h2>

              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
              >
                {specializations.map((spec, index) => (
                    <motion.div
                        key={spec.title}
                        variants={itemVariants}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          transition: { type: "spring" as const, stiffness: 300, damping: 20 }
                        }}
                        className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                    >
                      <motion.div
                          className="flex items-center mb-6"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <motion.div
                            className="mr-4"
                            whileHover={{
                              rotate: 5,
                              scale: 1.1,
                              transition: { type: "spring" as const, stiffness: 300 }
                            }}
                        >
                          <div className="text-3xl sm:text-4xl text-[#00e5ff] w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                            💻
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-space">
                            {spec.title}
                          </h3>
                          <p className="text-[#00e5ff] text-sm">
                            {spec.projects} projects • {spec.yearsExp} years experience
                          </p>
                        </div>
                      </motion.div>

                      <motion.p
                          className="text-white/70 mb-6 font-inter text-sm sm:text-base"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {spec.description}
                      </motion.p>

                      <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {spec.technologies.map((tech, techIndex) => (
                            <motion.span
                                key={tech}
                                className="px-3 py-1 bg-[#00e5ff]/10 text-[#00e5ff] rounded-full text-xs sm:text-sm font-medium hover:bg-[#00e5ff]/20 transition-colors duration-300"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.1 + techIndex * 0.05 + 0.5,
                                  type: "spring" as const,
                                  stiffness: 200
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  transition: { type: "spring" as const, stiffness: 400 }
                                }}
                            >
                              {tech}
                            </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Filter Categories */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12 sm:mb-16 lg:mb-20"
            >
              {/* Desktop and Tablet Layout */}
              <div className="hidden sm:flex justify-center mb-6 sm:mb-8 lg:mb-12">
                <div className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl lg:rounded-2xl xl:rounded-3xl p-2 lg:p-3 xl:p-4 border border-[#00e5ff]/20 shadow-lg shadow-[#00e5ff]/5">
                  <div className="flex gap-2 lg:gap-3 xl:gap-4 flex-wrap justify-center">
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 sm:px-5 lg:px-6 xl:px-8 py-2 sm:py-2.5 lg:py-3 xl:py-4 rounded-lg lg:rounded-xl xl:rounded-2xl font-medium transition-all duration-300 cursor-pointer text-sm sm:text-base lg:text-lg xl:text-xl ${
                                filter === category.id
                                    ? 'bg-gradient-to-r from-[#00e5ff] to-[#c77dff] text-white shadow-lg shadow-[#00e5ff]/30 font-semibold transform scale-105'
                                    : 'bg-[#1a1a3a]/50 text-white/70 hover:text-white hover:bg-[#1a1a3a]/80 backdrop-blur-sm border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 hover:shadow-md hover:shadow-[#00e5ff]/10'
                            }`}
                        >
                      <span className="hidden xl:inline">
                        {category.name} ({category.count})
                      </span>
                          <span className="hidden lg:inline xl:hidden">
                        {category.name.length > 12 ? category.name.split(' ')[0] : category.name} ({category.count})
                      </span>
                          <span className="inline lg:hidden">
                        {category.name.split(' ')[0]} ({category.count})
                      </span>
                        </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block sm:hidden w-full px-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category, index) => (
                      <motion.button
                          key={category.id}
                          onClick={() => setFilter(category.id)}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`px-4 py-4 rounded-xl font-medium transition-all duration-300 cursor-pointer text-xs min-h-[60px] ${
                              filter === category.id
                                  ? 'bg-gradient-to-r from-[#00e5ff] to-[#c77dff] text-white shadow-lg shadow-[#00e5ff]/30 font-semibold'
                                  : 'bg-[#1a1a3a]/50 text-white/70 hover:text-white hover:bg-[#1a1a3a]/80 backdrop-blur-sm border border-[#00e5ff]/20 hover:border-[#00e5ff]/40'
                          }`}
                          style={{ touchAction: 'manipulation' }}
                      >
                        <div className="text-center">
                          <div className="font-semibold leading-tight mb-1">
                            {category.name.replace(' Skills', '').replace(' Development', '').replace(' Integration', '').replace(' & Database', '')}
                          </div>
                          <div className="text-xs opacity-75">
                            ({category.count} {category.count === 1 ? 'skill' : 'skills'})
                          </div>
                        </div>
                      </motion.button>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Skills Display */}
            <motion.section layout className="mb-16 sm:mb-20">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <AnimatePresence>
                  {filteredSkills.map((skill, index) => (
                      <motion.div
                          key={`${skill.category}-${skill.name}`}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group relative"
                      >
                        <motion.div
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300 h-full"
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-white font-space group-hover:text-[#00e5ff] transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-[#00e5ff] font-medium text-sm sm:text-base">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="mb-4">
                            <div className="w-full bg-[#2a2a4a] rounded-full h-2 sm:h-3 overflow-hidden">
                              <motion.div
                                  className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#c77dff]"
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: `${skill.level}%`,
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    ease: [0.6, -0.05, 0.01, 0.99] as const,
                                    delay: index * 0.1 + 0.3,
                                  }}
                                  whileHover={{
                                    boxShadow: "0 0 15px rgba(0, 229, 255, 0.6)",
                                    transition: { duration: 0.3 }
                                  }}
                              />
                            </div>
                          </div>

                          <div className="flex justify-between text-sm text-white/70 mb-3">
                            <span>{skill.experience}</span>
                            <span>{skill.projects} projects</span>
                          </div>

                          {/* Category badge */}
                          <div className="flex justify-between items-center">
                            <span className="inline-block px-2 py-1 bg-[#c77dff]/10 text-[#c77dff] rounded-full text-xs font-medium">
                              {skillCategories[skill.category]?.title}
                            </span>
                            <span className="text-[#00e5ff] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                              ⚡
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.section>

            {/* Tools & Technologies */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="mb-16 sm:mb-20"
            >
              <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-center mb-12 sm:mb-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
              >
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                Tools & Technologies
              </span>
              </motion.h2>

              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
              >
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.name}
                        variants={itemVariants}
                        whileHover={{
                          y: -8,
                          scale: 1.05,
                          transition: { type: "spring" as const, stiffness: 300, damping: 20 }
                        }}
                        className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300 text-center"
                    >
                      <motion.div
                          className="mb-4"
                          animate={{
                            y: [0, -3],
                          }}
                          transition={{
                            duration: 2 + index * 0.1,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }}
                      >
                        <motion.div
                            className="text-xl sm:text-2xl lg:text-3xl text-[#00e5ff] w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center mx-auto"
                            whileHover={{
                              rotate: 10,
                              scale: 1.2,
                              transition: { type: "spring" as const, stiffness: 300 }
                            }}
                        >
                          🛠️
                        </motion.div>
                      </motion.div>
                      <motion.h3
                          className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 font-space"
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                      >
                        {tool.name}
                      </motion.h3>
                      <motion.p
                          className="text-xs sm:text-sm text-white/60"
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + 0.3 }}
                      >
                        {tool.category}
                      </motion.p>
                    </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Certifications */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 sm:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-center mb-12 sm:mb-16">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                Certifications & Learning
              </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: 'Career Edge: Young Professional',
                    issuer: 'TCS iON',
                    year: '2025',
                    color: '#f36f21'
                  },
                  {
                    title: 'Full Stack Development',
                    issuer: 'GUVI • HCL Tech',
                    year: '2025',
                    color: '#6db33f'
                  },
                  {
                    title: 'Python for Data Science',
                    issuer: 'Reliance Foundation',
                    year: '2025',
                    color: '#1f88e5'
                  }
                ].map((cert, index) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300 text-center"
                    >
                      <div className="mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#00e5ff] to-[#c77dff] rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xl sm:text-2xl text-white">🏆</span>
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 font-space">
                        {cert.title}
                      </h3>
                      <p className="text-white/70 mb-2 text-sm sm:text-base">
                        {cert.issuer}
                      </p>
                      <p className="text-[#00e5ff] font-medium text-sm sm:text-base">
                        {cert.year}
                      </p>
                    </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </main>
      </div>
  );
}