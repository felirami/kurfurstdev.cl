import React from 'react';

interface GlassmorphismContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassmorphismContainer({ 
  children, 
  className = '' 
}: GlassmorphismContainerProps) {
  return (
    <div 
      className={`
        bg-[#111111]/60 backdrop-blur-xl border border-[#333333]/80 rounded-xl p-8
        transition-all duration-300 ease-in-out
        hover:border-[#2ECB98] hover:shadow-[0_4px_12px_rgba(46,203,152,0.1)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
