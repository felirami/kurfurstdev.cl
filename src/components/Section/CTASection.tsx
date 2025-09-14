// src/components/sections/CTASection.tsx
"use client";
import { CTASectionData } from "@/types";
import Link from "next/link";
import ScrollAnimatedSection from "../ScrollAnimatedSection";
import { motion } from "framer-motion";

type Props = {
  section: CTASectionData;
};

export default function CTASection({ section }: Props) {
  const { titulo, subtitulo, boton } = section;

  return (
    <ScrollAnimatedSection>
      <section className="relative py-12 md:py-16 lg:py-20 px-6 lg:px-8 overflow-hidden">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border-y border-white/10"></div>
        
        {/* Subtle Grid Texture Background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(138, 43, 226, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(138, 43, 226, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Top accent line like testimonial cards */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-60"></div>
        
        {/* Enhanced Geometric background elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-16 left-20 w-px h-32 bg-[#8A2BE2]"></div>
          <div className="absolute bottom-16 right-20 w-px h-32 bg-[#8A2BE2]"></div>
          <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          {/* Main Title - Significantly Larger */}
          <ScrollAnimatedSection direction="up" delay={0} duration={0}>
            <h2 className="font-['Oswald'] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#EAEAEA] uppercase tracking-tight mb-6 leading-[0.95]">
              {titulo}
            </h2>
          </ScrollAnimatedSection>

          {/* Subtitle */}
          {subtitulo && (
            <ScrollAnimatedSection direction="up" delay={0} duration={0}>
              <p className="text-[#EAEAEA]/80 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                {subtitulo}
              </p>
            </ScrollAnimatedSection>
          )}

          {/* Enhanced CTA Button with Pulse Animation */}
          <ScrollAnimatedSection direction="up" delay={0} duration={0}>
            <div className="flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {boton.esExterno ? (
                  <a
                    href={boton.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-[#1A1A1A] bg-[#8A2BE2] border-2 border-[#8A2BE2] uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-[#8A2BE2] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transform hover:scale-110"
                  >
                    <span className="relative z-10">{boton.texto}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#9A4BE6] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Enhanced Geometric accents */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"></div>
                    <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"></div>
                  </a>
                ) : (
                  <Link
                    href={boton.url}
                    className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-[#1A1A1A] bg-[#8A2BE2] border-2 border-[#8A2BE2] uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-[#8A2BE2] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transform hover:scale-110"
                  >
                    <span className="relative z-10">{boton.texto}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#9A4BE6] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Enhanced Geometric accents */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"></div>
                    <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"></div>
                  </Link>
                )}
              </motion.div>
            </div>
          </ScrollAnimatedSection>

          {/* Enhanced Bottom decorative elements */}
          <ScrollAnimatedSection direction="fade" delay={0} duration={0}>
            <div className="flex items-center justify-center mt-12 space-x-6">
              <div className="w-12 h-px bg-[#8A2BE2]"></div>
              <div className="w-3 h-3 bg-[#8A2BE2] transform rotate-45"></div>
              <div className="w-20 h-px bg-[#8A2BE2]"></div>
              <div className="w-3 h-3 bg-[#8A2BE2] transform rotate-45"></div>
              <div className="w-12 h-px bg-[#8A2BE2]"></div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
}
