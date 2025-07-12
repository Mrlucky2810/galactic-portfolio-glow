
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Enhanced3DBackground from '../components/Enhanced3DBackground';
import EnhancedFooter from '../components/EnhancedFooter';
import SmoothScroll from '../components/SmoothScroll';
import PerformantHero from '../components/PerformantHero';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PerformantHero />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <PerformantHero />;
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen relative">
        {/* Enhanced 3D Background */}
        <Enhanced3DBackground />
        
        {/* Navigation */}
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        {/* Main Content */}
        <main className="relative z-10">
          {renderPage()}
        </main>

        {/* Enhanced Footer */}
        <EnhancedFooter />
      </div>
    </SmoothScroll>
  );
};

export default Index;
