
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, Code, Zap, Globe } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      category: 'fullstack',
      description: 'A comprehensive analytics platform with real-time data visualization, machine learning insights, and interactive charts.',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'D3.js'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      stats: { users: '10K+', uptime: '99.9%', performance: '95/100' },
      longDescription: 'This project revolutionizes data analytics by combining real-time processing with AI-driven insights. Built with a microservices architecture, it handles millions of data points daily while maintaining exceptional performance.',
      features: ['Real-time data processing', 'Machine learning predictions', 'Interactive visualizations', 'Multi-tenant support'],
      gradient: 'from-neon-cyan to-neon-purple',
    },
    {
      id: 2,
      title: '3D E-commerce Platform',
      category: 'frontend',
      description: 'Immersive shopping experience with 3D product visualization, AR try-on features, and smooth animations.',
      technologies: ['Next.js', 'Three.js', 'WebXR', 'Stripe', 'Tailwind'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      stats: { conversion: '+40%', loading: '2.1s', satisfaction: '4.8/5' },
      longDescription: 'A next-generation e-commerce platform that transforms online shopping through immersive 3D experiences and augmented reality integration.',
      features: ['3D product visualization', 'AR try-on capability', 'Real-time inventory', 'Social shopping features'],
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      id: 3,
      title: 'Blockchain Voting System',
      category: 'blockchain',
      description: 'Secure, transparent voting platform built on Ethereum with smart contracts and decentralized governance.',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'MetaMask'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      stats: { transactions: '50K+', security: '100%', transparency: 'Full' },
      longDescription: 'A revolutionary voting system that ensures transparency and security through blockchain technology, making elections more accessible and trustworthy.',
      features: ['Smart contract voting', 'Zero-knowledge proofs', 'Decentralized storage', 'Real-time results'],
      gradient: 'from-neon-pink to-neon-lime',
    },
    {
      id: 4,
      title: 'Neural Network Visualizer',
      category: 'ai',
      description: 'Interactive tool for visualizing and understanding neural network architectures and training processes.',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'WebGL', 'FastAPI'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      stats: { models: '25+', accuracy: '94%', speed: '10x faster' },
      longDescription: 'An educational and research tool that makes neural networks accessible through interactive visualizations and real-time training observation.',
      features: ['Interactive architecture builder', 'Real-time training visualization', 'Multiple model support', 'Export capabilities'],
      gradient: 'from-neon-lime to-neon-cyan',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Eye },
    { id: 'blockchain', label: 'Blockchain', icon: Zap },
    { id: 'ai', label: 'AI/ML', icon: Zap },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of innovative solutions and creative problem-solving
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-2 border border-white/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-neon-cyan text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 gap-8">
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
                <div className="relative h-64 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 overflow-hidden">
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
                      className="p-3 bg-neon-cyan text-black rounded-full hover:scale-110 transition-transform"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-neon-purple text-white rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-neon-pink text-white rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 text-white/60 rounded-full text-sm">
                        +{project.technologies.length - 3} more
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
                className="bg-gradient-dark border border-neon-cyan/30 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-3xl font-space font-bold text-gradient mb-2">
                            {project.title}
                          </h3>
                          <p className="text-white/70">{project.longDescription}</p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 text-white/60 hover:text-white transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-white/5 rounded-lg">
                            <div className="text-2xl font-bold text-neon-cyan mb-1">{value}</div>
                            <div className="text-white/60 text-sm capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                              <span className="text-white/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-lg font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center space-x-2 px-6 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all rounded-lg"
                        >
                          <Github className="w-5 h-5" />
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
    </section>
  );
};

export default Projects;
