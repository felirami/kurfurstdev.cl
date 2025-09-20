'use client';

import { motion } from 'framer-motion';
import { ReactNode, createElement } from 'react';

interface ArchitecturalContainerProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const ArchitecturalContainer = ({ 
  children, 
  className = "", 
  hover = true 
}: ArchitecturalContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={hover ? { 
        borderTopColor: "#34E4A4",
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4), 0 0 20px rgba(46,203,152,0.15)"
      } : {}}
      className={`p-6 sm:p-8 lg:p-10 rounded-xl transition-all duration-200 ease-in-out shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] border-t-2 border-l border-r border-b border-t-[#30E0A0] border-l-zinc-800 border-r-zinc-800 border-b-zinc-800 ${hover ? 'hover:border-t-[#34E4A4] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4),0_0_20px_rgba(46,203,152,0.15)]' : ''} ${className}`}
      style={{
        background: `linear-gradient(180deg, #1A1A1A 0%, #111111 100%)`,
      }}
    >
      {children}
    </motion.div>
  );
};

interface GlassmorphismContainerProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
}

export const GlassmorphismContainer = ({ 
  children, 
  className = "", 
  hover = true,
  intensity = 'medium'
}: GlassmorphismContainerProps) => {
  
  const intensityStyles = {
    light: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(46, 203, 152, 0.15)'
    },
    medium: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(46, 203, 152, 0.2)'
    },
    strong: {
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(46, 203, 152, 0.25)'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={hover ? { 
        borderColor: "rgba(46, 203, 152, 0.4)",
        boxShadow: "0 0 25px rgba(46, 203, 152, 0.2)"
      } : {}}
      className={`p-8 rounded-xl transition-all duration-300 ease-in-out ${hover ? 'hover:shadow-[0_0_25px_rgba(46,203,152,0.2)]' : ''} ${className}`}
      style={intensityStyles[intensity]}
    >
      {children}
    </motion.div>
  );
};

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  withAura?: boolean;
}

export const SectionContainer = ({ 
  children, 
  className = "",
  withAura = true 
}: SectionContainerProps) => {
  return (
    <section 
      className={`relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 ${className}`}
      style={withAura ? {
        background: `
          radial-gradient(circle at 50% 50%, rgba(46, 203, 152, 0.06) 1px, transparent 1px),
          radial-gradient(circle at 25% 25%, rgba(46, 203, 152, 0.03) 0.5px, transparent 0.5px),
          linear-gradient(90deg, transparent 49%, rgba(46, 203, 152, 0.02) 50%, transparent 51%),
          linear-gradient(0deg, transparent 49%, rgba(46, 203, 152, 0.02) 50%, transparent 51%),
          transparent
        `,
        backgroundSize: '40px 40px, 20px 20px, 80px 80px, 80px 80px'
      } : {}}
    >
      {children}
    </section>
  );
};

interface GradientTitleProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export const GradientTitle = ({ 
  children, 
  level = 2, 
  className = "" 
}: GradientTitleProps) => {
  const baseClasses = "font-medium leading-tight uppercase tracking-wide bg-gradient-to-b from-white to-[#BDBDBD] bg-clip-text text-transparent";
  
  const levelClasses = {
    1: "text-5xl lg:text-7xl mb-8",
    2: "text-4xl lg:text-5xl mb-6", 
    3: "text-3xl lg:text-4xl mb-4"
  };

  const tagName = `h${level}`;

  return createElement(
    tagName,
    { className: `${baseClasses} ${levelClasses[level]} ${className}` },
    children
  );
};
