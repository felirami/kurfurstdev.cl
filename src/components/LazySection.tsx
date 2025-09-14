'use client';

import React, { lazy, Suspense } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 border-2 border-[#8A2BE2] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
  className = ""
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

export default LazySection;
