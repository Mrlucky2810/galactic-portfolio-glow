"use client";

import { motion } from "framer-motion";
import {Link, useLocation} from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  // Get current active path
  const getCurrentActiveKey = () => {
    const pathname = location.pathname;
    return pathname === '/' ? '/' : pathname;
  };
  getCurrentActiveKey();
// Handle navigation with smooth scroll to top


  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Java Development", href: "/contact" },
        { name: "Flutter App Development", href: "/contact" },
        { name: "React Web Development", href: "/contact" },
        { name: "Firebase & Supabase Integration", href: "/contact" },
        { name: "UI/UX Design", href: "/contact" },
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "Java & Spring Boot", href: "/skills" },
        { name: "Flutter & Dart", href: "/skills" },
        { name: "React & Tailwind CSS", href: "/skills" },
        { name: "Firebase & Firestore", href: "/skills" },
        { name: "Supabase & PostgreSQL", href: "/skills" },
      ]
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "ri-github-fill", href: "https://github.com/shriyanjaiswal" },
    { name: "LinkedIn", icon: "ri-linkedin-fill", href: "https://linkedin.com/in/shriyanjaiswal" },
    { name: "Twitter", icon: "ri-twitter-fill", href: "https://twitter.com/shriyanjaiswal" },
    { name: "Instagram", icon: "ri-instagram-fill", href: "https://instagram.com/shriyanjaiswal" },
  ];

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=""
      >

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-6"
              >
                <Link to="/">
                  <h3
                      onClick={handleNavClick}
                      className="text-xl sm:text-2xl font-bold font-space-grotesk mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span className="text-[#00e5ff]">{"<"}</span>
                    <span className="text-white">Shriyan</span>
                    <span className="text-[#c77dff]">Jaiswal</span>
                    <span className="text-[#00e5ff]">{"/>"}</span>
                  </h3>
                </Link>
                <p className="text-white/70 mb-6 font-inter text-sm sm:text-base">
                  Full-stack developer specializing in Java, Flutter, and React.
                  Building innovative solutions for modern businesses.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                      <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#00e5ff]/20 transition-all duration-300 cursor-pointer"
                      >
                        <i className={`${social.icon} text-[#00e5ff] w-5 h-5 flex items-center justify-center`}></i>
                      </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
                <div key={section.title} className="lg:col-span-1">
                  <h4 className="text-lg font-bold text-white mb-4 sm:mb-6 font-space-grotesk">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link, linkIndex) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (linkIndex * 0.05) }}
                        >
                          <Link
                              to={link.href}
                              onClick={handleNavClick}
                              className="text-white/70 hover:text-[#00e5ff] transition-colors duration-300 cursor-pointer font-inter text-sm sm:text-base"
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-6 sm:pt-8 border-t border-[#00e5ff]/20">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-white/50 font-inter mb-4 sm:mb-0 text-sm sm:text-base"
              >
                © {new Date().getFullYear()} Shriyan Jaiswal. All rights reserved.
              </motion.p>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 sm:space-x-6"
              >
                <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="text-white/70 hover:text-[#00e5ff] transition-colors duration-300 cursor-pointer font-inter text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
                <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="text-white/70 hover:text-[#00e5ff] transition-colors duration-300 cursor-pointer font-inter text-sm sm:text-base"
                >
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Tech Stack Banner */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#00e5ff]/20 text-center"
          >
            <h5 className="text-white font-bold mb-3 sm:mb-4 font-space-grotesk text-sm sm:text-base">
              Built with cutting-edge technologies
            </h5>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "Java",
                "Spring Boot",
                "Flutter",
                "Firebase",
                "React",
                "Supabase",
                "PostgreSQL",
                "Docker",
                "Vercel"
              ].map((tech, index) => (
                  <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 sm:px-3 py-1 bg-[#00e5ff]/10 text-[#00e5ff] rounded-full font-medium text-xs sm:text-sm"
                  >
                    {tech}
                  </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
  );
}