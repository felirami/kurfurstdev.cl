"use client";
// src/components/sections/ServicesSection.tsx
import { ServicesSectionData } from "@/types";
import { urlFor } from "@/lib/sanity.client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ScrollAnimatedSection from "../ScrollAnimatedSection";
import GlassContainer from "../GlassContainer";

type Props = {
  section: ServicesSectionData;
};

export default function ServicesSection({ section }: Props) {
  const { titulo, listaDeServicios } = section;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <ScrollAnimatedSection>
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-px h-40 bg-[#8A2BE2] opacity-20"></div>
          <div className="absolute bottom-32 right-16 w-32 h-px bg-[#8A2BE2] opacity-15"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#8A2BE2] transform rotate-45 opacity-30"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-[#8A2BE2]"></div>
              <div className="mx-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                Servicios
              </div>
              <div className="w-16 h-px bg-[#8A2BE2]"></div>
            </div>
            
            <h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight">
              {titulo}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listaDeServicios?.map((servicio, index) => (
              <ScrollAnimatedSection 
                key={servicio._key}
                delay={index * 0.15}
                duration={0.7}
              >
                <GlassContainer
                  className="group overflow-hidden h-[500px] relative"
                  hover={false}
                >
                  <motion.div
                    onHoverStart={() => setHoveredCard(servicio._key)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                  {/* Background Image */}
                  {(servicio.imagenFondo || servicio.imagenDestacada) && (
                    <div className="absolute inset-0">
                      <Image
                        src={urlFor(servicio.imagenFondo || servicio.imagenDestacada).url()}
                        alt={`Fondo de ${servicio.nombre}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                  )}

                  {/* Card accent line */}
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-[#8A2BE2] transition-all duration-500 z-10"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      {/* Service number */}
                      <div className="flex items-center mb-6">
                        <div className="text-[#8A2BE2] font-['Oswald'] text-lg font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="ml-3 w-8 h-px bg-[#8A2BE2]/60"></div>
                      </div>

                      <h3 className="font-['Oswald'] text-2xl font-bold text-white uppercase tracking-wide mb-4 group-hover:text-[#8A2BE2] transition-colors duration-300">
                        {servicio.nombre}
                      </h3>
                      
                      {/* Description with fade animation */}
                      <motion.p 
                        initial={{ opacity: 1 }}
                        animate={{ opacity: hoveredCard === servicio._key ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/90 leading-relaxed text-sm mb-6"
                      >
                        {servicio.descripcionCorta.length > 120 
                          ? `${servicio.descripcionCorta.substring(0, 120)}...` 
                          : servicio.descripcionCorta}
                      </motion.p>
                    </div>

                    {/* CTA Button */}
                    {servicio.textoCTA && servicio.urlCTA && (
                      <Link 
                        href={servicio.urlCTA}
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        {servicio.textoCTA}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}

                    {/* Ver Detalles Link - Bottom Right Corner */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === servicio._key ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-6 right-6"
                    >
                      <Link 
                        href={servicio.urlCTA || '#'}
                        className="inline-flex items-center text-white hover:text-[#8A2BE2] font-medium transition-colors duration-300 group/link"
                      >
                        Ver Detalles
                        <motion.svg 
                          className="ml-2 w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </Link>
                    </motion.div>

                    {/* Geometric accent */}
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  </motion.div>
                </GlassContainer>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
}