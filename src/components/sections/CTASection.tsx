// src/components/sections/CTASection.tsx
"use client";
import { CTASectionData } from "@/types";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  section: CTASectionData;
};

export default function CTASection({ section }: Props) {
  const { titulo, subtitulo, boton } = section;

  return (
    <ScrollAnimatedSection>
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-[#0F0F0F]">
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

        {/* Enhanced Geometric background elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"></div>
          <div className="absolute top-16 left-20 w-px h-32 bg-[#8A2BE2]"></div>
          <div className="absolute bottom-16 right-20 w-px h-32 bg-[#8A2BE2]"></div>
          <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Title - Significantly Larger */}
          <ScrollAnimatedSection direction="up" delay={0.1} duration={0.4}>
            <h2 className="font-['Oswald'] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#EAEAEA] uppercase tracking-tight mb-12 leading-[0.9]">
              {titulo}
            </h2>
          </ScrollAnimatedSection>

          {/* Subtitle */}
          {subtitulo && (
            <ScrollAnimatedSection direction="up" delay={0.15} duration={0.4}>
              <p className="text-[#EAEAEA]/80 text-xl md:text-2xl lg:text-3xl leading-relaxed mb-16 max-w-4xl mx-auto">
                {subtitulo}
              </p>
            </ScrollAnimatedSection>
          )}

          {/* Enhanced CTA Button with Pulse Animation */}
          <ScrollAnimatedSection direction="up" delay={0.2} duration={0.4}>
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
                    className="group relative inline-flex items-center justify-center px-16 py-6 text-xl font-bold text-[#1A1A1A] bg-[#8A2BE2] border-2 border-[#8A2BE2] uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-[#8A2BE2] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transform hover:scale-110"
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
                    className="group relative inline-flex items-center justify-center px-16 py-6 text-xl font-bold text-[#1A1A1A] bg-[#8A2BE2] border-2 border-[#8A2BE2] uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-[#8A2BE2] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transform hover:scale-110"
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
          <ScrollAnimatedSection direction="fade" delay={0.25} duration={0.3}>
            <div className="flex items-center justify-center mt-20 space-x-6">
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
