'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollAuras() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });


  const aura1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const aura1X = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const aura2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const aura2X = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const aura3Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const aura3X = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-[#2ECB98]/15 rounded-full blur-3xl will-change-transform"
        style={{
          top: "20%",
          left: "10%",
          x: aura1X,
          y: aura1Y,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <motion.div
        className="absolute w-80 h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] bg-[#2ECB98]/12 rounded-full blur-2xl will-change-transform"
        style={{
          top: "60%",
          right: "15%",
          x: aura2X,
          y: aura2Y,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <motion.div
        className="absolute w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-[#2ECB98]/8 rounded-full blur-xl will-change-transform"
        style={{
          top: "40%",
          left: "60%",
          x: aura3X,
          y: aura3Y,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
}
