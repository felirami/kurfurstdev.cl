// src/components/Header.tsx
"use client";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import Link from "next/link";
import StyledButton from "./StyledButton";
import { HeaderCarouselData } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface MenuItem {
  _key: string;
  texto: string;
  url: string;
}

interface BusinessProfile {
  nombreDelNegocio?: string;
  logo?: SanityImageSource;
}

interface Navigation {
  items?: MenuItem[];
}

type Props = {
  businessProfile: BusinessProfile;
  navigation: Navigation;
  headerCarousel?: HeaderCarouselData;
}

export default function Header({ businessProfile, navigation, headerCarousel }: Props) {
  const { nombreDelNegocio, logo } = businessProfile;
  const navItems = navigation?.items || [];
  const slides = headerCarousel?.slides || [];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    if (!slides.length || slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];
  const bgImageUrl = currentSlideData?.imagenPortada ? urlFor(currentSlideData.imagenPortada).url() : '';

  return (
    <header className="sticky top-0 z-50 header-spectacular">
      {/* Header Carousel Background */}
      {slides.length > 0 && (
        <div className="absolute inset-0 overflow-hidden bg-[#1A1A1A]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {bgImageUrl && (
                <div 
                  className="absolute inset-0 bg-[#1A1A1A]"
                  style={{
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
              {/* Dark overlay for navigation visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      
      {/* Navigation Bar */}
      <div className="relative z-10 bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-[#8A2BE2]/20">
        {/* Geometric accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-40"></div>
        
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            {logo && (
              <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={urlFor(logo).url()}
                  alt={`Logo de ${nombreDelNegocio || 'logo'}`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-['Oswald'] text-xl font-bold text-[#EAEAEA] uppercase tracking-wider">
                {nombreDelNegocio}
              </span>
              <div className="w-0 group-hover:w-full h-px bg-[#8A2BE2] transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems
              .filter((item: MenuItem) => item.texto?.toLowerCase() !== 'contacto')
              .map((item: MenuItem) => (
                <StyledButton
                  key={item._key || item.url}
                  href={item.url || '/'}
                  variant="ghost"
                >
                  {item.texto}
                </StyledButton>
              ))}
            
            {/* Theme Switcher (desactivado temporalmente) */}
            
            {/* CTA Button */}
            <StyledButton href="/contacto" variant="secondary">
              CONTACTO
            </StyledButton>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1 p-2 group">
            <div className="w-6 h-px bg-[#EAEAEA] group-hover:bg-[#8A2BE2] transition-colors duration-300"></div>
            <div className="w-6 h-px bg-[#EAEAEA] group-hover:bg-[#8A2BE2] transition-colors duration-300"></div>
            <div className="w-6 h-px bg-[#EAEAEA] group-hover:bg-[#8A2BE2] transition-colors duration-300"></div>
          </button>
        </div>
      </div>

      {/* Header Content Area with Carousel Text */}
      {slides.length > 0 && (
        <div className="relative z-10 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <h1 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-wider mb-4 [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]">
                  {currentSlideData?.titulo}
                </h1>
                <p className="text-lg md:text-xl text-[#EAEAEA]/90 max-w-3xl mx-auto [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
                  {currentSlideData?.subtitulo}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            {slides.length > 1 && (
              <div className="flex justify-center mt-8 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-[#8A2BE2] shadow-lg shadow-[#8A2BE2]/50 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Geometric accent elements */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-8 w-px h-8 bg-[#8A2BE2] opacity-40"></div>
        <div className="absolute bottom-0 right-8 w-px h-8 bg-[#8A2BE2] opacity-40"></div>
      </div>
    </header>
  );
}