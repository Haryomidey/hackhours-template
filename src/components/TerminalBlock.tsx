
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface TerminalBlockProps {
  command: string;
  output: string;
  delay?: number;
  showWindowControls?: boolean;
}

const TerminalBlock: React.FC<TerminalBlockProps> = ({ 
  command, 
  output, 
  delay = 500,
  showWindowControls = true 
}) => {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fix: Using ReturnType<typeof setTimeout> to resolve the "Cannot find namespace 'NodeJS'" error in the browser environment.
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const typing = async () => {
      await new Promise(r => setTimeout(r, delay));
      for (let i = 0; i <= command.length; i++) {
        setDisplayedCommand(command.slice(0, i));
        await new Promise(r => setTimeout(r, 40));
      }
      await new Promise(r => setTimeout(r, 300));
      setShowOutput(true);
    };

    typing();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [command, delay]);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative glass-card rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
      {showWindowControls && (
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
            bash — hackhours
          </div>
          <button 
            onClick={handleCopy}
            className="text-gray-500 hover:text-white transition-colors"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <div className="p-5 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-pre">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">$</span>
          <span>{displayedCommand}</span>
          {!showOutput && <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-accent inline-block"
          />}
        </div>
        
        <AnimatePresence>
          {showOutput && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-gray-400"
            >
              {output}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default TerminalBlock;
