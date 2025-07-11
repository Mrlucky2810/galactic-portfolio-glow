
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

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
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@developer.com', href: 'mailto:hello@developer.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-400' },
    { icon: MessageSquare, label: 'Discord', href: '#', color: 'hover:text-indigo-400' },
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
            Let's Connect
          </h1>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        {/* 3D Robot Assistant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-20"
        >
          <div className="bg-gradient-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Meet My AI Assistant
            </h3>
            <div className="h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-xl flex items-center justify-center">
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-8">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Name
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
                    Email
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
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-gradient-dark/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-gradient-dark/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
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
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-white mb-8">Get in Touch</h2>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-neon-cyan/20 rounded-lg group-hover:bg-neon-cyan/30 transition-colors">
                    <item.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`p-4 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 text-white/70 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-medium">Available for new projects</span>
              </div>
              <p className="text-white/70 text-sm">
                I'm currently available for freelance work and interesting project collaborations. 
                Let's discuss your ideas!
              </p>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-gradient-dark/30 backdrop-blur-sm rounded-xl border border-white/10">
              <h4 className="text-white font-medium mb-2">Quick Response</h4>
              <p className="text-white/70 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
