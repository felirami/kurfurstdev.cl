// src/components/sections/TestimonialsSection.tsx
import { TestimonialsSectionData } from "@/types";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import ScrollAnimatedSection from "../ScrollAnimatedSection";

type Props = {
  section: TestimonialsSectionData;
};

export default function TestimonialsSection({ section }: Props) {
  const { titulo, testimonios = [] } = section;

  return (
    <ScrollAnimatedSection>
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-12 w-px h-56 bg-[#8A2BE2] opacity-15"></div>
        <div className="absolute bottom-24 left-20 w-48 h-px bg-[#8A2BE2] opacity-20"></div>
        <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-[#8A2BE2] transform rotate-45 opacity-25"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-[#8A2BE2]"></div>
            <div className="mx-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
              Testimonios
            </div>
            <div className="w-16 h-px bg-[#8A2BE2]"></div>
          </div>
          
          <h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight">
            {titulo}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div 
              key={testimonio._key} 
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-[#8A2BE2] transition-all duration-500"></div>
              
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-[#8A2BE2] opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Testimonial text */}
              <blockquote className="text-[#EAEAEA]/90 text-lg leading-relaxed mb-8 italic">
                "{testimonio.texto}"
              </blockquote>

              {/* Author section */}
              <div className="flex items-center">
                {testimonio.avatar && (
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden border border-[#8A2BE2]/30">
                    <Image
                      src={urlFor(testimonio.avatar).url()}
                      alt={`Foto de ${testimonio.autor}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="ml-4">
                  <div className="flex items-center">
                    <p className="font-['Oswald'] font-bold text-[#EAEAEA] uppercase tracking-wide">
                      {testimonio.autor}
                    </p>
                    <div className="ml-3 w-6 h-px bg-[#8A2BE2]/40"></div>
                  </div>
                  <div className="text-[#8A2BE2] text-sm font-medium">
                    Cliente #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Bottom geometric accent */}
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollAnimatedSection>
  );
}