// src/components/ScrollAnimatedSection.tsx
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

export default function ScrollAnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6,
  direction = 'up'
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const variants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
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
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
