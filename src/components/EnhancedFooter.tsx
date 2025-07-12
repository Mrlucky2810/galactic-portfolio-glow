
import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart, ExternalLink, Code, Zap, Globe } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

const EnhancedFooter = () => {
  const { ref, animateOnScroll, staggerAnimation } = useGSAP();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    animateOnScroll();
    setTimeout(() => {
      staggerAnimation('.footer-item', 0.1);
    }, 300);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shriyanjaiswal', label: 'GitHub', color: 'hover:text-neon-cyan' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shriyan-jaiswal', label: 'LinkedIn', color: 'hover:text-neon-blue' },
    { icon: Mail, href: 'mailto:shriyan.jaiswal@gmail.com', label: 'Email', color: 'hover:text-neon-pink' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about', icon: Code },
    { name: 'Skills', href: '#skills', icon: Zap },
    { name: 'Projects', href: '#projects', icon: Globe },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const services = [
    'Full-Stack Development',
    'Mobile App Development', 
    'Cloud Solutions',
    'Web Design',
    'API Development',
    'Database Design',
  ];

  return (
    <footer 
      className="relative bg-gradient-to-t from-gray-900/98 via-gray-800/95 to-gray-900/90 border-t border-neon-cyan/20 backdrop-blur-md"
      data-scroll-section
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgb(0 229 255 / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgb(199 125 255 / 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="footer-item lg:col-span-2 md:col-span-2">
            <div 
              className="text-3xl font-space font-bold mb-4"
              data-scroll
              data-scroll-speed="0.2"
            >
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                &lt;Shriyan Jaiswal/&gt;
              </span>
            </div>
            
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Full-Stack Developer specializing in Java enterprise solutions, Flutter mobile apps, 
              and modern React ecosystems. Creating scalable, user-centric applications with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="footer-item flex items-center gap-3 text-white/70 hover:text-neon-cyan transition-colors duration-300">
                <MapPin className="w-4 h-4 text-neon-cyan" />
                <span>New Delhi, India</span>
              </div>
              <div className="footer-item flex items-center gap-3 text-white/70 hover:text-neon-cyan transition-colors duration-300">
                <Phone className="w-4 h-4 text-neon-cyan" />
                <span>+91 9876543210</span>
              </div>
              <div className="footer-item flex items-center gap-3 text-white/70 hover:text-neon-cyan transition-colors duration-300">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span>shriyan.jaiswal@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer-item p-3 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group hover:scale-110 ${social.color}`}
                  data-scroll
                  data-scroll-speed={`${0.1 + index * 0.05}`}
                >
                  <social.icon className="w-5 h-5 text-neon-cyan group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-neon-cyan" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name} className="footer-item">
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-neon-cyan transition-all duration-300 flex items-center gap-3 group hover:translate-x-1"
                    data-scroll
                    data-scroll-speed={`${0.1 + index * 0.05}`}
                  >
                    <link.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-item">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-neon-purple" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service} className="footer-item">
                  <div 
                    className="text-white/70 hover:text-neon-purple transition-colors duration-300 cursor-pointer hover:translate-x-1 transform transition-transform"
                    data-scroll
                    data-scroll-speed={`${0.1 + index * 0.05}`}
                  >
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neon-cyan/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="footer-item text-white/60 text-sm">
              © {currentYear} Shriyan Jaiswal. All rights reserved.
            </div>
            
            <div className="footer-item flex items-center gap-1 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React, GSAP & Three.js</span>
            </div>
            
            <div className="footer-item flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-white/60 hover:text-neon-cyan transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-white/60 hover:text-neon-cyan transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-20">
        <div className="w-1 h-1 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
