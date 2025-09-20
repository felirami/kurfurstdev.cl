import { FeaturedPortfolioSectionData } from "@/types";
import PortfolioGrid from "@/components/PortfolioGrid";
import ArchitecturalContainer from "../ArchitecturalContainer";
import SafeScrollAnimatedSection from "../SafeScrollAnimatedSection";

type Props = {
  section: FeaturedPortfolioSectionData;
};

export default function FeaturedPortfolioSection({ section }: Props) {
  const { titulo, subtitulo, proyectosDestacados = [] } = section;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SafeScrollAnimatedSection delay={0.1}>
          <ArchitecturalContainer className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
            <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
              Portafolio
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
            {titulo || "PROYECTOS QUE IMPULSAN NEGOCIOS"}
          </h2>
          {subtitulo && (
            <p className="section-subtitle max-w-4xl mx-auto">
              {subtitulo}
            </p>
          )}
          </ArchitecturalContainer>
        </SafeScrollAnimatedSection>

        <SafeScrollAnimatedSection delay={0.2}>
          <div className="mt-8">
            <PortfolioGrid proyectos={proyectosDestacados} />
          </div>
        </SafeScrollAnimatedSection>
      </div>
    </section>
  );
}
