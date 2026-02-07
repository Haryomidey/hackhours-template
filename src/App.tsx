
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import StatsPreview from './components/StatsPreview';
import Install from './components/Install';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30">
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="fixed inset-0 noise-bg pointer-events-none" />
      
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <Hero />
        <Features />
        <Demo />
        <HowItWorks />
        <StatsPreview />
        <Install />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
