import React from 'react';

interface GraphicAccentProps {
  type?: 'scanlines' | 'dots';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
}

export default function GraphicAccent({ 
  type = 'scanlines', 
  position = 'top-right',
  className = '' 
}: GraphicAccentProps) {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  if (type === 'dots') {
    return (
      <div className={`absolute ${positionClasses[position]} ${className}`}>
        <div className="grid grid-cols-2 gap-1">
          <div className="w-1 h-1 bg-[#2ECB98] rounded-full opacity-60"></div>
          <div className="w-1 h-1 bg-[#2ECB98] rounded-full opacity-60"></div>
          <div className="w-1 h-1 bg-[#2ECB98] rounded-full opacity-60"></div>
          <div className="w-1 h-1 bg-[#2ECB98] rounded-full opacity-60"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <div className="space-y-1">
        <div className="w-6 h-px bg-[#2ECB98] opacity-60"></div>
        <div className="w-4 h-px bg-[#2ECB98] opacity-40"></div>
        <div className="w-5 h-px bg-[#2ECB98] opacity-50"></div>
      </div>
    </div>
  );
}
