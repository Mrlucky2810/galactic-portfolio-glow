
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, ExternalLink, X } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificateData = [
    {
      year: '2023',
      title: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      location: 'Online',
      grade: 'Professional Level',
      achievements: ['Cloud Architecture', 'Scalable Systems'],
      certificateUrl: '#'
    },
    {
      year: '2023',
      title: 'Google Cloud Professional Developer',
      institution: 'Google Cloud',
      location: 'Online',
      grade: 'Professional Level',
      achievements: ['App Development', 'Cloud Services'],
      certificateUrl: '#'
    }
  ];

  return (
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

        <div className="max-w-4xl mx-auto space-y-8">
          {certificateData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-8 border border-neon-orange/30 hover:border-neon-orange/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCertificate(item)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-orange/20 to-neon-pink/20 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-neon-orange" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{item.title}</h3>
                    <span className="px-3 py-1 bg-neon-orange/20 text-neon-orange text-sm rounded-full border border-neon-orange/50 w-fit">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-neon-orange font-semibold mb-2">{item.institution}</p>
                  
                  <div className="flex items-center gap-2 mb-2 text-white/70 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-neon-cyan font-semibold mb-4 text-sm">{item.grade}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-3 py-1 bg-neon-orange/10 text-neon-orange text-xs rounded-full border border-neon-orange/30">
                        {achievement}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-neon-cyan text-sm hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to view certificate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gradient-dark/90 backdrop-blur-sm rounded-xl p-8 border border-neon-orange/50 max-w-2xl w-full relative"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="text-center">
                <Award className="w-16 h-16 text-neon-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
                <p className="text-neon-orange mb-4">{selectedCertificate.institution}</p>
                <div className="bg-white/5 rounded-lg p-8 mb-6">
                  <p className="text-white/70 text-lg">Certificate Preview</p>
                  <p className="text-sm text-white/50 mt-2">Certificate image would be displayed here</p>
                </div>
                <a
                  href={selectedCertificate.certificateUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-orange to-neon-pink rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full Certificate
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
