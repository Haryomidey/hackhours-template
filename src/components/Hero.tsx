import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, ShieldCheck, Cpu, Globe } from 'lucide-react';
import TerminalBlock from './TerminalBlock';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <span className="px-4 py-1.5 rounded-full glass-card border-indigo-500/20 text-indigo-300 text-xs font-semibold flex items-center gap-2">
                <ShieldCheck size={14} /> Offline-first
              </span>
              <span className="px-4 py-1.5 rounded-full glass-card border-white/10 text-gray-400 text-xs font-semibold flex items-center gap-2">
                <Globe size={14} /> Open Source
              </span>
              <span className="px-4 py-1.5 rounded-full glass-card border-white/10 text-gray-400 text-xs font-semibold flex items-center gap-2">
                <Cpu size={14} /> Cross-platform
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent leading-[1.1]">
              Know where your <br />
              <span className="text-accent">coding hours</span> go.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 mx-auto lg:mx-0 leading-relaxed">
              HackHours tracks your development time locally. Private. Offline. <br className="hidden md:block" />
              Zero telemetry. Powered by ChronoDB.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-accent hover:bg-accent-hover px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all">
                Install with npm
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto glass-card hover:bg-white/5 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <Github size={18} />
                Star on GitHub
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-gray-500 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                No account required
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                100% Data Ownership
              </div>
            </div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-2xl"
          >
            <TerminalBlock 
              command="hackhours today"
              output={`⏱ 6h 42m coding\n📁 28 files modified\n\nTypeScript   █████████████ 64%\nRust         ██████ 28%\nMarkdown     █ 8%`}
            />
            
            {/* Float Decorators */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;