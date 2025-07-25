import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Trophy, Users, Clock, CheckCheck, ExternalLink, Github, Eye, X, Star, ArrowRight } from 'lucide-react';
import Hero from "@/components/Hero.tsx";

const EnhancedHomePage = () => {
    const [isClient, setIsClient] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const expertise = [
        {
            title: 'Java Development',
            description: 'Building robust enterprise applications with Spring Boot and microservices architecture',
            icon: Code,
            skills: ['Spring Boot', 'JavaFX', 'Hibernate', 'Maven'],
            color: '#f89820',
            gradient: 'from-orange-400 to-orange-600'
        },
        {
            title: 'Flutter Development',
            description: 'Creating beautiful cross-platform mobile apps with Firebase integration',
            icon: Smartphone,
            skills: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Bloc Pattern'],
            color: '#02569B',
            gradient: 'from-blue-400 to-blue-600'
        },
        {
            title: 'React Development',
            description: 'Crafting modern web applications with React, Supabase, and Vercel deployment',
            icon: Globe,
            skills: ['React', 'Next.js', 'Supabase', 'Vercel', 'TypeScript'],
            color: '#61DAFB',
            gradient: 'from-cyan-400 to-cyan-600'
        },
        {
            title: 'Full Stack Solutions',
            description: 'End-to-end development from database design to deployment',
            icon: Database,
            skills: ['PostgreSQL', 'REST APIs', 'Docker'],
            color: '#00ffab',
            gradient: 'from-green-400 to-green-600'
        }
    ];

    const achievements = [
        { number: '20+', label: 'Projects Completed', icon: Trophy },
        { number: '75+', label: 'Happy Clients', icon: Users },
        { number: '2+', label: 'Years Experience', icon: Clock },
        { number: '98%', label: 'Success Rate', icon: CheckCheck }
    ];

    const testimonials = [
        {
            name: 'Utkarsh Sinha',
            role: 'Chief Executive Officer, KriptoAD',
            content: "Working with Shriyan was a game-changer for our online websites. Not only did they deliver a sleek, user-friendly website, but they also built a mobile app that boosted our business.",
            avatar: '/api/placeholder/100/100',
            rating: 5
        },
        {
            name: 'Praveen Yadav',
            role: 'Lead Developer, KriptoAD',
            content: 'Working with Shriyan to build our software development website was a seamless experience. The site is fast, responsive, and easy to update. Highly recommend their services for any tech-focused business!',
            avatar: '/api/placeholder/100/100',
            rating: 5
        },
        {
            name: 'Lucky Singh',
            role: 'Design Director, KriptoAD',
            content: 'I needed a portfolio that truly represented my brand and creativity, and Shriyan nailed it. The design was clean, modern, and easy to navigate. I\'ve received countless compliments from clients since the launch!',
            avatar: '/api/placeholder/100/100',
            rating: 5
        }
    ];

    const recentProjects = [
        {
            id: 1,
            title: 'Utsav Travels',
            description: 'The project focuses on providing seamless booking experiences for local and long-distance travel.',
            image: '/api/placeholder/600/400',
            tech: ['React.js', 'Supabase'],
            category: 'Web Development',
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-cyan to-neon-blue'
        },
        {
            id: 2,
            title: 'Recipe Master',
            description: 'Recipe application that helps you discover, save, and cook amazing recipes from around the world.',
            image: '/api/placeholder/600/400',
            tech: ['Flutter', 'Firebase Firestore', 'TheMealDB API'],
            category: 'Mobile Development',
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-purple to-neon-pink'
        },
        {
            id: 3,
            title: 'Stake.io',
            description: 'Secure casino and sports betting platform',
            image: '/api/placeholder/600/400',
            tech: ['Flutter', 'Firebase Firestore', 'Coin Payment API'],
            category: 'Web Development',
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-pink to-neon-lime'
        }
    ];

    // Pre-defined positions for floating particles
    const particlePositions = [
        {left: 20, top: 30}, {left: 80, top: 60}, {left: 40, top: 10},
        {left: 70, top: 80}, {left: 10, top: 50}, {left: 90, top: 20},
        {left: 30, top: 70}, {left: 60, top: 40}, {left: 15, top: 85},
        {left: 85, top: 15}, {left: 45, top: 65}, {left: 75, top: 35}
    ];

    return (
        <div className="min-h-screen relative">
            {/* Enhanced Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary Gradient Animations */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                />

                {/* Moving Gradient Orbs */}
                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 300, -200, 0],
                        y: [0, -200, 300, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-neon-pink/10 to-neon-lime/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -250, 150, 0],
                        y: [0, 150, -250, 0],
                        scale: [0.8, 1.3, 1, 0.8],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating Gradient Particles */}
                {isClient && (
                    <div className="absolute inset-0">
                        {particlePositions.map((position, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-4 h-4 bg-gradient-to-r from-neon-cyan/30 to-neon-purple/30 rounded-full blur-sm"
                                style={{
                                    left: `${position.left}%`,
                                    top: `${position.top}%`,
                                }}
                                animate={{
                                    y: [0, -50, 0],
                                    x: [0, (i % 2 === 0 ? 50 : -50), 0],
                                    opacity: [0.3, 0.8, 0.3],
                                    scale: [0.5, 1.5, 0.5],
                                }}
                                transition={{
                                    duration: 5 + (i % 3),
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            <section className="relative z-10 py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="text-center mb-16"
                    >
                        <Hero />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.2, duration: 0.8}}
                                whileHover={{y: -10, scale: 1.02}}
                                className="bg-gradient-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
                            >
                                <div className="text-center">
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center`}>
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 font-space">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 mb-6">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm font-medium"
                                            >
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                            <span className="text-gradient">My Expertise</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Specializing in Java, Flutter, and React development with modern technologies and best practices
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.2, duration: 0.8}}
                                whileHover={{y: -10, scale: 1.02}}
                                className="bg-gradient-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
                            >
                                <div className="text-center">
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center`}>
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 font-space">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 mb-6">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm font-medium"
                                            >
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                            <span className="text-gradient">Achievements</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.label}
                                initial={{opacity: 0, scale: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.2, duration: 0.8}}
                                whileHover={{scale: 1.05}}
                                className="text-center bg-gradient-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <achievement.icon className="w-8 h-8 text-neon-cyan mx-auto" />
                                </div>
                                <div className="text-4xl font-bold text-neon-cyan mb-2 font-space">
                                    {achievement.number}
                                </div>
                                <div className="text-white/70">
                                    {achievement.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Projects */}
            <section className="relative z-10 py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                            <span className="text-gradient">Recent Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Showcasing my latest work in Java, Flutter, and React development
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.2, duration: 0.8}}
                                whileHover={{y: -10, scale: 1.02}}
                                className="bg-gradient-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                                    {/* Hover Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center space-x-4"
                                    >
                                        <button
                                            onClick={() => setSelectedProject(project.id)}
                                            className="p-3 bg-neon-cyan text-black rounded-full hover:scale-110 transition-transform"
                                        >
                                            <Eye className="w-5 h-5" />
                                        </button>
                                        <a
                                            href={project.liveUrl}
                                            className="p-3 bg-neon-purple text-white rounded-full hover:scale-110 transition-transform"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="p-3 bg-neon-pink text-white rounded-full hover:scale-110 transition-transform"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </motion.div>

                                    <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 font-space">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm font-medium"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative z-10 py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                            <span className="text-gradient">Client Testimonials</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.2, duration: 0.8}}
                                whileHover={{y: -10, scale: 1.02}}
                                className="bg-gradient-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white font-space">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-neon-cyan text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
                                    ))}
                                </div>

                                <p className="text-white/70">
                                    "{testimonial.content}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative z-10 py-20 px-6">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="bg-gradient-dark/50 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                            <span className="text-gradient">Ready to Start Your Project?</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                            Let's collaborate and bring your ideas to life with cutting-edge Java, Flutter, and React solutions.
                        </p>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300"
                        >
                            <ArrowRight className="mr-2 w-5 h-5" />
                            Let's Work Together
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EnhancedHomePage;