// src/pages/AboutPage.tsx
import {motion} from 'framer-motion';
import StarField from '@/components/StarField';

export default function AboutPage() {
    const milestones = [
        {
            year: '2021',
            title: 'The Spark',
            description: 'Discovered the magic of coding through Java and C++, sparking a deep passion for building meaningful software.'
        },
        {
            year: '2022',
            title: 'The Foundation',
            description: 'Started BCA at Microtek College and built a solid base in DSA, OOP, DBMS, and Operating Systems. Created a Bank Management System using Java Swing and JDBC.'
        },
        {
            year: '2023',
            title: 'The Expansion',
            description: 'Explored JavaFX and developed desktop games like Tic Tac Toe and Brick Breaker. Entered the world of mobile development with Flutter, focusing on animations and clean UI.'
        },
        {
            year: '2024',
            title: 'The Leap',
            description: 'Built full-stack apps with Flutter and Firebase, explored data science with Python, participated in the Smart India Hackathon, and received the College Excellence Award.'
        },
        {
            year: '2025',
            title: 'The Rise',
            description: 'Interned at PW Skills, HCL, and KryptoAd. Worked on real-world platforms for crypto, travel, and gaming. Contributed to open source and grew a portfolio of 10+ live projects.'
        },
    ];

    const stats = [
        {number: '20+', label: 'Projects Completed', color: '#00e5ff'},
        {number: '75+', label: 'Happy Clients', color: '#c77dff'},
        {number: '4+', label: 'Years Experience', color: '#ff3cac'},
        {number: '12+', label: 'Technologies Mastered', color: '#00ffab'},
    ];

    const personalInfo = [
        {label: 'Location', value: 'Varanasi, India', icon: '📍'},
        {label: 'Email', value: 'shriyan.jaiswal0906@gmail.com', icon: '📧'},
        {label: 'Languages', value: 'English, Hindi', icon: '🌐'},
        {label: 'Availability', value: 'Available for projects', icon: '⏰'},
    ];

    const interests = [
        {name: 'Mobile Development', icon: '📱', description: 'Creating beautiful cross-platform apps'},
        {name: 'Backend Architecture', icon: '🖥️', description: 'Designing scalable Java applications'},
        {name: 'Web Development', icon: '🌐', description: 'Building modern React applications'},
        {name: 'Firebase & Supabase', icon: '🗄️', description: 'Working with modern backend services'},
        {name: 'Open Source', icon: '💻', description: 'Contributing to open source projects'},
        {name: 'Tech Innovation', icon: '💡', description: 'Exploring new technologies and trends'},
    ];

    const technologies = [
        {name: 'Java', level: 95, color: '#f89820'},
        {name: 'JavaFx', level: 90, color: '#6db33f'},
        {name: 'Flutter', level: 92, color: '#02569B'},
        {name: 'Firebase', level: 88, color: '#ffca28'},
        {name: 'React', level: 85, color: '#61DAFB'},
        {name: 'Supabase', level: 82, color: '#3ECF8E'},
    ];

    return (
        <div className="min-h-screen">
            <StarField/>

            <main className="relative z-10 pt-20 sm:pt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Hero Section */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-center mb-16 sm:mb-20"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-space mb-6">
              <span
                  className="bg-gradient-to-r from-[#00e5ff] via-[#c77dff] to-[#ff3cac] bg-clip-text text-transparent">
                About Me
              </span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-2xl text-white/70 font-inter max-w-4xl mx-auto">
                            Passionate developer crafting innovative solutions with Java, Flutter, and React
                        </p>
                    </motion.section>

                    {/* Personal Info Cards */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="mb-16 sm:mb-20"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {personalInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1, duration: 0.5}}
                                    whileHover={{y: -5, scale: 1.02}}
                                    className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300 text-center"
                                >
                                    <div className="mb-4">
                                        <div className="text-2xl sm:text-3xl w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mx-auto">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-space">
                                        {info.label}
                                    </h3>
                                    <p className="text-white/70 font-inter text-sm sm:text-base">
                                        {info.value}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Personal Story */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20"
                    >
                        <div className="order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space mb-6">
                <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                  My Story
                </span>
                            </h2>
                            <div
                                className="space-y-4 sm:space-y-6 text-white/70 font-inter leading-relaxed text-sm sm:text-base">
                                <p>
                                    I'm Shriyan Jaiswal, a full-stack developer, creative problem-solver, and digital
                                    storyteller—obsessed with turning bold ideas into scalable experiences.
                                </p>
                                <p>
                                    My journey started with Java and C++, building the foundation for how I approach
                                    architecture and logic. I quickly expanded into Flutter, drawn to its elegance in
                                    crafting fluid, cross-platform mobile apps with Firebase-powered interactivity. As I
                                    dove deeper into the web, React and Supabase became my tools of choice for designing
                                    responsive, high-performance platforms.
                                </p>
                                <p>
                                    Whether I'm prototyping a crypto trading dashboard, designing a spiritual tourism
                                    portal, or engineering a cinematic user interface, my goal remains the same: to
                                    merge code with emotion, usability with wow-factor.

                                </p>
                                <p>
                                    Beyond the syntax and frameworks, I'm passionate about innovation, branding, and
                                    pushing digital boundaries. I collaborate with startups and businesses to bring
                                    ideas to life.
                                </p>
                                <p>Code by code, pixel by pixel.</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div
                                className="w-full h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#00e5ff]/30 bg-gradient-to-br from-[#00e5ff]/20 to-[#c77dff]/20 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl sm:text-8xl mb-4">👨‍💻</div>
                                    <p className="text-white/70 text-sm sm:text-base">Developer Workspace</p>
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#00e5ff]/10 to-transparent rounded-xl sm:rounded-2xl"/>
                        </div>
                    </motion.section>

                    {/* Statistics */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="mb-16 sm:mb-20"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{opacity: 0, scale: 0.8}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1, duration: 0.5}}
                                    whileHover={{scale: 1.05, y: -5}}
                                    className="text-center p-4 sm:p-6 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                                >
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space mb-2"
                                         style={{color: stat.color}}>
                                        {stat.number}
                                    </div>
                                    <div className="text-white/70 font-inter text-xs sm:text-sm lg:text-base">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Technology Proficiency */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="mb-16 sm:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-center mb-12 sm:mb-16">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                Technology Proficiency
              </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{opacity: 0, x: -50}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1, duration: 0.6}}
                                    whileHover={{y: -5}}
                                    className="bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg sm:text-xl font-bold text-white font-space">
                                            {tech.name}
                                        </h3>
                                        <span className="text-base sm:text-lg font-bold" style={{color: tech.color}}>
                      {tech.level}%
                    </span>
                                    </div>
                                    <div className="w-full bg-[#2a2a4a] rounded-full h-2 sm:h-3">
                                        <motion.div
                                            className="h-2 sm:h-3 rounded-full"
                                            style={{backgroundColor: tech.color}}
                                            initial={{width: 0}}
                                            whileInView={{width: `${tech.level}%`}}
                                            viewport={{once: true}}
                                            transition={{duration: 1.5, delay: index * 0.2}}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Timeline */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="mb-16 sm:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-center mb-12 sm:mb-16">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                My Journey
              </span>
                        </h2>

                        <div className="relative max-w-4xl mx-auto">
                            <div
                                className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00e5ff] to-[#c77dff]"/>

                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.2, duration: 0.8}}
                                    className={`relative flex items-center mb-12 sm:mb-16 ${
                                        index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                    } flex-row`}
                                >
                                    <div
                                        className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'} pl-12 sm:pl-0`}>
                                        <motion.div
                                            whileHover={{scale: 1.02, y: -5}}
                                            className="bg-[#1a1a3a]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                                        >
                                            <div
                                                className="text-[#00e5ff] font-bold text-base sm:text-lg lg:text-xl mb-2 font-space">
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 font-space">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-white/70 font-inter text-sm sm:text-base">
                                                {milestone.description}
                                            </p>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        whileHover={{scale: 1.3}}
                                        className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#00e5ff] to-[#c77dff] rounded-full border-4 border-[#1a1a3a] shadow-lg shadow-[#00e5ff]/30"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Interests */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="mb-16 sm:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-center mb-12 sm:mb-16">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                Interests & Passions
              </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={interest.name}
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1, duration: 0.6}}
                                    whileHover={{y: -10, scale: 1.02}}
                                    className="text-center p-6 sm:p-8 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                                >
                                    <div className="mb-6">
                                        <div className="text-3xl sm:text-4xl w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mx-auto">
                                            {interest.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4 font-space">
                                        {interest.name}
                                    </h3>
                                    <p className="text-white/70 font-inter text-sm sm:text-base">
                                        {interest.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Values Section */}
                    <motion.section
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="mb-16 sm:mb-20"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-center mb-12 sm:mb-16">
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#c77dff] bg-clip-text text-transparent">
                Core Values
              </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    title: 'Innovation',
                                    description: 'Constantly exploring new technologies and creative solutions to solve complex problems',
                                    icon: '💡',
                                    color: '#00e5ff'
                                },
                                {
                                    title: 'Quality',
                                    description: 'Delivering exceptional code quality with attention to detail and best practices',
                                    icon: '⭐',
                                    color: '#c77dff'
                                },
                                {
                                    title: 'Collaboration',
                                    description: 'Working closely with clients and teams to achieve shared goals and success',
                                    icon: '🤝',
                                    color: '#ff3cac'
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.2, duration: 0.6}}
                                    whileHover={{y: -10, scale: 1.02}}
                                    className="text-center p-6 sm:p-8 bg-[#1a1a3a]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-all duration-300"
                                >
                                    <div className="mb-6">
                                        <div className="text-3xl sm:text-4xl w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mx-auto">
                                            {value.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 font-space">
                                        {value.title}
                                    </h3>
                                    <p className="text-white/70 font-inter text-sm sm:text-base">
                                        {value.description}
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