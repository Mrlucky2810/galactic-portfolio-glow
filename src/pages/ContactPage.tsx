import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Calendar, Coffee, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can integrate with your preferred email service here
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'shriyan.jaiswal@gmail.com', href: 'mailto:shriyan.jaiswal@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9876543210', href: 'tel:+919876543210' },
    { icon: MapPin, label: 'Location', value: 'Mumbai, India', href: '#' },
    { icon: Calendar, label: 'Timezone', value: 'IST (UTC+5:30)', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/shriyanjaiswal', color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/shriyan-jaiswal', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/shriyanjaiswal', color: 'hover:text-sky-400' },
    { icon: MessageSquare, label: 'Discord', href: '#', color: 'hover:text-indigo-400' },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Weekend', hours: 'Project discussions only' },
  ];

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
            Let's Connect
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-neon mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        {/* 3D Robot Assistant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 sm:mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-neon-cyan/30">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
              Meet My AI Assistant
            </h3>
            <div className="h-64 sm:h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
              <iframe
                src="https://my.spline.design/untitled-4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gradient-dark/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gradient-dark/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Subject *
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-gradient-dark/50 border border-white/20 rounded-lg text-white focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="web-app">Web Application</option>
                  <option value="enterprise">Enterprise Solution</option>
                  <option value="consultation">Consultation</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-gradient-dark/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and budget..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg glow-effect transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8">Get in Touch</h2>
            
            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-neon-cyan/20 rounded-lg group-hover:bg-neon-cyan/30 transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/60 text-sm">{item.label}</p>
                    <p className="text-white font-medium break-all">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-neon-cyan" />
                Working Hours
              </h3>
              <div className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/70 text-sm sm:text-base">{schedule.day}</span>
                    <span className="text-neon-cyan text-sm sm:text-base font-mono">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Connect with Me</h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 text-white/70 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-medium">Available for new projects</span>
              </div>
              <p className="text-white/70 text-sm sm:text-base">
                I'm currently available for freelance work and exciting project collaborations. 
                Specializing in Java, Flutter, and React development with quick turnaround times.
              </p>
            </div>

            {/* Coffee Chat */}
            <div className="p-4 sm:p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />
                <h4 className="text-white font-medium">Let's Grab a Virtual Coffee!</h4>
              </div>
              <p className="text-white/70 text-sm sm:text-base">
                I typically respond to messages within 24 hours. For urgent inquiries or 
                project discussions, feel free to schedule a quick call. I love discussing 
                new technologies and innovative project ideas!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
