// src/components/GlassContainer.tsx
"use client";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  rounded?: boolean;
  padding?: string;
};

export default function GlassContainer({ 
  children, 
  className = "", 
  hover = true,
  rounded = true,
  padding = "p-8"
}: Props) {
  const baseClasses = "relative bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg";
  const hoverClasses = hover ? "hover:shadow-2xl" : "";
  const roundedClasses = rounded ? "rounded-xl" : "";
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${roundedClasses} ${padding} ${className}`}
      style={{ 
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
    >
      {children}
    </div>
  );
}
