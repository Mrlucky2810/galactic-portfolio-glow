import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Calendar, Coffee, Clock } from 'lucide-react';
import StarField from '@/components/StarField';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'shriyan.jaiswal@example.com',
      color: '#00e5ff'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '+91 92351 67661',
      color: '#c77dff'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Varanasi, India',
      color: '#ff3cac'
    },
    {
      icon: 'ri-time-line',
      title: 'Response Time',
      value: '< 12 hours',
      color: '#00ffab'
    }
  ];

  const services = [
    {
      title: 'Java Development',
      description: 'Robust enterprise applications using Java, Spring Boot, REST APIs, and security with JWT & Spring Security.',
      icon: 'ri-code-line',
      price: 'Starting at $30/hour'
    },
    {
      title: 'Flutter App Development',
      description: 'Cross-platform mobile apps for Android & Windows with Firebase integration, animations, and state management.',
      icon: 'ri-smartphone-line',
      price: 'Starting at $3,000'
    },
    {
      title: 'React Web Development',
      description: 'Responsive and dynamic web apps with React, Tailwind CSS, Supabase, Stripe, and real-time data handling.',
      icon: 'ri-reactjs-line',
      price: 'Starting at $2,500'
    },
    {
      title: 'Supabase & Firebase Integration',
      description: 'Real-time databases, user authentication, storage, and backend logic using Firebase and Supabase.',
      icon: 'ri-database-2-line',
      price: 'Starting at $1,500'
    },
    {
      title: 'API & Backend Development',
      description: 'Custom RESTful APIs and secure backend services using Node.js, Spring Boot, PostgreSQL, and Docker.',
      icon: 'ri-api-line',
      price: 'Starting at $2,000'
    },
    {
      title: 'UI/UX Design',
      description: 'Modern, user-focused UI/UX design for web & mobile using Figma and design systems.',
      icon: 'ri-pencil-ruler-line',
      price: 'Starting at $500'
    },
    {
      title: 'Project Maintenance & Support',
      description: 'Ongoing feature updates, bug fixes, server monitoring, and app performance optimization.',
      icon: 'ri-tools-line',
      price: '$500/month'
    }
  ];


  const socialLinks = [
    { name: 'GitHub', icon: 'ri-github-fill', url: 'https://github.com/shriyanjaiswal', color: '#333' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: 'https://linkedin.com/in/shriyanjaiswal', color: '#0077B5' },
    { name: 'Twitter', icon: 'ri-twitter-fill', url: 'https://twitter.com/shriyanjaiswal', color: '#1DA1F2' },
    { name: 'Instagram', icon: 'ri-instagram-fill', url: 'https://instagram.com/shriyanjaiswal', color: '#E4405F' },
    { name: 'Telegram', icon: 'ri-telegram-fill', url: 'https://t.me/shriyanjaiswal', color: '#0088CC' },
    { name: 'WhatsApp', icon: 'ri-whatsapp-fill', url: 'https://wa.me/919876543210', color: '#25D366' }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM IST' },
    { day: 'Sunday', hours: 'By appointment only' }
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Java backend projects take 2–6 weeks, Flutter apps 3–8 weeks, React/Supabase web apps 2–5 weeks, depending on the scope and complexity.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, I offer monthly maintenance plans for all projects — covering bug fixes, performance optimization, UI updates, and feature enhancements.'
    },
    {
      question: 'Can you integrate with existing systems?',
      answer: 'Definitely. I can work with existing codebases and integrate with third-party APIs, databases, and auth providers like Firebase, Supabase, and Stripe.'
    },
    {
      question: 'Do you work with teams or solo?',
      answer: 'Both! I can work independently or collaborate within a team using Git, project management tools, and your preferred development workflow.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'Java (Spring Boot, JDBC), Flutter, Firebase, React, Supabase, PostgreSQL, REST APIs, Docker, Stripe, and modern UI/UX tools like Figma.'
    },
    {
      question: 'Can I see live demos of your work?',
      answer: 'Yes! You can explore my live projects like the Travel Website, E-commerce System, Portfolio, and Chat App on my portfolio: https://shriyan.vercel.app'
    }
  ];


  return (
      <div className="">
        <StarField />

        <main className="relative z-10 pt-20 sm:pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 sm:mb-20"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-space-grotesk mb-6">
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#c77dff] to-[#ff3cac] bg-clip-text text-transparent">
                Let's Connect
              </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-white/70 font-inter max-w-4xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your next Java, Flutter, or React project.
              </p>
            </motion.section>

            {/* Contact Info */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 sm:mb-20"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                    <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="text-center p-4 sm:p-6 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                    >
                      <div className="mb-4">
                        <i className={`${info.icon} text-xl sm:text-2xl lg:text-3xl w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex items-center justify-center mx-auto`} style={{ color: info.color }}></i>
                      </div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 font-space-grotesk">
                        {info.title}
                      </h3>
                      <p className="text-white/70 font-inter text-xs sm:text-sm lg:text-base">
                        {info.value}
                      </p>
                    </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
              {/* Contact Form */}
              <motion.section
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                  Start Your Project
                </span>
                </h2>

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                        Full Name *
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#2a2a4a]/50 border border-[#00e5ff]/20 rounded-xl text-white placeholder-white/50 focus:border-[#00e5ff]/40 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                        Email Address *
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#2a2a4a]/50 border border-[#00e5ff]/20 rounded-xl text-white placeholder-white/50 focus:border-[#00e5ff]/40 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                          placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2 text-sm sm:text-base">
                        Company
                      </label>
                      <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#2a2a4a]/50 border border-[#00e5ff]/20 rounded-xl text-white placeholder-white/50 focus:border-[#00e5ff]/40 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="project" className="block text-white font-medium mb-2 text-sm sm:text-base">
                        Project Type
                      </label>
                      <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#2a2a4a]/50 border border-[#00e5ff]/20 rounded-xl text-white focus:border-[#00e5ff]/40 focus:outline-none transition-all duration-300 pr-8 text-sm sm:text-base"
                      >
                        <option value="">Select Project Type</option>
                        <option value="java-development">Java Development</option>
                        <option value="flutter-app">Flutter App</option>
                        <option value="react-website">React Website</option>
                        <option value="firebase-integration">Firebase Integration</option>
                        <option value="api-development">API Development</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Budget Range
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#2a2a4a]/50 border border-[#00e5ff]/20 rounded-xl text-white focus:border-[#00e5ff]/40 focus:outline-none transition-all duration-300 pr-8 text-sm sm:text-base"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-2k">Under $2,000</option>
                      <option value="2k-5k">$2,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-plus">$25,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Project Details *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        maxLength={500}
                        className="w-full px-4 py-3 bg-[#2a2a4a]/50 border border-[#00e5ff]/20 rounded-xl text-white placeholder-white/50 focus:border-[#00e5ff]/40 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project requirements, goals, and timeline..."
                    />
                    <div className="text-right text-sm text-white/50 mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>

                  <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00e5ff] to-[#c77dff] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#00e5ff]/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin mr-2 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"></i>
                          Sending Message...
                        </>
                    ) : (
                        <>
                          <i className="ri-send-plane-line mr-2 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"></i>
                          Send Message
                        </>
                    )}
                  </motion.button>
                </form>

                {submitted && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-[#00ffab]/10 border border-[#00ffab]/20 rounded-xl text-[#00ffab] font-medium text-center text-sm sm:text-base"
                    >
                      <i className="ri-check-line mr-2 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"></i>
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                )}
              </motion.section>
            </div>

            {/* FAQ Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 sm:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-center mb-12 sm:mb-16">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="p-4 sm:p-6 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-white mb-3 font-space-grotesk">
                        {faq.question}
                      </h3>
                      <p className="text-white/70 font-inter text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </main>

      </div>
  );
}
