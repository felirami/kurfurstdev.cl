'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FiCode, 
  FiLayers, 
  FiShield, 
  FiZap, 
  FiTarget, 
  FiCpu, 
  FiArrowRight
} from 'react-icons/fi';
import { ArchitecturalContainer, GradientTitle, SectionContainer } from '@/components/UnifiedContainers';
import SafeScrollAnimatedSection from '@/components/SafeScrollAnimatedSection';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiSanity,
  SiVercel,
  SiFramer
} from 'react-icons/si';

const GeometricGraphic = () => (
  <svg
    width="400"
    height="400"
    viewBox="0 0 400 400"
    className="w-full h-auto max-w-md mx-auto"
    style={{filter: 'drop-shadow(0 0 12px rgba(46, 203, 152, 0.3))'}}
  >
    {/* Background Grid */}
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(46, 203, 152, 0.1)" strokeWidth="0.5"/>
      </pattern>
      <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ECB98" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#1A9B73" stopOpacity="0.4"/>
      </linearGradient>
      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ECB98" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#1A9B73" stopOpacity="0.3"/>
      </linearGradient>
    </defs>
    
    <rect width="400" height="400" fill="url(#grid)"/>
    
    {/* Central Hexagon */}
    <motion.polygon
      points="200,50 300,100 300,200 200,250 100,200 100,100"
      fill="none"
      stroke="url(#primaryGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    
    {/* Rotating Outer Ring */}
    <motion.circle
      cx="200"
      cy="150"
      r="120"
      fill="none"
      stroke="rgba(46, 203, 152, 0.3)"
      strokeWidth="1"
      strokeDasharray="5,5"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Floating Elements */}
    <motion.rect
      x="80"
      y="80"
      width="8"
      height="8"
      fill="#2ECB98"
      transform="rotate(45 84 84)"
      animate={{ y: [80, 70, 80] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    
    <motion.circle
      cx="320"
      cy="320"
      r="4"
      fill="rgba(46, 203, 152, 0.6)"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Connection Lines */}
    <motion.line
      x1="100"
      y1="100"
      x2="300"
      y2="200"
      stroke="rgba(46, 203, 152, 0.2)"
      strokeWidth="1"
      strokeDasharray="2,2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  </svg>
);

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, description: 'Framework de React para aplicaciones web modernas' },
  { name: 'React', icon: SiReact, description: 'Librería JavaScript para interfaces interactivas' },
  { name: 'TypeScript', icon: SiTypescript, description: 'JavaScript con tipado estático' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Framework CSS utility-first' },
  { name: 'Framer Motion', icon: SiFramer, description: 'Librería de animaciones para React' },
  { name: 'Sanity CMS', icon: SiSanity, description: 'CMS headless para gestión de contenido' },
  { name: 'Vercel', icon: SiVercel, description: 'Plataforma de deployment optimizada' },
  { name: 'Node.js', icon: SiNodedotjs, description: 'Runtime de JavaScript para desarrollo' }
];

const comparisons = [
  { feature: 'Tiempo de desarrollo', onyx: '50% más rápido', traditional: 'Proceso estándar' },
  { feature: 'Escalabilidad', onyx: 'Automática', traditional: 'Manual' },
  { feature: 'Mantenimiento', onyx: 'Mínimo', traditional: 'Alto' },
  { feature: 'Performance', onyx: 'Optimizado', traditional: 'Variable' },
  { feature: 'Seguridad', onyx: 'Integrada', traditional: 'Adicional' }
];

export default function OnyxHubPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 40%, rgba(46, 203, 152, 0.12) 0%, rgba(46, 203, 152, 0.08) 25%, rgba(46, 203, 152, 0.04) 50%, transparent 70%),
            radial-gradient(ellipse 80% 60% at 30% 70%, rgba(46, 203, 152, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 100% 70% at 70% 30%, rgba(46, 203, 152, 0.05) 0%, transparent 60%),
            #0D0D0D
          `
        }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <SafeScrollAnimatedSection delay={0.1} duration={0.8} direction="left">
              <ArchitecturalContainer className="flex flex-col justify-center text-left" hover={false}>
                <GradientTitle level={1}>
                  ONYX HUB
                </GradientTitle>
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#2ECB98] to-[#2ECB98] mb-8 mx-auto lg:mx-0 opacity-60"></div>
                <p className="text-xl text-[#BDBDBD] mb-10 leading-relaxed font-normal max-w-lg">
                  No es solo otro CMS. Es la plataforma que convierte tu visión en una aplicación web real, escalable y lista para crecer contigo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2ECB98] to-[#2ECB98] text-black font-medium rounded-lg hover:from-[#2ECB98] hover:to-[#2ECB98] transition-all duration-200 ease-in-out group text-sm shadow-[0_2px_8px_rgba(46,203,152,0.25)]"
                    >
                      Comenzar ahora
                      <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>

            <SafeScrollAnimatedSection delay={0.2} duration={0.8} direction="right">
              <ArchitecturalContainer className="flex items-center justify-center min-h-full" hover={false}>
                <div className="flex items-center justify-center w-full h-full min-h-[400px]">
                  <GeometricGraphic />
                </div>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
            <ArchitecturalContainer className="text-center mb-8" hover={false}>
              <GradientTitle level={2}>
                EXCELENCIA TÉCNICA
              </GradientTitle>
              <p className="text-lg text-[#BDBDBD] max-w-3xl mx-auto font-normal leading-relaxed">
                Cada componente está diseñado para resolver problemas reales. No hay funciones innecesarias, solo herramientas que funcionan.
              </p>
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <SafeScrollAnimatedSection delay={0.2} duration={0.6}>
              <ArchitecturalContainer className="md:col-span-2 md:row-span-2 h-full flex flex-col justify-center text-center p-8">
                <FiCode className="w-16 h-16 mx-auto mb-6" style={{color: '#2ECB98', filter: 'drop-shadow(0 0 8px rgba(46, 203, 152, 0.6))'}} />
                <h3 className="text-2xl font-light mb-4 text-white leading-tight">
                  Precisión en cada componente
                </h3>
                <p className="text-[#BDBDBD] leading-relaxed font-normal">
                  Código limpio, arquitectura sólida y rendimiento que no compromete la funcionalidad. Así construimos aplicaciones que duran.
                </p>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>

            <SafeScrollAnimatedSection delay={0.3} duration={0.6}>
              <ArchitecturalContainer className="md:col-span-2 h-full flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <FiLayers className="w-12 h-12 flex-shrink-0" style={{color: '#2ECB98', filter: 'drop-shadow(0 0 6px rgba(46, 203, 152, 0.5))'}} />
                  <div>
                    <h3 className="text-lg font-light mb-2 text-white">
                      Desarrollo acelerado
                    </h3>
                    <p className="text-[#BDBDBD] text-xs">
                      Componentes reutilizables
                    </p>
                  </div>
                </div>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>

            <SafeScrollAnimatedSection delay={0.4} duration={0.6}>
              <ArchitecturalContainer className="h-full flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <FiShield className="w-12 h-12 flex-shrink-0" style={{color: '#2ECB98', filter: 'drop-shadow(0 0 6px rgba(46, 203, 152, 0.5))'}} />
                  <div>
                    <h3 className="text-lg font-light mb-2 text-white">
                      Seguridad integrada
                    </h3>
                    <p className="text-[#BDBDBD] text-xs">
                      Protección avanzada
                    </p>
                  </div>
                </div>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>

            <SafeScrollAnimatedSection delay={0.5} duration={0.6}>
              <ArchitecturalContainer className="h-full flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <FiZap className="w-12 h-12 flex-shrink-0" style={{color: '#2ECB98', filter: 'drop-shadow(0 0 6px rgba(46, 203, 152, 0.5))'}} />
                  <div>
                    <h3 className="text-lg font-light mb-2 text-white">
                      Performance optimizada
                    </h3>
                    <p className="text-[#BDBDBD] text-xs">
                      Velocidad de carga superior
                    </p>
                  </div>
                </div>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>

            <SafeScrollAnimatedSection delay={0.6} duration={0.6}>
              <ArchitecturalContainer className="h-full flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <FiTarget className="w-12 h-12 flex-shrink-0" style={{color: '#2ECB98', filter: 'drop-shadow(0 0 6px rgba(46, 203, 152, 0.5))'}} />
                  <div>
                    <h3 className="text-lg font-light mb-2 text-white">
                      Escalabilidad automática
                    </h3>
                    <p className="text-[#BDBDBD] text-xs">
                      Crece con tu negocio
                    </p>
                  </div>
                </div>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>

            <SafeScrollAnimatedSection delay={0.7} duration={0.6}>
              <ArchitecturalContainer className="h-full flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <FiCpu className="w-12 h-12 flex-shrink-0" style={{color: '#2ECB98', filter: 'drop-shadow(0 0 6px rgba(46, 203, 152, 0.5))'}} />
                  <div>
                    <h3 className="text-lg font-light mb-2 text-white">
                      IA integrada
                    </h3>
                    <p className="text-[#BDBDBD] text-xs">
                      Inteligencia adaptativa
                    </p>
                  </div>
                </div>
              </ArchitecturalContainer>
            </SafeScrollAnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
            <ArchitecturalContainer className="text-center mb-6" hover={false}>
              <GradientTitle level={2}>
                STACK TECNOLÓGICO
              </GradientTitle>
              <p className="text-lg text-[#BDBDBD] max-w-3xl mx-auto font-normal leading-relaxed">
                Tecnologías de vanguardia seleccionadas para máximo rendimiento y escalabilidad empresarial.
              </p>
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <SafeScrollAnimatedSection key={tech.name} delay={0.1 + index * 0.1} duration={0.6}>
                <ArchitecturalContainer className="text-center p-6 h-full">
                  <tech.icon className="w-12 h-12 mx-auto mb-4" style={{color: '#2ECB98'}} />
                  <h3 className="text-sm font-medium mb-2 text-white uppercase tracking-wider">
                    {tech.name}
                  </h3>
                  <p className="text-[#BDBDBD] text-xs">
                    {tech.description}
                  </p>
                </ArchitecturalContainer>
              </SafeScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
            <ArchitecturalContainer className="text-center mb-6" hover={false}>
              <GradientTitle level={3}>
                ONYX HUB VS DESARROLLO TRADICIONAL
              </GradientTitle>
              <p className="text-[#BDBDBD] max-w-2xl mx-auto">
                Comparación directa que demuestra la superioridad de nuestra metodología
              </p>
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>

          <SafeScrollAnimatedSection delay={0.2} duration={0.6}>
            <ArchitecturalContainer>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-4 px-6 text-[#2ECB98] font-medium uppercase tracking-wider">Característica</th>
                      <th className="text-left py-4 px-6 text-[#2ECB98] font-medium uppercase tracking-wider">Onyx Hub</th>
                      <th className="text-left py-4 px-6 text-zinc-400 font-medium uppercase tracking-wider">Tradicional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comp, index) => (
                      <tr key={index} className="border-b border-zinc-800">
                        <td className="py-4 px-6 text-white font-medium">{comp.feature}</td>
                        <td className="py-4 px-6 text-[#2ECB98]">{comp.onyx}</td>
                        <td className="py-4 px-6 text-zinc-400">{comp.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
            <ArchitecturalContainer className="text-center">
              <GradientTitle level={3}>
                TRANSFORMA TU VISIÓN DIGITAL
              </GradientTitle>
              <p className="text-xl text-[#BDBDBD] mb-8 leading-relaxed">
                Únete a las empresas líderes que han elegido Onyx Hub para revolucionar su presencia digital
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#2ECB98] to-[#2ECB98] text-black font-bold rounded-lg hover:from-[#26B88A] hover:to-[#26B88A] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Comenzar Proyecto
                    <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="/portafolio"
                    className="inline-flex items-center px-10 py-4 border-2 border-[#2ECB98] text-[#2ECB98] font-medium rounded-lg hover:bg-[#2ECB98] hover:text-black transition-all duration-300"
                  >
                    Ver Casos de Éxito
                  </Link>
                </motion.div>
              </div>
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>
        </div>
      </section>
    </div>
  );
}
