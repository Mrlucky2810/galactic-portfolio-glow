
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AnimatedBackground from '../components/AnimatedBackground';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Beautiful Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main Content */}
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
};

export default Index;
