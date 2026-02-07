import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, BarChart, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Terminal,
      title: 'Start tracker',
      description: 'Initialize the CLI and let the background agent handle the rest.',
    },
    {
      icon: Code,
      title: 'Code normally',
      description: 'We automatically detect your active project, file, and language.',
    },
    {
      icon: BarChart,
      title: 'View insights',
      description: 'Run commands to see your productivity trends and language split.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center relative"
            >
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-8 relative z-10 border border-accent/20">
                <step.icon size={40} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center shadow-lg">
                  {idx + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-400 max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;