"use client";
import { TechnologiesSectionData } from "@/types";
import ArchitecturalContainer from "../ArchitecturalContainer";
import SafeScrollAnimatedSection from "../SafeScrollAnimatedSection";
import { useState, useCallback } from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiSanity,
  SiVercel,
  SiNodedotjs
} from "react-icons/si";

type Props = {
  section: TechnologiesSectionData;
};

const techStack = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Framework de React para aplicaciones web modernas y optimizadas"
  },
  {
    name: "React",
    icon: SiReact,
    description: "Librería JavaScript para crear interfaces de usuario interactivas"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "JavaScript con tipado estático para mayor robustez y escalabilidad"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Framework CSS utility-first para diseño rápido y consistente"
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    description: "Librería de animaciones para React con API declarativa"
  },
  {
    name: "Sanity CMS",
    icon: SiSanity,
    description: "CMS headless flexible para gestión de contenido estructurado"
  },
  {
    name: "Vercel",
    icon: SiVercel,
    description: "Plataforma de deployment optimizada para aplicaciones frontend"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Runtime de JavaScript para desarrollo backend y tooling"
  }
];

export default function TechnologiesSection({ section }: Props) {
  const { titulo, subtitulo, mostrarSeccion } = section;
  const [activeTech, setActiveTech] = useState<string | null>(null);

  // Toggle tooltip on tap for mobile
  const handleTechClick = useCallback((techName: string) => {
    setActiveTech(prev => prev === techName ? null : techName);
  }, []);

  // Close tooltip when clicking outside
  const handleContainerClick = useCallback(() => {
    setActiveTech(null);
  }, []);

  if (!mostrarSeccion) return null;

  return (
    <section className="py-10 sm:py-16" onClick={handleContainerClick}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SafeScrollAnimatedSection delay={0.1}>
          <ArchitecturalContainer className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
            <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
              Tecnologías
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
            {titulo || "TECNOLOGÍA DE VANGUARDIA"}
          </h2>
          {subtitulo && (
            <p className="section-subtitle max-w-4xl mx-auto">
              {subtitulo}
            </p>
          )}
        </ArchitecturalContainer>
        </SafeScrollAnimatedSection>

        <SafeScrollAnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {techStack.map((tech) => {
            const IconComponent = tech.icon;
            const isActive = activeTech === tech.name;
            return (
              <div key={tech.name} className="relative">
                <ArchitecturalContainer 
                  className={`group flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] text-center relative transition-all duration-300 cursor-pointer ${
                    isActive ? 'border-[#2ECB98]' : 'hover:border-[#2ECB98]'
                  }`}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handleTechClick(tech.name);
                  }}
                >
                  <div className="mb-3 sm:mb-4">
                    <IconComponent 
                      className={`w-10 h-10 sm:w-12 sm:h-12 transition-colors duration-300 ${
                        isActive ? 'text-[#2ECB98]' : 'text-white group-hover:text-[#2ECB98]'
                      }`}
                    />
                  </div>

                  <h3 className="font-medium text-xs sm:text-sm text-white uppercase tracking-wide">
                    {tech.name}
                  </h3>

                  {/* Desktop: Hover tooltip */}
                  <div className="hidden sm:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-[#111111] border border-[#333333] rounded-xl p-4 min-w-[280px] max-w-[320px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                    <div className="text-center">
                      <h4 className="font-medium text-sm text-[#2ECB98] uppercase tracking-wide mb-2">
                        {tech.name}
                      </h4>
                      <p className="text-[#BBBBBB] text-xs leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-[#333333]"></div>
                  </div>
                </ArchitecturalContainer>

                {/* Mobile: Tap-to-reveal tooltip */}
                {isActive && (
                  <div 
                    className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-[#111111] border border-[#2ECB98] rounded-xl p-4 z-30 animate-in fade-in slide-in-from-top-2 duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="text-center">
                      <h4 className="font-medium text-sm text-[#2ECB98] uppercase tracking-wide mb-2">
                        {tech.name}
                      </h4>
                      <p className="text-[#BBBBBB] text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                    <button 
                      className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTech(null);
                      }}
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          </div>
          {/* Mobile hint */}
          <p className="sm:hidden text-center text-zinc-500 text-xs mt-4">
            Toca para ver detalles
          </p>
        </SafeScrollAnimatedSection>
      </div>
    </section>
  );
}
