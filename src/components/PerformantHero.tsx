
import React, { useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';

const PerformantHero = () => {
  const { ref, animateIn, staggerAnimation } = useGSAP();

  useEffect(() => {
    // Initial load animation
    animateIn(1.2, 0.5);
    
    // Stagger child elements
    setTimeout(() => {
      staggerAnimation('.hero-item', 0.2);
    }, 800);
  }, []);

  const stats = [
    { label: "Projects", value: "15+" },
    { label: "Technologies", value: "12+" },
    { label: "Deployments", value: "25+" },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-scroll-section
    >
      <div ref={ref} className="container mx-auto px-4 sm:px-6 z-20 relative">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="hero-item mb-6 sm:mb-8">
            <div 
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-cyan/50 shadow-lg shadow-neon-cyan/20"
              data-scroll
              data-scroll-speed="0.5"
            >
              <img 
                src="/placeholder.svg" 
                alt="Shriyan Jaiswal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="hero-item mb-4 sm:mb-6">
            <span className="text-neon-cyan font-mono text-sm sm:text-lg glow-text">
              {"<hello_world>"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-item text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-space font-bold mb-4 sm:mb-6">
            <span className="text-white">I'm </span>
            <span 
              className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent glow-text block sm:inline font-extrabold drop-shadow-lg"
              data-scroll
              data-scroll-speed="0.3"
            >
              Shriyan Jaiswal
            </span>
          </h1>

          {/* Dev Tag */}
          <div className="hero-item mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center">
              <span className="text-neon-lime font-mono text-lg sm:text-xl glow-text drop-shadow-lg">
                {"<"}
              </span>
              <span className="text-neon-orange font-mono text-lg sm:text-xl mx-2 glow-text drop-shadow-lg">
                Dev
              </span>
              <span className="text-neon-lime font-mono text-lg sm:text-xl glow-text drop-shadow-lg">
                {"/>"}
              </span>
            </div>
          </div>

          {/* Typing Animation Subtitle */}
          <div className="hero-item mb-6 sm:mb-8 flex justify-center">
            <div className="text-lg sm:text-xl md:text-2xl text-white/90 font-mono text-center max-w-2xl">
              <span className="typewriter-effect">
                Full-Stack • Mobile • Cloud Developer
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="hero-item flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-8 sm:mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center"
                data-scroll
                data-scroll-speed={`${0.2 + index * 0.1}`}
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="hero-item mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
              {["Java", "Spring Boot", "Flutter", "Firebase", "React", "Supabase", "Vercel", "TypeScript"].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 rounded-full text-neon-cyan font-mono"
                  data-scroll
                  data-scroll-speed={`${0.1 + index * 0.05}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-item flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg glow-effect transition-all duration-300 text-sm sm:text-base hover:scale-105">
              View My Projects
            </button>
            
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-105">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-item flex justify-center space-x-6 sm:space-x-8 mb-12 sm:mb-16">
            {[
              { icon: Github, href: 'https://github.com/shriyanjaiswal', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/shriyan-jaiswal', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:shriyan.jaiswal@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group hover:scale-110"
                data-scroll
                data-scroll-speed={`${0.2 + index * 0.1}`}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Closing Tag */}
          <div className="hero-item mb-12 sm:mb-16">
            <span className="text-neon-cyan font-mono text-sm sm:text-lg glow-text">
              {"</hello_world>"}
            </span>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            data-scroll
            data-scroll-speed="0.5"
          >
            <div className="flex flex-col items-center text-neon-cyan/70 hover:text-neon-cyan transition-colors cursor-pointer">
              <span className="text-xs sm:text-sm font-mono mb-2 hidden sm:block">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformantHero;
