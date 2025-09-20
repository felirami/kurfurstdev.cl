"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
};

export default function SafeScrollAnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  direction = 'up'
}: Props) {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { 
    once: true,
    margin: "-50px",
    amount: 0.1
  });

  const variants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    fade: { opacity: 0 }
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? animate : variants[direction]}
      transition={{ 
        duration,
        delay: isInView ? delay : 0,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
    >
      {children}
    </motion.div>
  );
}
