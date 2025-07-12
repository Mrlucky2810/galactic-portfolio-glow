
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shriyanjaiswal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shriyan-jaiswal', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shriyan.jaiswal@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
    <footer className="bg-gray-900/95 border-t border-neon-cyan/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 md:col-span-2">
            <div className="text-3xl font-space font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                &lt;Shriyan Jaiswal/&gt;
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Full-Stack Developer specializing in Java enterprise solutions, Flutter mobile apps, 
              and modern React ecosystems. Creating scalable, user-centric applications.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-neon-cyan" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-neon-cyan" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span>shriyan.jaiswal@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-neon-cyan group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-neon-cyan transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <div className="text-white/70 hover:text-neon-cyan transition-colors duration-300">
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
            <div className="text-white/60 text-sm">
              © {currentYear} Shriyan Jaiswal. All rights reserved.
            </div>
            
            <div className="flex items-center gap-1 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-white/60 hover:text-neon-cyan transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-white/60 hover:text-neon-cyan transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
