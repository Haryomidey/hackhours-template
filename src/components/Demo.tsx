
import React from 'react';
import { motion } from 'framer-motion';
import TerminalBlock from './TerminalBlock';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Command-Line First Experience</h2>
            <p className="text-gray-400 text-lg mb-8">
              HackHours is built to live in your terminal. Quick, responsive, and aesthetic commands that give you the insights you need without switching to a browser.
            </p>
            
            <ul className="space-y-6">
              {[
                { label: 'Real-time summaries', text: 'Get immediate insights into today\'s output.' },
                { label: 'Historical data', text: 'Drill down into weeks or months of history.' },
                { label: 'Project focus', text: 'See which repos are eating most of your time.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-[10px]">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">{item.label}</h4>
                    <p className="text-sm text-gray-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6 relative">
            <TerminalBlock 
              command="hackhours languages" 
              output={`Top Languages (Last 7 Days):\n\n1. TypeScript  22h 10m  [████████--]\n2. CSS         5h 45m   [██--------]\n3. JSON        1h 12m   [█---------]`}
              delay={0}
            />
            <div className="ml-4 sm:ml-12">
              <TerminalBlock 
                command="hackhours week" 
                output={`Daily Average: 5h 42m\nTotal: 39h 54m\n\nMon: █████████ 7.2h\nTue: ███████ 5.4h\nWed: ██████ 4.8h\nThu: ██████████ 8.1h\nFri: █████ 4.2h`}
                delay={1000}
              />
            </div>
            
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
