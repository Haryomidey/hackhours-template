import React from 'react';
import { Terminal, Github, Twitter, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center space-x-2 text-lg font-bold">
            <div className="bg-accent p-1 rounded-lg">
              <Terminal size={16} className="text-white" />
            </div>
            <span>HackHours</span>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</a>
            {/* <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a> */}
            {/* <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Changelog</a> */}
            {/* <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Status</a> */}
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Globe size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
          <div>© {new Date().getFullYear()} HackHours. All rights reserved.</div>
          <div>Built with precision for the modern developer. MIT License.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;