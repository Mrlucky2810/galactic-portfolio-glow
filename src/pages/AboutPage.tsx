
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Heart, Award, Users, Coffee, Clock, Database, Smartphone, Cloud, Server } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Award, value: '100+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Coffee, value: '2000+', label: 'Cups of Coffee' },
    { icon: Clock, value: '4+', label: 'Years Experience' },
  ];

  const techStack = [
    { icon: Code2, title: 'Backend Development', tech: 'Java • Spring Boot • Microservices', color: 'neon-cyan' },
    { icon: Smartphone, title: 'Mobile Development', tech: 'Flutter • Dart • Firebase', color: 'neon-purple' },
    { icon: Database, title: 'Database & Storage', tech: 'PostgreSQL • Firebase • Supabase', color: 'neon-pink' },
    { icon: Cloud, title: 'Cloud & DevOps', tech: 'Vercel • Firebase • AWS', color: 'neon-lime' },
  ];

  const journey = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began with Java fundamentals and object-oriented programming concepts',
    },
    {
      year: '2021',
      title: 'Mobile Development',
      description: 'Mastered Flutter framework and Firebase integration for cross-platform apps',
    },
    {
      year: '2022',
      title: 'Full-Stack Web Development',
      description: 'Learned React, Supabase, and modern deployment with Vercel',
    },
    {
      year: '2023',
      title: 'Enterprise Solutions',
      description: 'Built scalable Java applications and complex Flutter projects',
    },
    {
      year: '2024',
      title: 'Tech Lead & Mentor',
      description: 'Leading development teams and mentoring junior developers',
    },
  ];

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
            About Me
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            I'm Shriyan Jaiswal, a passionate full-stack developer who bridges the gap between 
            enterprise-grade backend systems, beautiful mobile experiences, and modern web applications.
          </p>
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 sm:mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neon-cyan/30">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
              Interactive 3D Developer Avatar
            </h3>
            <div className="h-64 sm:h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
              <iframe
                src="https://my.spline.design/untitled-7ac2bfd70d4c45e8a58b9d9b5a25d97c/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-neon-cyan mx-auto mb-2 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20"
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">My Development Philosophy</h3>
            <div className="space-y-4 text-white/80 text-sm sm:text-base">
              <p>
                My journey into software development started with Java, where I learned the importance 
                of solid architectural principles and clean code practices. This foundation has been 
                invaluable across all the technologies I've worked with since.
              </p>
              <p>
                What excites me most is building applications that users love - whether it's a 
                cross-platform mobile app with Flutter, a scalable web application with React and 
                Supabase, or a robust backend service with Java and Spring Boot.
              </p>
              <p>
                I believe in the power of modern tooling and deployment strategies. Using Vercel for 
                seamless deployments, Firebase for real-time features, and Supabase for rapid backend 
                development allows me to focus on creating exceptional user experiences.
              </p>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full p-6 sm:p-8 backdrop-blur-sm border border-neon-cyan/30 glow-effect">
              <div className="w-full h-full bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-4xl sm:text-6xl text-gradient font-space font-bold"
                >
                  SJ
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8 sm:mb-12">Tech Stack Expertise</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 text-center"
              >
                <tech.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${tech.color} mx-auto mb-3 sm:mb-4`} />
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{tech.title}</h4>
                <p className="text-white/70 text-xs sm:text-sm">{tech.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8 sm:mb-12">My Journey</h3>
          <div className="space-y-6 sm:space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-neon-cyan font-mono text-sm mb-2">{item.year}</div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm sm:text-base">{item.description}</p>
                </div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-neon-cyan rounded-full flex-shrink-0 glow-effect" />
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
