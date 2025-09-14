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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
                  className="absolute inset-0 bg-[#1A1A1A] md:bg-fixed bg-local"
                  style={{
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                  }}
                />
              )}
              {/* Dark overlay for navigation visibility - reduced blur effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      
      {/* Navigation Bar */}
      <div className="relative z-10 bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-[#8A2BE2]/20">
        {/* Geometric accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-40"></div>
        
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            {logo && (
              <div className="relative h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={urlFor(logo).url()}
                  alt={`Logo de ${nombreDelNegocio || 'logo'}`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-['Oswald'] text-lg sm:text-xl font-bold text-[#EAEAEA] uppercase tracking-wider">
                {nombreDelNegocio}
              </span>
              <div className="w-0 group-hover:w-full h-px bg-[#8A2BE2] transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems
              .filter((item) => item.texto?.toLowerCase() !== 'contacto')
              .map((item) => (
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
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 p-2 group relative z-50 cursor-pointer mobile-menu-container"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <div className="flex flex-col justify-center items-center w-6 h-6 relative">
              <span className={`absolute w-6 h-0.5 bg-[#EAEAEA] group-hover:bg-[#8A2BE2] transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-[#EAEAEA] group-hover:bg-[#8A2BE2] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-[#EAEAEA] group-hover:bg-[#8A2BE2] transition-all duration-300 transform ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed top-[72px] left-0 right-0 bg-[#0F0F0F]/98 backdrop-blur-lg border-t border-[#8A2BE2]/20 shadow-2xl z-50 mobile-menu-container"
            >
              <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-72px)] overflow-y-auto">
                {navItems
                  .filter((item) => item.texto?.toLowerCase() !== 'contacto')
                  .map((item, index) => (
                    <motion.div
                      key={item._key || item.url}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.url || '/'}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-[#EAEAEA] hover:text-[#8A2BE2] transition-colors duration-300 py-4 px-4 rounded-lg hover:bg-white/5 border-b border-white/10 last:border-b-0 font-medium text-lg"
                      >
                        {item.texto}
                      </Link>
                    </motion.div>
                  ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    href="/contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block bg-gradient-to-r from-[#8A2BE2] to-[#9A3BF2] text-white px-6 py-4 text-center font-bold uppercase tracking-wider hover:from-[#9A3BF2] hover:to-[#8A2BE2] border-2 border-[#8A2BE2] transition-all duration-300 rounded-lg shadow-lg hover:shadow-[#8A2BE2]/25 transform hover:scale-105 text-lg"
                  >
                    CONTACTO
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header Content Area with Carousel Text */}
      {slides.length > 0 && (
        <div className="relative z-10 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
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
                <h1 className="font-['Oswald'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#EAEAEA] uppercase tracking-wider mb-3 sm:mb-4 [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)] leading-tight">
                  {currentSlideData?.titulo}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#EAEAEA]/90 max-w-3xl mx-auto [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] leading-relaxed">
                  {currentSlideData?.subtitulo}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            {slides.length > 1 && (
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 transition-all duration-300 ${
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