import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, MessageSquare, Menu, X } from 'lucide-react';
interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    icon: Home,
    label: 'Home',
    key: 'home'
  }, {
    icon: User,
    label: 'About',
    key: 'about'
  }, {
    icon: Code,
    label: 'Skills',
    key: 'skills'
  }, {
    icon: Briefcase,
    label: 'Projects',
    key: 'projects'
  }, {
    icon: MessageSquare,
    label: 'Contact',
    key: 'contact'
  }];
  const handleNavClick = (key: string) => {
    setCurrentPage(key);
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-dark/90 backdrop-blur-md shadow-lg shadow-neon-cyan/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button onClick={() => handleNavClick('home')} whileHover={{
          scale: 1.05
        }} className="text-2xl font-space font-bold text-gradient glow-text cursor-pointer text-[#1c1100]/0">
            &lt;Dev/&gt;
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => <motion.button key={item.key} onClick={() => handleNavClick(item.key)} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.1
          }} className={`flex items-center space-x-2 transition-colors duration-300 group relative ${currentPage === item.key ? 'text-neon-cyan' : 'text-white/80 hover:text-neon-cyan'}`}>
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-neon-cyan transition-all duration-300 ${currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </motion.button>)}
          </div>

          {/* Mobile menu button */}
          <motion.button whileTap={{
          scale: 0.95
        }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white hover:text-neon-cyan transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        height: isMobileMenuOpen ? 'auto' : 0
      }} className="md:hidden overflow-hidden bg-gradient-dark/95 backdrop-blur-md rounded-lg mt-2 border border-neon-cyan/30">
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => <motion.button key={item.key} onClick={() => handleNavClick(item.key)} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }} className={`flex items-center space-x-3 px-6 py-2 w-full text-left transition-all duration-300 ${currentPage === item.key ? 'text-neon-cyan bg-neon-cyan/10' : 'text-white/80 hover:text-neon-cyan hover:bg-neon-cyan/10'}`}>
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>)}
          </div>
        </motion.div>
      </div>
    </motion.nav>;
};
export default Navigation;