
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Heart, Award, Users, Coffee, Clock } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '25+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
  ];

  const journey = [
    {
      year: '2019',
      title: 'Started Programming',
      description: 'Began my journey with HTML, CSS, and JavaScript',
    },
    {
      year: '2020',
      title: 'First Freelance Project',
      description: 'Built my first commercial website for a local business',
    },
    {
      year: '2021',
      title: 'Full-Stack Development',
      description: 'Mastered React, Node.js, and database technologies',
    },
    {
      year: '2022',
      title: 'Advanced Technologies',
      description: 'Learned Three.js, AI integration, and cloud platforms',
    },
    {
      year: '2023',
      title: 'Leading Projects',
      description: 'Started leading development teams and mentoring juniors',
    },
  ];

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
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves creating digital experiences 
            that make a difference. Here's my story and what drives me every day.
          </p>
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Interactive 3D Avatar
            </h3>
            <div className="h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
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
          className="grid md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-neon-cyan mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-semibold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-white/80">
              <p>
                My journey into development started with curiosity and a broken website. 
                I wanted to understand how things worked, and that curiosity led me down 
                the rabbit hole of programming.
              </p>
              <p>
                What began as a hobby quickly became a passion. I love the problem-solving 
                aspect of development, the creative process of turning ideas into reality, 
                and the constant learning that this field demands.
              </p>
              <p>
                Today, I specialize in creating immersive web experiences using cutting-edge 
                technologies like React, Three.js, and AI integration. Every project is an 
                opportunity to push boundaries and create something extraordinary.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full p-8 backdrop-blur-sm border border-neon-cyan/30 glow-effect">
              <div className="w-full h-full bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-6xl text-gradient font-space font-bold"
                >
                  &lt;/&gt;
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-white text-center mb-12">My Journey</h3>
          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1 p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-neon-cyan font-mono text-sm mb-2">{item.year}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
                <div className="w-4 h-4 bg-neon-cyan rounded-full flex-shrink-0 glow-effect" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
