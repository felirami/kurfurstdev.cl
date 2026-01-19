import React from 'react';
import GraphicAccent from './GraphicAccent';

export interface ArchitecturalContainerProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
  accentType?: 'scanlines' | 'dots';
  accentPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ArchitecturalContainer({ 
  children, 
  className = '', 
  hover = true,
  accent = false,
  accentType = 'scanlines',
  accentPosition = 'top-right',
  onClick
}: ArchitecturalContainerProps) {
  return (
    <div 
      className={`
        architectural-container relative
        ${hover ? 'hover:border-[#2ECB98] hover:shadow-[0_4px_12px_rgba(46,203,152,0.1)]' : ''}
        transition-all duration-300 ease-in-out
        ${className}
      `}
      onClick={onClick}
    >
      {children}
      {accent && (
        <GraphicAccent 
          type={accentType} 
          position={accentPosition}
        />
      )}
    </div>
  );
}
