"use client";
import { urlFor } from "@/lib/sanity.client";
import { GallerySectionData } from "@/types";
import Image from "next/image";
import SafeScrollAnimatedSection from "../SafeScrollAnimatedSection";
import ArchitecturalContainer from "../ArchitecturalContainer";
import { useState, useRef, useCallback } from "react";

type Props = {
  section: GallerySectionData;
};

export default function GallerySection({ section }: Props) {
  const { titulo, imagenes = [] } = section;
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle image tap on mobile for lightbox
  const handleImageTap = useCallback((index: number) => {
    setActiveImage(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (activeImage === null) return;
    const newIndex = direction === 'next' 
      ? (activeImage + 1) % imagenes.length
      : (activeImage - 1 + imagenes.length) % imagenes.length;
    setActiveImage(newIndex);
  }, [activeImage, imagenes.length]);

  return (
    <SafeScrollAnimatedSection>
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Geometric decorations - hidden on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 right-12 w-px h-48 bg-[#2ECB98] opacity-15"></div>
          <div className="absolute bottom-16 left-20 w-40 h-px bg-[#2ECB98] opacity-20"></div>
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-[#2ECB98] transform rotate-45 opacity-25"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 sm:w-16 h-px bg-[#2ECB98]"></div>
              <div className="mx-3 sm:mx-4 text-[#2ECB98] text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Galería
              </div>
              <div className="w-10 sm:w-16 h-px bg-[#2ECB98]"></div>
            </div>
            
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight">
              {titulo}
            </h2>
          </div>

          {/* Mobile: Horizontal swipe gallery */}
          <div 
            ref={scrollContainerRef}
            className="sm:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {imagenes.map((imagen, index) => (
              <div 
                key={imagen._key}
                className="flex-shrink-0 w-[75vw] snap-center"
                onClick={() => handleImageTap(index)}
              >
                <ArchitecturalContainer className="group aspect-square overflow-hidden p-0 relative">
                  <div className="absolute top-3 left-3 z-20 bg-[#1A1A1A]/80 text-[#2ECB98] text-sm font-['Oswald'] font-bold px-2 py-1 backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <Image
                    src={urlFor(imagen).url()}
                    alt={`Imagen ${index + 1} de galería`}
                    fill
                    sizes="75vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/30"></div>
                </ArchitecturalContainer>
              </div>
            ))}
          </div>
          <p className="sm:hidden text-center text-zinc-500 text-xs mt-2">
            Desliza para ver más • Toca para ampliar
          </p>

          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {imagenes.map((imagen, index) => (
              <SafeScrollAnimatedSection 
                key={imagen._key}
                delay={index * 0.1}
                duration={0.5}
              >
                <div onClick={() => handleImageTap(index)} className="cursor-pointer">
                  <ArchitecturalContainer className="group aspect-square overflow-hidden p-0">
                    <div className="absolute top-3 left-3 z-20 bg-[#1A1A1A]/80 text-[#2ECB98] text-sm font-['Oswald'] font-bold px-2 py-1 backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-[#2ECB98] transition-all duration-500 z-10"></div>
                    
                    <Image
                      src={urlFor(imagen).url()}
                      alt={`Imagen ${index + 1} de galería`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-[#1A1A1A]/40 group-hover:bg-[#2ECB98]/20 transition-colors duration-500"></div>
                    
                    <div className="absolute bottom-3 right-3 w-2 h-2 bg-[#2ECB98] transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </ArchitecturalContainer>
                </div>
              </SafeScrollAnimatedSection>
            ))}
          </div>

          <div className="flex items-center justify-center mt-10 sm:mt-16">
            <div className="w-8 sm:w-12 h-px bg-[#2ECB98]"></div>
            <div className="mx-3 sm:mx-4 flex space-x-2">
              <div className="w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
              <div className="w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
              <div className="w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
            </div>
            <div className="w-8 sm:w-12 h-px bg-[#2ECB98]"></div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center text-3xl z-10"
              aria-label="Cerrar"
            >
              ×
            </button>
            
            {/* Navigation arrows */}
            {imagenes.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center text-4xl z-10"
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center text-4xl z-10"
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>
              </>
            )}
            
            {/* Image */}
            <div 
              className="relative w-full max-w-4xl aspect-square sm:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={urlFor(imagenes[activeImage]).url()}
                alt={`Imagen ${activeImage + 1} de galería`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {activeImage + 1} / {imagenes.length}
            </div>
          </div>
        )}
      </section>
    </SafeScrollAnimatedSection>
  );
}