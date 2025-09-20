'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderSlide {
  titulo: string;
  subtitulo: string;
  imagenPortada: {
    asset: {
      url: string;
    };
  };
}

interface HeroCarouselProps {
  slides: HeaderSlide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides.length]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[currentSlide]?.imagenPortada?.asset?.url})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-['Inter'] uppercase tracking-wider">
                {slides[currentSlide]?.titulo}
                <span className="block w-24 h-1 bg-[#2ECB98] mt-6 rounded-full"></span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed font-['Inter'] max-w-3xl">
                {slides[currentSlide]?.subtitulo}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/servicios"
              className="bg-[#2ECB98] text-black px-8 py-4 hover:bg-[#26B88A] transition-all duration-300 font-bold border border-[#2ECB98] hover:shadow-lg hover:shadow-[#2ECB98]/25 text-center rounded-xl font-['Inter'] uppercase text-sm tracking-wider"
            >
              Ver Servicios
            </Link>
            <Link
              href="/portafolio"
              className="border border-zinc-800 bg-[#111111] text-zinc-300 px-8 py-4 hover:border-[#2ECB98] hover:text-[#2ECB98] transition-all duration-300 font-medium text-center rounded-xl font-['Inter'] uppercase text-sm tracking-wider"
            >
              Ver Portafolio
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 opacity-30">
        <div className="w-32 h-32 border-2 border-[#2ECB98] rounded-xl transform rotate-12"></div>
        <div className="w-16 h-16 bg-[#2ECB98] transform -translate-y-24 translate-x-8 rounded-lg"></div>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#2ECB98] scale-125'
                  : 'bg-zinc-600 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;
