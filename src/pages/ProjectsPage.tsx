
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, Code, Smartphone, Globe, Database } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      category: 'mobile',
      description: 'Cross-platform e-commerce app built with Flutter and Firebase, featuring real-time inventory, secure payments, and push notifications.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe', 'Provider'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.shriyan.ecommerce',
      githubUrl: 'https://github.com/shriyanjaiswal/flutter-ecommerce',
      stats: { downloads: '10K+', rating: '4.8/5', users: '5K+' },
      longDescription: 'A comprehensive e-commerce mobile application that provides seamless shopping experience across iOS and Android platforms. Features include real-time product updates, secure payment processing, order tracking, and personalized recommendations.',
      features: ['Cross-platform compatibility', 'Real-time inventory sync', 'Secure payment integration', 'Push notifications', 'Offline cart functionality'],
      gradient: 'from-neon-cyan to-neon-purple',
    },
    {
      id: 2,
      title: 'Task Management Web App',
      category: 'web',
      description: 'Modern task management application built with React, Supabase, and deployed on Vercel with real-time collaboration features.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Vercel'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://task-manager-shriyan.vercel.app',
      githubUrl: 'https://github.com/shriyanjaiswal/react-task-manager',
      stats: { users: '2K+', uptime: '99.9%', performance: '98/100' },
      longDescription: 'A feature-rich task management application that enables teams to collaborate effectively with real-time updates, file sharing, and progress tracking.',
      features: ['Real-time collaboration', 'File attachments', 'Progress tracking', 'Team management', 'Mobile responsive'],
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      id: 3,
      title: 'Enterprise CRM System',
      category: 'enterprise',
      description: 'Scalable CRM system built with Java Spring Boot, PostgreSQL, and React frontend for managing customer relationships and sales pipeline.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://crm-demo.shriyanjaiswal.com',
      githubUrl: 'https://github.com/shriyanjaiswal/spring-crm',
      stats: { clients: '25+', transactions: '100K+', uptime: '99.95%' },
      longDescription: 'An enterprise-grade CRM solution that handles complex customer data, sales pipelines, and reporting with high performance and security.',
      features: ['Advanced reporting', 'Role-based access', 'API integration', 'Data analytics', 'Scalable architecture'],
      gradient: 'from-neon-pink to-neon-lime',
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      category: 'web',
      description: 'Real-time messaging app with Flutter mobile client and Java backend, featuring end-to-end encryption and multimedia sharing.',
      technologies: ['Flutter', 'Java', 'WebSocket', 'Firebase', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://chatapp-shriyan.vercel.app',
      githubUrl: 'https://github.com/shriyanjaiswal/realtime-chat',
      stats: { messages: '1M+', users: '15K+', latency: '<100ms' },
      longDescription: 'A secure, real-time messaging platform supporting both web and mobile clients with advanced features like file sharing and group chats.',
      features: ['End-to-end encryption', 'File sharing', 'Group chats', 'Voice messages', 'Cross-platform sync'],
      gradient: 'from-neon-lime to-neon-cyan',
    },
    {
      id: 5,
      title: 'Inventory Management System',
      category: 'enterprise',
      description: 'Comprehensive inventory management system with barcode scanning, automated reordering, and detailed analytics built with Java and React.',
      technologies: ['Java', 'Spring', 'React', 'PostgreSQL', 'JasperReports'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://inventory-demo.shriyanjaiswal.com',
      githubUrl: 'https://github.com/shriyanjaiswal/inventory-management',
      stats: { products: '50K+', accuracy: '99.8%', efficiency: '+40%' },
      longDescription: 'An enterprise inventory management solution that streamlines warehouse operations with automated tracking, predictive analytics, and comprehensive reporting.',
      features: ['Barcode scanning', 'Automated reordering', 'Predictive analytics', 'Multi-location support', 'Custom reports'],
      gradient: 'from-neon-orange to-neon-purple',
    },
    {
      id: 6,
      title: 'Fitness Tracking Mobile App',
      category: 'mobile',
      description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features built with Flutter and Firebase.',
      technologies: ['Flutter', 'Firebase', 'ML Kit', 'HealthKit', 'Google Fit'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.shriyan.fitness',
      githubUrl: 'https://github.com/shriyanjaiswal/fitness-tracker',
      stats: { workouts: '100K+', users: '8K+', retention: '75%' },
      longDescription: 'A comprehensive fitness application that helps users track workouts, monitor nutrition, and achieve their health goals with personalized recommendations.',
      features: ['Workout tracking', 'Nutrition monitoring', 'Social challenges', 'Progress analytics', 'Wearable integration'],
      gradient: 'from-neon-green to-neon-blue',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'web', label: 'Web Apps', icon: Code },
    { id: 'enterprise', label: 'Enterprise', icon: Database },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            Featured Projects
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            A showcase of innovative solutions across mobile, web, and enterprise applications
          </p>
        </motion.div>

        {/* 3D Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 sm:mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neon-cyan/30">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
              Interactive Project Gallery
            </h3>
            <div className="h-64 sm:h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
              <iframe
                src="https://my.spline.design/untitled-3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-2 border border-white/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  filter === category.id
                    ? 'bg-neon-cyan text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-64 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center space-x-4"
                  >
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="p-2 sm:p-3 bg-neon-cyan text-black rounded-full hover:scale-110 transition-transform"
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-neon-purple text-white rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-neon-pink text-white rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-space font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm sm:text-base line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-xs sm:text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 sm:px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs sm:text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="bg-gradient-dark border border-neon-cyan/30 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-6 sm:p-8">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-space font-bold text-gradient mb-2">
                            {project.title}
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base">{project.longDescription}</p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 text-white/60 hover:text-white transition-colors flex-shrink-0"
                        >
                          <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-3 sm:p-4 bg-white/5 rounded-lg">
                            <div className="text-lg sm:text-2xl font-bold text-neon-cyan mb-1">{String(value)}</div>
                            <div className="text-white/60 text-xs sm:text-sm capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Key Features</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-neon-cyan rounded-full flex-shrink-0" />
                              <span className="text-white/80 text-sm sm:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 sm:px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-lg font-mono text-sm sm:text-base"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all rounded-lg"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsPage;
