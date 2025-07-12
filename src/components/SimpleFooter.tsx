
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shriyanjaiswal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shriyan-jaiswal', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shriyan.jaiswal@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900/95 border-t border-neon-cyan/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-space font-bold mb-3">
              <span className="text-gradient">&lt;Shriyan Jaiswal/&gt;</span>
            </div>
            <p className="text-white/60 text-sm">
              Full-Stack Developer creating amazing digital experiences
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-neon-cyan" />
              <span>New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Phone className="w-4 h-4 text-neon-cyan" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Mail className="w-4 h-4 text-neon-cyan" />
              <span>shriyan.jaiswal@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4 text-neon-cyan group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neon-cyan/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              © {currentYear} Shriyan Jaiswal. All rights reserved.
            </div>
            
            <div className="flex items-center gap-1 text-white/50 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
