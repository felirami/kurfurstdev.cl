// src/components/sections/TechnologiesSection.tsx
"use client";
import { TechnologiesSectionData } from "@/types";
import ScrollAnimatedSection from "../ScrollAnimatedSection";
import { motion } from "framer-motion";
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

// Predefined tech stack with React Icons
const techStack = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Framework de React para aplicaciones web modernas y optimizadas",
    color: "#000000",
    url: "https://nextjs.org"
  },
  {
    name: "React",
    icon: SiReact,
    description: "Librería JavaScript para crear interfaces de usuario interactivas",
    color: "#61DAFB",
    url: "https://reactjs.org"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "JavaScript con tipado estático para mayor robustez y escalabilidad",
    color: "#3178C6",
    url: "https://typescriptlang.org"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Framework CSS utility-first para diseño rápido y consistente",
    color: "#06B6D4",
    url: "https://tailwindcss.com"
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    description: "Librería de animaciones para React con API declarativa",
    color: "#0055FF",
    url: "https://framer.com/motion"
  },
  {
    name: "Sanity CMS",
    icon: SiSanity,
    description: "CMS headless flexible para gestión de contenido estructurado",
    color: "#F03E2F",
    url: "https://sanity.io"
  },
  {
    name: "Vercel",
    icon: SiVercel,
    description: "Plataforma de deployment optimizada para aplicaciones frontend",
    color: "#000000",
    url: "https://vercel.com"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Runtime de JavaScript para desarrollo backend y tooling",
    color: "#339933",
    url: "https://nodejs.org"
  }
];

export default function TechnologiesSection({ section }: Props) {
  const { titulo, subtitulo, estiloVisualizacion, mostrarSeccion } = section;

  if (!mostrarSeccion) return null;

  const getIconStyles = () => {
    switch (estiloVisualizacion) {
      case 'monochrome':
        return 'text-gray-400 group-hover:text-[#8A2BE2] transition-colors duration-300';
      case 'glow':
        return 'group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300';
      default: // elegant
        return 'transition-all duration-300 group-hover:scale-110';
    }
  };

  return (
    <ScrollAnimatedSection>
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-20 w-px h-40 bg-[#8A2BE2]"></div>
          <div className="absolute bottom-20 left-16 w-32 h-px bg-[#8A2BE2]"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-px h-20 bg-gradient-to-b from-[#8A2BE2] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollAnimatedSection direction="up" delay={0.1} duration={0.6}>
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                <div className="mx-6 text-[#8A2BE2] text-sm font-medium tracking-[0.3em] uppercase">
                  Stack Tecnológico
                </div>
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection direction="up" delay={0.15} duration={0.6}>
              <h2 className="font-['Oswald'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAEAEA] uppercase tracking-tight mb-6">
                {titulo}
              </h2>
            </ScrollAnimatedSection>

            {subtitulo && (
              <ScrollAnimatedSection direction="up" delay={0.2} duration={0.6}>
                <p className="text-[#EAEAEA]/80 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                  {subtitulo}
                </p>
              </ScrollAnimatedSection>
            )}
          </div>

          {/* Technologies Grid */}
          <ScrollAnimatedSection direction="up" delay={0.25} duration={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12 items-center justify-items-center">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <ScrollAnimatedSection
                    key={tech.name}
                    delay={0.3 + (index * 0.1)}
                    duration={0.5}
                  >
                    <motion.div
                      className="group relative flex flex-col items-center cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => window.open(tech.url, '_blank')}
                    >
                      {/* Technology Icon */}
                      <div className="relative mb-4">
                        <IconComponent 
                          className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ${getIconStyles()}`}
                          style={{ 
                            color: estiloVisualizacion === 'elegant' ? tech.color : undefined 
                          }}
                        />
                      </div>

                      {/* Technology Name */}
                      <h3 className="font-['Oswald'] text-xs md:text-sm font-bold text-[#EAEAEA] uppercase tracking-wide text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tech.name}
                      </h3>

                      {/* Hover Description Tooltip */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-[#1A1A1A]/95 backdrop-blur-sm border border-[#8A2BE2]/30 rounded-lg p-4 min-w-[280px] max-w-[320px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                        <div className="text-center">
                          <h4 className="font-['Oswald'] text-sm font-bold text-[#8A2BE2] uppercase tracking-wide mb-2">
                            {tech.name}
                          </h4>
                          <p className="text-[#EAEAEA]/90 text-xs leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                        {/* Arrow pointing up */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-[#8A2BE2]/30"></div>
                      </div>

                      {/* Geometric accent */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#8A2BE2] transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Subtle glow effect for elegant style */}
                      {estiloVisualizacion === 'elegant' && (
                        <div 
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                          style={{ backgroundColor: tech.color }}
                        ></div>
                      )}
                    </motion.div>
                  </ScrollAnimatedSection>
                );
              })}
            </div>
          </ScrollAnimatedSection>

          {/* Bottom decorative element */}
          <ScrollAnimatedSection direction="fade" delay={0.8} duration={0.4}>
            <div className="flex items-center justify-center mt-20">
              <div className="w-12 h-px bg-[#8A2BE2]"></div>
              <div className="mx-4 flex space-x-2">
                <div className="w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
                <div className="w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
                <div className="w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
              </div>
              <div className="w-12 h-px bg-[#8A2BE2]"></div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
}
