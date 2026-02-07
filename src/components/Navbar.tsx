import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Terminal, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Docs', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center space-x-2 text-xl font-bold tracking-tighter"
          whileHover={{ scale: 1.02 }}
        >
          <div className="bg-accent p-1.5 rounded-lg">
            <Terminal size={20} className="text-white" />
          </div>
          <span>HackHours</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <button className="bg-accent hover:bg-accent-hover px-5 py-2 rounded-full text-sm font-semibold transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Github size={24} className="text-gray-400" />
            <button className="bg-accent px-6 py-2 rounded-full text-sm font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;