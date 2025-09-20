// src/components/Section/HeroCarouselSection.tsx
"use client";
import { urlFor } from "@/lib/sanity.client";
import { HeroCarouselSectionData } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Props = {
  section: HeroCarouselSectionData;
};

export default function HeroCarouselSection({ section }: Props) {
  const { slides } = section;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotation every 6 seconds
  useEffect(() => {
    if (!slides?.length || slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides?.length]);

  if (!slides?.length) {
    return (
      <section className="relative h-screen bg-[#0D0D0D] flex items-center justify-center">
        <p className="text-white text-xl">No hay slides configurados en el carrusel</p>
      </section>
    );
  }

  const currentSlideData = slides[currentSlide];
  const bgImageUrl = currentSlideData?.imagenFondoSlide ? urlFor(currentSlideData.imagenFondoSlide).url() : '';

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Background Images with Crossfade Transition */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {bgImageUrl && (
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${bgImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            )}
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/70 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Animated Geometric Grid Overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2ECB98]/10 to-transparent animate-pulse-slow"></div>
        <div className="grid-pattern absolute inset-0"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-10 w-px h-32 bg-[#2ECB98] opacity-60"></div>
        <div className="absolute top-40 left-16 w-24 h-px bg-[#2ECB98] opacity-40"></div>
        <div className="absolute bottom-32 right-32 w-px h-48 bg-gradient-to-b from-[#2ECB98] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#2ECB98] transform rotate-45"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex items-center h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Dynamic Slide Content */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-7">
              
              {/* Accent Line */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#2ECB98]"></div>
              </div>

              {/* Synchronized Slide Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Dynamic Slide Title */}
                  <h1 className="font-bold text-white leading-tight tracking-wider mb-6 font-['Inter'] uppercase">
                    <span className="block text-4xl md:text-6xl lg:text-7xl">
                      {currentSlideData?.tituloSlide || "Título del Slide"}
                    </span>
                    <span className="block w-24 h-1 bg-[#2ECB98] mt-6 rounded-full"></span>
                  </h1>

                  {/* Dynamic Slide Paragraph */}
                  <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed font-['Inter'] max-w-3xl">
                    {currentSlideData?.parrafoSlide || "Párrafo descriptivo del slide"}
                  </p>

                  {/* Dynamic CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Primary Button */}
                    {currentSlideData?.textoBotonPrimario && (
                      <a 
                        href={currentSlideData.urlBotonPrimario || '#'}
                        className="bg-[#2ECB98] text-black px-8 py-4 hover:bg-[#26B88A] transition-all duration-300 font-bold border border-[#2ECB98] hover:shadow-lg hover:shadow-[#2ECB98]/25 text-center rounded-xl font-['Inter'] uppercase text-sm tracking-wider"
                      >
                        {currentSlideData.textoBotonPrimario}
                      </a>
                    )}
                    
                    {/* Secondary Button */}
                    {currentSlideData?.textoBotonSecundario && (
                      <a 
                        href={currentSlideData.urlBotonSecundario || '#'}
                        className={`px-8 py-4 transition-all duration-300 font-medium text-center rounded-xl font-['Inter'] uppercase text-sm tracking-wider ${
                          currentSlideData.textoBotonSecundario.toLowerCase().includes('contactar') || 
                          currentSlideData.textoBotonSecundario.toLowerCase().includes('contacto')
                            ? 'bg-[#2ECB98] text-black hover:bg-[#26B88A] border border-[#2ECB98] hover:shadow-lg hover:shadow-[#2ECB98]/25'
                            : 'border border-zinc-800 bg-[#111111] text-zinc-300 hover:border-[#2ECB98] hover:text-[#2ECB98]'
                        }`}
                      >
                        {currentSlideData.textoBotonSecundario}
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Geometric Visual Element */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5">
              <div className="relative h-96 w-full">
                {/* Architectural Geometric Accents */}
                <div className="absolute bottom-10 right-10 opacity-30">
                  <div className="w-32 h-32 border-2 border-[#2ECB98] rounded-xl transform rotate-12"></div>
                  <div className="w-16 h-16 bg-[#2ECB98] transform -translate-y-24 translate-x-8 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators (Only show if multiple slides) */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#2ECB98] scale-125'
                    : 'bg-zinc-600 hover:bg-zinc-400'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2ECB98] to-transparent opacity-30 z-10"></div>
    </section>
  );
}