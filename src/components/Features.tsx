import React from 'react';
import { Shield, Database, BarChart3, Clock, Zap, Cpu } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Offline & Private',
      description: 'Your coding activity never leaves your machine. No cloud, no tracking, no worries.',
      delay: 0.1,
    },
    {
      icon: Database,
      title: 'ChronoDB Storage',
      description: 'Powered by a high-performance local time-series database for ultra-fast reports.',
      delay: 0.2,
    },
    {
      icon: BarChart3,
      title: 'Language Tracking',
      description: 'Automatically detects over 150+ programming languages across all your projects.',
      delay: 0.3,
    },
    {
      icon: Zap,
      title: 'Zero Setup',
      description: 'Install globally, run init, and forget about it. Works silently in the background.',
      delay: 0.4,
    },
    {
      icon: Clock,
      title: 'Beautiful CLI Reports',
      description: 'Rich, interactive terminal visualizations that make stats fun to look at.',
      delay: 0.5,
    },
    {
      icon: Cpu,
      title: 'Lightweight',
      description: 'Written in efficient Rust. Consumes less than 10MB of RAM while tracking.',
      delay: 0.6,
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Designed for Devs. Built for Privacy.</h3>
          <p className="text-gray-400 text-lg">
            WakaTime features without the subscription. Everything stays local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;