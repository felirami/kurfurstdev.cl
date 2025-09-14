// src/components/sections/HeroSection.tsx
"use client";
import { urlFor } from "@/lib/sanity.client";
import { HeroSectionData } from "@/types";

type Props = {
  section: HeroSectionData;
};

export default function HeroSection({ section }: Props) {
  // Para Hero simple, usamos los campos directos
  const { titulo, subtitulo, imagenDeFondo, urlBotonPrimario, textoBotonPrimario, urlBotonSecundario, textoBotonSecundario } = section;
  
  const bgImageUrl = imagenDeFondo ? urlFor(imagenDeFondo).url() : '';

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Static Background Image */}
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
      
      {/* Animated Geometric Grid Overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#8A2BE2]/10 to-transparent animate-pulse-slow"></div>
        <div className="grid-pattern absolute inset-0"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-10 w-px h-32 bg-[#8A2BE2] opacity-60"></div>
        <div className="absolute top-40 left-16 w-24 h-px bg-[#8A2BE2] opacity-40"></div>
        <div className="absolute bottom-32 right-32 w-px h-48 bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex items-center h-[80vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Static Content */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-7">
              
              {/* Accent Line */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                  Hero Simple
                </div>
              </div>

              {/* Static Title */}
              <h1 className="font-bold text-[#EAEAEA] leading-[0.95] tracking-tight mb-16 [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]">
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase">
                  {titulo || "Título Principal"}
                </span>
              </h1>

              {/* Static Paragraph */}
              <div className="relative mb-16">
                <div className="absolute -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                <p className="text-[#EAEAEA] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                  {subtitulo || "Subtítulo o párrafo descriptivo"}
                </p>
              </div>

              {/* Static CTA Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12 space-y-6 sm:space-y-0 mt-8">
                {/* Primary Button */}
                {textoBotonPrimario && (
                  <a 
                    href={urlBotonPrimario || '#'}
                    className="group relative bg-[#8A2BE2] text-white font-['Oswald'] font-bold text-lg px-10 py-4 uppercase tracking-wider transition-all duration-300 hover:bg-[#9A3BF2] hover:shadow-lg hover:shadow-[#8A2BE2]/25 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] w-fit"
                  >
                    <span className="relative z-10">{textoBotonPrimario}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#9A3BF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                )}
                
                {/* Secondary Button */}
                {textoBotonSecundario && (
                  <a 
                    href={urlBotonSecundario || '#'}
                    className="group relative bg-transparent border-2 border-[#8A2BE2] text-[#8A2BE2] font-['Oswald'] font-bold text-lg px-8 py-3 uppercase tracking-wider transition-all duration-300 hover:bg-[#8A2BE2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] w-fit"
                  >
                    <span className="relative z-10">{textoBotonSecundario}</span>
                    <div className="absolute inset-0 bg-[#8A2BE2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column - Geometric Visual Element */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5">
              <div className="relative h-96 w-full">
                {/* Main geometric shape */}
                <div className="absolute inset-0 border-2 border-[#8A2BE2] opacity-20 transform rotate-12"></div>
                <div className="absolute inset-4 border border-[#EAEAEA] opacity-10 transform -rotate-6"></div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-[#8A2BE2] transform rotate-45"></div>
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-[#EAEAEA] opacity-60"></div>
                <div className="absolute top-1/2 right-1/4 w-px h-16 bg-[#8A2BE2] opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-30 z-10"></div>
    </section>
  );
}