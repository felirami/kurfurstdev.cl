// src/app/portafolio/page.tsx
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { ProyectoData } from "@/types";

const query = groq`*[_type == "proyecto"] | order(_createdAt desc)`;

export const metadata: Metadata = {
  title: "Portafolio | KurfurstDev",
  description: "Conoce los proyectos en los que hemos trabajado.",
};

export default async function PortfolioPage() {
  const proyectos: ProyectoData[] = await client.fetch(query);

  return (
    <main className="relative bg-transparent min-h-screen py-20 overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-px h-32 bg-[#8A2BE2]"></div>
        <div className="absolute bottom-32 right-24 w-24 h-px bg-[#8A2BE2]"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#8A2BE2] transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-16 bg-gradient-to-b from-[#8A2BE2] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <ScrollAnimatedSection direction="fade" duration={0.4}>
          <div className="text-center mb-20">
            <ScrollAnimatedSection direction="up" delay={0.1} duration={0.4}>
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                <div className="mx-6 text-[#8A2BE2] text-sm font-medium tracking-[0.3em] uppercase">
                  Nuestros Trabajos
                </div>
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
              </div>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection direction="up" delay={0.15} duration={0.4}>
              <h1 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight mb-8">
                PORTAFOLIO
              </h1>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection direction="up" delay={0.2} duration={0.4}>
              <div className="relative max-w-4xl mx-auto">
                <p className="text-[#EAEAEA]/80 text-lg md:text-xl leading-relaxed">
                  Una selección de proyectos que demuestran nuestra capacidad para crear soluciones digitales robustas y con un diseño impecable.
                </p>
              </div>
            </ScrollAnimatedSection>
          </div>
        </ScrollAnimatedSection>

        {/* Portfolio Grid */}
        <ScrollAnimatedSection direction="up" delay={0.25} duration={0.4}>
          <div className="mt-16">
            <PortfolioGrid proyectos={proyectos} />
          </div>
        </ScrollAnimatedSection>

        {/* Bottom accent */}
        <ScrollAnimatedSection direction="fade" delay={0.3} duration={0.3}>
          <div className="flex items-center justify-center mt-20">
            <div className="w-8 h-px bg-[#8A2BE2]"></div>
            <div className="mx-3 w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
            <div className="w-8 h-px bg-[#8A2BE2]"></div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </main>
  );
}