'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DevelopmentTooltipProps {
  children: React.ReactNode;
  message?: string;
}

const DevelopmentTooltip: React.FC<DevelopmentTooltipProps> = ({ 
  children, 
  message = "En Desarrollo" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <div onClick={handleClick} className="cursor-not-allowed">
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-[#111111]/95 backdrop-blur-xl border border-[#333333] rounded-lg px-3 py-2 shadow-2xl">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2ECB98] rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium uppercase tracking-wider">
                  {message}
                </span>
              </div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#111111]/95 border-r border-b border-[#333333] rotate-45 -mt-1"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DevelopmentTooltip;
