
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Star, Users, Code, Zap } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description: 'A modern e-commerce platform with AI-driven product recommendations and real-time analytics.',
      category: 'fullstack',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Stripe'],
      features: ['AI Recommendations', 'Real-time Analytics', 'Payment Integration', 'Admin Dashboard'],
      github: '#',
      live: '#',
      stats: { users: '10K+', rating: 4.8, downloads: '50K+' }
    },
    {
      id: 2,
      title: '3D Portfolio Website',
      description: 'An immersive 3D portfolio website with interactive elements and smooth animations.',
      category: 'frontend',
      image: '/placeholder.svg',
      tech: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
      features: ['3D Interactions', 'Smooth Animations', 'Responsive Design', 'Performance Optimized'],
      github: '#',
      live: '#',
      stats: { users: '5K+', rating: 4.9, downloads: '25K+' }
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A scalable real-time chat application with video calling and file sharing capabilities.',
      category: 'fullstack',
      image: '/placeholder.svg',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      features: ['Real-time Messaging', 'Video Calls', 'File Sharing', 'Group Chats'],
      github: '#',
      live: '#',
      stats: { users: '15K+', rating: 4.7, downloads: '75K+' }
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for complex data visualization with real-time updates.',
      category: 'frontend',
      image: '/placeholder.svg',
      tech: ['React', 'D3.js', 'Chart.js', 'Python', 'FastAPI'],
      features: ['Interactive Charts', 'Real-time Data', 'Export Functions', 'Custom Filters'],
      github: '#',
      live: '#',
      stats: { users: '8K+', rating: 4.6, downloads: '40K+' }
    },
    {
      id: 5,
      title: 'Mobile App Backend API',
      description: 'Robust RESTful API for a social media mobile application with advanced features.',
      category: 'backend',
      image: '/placeholder.svg',
      tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
      features: ['Authentication', 'Rate Limiting', 'Caching', 'API Documentation'],
      github: '#',
      live: '#',
      stats: { users: '20K+', rating: 4.8, downloads: '100K+' }
    },
    {
      id: 6,
      title: 'Machine Learning Web App',
      description: 'Web application that uses machine learning for image recognition and classification.',
      category: 'ai',
      image: '/placeholder.svg',
      tech: ['Python', 'TensorFlow', 'Flask', 'React', 'OpenCV'],
      features: ['Image Recognition', 'Real-time Processing', 'Model Training', 'API Integration'],
      github: '#',
      live: '#',
      stats: { users: '12K+', rating: 4.9, downloads: '60K+' }
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'fullstack', label: 'Full Stack', icon: Zap },
    { key: 'frontend', label: 'Frontend', icon: Play },
    { key: 'backend', label: 'Backend', icon: Users },
    { key: 'ai', label: 'AI/ML', icon: Star },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* 3D Project Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              3D Project Gallery
            </h3>
            <div className="h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
              <iframe
                src="https://my.spline.design/untitled-3c9e8f1a2b3d4c5e6f7a8b9c0d1e2f3a/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-wrap gap-4 bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedFilter === filter.key
                    ? 'bg-neon-cyan text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-neon-cyan/20 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-neon-cyan/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-white/60">
                    <span>{project.stats.users} users</span>
                    <span>⭐ {project.stats.rating}</span>
                    <span>{project.stats.downloads}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-white mb-6">
            Want to see more of my work?
          </h3>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg glow-effect transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
