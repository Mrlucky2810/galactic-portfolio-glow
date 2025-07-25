// src/pages/ProjectsPage.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import StarField from '@/components/StarField';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  liveDemo: string;
  github: string;
  metrics: {
    [key: string]: string;
  };
  features: string[];
  challenge: string;
  solution: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Travel/Tourism Website',
      description: 'Comprehensive travel booking portal with real-time data, dynamic filtering, and integrated payment gateway.',
      tech: ['React', 'Supabase', 'Tailwind CSS', 'Stripe'],
      category: 'web',
      liveDemo: 'https://utsavtravels.vercel.app/',
      github: 'https://github.com/shriyanjaiswal/travel-booking-website',
      metrics: {
        bookings: '5K+',
        destinations: '100+',
        uptime: '99.9%',
        rating: '4.8/5'
      },
      features: [
        'Destination search and filtering',
        'Responsive booking UI',
        'Supabase real-time data sync',
        'Stripe payment integration',
        'Dynamic admin panel'
      ],
      challenge: 'Creating a real-time, searchable travel booking interface with integrated payments',
      solution: 'Used Supabase for backend and real-time sync with Stripe for secure transactions'
    },
    {
      id: 2,
      title: 'Gaming & Betting Platform',
      description: 'Casino and sports betting portal with real-time games, secure payments, and modern UI.',
      tech: ['React', 'Supabase', 'Firebase', 'Node.js'],
      category: 'web',
      liveDemo: 'https://thestake.io/',
      github: 'https://github.com/shriyanjaiswal/gaming-betting-platform',
      metrics: {
        games: '50+',
        users: '10K+',
        payouts: '$50K+',
        uptime: '99.7%'
      },
      features: [
        'User authentication and KYC',
        'Real-time game engine',
        'Betting odds management',
        'Crypto and fiat payment options',
        'Admin dashboard for odds tracking'
      ],
      challenge: 'Building secure, real-time games and handling large data streams for betting',
      solution: 'Used Firebase for real-time sync and Supabase for data security and scalability'
    },
    {
      id: 3,
      title: 'Recipe Master App',
      description: 'Mobile app for exploring, saving, and cooking thousands of global recipes using Flutter and Firebase.',
      tech: ['Flutter', 'Firebase', 'Provider', 'Firestore'],
      category: 'mobile',
      liveDemo: 'https://github.com/shriyanjaiswal/recipe_application',
      github: 'https://github.com/shriyanjaiswal/recipe_application',
      metrics: {
        recipes: '10K+',
        categories: '20+',
        users: '4K+',
        rating: '4.6/5'
      },
      features: [
        'Recipe browsing by category',
        'Step-by-step instructions',
        'Favorites management',
        'Modern Flutter architecture',
        'Offline accessibility'
      ],
      challenge: 'Building a performance-optimized mobile UI with structured recipe data',
      solution: 'Used Provider architecture and Firestore data indexing for blazing-fast UX'
    },
    {
      id: 4,
      title: 'Minati Exchange Website',
      description: 'Secure cryptocurrency trading interface with live market data, charting tools, and wallet integration.',
      tech: ['React', 'Tailwind CSS', 'WebSocket', 'Firebase'],
      category: 'web',
      liveDemo: 'https://minati.exchange/',
      github: 'https://github.com/shriyanjaiswal/crypto-exchange-ui',
      metrics: {
        trades: '100K+',
        tokens: '200+',
        users: '8K+',
        latency: 'Low-latency live charts'
      },
      features: [
        'Live trading view',
        'Secure wallet login',
        'Crypto price charts',
        'Market depth and analytics',
        'Mobile-optimized interface'
      ],
      challenge: 'Building real-time trading data display and maintaining data consistency',
      solution: 'Used WebSocket streams and Firebase sync for trading engine display'
    },
    {
      id: 5,
      title: 'Hospital Management System',
      description: 'Complete desktop-based hospital solution for patient management, billing, doctor scheduling, and inventory.',
      tech: ['JavaFX', 'MySQL', 'JDBC', 'Scene Builder'],
      category: 'desktop',
      liveDemo: '',
      github: 'https://github.com/shriyanjaiswal/hospital-management-system',
      metrics: {
        patients: '5K+',
        departments: '20+',
        users: '50+ staff',
        accuracy: '99.9%'
      },
      features: [
        'Patient registration and lookup',
        'Doctor scheduling',
        'Billing and payment tracking',
        'Pharmacy and inventory control',
        'Admin panel and login system'
      ],
      challenge: 'Managing real-time data sync and relationships for hospital operations',
      solution: 'Structured MySQL DB and used JDBC with clean modular JavaFX controllers'
    },
    {
      id: 6,
      title: 'E-commerce System',
      description: 'Responsive e-commerce website with product listings, shopping cart, and integrated payments using React and Supabase.',
      tech: ['React', 'Supabase', 'Stripe', 'Tailwind CSS'],
      category: 'web',
      liveDemo: 'https://minatikart.vercel.app/',
      github: 'https://github.com/shriyanjaiswal/ecommerce-system',
      metrics: {
        products: '500+',
        orders: '1K+',
        revenue: '$10K+',
        conversion: '3.2%'
      },
      features: [
        'Product catalog with categories',
        'Shopping cart and checkout',
        'Stripe payment integration',
        'Supabase authentication and storage',
        'Admin product management'
      ],
      challenge: 'Building a complete e-commerce workflow with real-time updates',
      solution: 'Used Supabase for backend, storage, and auth, with Stripe for checkout'
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'desktop', name: 'Desktop & Games', count: projects.filter(p => p.category === 'desktop').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const ProjectImage: React.FC<{ project: Project; className?: string }> = ({ project, className = "" }) => {
    const getProjectIcon = (category: string) => {
      switch (category) {
        case 'web': return '🌐';
        case 'mobile': return '📱';
        case 'desktop': return '💻';
        default: return '⚡';
      }
    };

    return (
        <div className={`bg-gradient-to-br from-[#00e5ff]/20 to-[#c77dff]/20 flex items-center justify-center ${className}`}>
          <div className="text-center">
            <div className="text-4xl sm:text-6xl lg:text-8xl mb-2 sm:mb-4">
              {getProjectIcon(project.category)}
            </div>
            <p className="text-white/70 text-xs sm:text-sm lg:text-base font-medium">
              {project.category === 'web' ? 'Web Application' :
                  project.category === 'mobile' ? 'Mobile App' : 'Desktop Application'}
            </p>
          </div>
        </div>
    );
  };

  return (
      <div className="min-h-screen">
        <StarField />

        <main className="relative z-10 pt-20 sm:pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-space mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#c77dff] to-[#ff3cac] bg-clip-text text-transparent">
                My Projects
              </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl xl:text-2xl text-white/70 font-inter max-w-4xl mx-auto px-4">
                Showcasing innovative solutions built with Java, Flutter, React, and modern technologies
              </p>
            </motion.section>

            {/* Project Stats */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12 sm:mb-16 lg:mb-20"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                {[
                  { number: '20+', label: 'Total Projects', icon: '📁' },
                  { number: '6', label: 'Featured Projects', icon: '⭐' },
                  { number: '15+', label: 'Technologies Used', icon: '💻' },
                  { number: '10+', label: 'Happy Clients', icon: '👥' }
                ].map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="text-center p-3 sm:p-4 lg:p-6 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                    >
                      <div className="mb-2 sm:mb-3">
                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex items-center justify-center mx-auto">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#00e5ff] mb-1 font-space">
                        {stat.number}
                      </div>
                      <div className="text-white/70 text-xs sm:text-sm lg:text-base font-inter">
                        {stat.label}
                      </div>
                    </motion.div>
                ))}
              </div>
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
                            {category.name.replace(' Projects', '').replace(' Apps', '')}
                          </div>
                          <div className="text-xs opacity-75">
                            ({category.count} {category.count === 1 ? 'item' : 'items'})
                          </div>
                        </div>
                      </motion.button>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Projects Grid */}
            <motion.section layout className="mb-12 sm:mb-16 lg:mb-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                      <motion.div
                          key={project.id}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group relative"
                      >
                        <motion.div
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300 cursor-pointer h-full"
                            onClick={() => setSelectedProject(project.id)}
                        >
                          <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                            <ProjectImage project={project} className="w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3a]/80 to-transparent" />

                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                              {project.liveDemo && (
                                  <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      className="w-8 h-8 sm:w-10 sm:h-10 bg-[#00e5ff]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#00e5ff]/30 transition-colors cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.liveDemo, '_blank');
                                      }}
                                  >
                                    <ExternalLink className="text-[#00e5ff] w-4 h-4 sm:w-5 sm:h-5" />
                                  </motion.button>
                              )}
                              <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#c77dff]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#c77dff]/30 transition-colors cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.github, '_blank');
                                  }}
                              >
                                <Github className="text-[#c77dff] w-4 h-4 sm:w-5 sm:h-5" />
                              </motion.button>
                            </div>
                          </div>

                          <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors font-space overflow-hidden">
                              <span className="line-clamp-2">{project.title}</span>
                            </h3>
                            <p className="text-white/70 text-sm mb-4 flex-grow overflow-hidden">
                              <span className="line-clamp-2">{project.description}</span>
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.slice(0, 3).map((tech) => (
                                  <span
                                      key={tech}
                                      className="px-2 sm:px-3 py-1 bg-[#00e5ff]/10 text-[#00e5ff] rounded-full text-xs font-medium"
                                  >
                              {tech}
                            </span>
                              ))}
                              {project.tech.length > 3 && (
                                  <span className="px-2 sm:px-3 py-1 bg-[#c77dff]/10 text-[#c77dff] rounded-full text-xs font-medium">
                              +{project.tech.length - 3} more
                            </span>
                              )}
                            </div>

                            <div className="flex justify-between items-center text-sm mt-auto">
                              <span className="text-white/50">Click to view details</span>
                              <span className="text-[#00e5ff] text-sm">→</span>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.section>

            {/* Project Modal */}
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
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-[#1a1a3a]/95 backdrop-blur-sm rounded-xl lg:rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[#00e5ff]/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                      {projects.find(p => p.id === selectedProject) && (
                          <div>
                            <div className="relative h-48 sm:h-60 lg:h-80 overflow-hidden">
                              <ProjectImage
                                  project={projects.find(p => p.id === selectedProject)!}
                                  className="w-full h-full"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3a] to-transparent" />

                              <button
                                  onClick={() => setSelectedProject(null)}
                                  className="absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
                              >
                                <X className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                              </button>
                            </div>

                            <div className="p-4 sm:p-6 lg:p-8">
                              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 font-space">
                                {projects.find(p => p.id === selectedProject)?.title}
                              </h3>
                              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-inter">
                                {projects.find(p => p.id === selectedProject)?.description}
                              </p>

                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                {Object.entries(projects.find(p => p.id === selectedProject)?.metrics || {}).map(([key, value]) => (
                                    <div key={key} className="text-center bg-[#2a2a4a]/50 rounded-xl p-3 sm:p-4">
                                      <div className="text-lg sm:text-xl lg:text-3xl font-bold text-[#00e5ff] mb-2 font-space">
                                        {value}
                                      </div>
                                      <div className="text-white/70 capitalize font-inter text-xs sm:text-sm">
                                        {key}
                                      </div>
                                    </div>
                                ))}
                              </div>

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                                <div>
                                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 font-space">
                                    Key Features
                                  </h4>
                                  <ul className="space-y-2">
                                    {projects.find(p => p.id === selectedProject)?.features.map((feature, index) => (
                                        <li key={index} className="flex items-start text-white/70 font-inter text-sm sm:text-base">
                                          <span className="text-[#00ffab] mr-3 text-sm sm:text-base mt-0.5 flex-shrink-0">✓</span>
                                          {feature}
                                        </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 font-space">
                                    Technology Stack
                                  </h4>
                                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    {projects.find(p => p.id === selectedProject)?.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 sm:px-4 sm:py-2 bg-[#00e5ff]/10 text-[#00e5ff] rounded-full font-medium text-xs sm:text-sm"
                                        >
                                  {tech}
                                </span>
                                    ))}
                                  </div>

                                  <div className="space-y-4">
                                    <div>
                                      <h5 className="text-base sm:text-lg font-bold text-white mb-2 font-space">
                                        Challenge
                                      </h5>
                                      <p className="text-white/70 font-inter text-sm sm:text-base">
                                        {projects.find(p => p.id === selectedProject)?.challenge}
                                      </p>
                                    </div>
                                    <div>
                                      <h5 className="text-base sm:text-lg font-bold text-white mb-2 font-space">
                                        Solution
                                      </h5>
                                      <p className="text-white/70 font-inter text-sm sm:text-base">
                                        {projects.find(p => p.id === selectedProject)?.solution}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-4">
                                {projects.find(p => p.id === selectedProject)?.liveDemo && (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.open(projects.find(p => p.id === selectedProject)?.liveDemo, '_blank')}
                                        className="flex-1 px-4 sm:px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#c77dff] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#00e5ff]/20 transition-all duration-300 cursor-pointer text-sm sm:text-base flex items-center justify-center min-h-[44px]"
                                    >
                                      <ExternalLink className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                      View Live Demo
                                    </motion.button>
                                )}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(projects.find(p => p.id === selectedProject)?.github, '_blank')}
                                    className="flex-1 px-4 sm:px-6 py-3 border-2 border-[#c77dff] text-[#c77dff] rounded-full font-medium hover:bg-[#c77dff]/10 transition-all duration-300 cursor-pointer text-sm sm:text-base flex items-center justify-center min-h-[44px]"
                                >
                                  <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                  View Source Code
                                </motion.button>
                              </div>
                            </div>
                          </div>
                      )}
                    </motion.div>
                  </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
  );
}