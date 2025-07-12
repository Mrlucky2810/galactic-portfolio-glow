
import React from 'react';
import About from '../components/About';
import Academic from '../components/Academic';
import Certificates from '../components/Certificates';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <About />
      <Academic />
      <Certificates />
    </div>
  );
};

export default AboutPage;
