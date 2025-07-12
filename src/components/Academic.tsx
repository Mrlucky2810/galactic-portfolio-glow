
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Academic = () => {
  const academicData = [
    {
      year: '2019-2023',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      location: 'Delhi, India',
      grade: 'CGPA: 8.5/10',
      achievements: ['Dean\'s List', 'Best Project Award', 'Coding Competition Winner']
    },
    {
      year: '2017-2019',
      title: 'Higher Secondary Education',
      institution: 'Delhi Public School',
      location: 'New Delhi, India',
      grade: 'Percentage: 92%',
      achievements: ['Science Olympiad Gold Medal', 'Mathematics Excellence Award']
    }
  ];

  return (
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
          {academicData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-8 border border-neon-cyan/30 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-neon-cyan" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{item.title}</h3>
                    <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-sm rounded-full border border-neon-purple/50 w-fit">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-neon-cyan font-semibold mb-2">{item.institution}</p>
                  
                  <div className="flex items-center gap-2 mb-2 text-white/70 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-neon-orange font-semibold mb-4 text-sm">{item.grade}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/30">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
