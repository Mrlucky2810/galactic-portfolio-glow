'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import StarField from '@/components/StarField';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('java');

  const skillCategories = {
    java: {
      title: 'Java Development',
      skills: [
        {name: 'Core Java', level: 94, color: '#f89820', experience: '4+ years', projects: 60},
        {name: 'JavaFX / Swing', level: 91, color: '#007396', experience: '3+ years', projects: 30},
        {name: 'JDBC', level: 89, color: '#E76F00', experience: '3+ years', projects: 25},
        {name: 'File Handling', level: 87, color: '#F57C00', experience: '3+ years', projects: 20},
        {name: 'OOP & Exception Handling', level: 92, color: '#f89820', experience: '4+ years', projects: 50}
      ]
    },
    flutter: {
      title: 'Flutter Development',
      skills: [
        {name: 'Flutter Framework', level: 92, color: '#02569B', experience: '2+ years', projects: 40},
        {name: 'Dart Language', level: 90, color: '#0175C2', experience: '2+ years', projects: 40},
        {name: 'Provider / BLoC', level: 85, color: '#02569B', experience: '2+ years', projects: 30},
        {name: 'Flutter Animations', level: 88, color: '#4CAF50', experience: '2+ years', projects: 25},
        {name: 'UI & Navigation', level: 91, color: '#757575', experience: '2+ years', projects: 40}
      ]
    },
    firebase: {
      title: 'Firebase Integration',
      skills: [
        {name: 'Firebase Auth', level: 90, color: '#ffca28', experience: '2+ years', projects: 30},
        {name: 'Firestore Database', level: 88, color: '#ffca28', experience: '2+ years', projects: 35},
        {name: 'Cloud Functions', level: 80, color: '#FFA000', experience: '1+ year', projects: 15},
        {name: 'Firebase Storage', level: 85, color: '#FFC107', experience: '2+ years', projects: 20},
        {name: 'Push Notifications', level: 83, color: '#FFB300', experience: '2+ years', projects: 20}
      ]
    },
    react: {
      title: 'React Development',
      skills: [
        {name: 'React.js', level: 85, color: '#61DAFB', experience: '2+ years', projects: 30},
        {name: 'Tailwind CSS', level: 90, color: '#06B6D4', experience: '2+ years', projects: 35},
        {name: 'React Hooks', level: 86, color: '#61DAFB', experience: '2+ years', projects: 25},
        {name: 'Responsive UI Design', level: 92, color: '#1E40AF', experience: '2+ years', projects: 30},
        {name: 'Git & GitHub', level: 88, color: '#000000', experience: '3+ years', projects: 50}
      ]
    },
    backend: {
      title: 'Backend & Database',
      skills: [
        {name: 'Node.js / Express.js', level: 85, color: '#68A063', experience: '2+ years', projects: 25},
        {name: 'REST APIs', level: 90, color: '#FF6C37', experience: '3+ years', projects: 40},
        {name: 'MySQL', level: 87, color: '#00758F', experience: '3+ years', projects: 30},
        {name: 'Supabase', level: 80, color: '#3ECF8E', experience: '1+ year', projects: 10},
        {name: 'Authentication & Authorization', level: 88, color: '#0F9D58', experience: '2+ years', projects: 30}
      ]
    }
  };

  const tools = [
    {name: 'IntelliJ IDEA', category: 'IDE', icon: 'ri-code-line'},
    {name: 'VS Code', category: 'Editor', icon: 'ri-code-s-slash-line'},
    {name: 'Android Studio', category: 'IDE', icon: 'ri-smartphone-line'},
    {name: 'Git', category: 'Version Control', icon: 'ri-git-branch-line'},
    {name: 'GitHub', category: 'Version Control', icon: 'ri-github-line'},
    {name: 'Figma', category: 'Design', icon: 'ri-pencil-ruler-line'},
    {name: 'Adobe Photoshop', category: 'Design', icon: 'ri-brush-line'},
    {name: 'Adobe Premiere Pro', category: 'Video Editing', icon: 'ri-video-line'},
    {name: 'Firebase Console', category: 'Backend', icon: 'ri-database-line'},
    {name: 'Supabase Studio', category: 'Backend', icon: 'ri-database-2-line'},
    {name: 'Postman', category: 'API Testing', icon: 'ri-plug-2-line'},
    {name: 'Vercel', category: 'Deployment', icon: 'ri-cloud-line'},
    {name: 'Netlify', category: 'Deployment', icon: 'ri-upload-cloud-line'},
    {name: 'Replit', category: 'Online IDE', icon: 'ri-terminal-box-line'},
    {name: 'LeetCode', category: 'Problem Solving', icon: 'ri-lightbulb-line'},
  ];

  const specializations = [
    {
      title: 'Java Enterprise Development',
      description: 'Building scalable enterprise applications with Spring Boot and microservices',
      icon: 'ri-java-line',
      technologies: ['JavaFx', 'MYSQL'],
      projects: 7,
      yearsExp: 3
    },
    {
      title: 'Cross-Platform Mobile Apps',
      description: 'Experienced in building responsive, high-performance mobile applications using Flutter.',
      icon: 'ri-smartphone-line',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Provider'],
      projects: 5,
      yearsExp: 2
    },
    {
      title: 'Modern Web Applications',
      description: 'Proficient in developing dynamic, responsive, and scalable web applications using React.js, Tailwind CSS, and modern JavaScript.',
      icon: 'ri-window-line',
      technologies: ['React', 'Next.js', 'Supabase', 'TypeScript'],
      projects: 2,
      yearsExp: 1
    },
    {
      title: 'UI/UX Design',
      description: 'Passionate about crafting clean, responsive, and intuitive interfaces using Figma, Tailwind CSS, and Flutter animations for modern design aesthetics.',
      icon: 'ri-palette-line',
      technologies: ['Java', 'React', 'PostgreSQL', 'Vercel'],
      projects: 35,
      yearsExp: 3
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
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
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-space-grotesk mb-6"
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
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-center mb-12 sm:mb-16"
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
                          transition: { type: "spring", stiffness: 300, damping: 20 }
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
                              transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                          <i className={`${spec.icon} text-3xl sm:text-4xl text-[#00e5ff] w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center`}></i>
                        </motion.div>
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-space-grotesk">
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
                                  type: "spring",
                                  stiffness: 200
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  transition: { type: "spring", stiffness: 400 }
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

            {/* Category Selector */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 sm:mb-16"
            >
              <div className="flex justify-center mb-8 sm:mb-12">
                <motion.div
                    className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 border border-[#00e5ff]/20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                >
                  <motion.div
                      className="flex gap-2 min-w-max"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                  >
                    {Object.entries(skillCategories).map(([key, category], index) => (
                        <motion.button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            variants={itemVariants}
                            whileHover={{
                              scale: 1.05,
                              transition: { type: "spring", stiffness: 400 }
                            }}
                            whileTap={{
                              scale: 0.95,
                              transition: { type: "spring", stiffness: 400 }
                            }}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 whitespace-nowrap cursor-pointer text-xs sm:text-sm lg:text-base ${
                                activeCategory === key
                                    ? 'bg-gradient-to-r from-[#00e5ff] to-[#c77dff] text-white shadow-lg shadow-[#00e5ff]/20'
                                    : 'text-white/70 hover:text-white hover:bg-white/10'
                            }`}
                        >
                          {category.title}
                        </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Skills Display */}
            <motion.section
                key={activeCategory}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 sm:mb-20"
            >
              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
              >
                {skillCategories[activeCategory].skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                        className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                    >
                      <motion.div
                          className="flex justify-between items-center mb-4"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-white font-space-grotesk">
                          {skill.name}
                        </h3>
                        <motion.span
                            className="text-[#00e5ff] font-medium text-sm sm:text-base"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: index * 0.1 + 0.5,
                              type: "spring",
                              stiffness: 200
                            }}
                        >
                          {skill.level}%
                        </motion.span>
                      </motion.div>

                      <div className="mb-4">
                        <div className="w-full bg-[#2a2a4a] rounded-full h-2 sm:h-3 overflow-hidden">
                          <motion.div
                              className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#c77dff]"
                              custom={skill.level}
                              variants={skillBarVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover={{
                                boxShadow: "0 0 15px rgba(0, 229, 255, 0.6)",
                                transition: { duration: 0.3 }
                              }}
                          />
                        </div>
                      </div>

                      <motion.div
                          className="flex justify-between text-sm text-white/70"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        <span>{skill.experience}</span>
                        <span>{skill.projects} projects</span>
                      </motion.div>
                    </motion.div>
                ))}
              </motion.div>
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
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-center mb-12 sm:mb-16"
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
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
              >
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.name}
                        variants={itemVariants}
                        whileHover={{
                          y: -8,
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
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
                        <motion.i
                            className={`${tool.icon} text-xl sm:text-2xl lg:text-3xl text-[#00e5ff] w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center mx-auto`}
                            whileHover={{
                              rotate: 10,
                              scale: 1.2,
                              transition: { type: "spring", stiffness: 300 }
                            }}
                        />
                      </motion.div>
                      <motion.h3
                          className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 font-space-grotesk"
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-center mb-12 sm:mb-16">
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
                          <i className="ri-award-line text-xl sm:text-2xl text-white w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 font-space-grotesk">
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