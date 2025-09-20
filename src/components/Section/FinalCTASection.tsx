// src/components/Section/FinalCTASection.tsx
// DATABASE TEMPLATE - Final CTA Section
// STRICT: Architectural container, mint green button, no purple colors

import ArchitecturalContainer from "../ArchitecturalContainer";
import Link from "next/link";

interface FinalCTASectionProps {
  titulo?: string;
  subtitulo?: string;
  botonTexto?: string;
  botonUrl?: string;
}

export default function FinalCTASection({
  titulo = "CONSTRUYAMOS TU FUTURO DIGITAL",
  subtitulo = "¿Listo para llevar tu negocio al siguiente nivel? Trabajemos juntos para crear una solución digital que impulse tu crecimiento y conecte con tu audiencia de manera efectiva.",
  botonTexto = "COMENZAR AHORA",
  botonUrl = "/contacto"
}: FinalCTASectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArchitecturalContainer className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
            <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
              Colaboremos
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
          </div>
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-8">
            {titulo}
          </h2>

          {/* Subtitle/Description */}
          {subtitulo && (
            <p className="section-subtitle max-w-4xl mx-auto mb-12">
              {subtitulo}
            </p>
          )}

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link 
              href={botonUrl}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4"
            >
              {botonTexto}
            </Link>
          </div>
        </ArchitecturalContainer>
      </div>
    </section>
  );
}
