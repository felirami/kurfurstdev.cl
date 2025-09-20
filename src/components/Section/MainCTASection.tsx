import ArchitecturalContainer from "../ArchitecturalContainer";
import SafeScrollAnimatedSection from "../SafeScrollAnimatedSection";
import Link from "next/link";

interface MainCTASectionProps {
  titulo?: string;
  subtitulo?: string;
  descripcion?: string;
  botonTexto?: string;
  botonUrl?: string;
}

export default function MainCTASection({
  titulo = "TRANSFORMAMOS TU VISIÓN EN UNA REALIDAD DIGITAL",
  subtitulo = "Desarrollo Web Profesional",
  descripcion = "Creamos experiencias digitales excepcionales que impulsan el crecimiento de tu negocio. Desde sitios web corporativos hasta plataformas de comercio electrónico, nuestro enfoque combina diseño elegante con tecnología de vanguardia.",
  botonTexto = "INICIAR PROYECTO",
  botonUrl = "/contacto"
}: MainCTASectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SafeScrollAnimatedSection delay={0.1}>
          <ArchitecturalContainer className="text-center" accent={true} accentType="scanlines">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
            <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
              Transformamos
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
          </div>
          {subtitulo && (
            <p className="text-[#2ECB98] text-sm font-medium uppercase tracking-wider mb-6">
              {subtitulo}
            </p>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-8">
            {titulo}
          </h2>

          {descripcion && (
            <p className="section-subtitle max-w-4xl mx-auto mb-12">
              {descripcion}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={botonUrl}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4"
            >
              {botonTexto}
            </Link>
            
            <Link 
              href="/portafolio"
              className="px-8 py-3 text-white border border-[#333333] rounded-xl font-medium text-sm uppercase tracking-wider hover:border-[#2ECB98] hover:text-[#2ECB98] transition-all duration-300"
            >
              VER PORTAFOLIO
            </Link>
          </div>
          </ArchitecturalContainer>
        </SafeScrollAnimatedSection>
      </div>
    </section>
  );
}
