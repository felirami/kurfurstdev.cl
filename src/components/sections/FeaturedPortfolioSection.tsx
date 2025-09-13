// src/components/sections/FeaturedPortfolioSection.tsx
import { FeaturedPortfolioSectionData } from "@/types";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

type Props = {
  section: FeaturedPortfolioSectionData;
};

export default function FeaturedPortfolioSection({ section }: Props) {
  const { titulo, subtitulo, proyectosDestacados = [] } = section;

  return (
    <ScrollAnimatedSection>
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-8 w-px h-24 bg-[#8A2BE2]"></div>
          <div className="absolute bottom-20 right-12 w-20 h-px bg-[#8A2BE2]"></div>
          <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-px h-12 bg-gradient-to-b from-[#8A2BE2] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollAnimatedSection direction="up" delay={0.1} duration={0.4}>
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-px bg-[#8A2BE2]"></div>
                <div className="mx-4 text-[#8A2BE2] text-sm font-medium tracking-[0.3em] uppercase">
                  Proyectos Destacados
                </div>
                <div className="w-12 h-px bg-[#8A2BE2]"></div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection direction="up" delay={0.15} duration={0.4}>
              <h2 className="font-['Oswald'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAEAEA] uppercase tracking-tight mb-6">
                {titulo}
              </h2>
            </ScrollAnimatedSection>

            {subtitulo && (
              <ScrollAnimatedSection direction="up" delay={0.2} duration={0.4}>
                <div className="max-w-3xl mx-auto">
                  <p className="text-[#EAEAEA]/80 text-lg md:text-xl leading-relaxed">
                    {subtitulo}
                  </p>
                </div>
              </ScrollAnimatedSection>
            )}
          </div>

          {/* Portfolio Grid */}
          <ScrollAnimatedSection direction="up" delay={0.25} duration={0.4}>
            <div className="mt-12">
              <PortfolioGrid proyectos={proyectosDestacados} />
            </div>
          </ScrollAnimatedSection>

          {/* Bottom accent */}
          <ScrollAnimatedSection direction="fade" delay={0.3} duration={0.3}>
            <div className="flex items-center justify-center mt-16">
              <div className="w-6 h-px bg-[#8A2BE2]"></div>
              <div className="mx-2 w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
              <div className="w-6 h-px bg-[#8A2BE2]"></div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
}
