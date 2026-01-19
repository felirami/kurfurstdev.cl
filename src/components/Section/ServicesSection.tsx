"use client";
// src/components/Section/ServicesSection.tsx
import { ServicesSectionData } from "@/types";
import { urlFor } from "@/lib/sanity.client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import SafeScrollAnimatedSection from "../SafeScrollAnimatedSection";
import { ArchitecturalContainer, SectionContainer } from "../UnifiedContainers";
import PageHeader from "../PageHeader";
import DevelopmentTooltip from "../DevelopmentTooltip";

type Props = {
  section: ServicesSectionData;
};

export default function ServicesSection({ section }: Props) {
  const { titulo, listaDeServicios } = section;
  
  return (
    <SectionContainer withAura={true}>
      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
          <PageHeader 
            subtitle="Servicios"
            title={titulo || "NUESTROS SERVICIOS"}
            description="Soluciones digitales personalizadas que transforman tu visión en una realidad funcional y escalable."
          />
        </SafeScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {listaDeServicios?.map((servicio, index) => (
              <SafeScrollAnimatedSection 
                key={servicio._key}
                delay={index * 0.1}
                duration={0.5}
              >
                <ArchitecturalContainer
                  className="group overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] relative"
                >
                  <motion.div
                                        whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                  {(servicio.imagenFondo || servicio.imagenDestacada) && (
                    <div className="absolute inset-0">
                      <Image
                        src={urlFor(servicio.imagenFondo || servicio.imagenDestacada).url()}
                        alt={`Fondo de ${servicio.nombre}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                  )}

                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-[#2ECB98] transition-all duration-500 z-10"></div>
                  
                  <div className="relative z-10 p-5 sm:p-6 lg:p-8 h-full flex flex-col justify-end">
                    <div className="mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2ECB98]/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#2ECB98] rounded"></div>
                      </div>
                    </div>

                    <h3 className="font-['Oswald'] text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-2 sm:mb-3 group-hover:text-[#2ECB98] transition-colors duration-300">
                      {servicio.nombre}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed text-sm mb-4 sm:mb-6">
                      {servicio.descripcionCorta.length > 100 
                        ? `${servicio.descripcionCorta.substring(0, 100)}...` 
                        : servicio.descripcionCorta}
                    </p>

                    {servicio.textoCTA && servicio.urlCTA && (() => {
                      const isComingSoon = servicio.textoCTA.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes('proximamente');

                      if (isComingSoon) {
                        return (
                          <DevelopmentTooltip message="En Desarrollo">
                            <button className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-[#333333] text-gray-400 font-medium rounded-lg cursor-not-allowed border border-dashed border-gray-600 min-h-[48px] text-sm sm:text-base active:scale-[0.98]">
                              {servicio.textoCTA}
                              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </DevelopmentTooltip>
                        );
                      }

                      return (
                        <Link 
                          href={servicio.urlCTA}
                          className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-[#2ECB98] hover:bg-[#26B88A] text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#2ECB98]/20 min-h-[48px] text-sm sm:text-base active:scale-[0.98]"
                        >
                          {servicio.textoCTA}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      );
                    })()}
                  </div>
                  </motion.div>
                </ArchitecturalContainer>
              </SafeScrollAnimatedSection>
            ))}
          </div>
        </div>
    </SectionContainer>
  );
}