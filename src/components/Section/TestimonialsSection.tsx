// src/components/Section/TestimonialsSection.tsx
// DATABASE TEMPLATE - Testimonials Section Reconstruction
// STRICT: Glassmorphism containers ONLY for testimonials, mint green accents

import { TestimonialsSectionData } from "@/types";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import ArchitecturalContainer from "../ArchitecturalContainer";
import GlassmorphismContainer from "../GlassmorphismContainer";

type Props = {
  section: TestimonialsSectionData;
};

export default function TestimonialsSection({ section }: Props) {
  const { titulo, testimonios = [] } = section;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title in Architectural Container */}
        <ArchitecturalContainer className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
            <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
              Testimonios
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
            {titulo || "TESTIMONIOS DE NUESTROS CLIENTES"}
          </h2>
        </ArchitecturalContainer>

        {/* Testimonials Grid - Using Glassmorphism (ONLY allowed here) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <GlassmorphismContainer key={testimonio._key} className="group h-full">
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-[#2ECB98]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Testimonial text */}
              <blockquote className="text-[#BBBBBB] text-lg leading-relaxed mb-8 italic">
                &quot;{testimonio.texto}&quot;
              </blockquote>

              {/* Author section */}
              <div className="flex items-center">
                {testimonio.avatar && (
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-[#333333]">
                    <Image
                      src={urlFor(testimonio.avatar).url()}
                      alt={`Foto de ${testimonio.autor}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="ml-4">
                  <p className="font-medium text-white uppercase tracking-wide">
                    {testimonio.autor}
                  </p>
                  <div className="text-[#2ECB98] text-sm font-medium">
                    Cliente #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </GlassmorphismContainer>
          ))}
        </div>
      </div>
    </section>
  );
}