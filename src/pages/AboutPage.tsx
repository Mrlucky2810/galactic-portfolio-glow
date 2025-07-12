
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Briefcase, Code2 } from 'lucide-react';
import About from '../components/About';

const AboutPage = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Delhi, India",
      year: "2019 - 2023",
      grade: "CGPA: 8.5/10",
      achievements: ["Dean's List", "Best Project Award", "Coding Competition Winner"]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      location: "New Delhi, India", 
      year: "2017 - 2019",
      grade: "Percentage: 92%",
      achievements: ["Science Olympiad Gold Medal", "Mathematics Excellence Award"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      image: "/placeholder.svg"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2023", 
      image: "/placeholder.svg"
    },
    {
      name: "Oracle Certified Java Developer",
      issuer: "Oracle Corporation",
      year: "2022",
      image: "/placeholder.svg"
    }
  ];

  const [selectedCertificate, setSelectedCertificate] = React.useState<any>(null);

  return (
    <div className="min-h-screen pt-16">
      <About />
      
      {/* Academic Section */}
      <section className="py-20 bg-gradient-dark/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-space font-bold text-gradient mb-6">
              Academic Background
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-8 border border-neon-cyan/30 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-neon-cyan" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-neon-cyan text-lg font-semibold mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-white/70">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-neon-orange font-semibold mb-4">{edu.grade}</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <span key={idx} className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-sm rounded-full border border-neon-purple/50">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-space font-bold text-gradient mb-6">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-6 border border-neon-cyan/30 hover:border-neon-cyan/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-neon-cyan" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 text-center">{cert.name}</h3>
                <p className="text-neon-cyan text-center mb-2">{cert.issuer}</p>
                <p className="text-white/70 text-center">{cert.year}</p>
                
                <div className="text-center mt-4">
                  <span className="text-neon-orange text-sm">Click to view certificate</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-dark/90 rounded-xl p-6 max-w-2xl w-full border border-neon-cyan/50"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedCertificate.name}</h3>
              <div className="bg-white/10 rounded-lg p-8 mb-4">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.name}
                  className="w-full h-64 object-contain"
                />
              </div>
              <p className="text-neon-cyan mb-2">{selectedCertificate.issuer}</p>
              <p className="text-white/70 mb-6">Issued: {selectedCertificate.year}</p>
              
              <button
                onClick={() => setSelectedCertificate(null)}
                className="px-6 py-2 bg-neon-cyan text-black rounded-lg hover:bg-neon-cyan/80 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
