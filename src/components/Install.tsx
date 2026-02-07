import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';

const Install: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm install -g hackhours";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl p-12 border-accent/20 overflow-hidden relative">
          <h2 className="text-4xl font-bold mb-6">Ready to track?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Join thousands of developers who track their time with total privacy. 
            Free, open-source, and local-first.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/10 font-mono text-sm sm:text-base group">
            <span className="text-accent flex items-center gap-2">
              <Terminal size={18} />
              $
            </span>
            <span className="text-gray-200">{command}</span>
            <button 
              onClick={handleCopy}
              className="mt-4 sm:mt-0 sm:ml-auto p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-gray-500 font-medium">
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               Supports VS Code, JetBrains, Vim
             </div>
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               Windows, Mac, Linux
             </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
        
        {/* Testimonials */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              quote: "Finally a time tracker that respects my privacy. No cloud syncing, just raw data on my disk where it belongs.",
              author: "Sarah Drasner (Fake)",
              role: "Senior Engineer"
            },
            {
              quote: "HackHours feels like git for my productivity. It's fast, minimal, and stays out of the way.",
              author: "Evan You (Fake)",
              role: "Developer Advocate"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-left p-6 italic text-gray-300 relative"
            >
              <span className="text-5xl text-accent/20 absolute -top-4 -left-2 font-serif">"</span>
              <p className="relative z-10 mb-4">{item.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
                <div>
                  <div className="text-sm font-bold text-white not-italic">{item.author}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 not-italic">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Install;