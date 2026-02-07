import React from 'react';
import { motion } from 'framer-motion';

const StatsPreview: React.FC = () => {
  const languages = [
    { name: 'TypeScript', color: 'bg-blue-500', width: '65%' },
    { name: 'Rust', color: 'bg-orange-500', width: '20%' },
    { name: 'React', color: 'bg-cyan-400', width: '10%' },
    { name: 'Other', color: 'bg-gray-600', width: '5%' },
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const data = [70, 45, 90, 60, 85, 30, 20];

  const heatMapCells = Array.from({ length: 140 }).map((_, i) => Math.random());

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
            <div className="flex flex-col md:flex-row gap-12">
              
              {/* Chart 1: Bar Chart */}
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Coding Activity (Hours)</h4>
                <div className="flex items-end justify-between h-48 gap-2">
                  {data.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-accent/40 rounded-t-md hover:bg-accent transition-colors relative group"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[10px] px-1.5 py-0.5 rounded font-bold">
                          {(h / 10).toFixed(1)}h
                        </div>
                      </motion.div>
                      <span className="text-[10px] text-gray-500 font-mono">{days[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart 2: Progress Bars */}
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Language Split</h4>
                <div className="space-y-6">
                  {languages.map((lang, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-gray-500 font-mono">{lang.width}</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: lang.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className={`h-full ${lang.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap Section */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Activity Intensity</h4>
              <div className="flex flex-wrap gap-1.5">
                {heatMapCells.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.005 }}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm ${
                      val > 0.8 ? 'bg-indigo-500' :
                      val > 0.5 ? 'bg-indigo-500/60' :
                      val > 0.2 ? 'bg-indigo-500/20' : 'bg-white/5'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-tighter">
                Less <div className="w-3 h-3 bg-white/5" /> <div className="w-3 h-3 bg-indigo-500/20" /> <div className="w-3 h-3 bg-indigo-500/60" /> <div className="w-3 h-3 bg-indigo-500" /> More
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Files Analyzed', value: '1,429' },
              { label: 'Total Hours', value: '842h' },
              { label: 'Projects', value: '28' },
              { label: 'Languages', value: '14' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsPreview;