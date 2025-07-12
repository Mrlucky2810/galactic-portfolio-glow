
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      type: 'education',
      year: '2019-2023',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      location: 'Delhi, India',
      grade: 'CGPA: 8.5/10',
      achievements: ['Dean\'s List', 'Best Project Award', 'Coding Competition Winner']
    },
    {
      type: 'certification',
      year: '2023',
      title: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      location: 'Online',
      grade: 'Professional Level',
      achievements: ['Cloud Architecture', 'Scalable Systems']
    },
    {
      type: 'certification',
      year: '2023',
      title: 'Google Cloud Professional Developer',
      institution: 'Google Cloud',
      location: 'Online',
      grade: 'Professional Level',
      achievements: ['App Development', 'Cloud Services']
    },
    {
      type: 'education',
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
            Academic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink transform -translate-y-1/2 hidden md:block" />
          
          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple border-4 border-gray-900 z-10 hidden md:block" />
                
                {/* Card */}
                <div className={`bg-gradient-dark/50 backdrop-blur-sm rounded-xl p-6 border border-neon-cyan/30 hover:border-neon-cyan/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mt-12' : 'md:mb-12'
                }`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                      {item.type === 'education' ? (
                        <GraduationCap className="w-6 h-6 text-neon-cyan" />
                      ) : (
                        <Award className="w-6 h-6 text-neon-orange" />
                      )}
                    </div>
                  </div>

                  {/* Year */}
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-sm rounded-full border border-neon-purple/50">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 text-center">{item.title}</h3>
                  <p className="text-neon-cyan text-center mb-2 font-semibold">{item.institution}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-2 text-white/70 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-neon-orange text-center font-semibold mb-3 text-sm">{item.grade}</p>
                  
                  {/* Achievements */}
                  <div className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {item.achievements.map((achievement, idx) => (
                        <span key={idx} className="px-2 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/30">
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
      </div>
    </section>
  );
};

export default Timeline;
