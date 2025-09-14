'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket, FaCrown, FaArrowRight, FaWhatsapp, FaStar, FaShieldAlt, FaCog, FaLightbulb, FaTachometerAlt, FaHeadset, FaChartLine } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiSanity, SiVercel } from 'react-icons/si';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import GlassContainer from '@/components/GlassContainer';

const OnyxHubPage = () => {
  const benefits = [
    { icon: <FaTachometerAlt className="w-8 h-8 text-[#8A2BE2]" />, title: "Desarrollo Acelerado", description: "Arquitectura optimizada que reduce tiempos de desarrollo sin comprometer calidad técnica." },
    { icon: <FaShieldAlt className="w-8 h-8 text-[#8A2BE2]" />, title: "Seguridad Integral", description: "Infraestructura robusta con protocolos de seguridad empresarial y respaldo automático." },
    { icon: <FaCog className="w-8 h-8 text-[#8A2BE2]" />, title: "Stack Tecnológico Avanzado", description: "Construido sobre tecnologías modernas que garantizan escalabilidad y rendimiento óptimo." },
    { icon: <FaLightbulb className="w-8 h-8 text-[#8A2BE2]" />, title: "Gestión Intuitiva", description: "Interfaz elegante y funcional que permite administrar contenido sin conocimientos técnicos." },
    { icon: <FaChartLine className="w-8 h-8 text-[#8A2BE2]" />, title: "Optimización Automática", description: "SEO integrado con métricas de rendimiento y análisis de conversión en tiempo real." },
    { icon: <FaHeadset className="w-8 h-8 text-[#8A2BE2]" />, title: "Soporte Especializado", description: "Acompañamiento técnico directo con el equipo de desarrollo durante todo el proceso." }
  ];

  const techStack = [
    { icon: <SiNextdotjs className="w-12 h-12" />, name: "Next.js 15", description: "Framework React de última generación" },
    { icon: <SiReact className="w-12 h-12" />, name: "React 19", description: "Biblioteca UI más avanzada" },
    { icon: <SiTypescript className="w-12 h-12" />, name: "TypeScript", description: "Código robusto y escalable" },
    { icon: <SiTailwindcss className="w-12 h-12" />, name: "Tailwind CSS", description: "Diseño responsive perfecto" },
    { icon: <SiSanity className="w-12 h-12" />, name: "Sanity CMS", description: "Gestión de contenido premium" },
    { icon: <SiVercel className="w-12 h-12" />, name: "Vercel", description: "Hosting ultra-rápido global" }
  ];

  const comparison = [
    { feature: "Velocidad de carga", onyx: "< 1 segundo", competitors: "3-5 segundos", advantage: true },
    { feature: "Tiempo de desarrollo", onyx: "2-3 semanas", competitors: "2-3 meses", advantage: true },
    { feature: "Costo de mantenimiento", onyx: "$0/mes", competitors: "$50-200/mes", advantage: true },
    { feature: "Actualizaciones", onyx: "Automáticas", competitors: "Manuales", advantage: true },
    { feature: "Soporte técnico", onyx: "24/7 Premium", competitors: "Limitado", advantage: true },
    { feature: "Escalabilidad", onyx: "Ilimitada", competitors: "Limitada", advantage: true }
  ];

  const testimonials = [
    {
      name: "Elena Morales",
      company: "Estudio Creativo",
      text: "La precisión técnica de Onyx Hub se refleja en cada aspecto de nuestro sitio. Una inversión que se justifica por sí sola.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      company: "Consultoría Estratégica",
      text: "La gestión de contenido es intuitiva y profesional. Exactamente lo que necesitábamos para nuestro crecimiento digital.",
      rating: 5
    },
    {
      name: "Patricia Vega",
      company: "Arquitectura Moderna",
      text: "El rendimiento y la elegancia del diseño superaron nuestras expectativas. Onyx Hub define nuevos estándares.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen text-white relative">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 border border-purple-500/30 transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 border border-purple-500/20 transform -rotate-12"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="relative inline-flex items-center gap-4">
                  {/* Crown with glow effect */}
                  <div className="relative">
                    <FaCrown className="w-16 h-16 text-[#8A2BE2] drop-shadow-[0_0_20px_rgba(138,43,226,0.6)]" />
                    <div className="absolute inset-0 w-16 h-16">
                      <FaCrown className="w-16 h-16 text-yellow-400 opacity-30 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Enhanced title with better gradient */}
                  <h1 className="text-6xl md:text-8xl font-bold font-['Oswald'] leading-none tracking-tight">
                    <span className="bg-gradient-to-r from-[#8A2BE2] via-[#9A3BF2] to-[#B84CFF] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(138,43,226,0.3)]">
                      ONYX
                    </span>
                    <span className="ml-4 bg-gradient-to-r from-[#B84CFF] via-[#8A2BE2] to-[#6A1B9A] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(138,43,226,0.3)]">
                      HUB
                    </span>
                  </h1>
                </div>
              </motion.div>
              
              {/* Accent Line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                  CMS Premium
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl font-bold text-[#EAEAEA] mb-8 font-['Oswald'] leading-tight tracking-tight"
              >
                Arquitectura Digital de Precisión
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative mb-8"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                <p className="text-[#EAEAEA] text-lg md:text-xl leading-relaxed max-w-4xl mx-auto [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                  Desarrollado con tecnología de vanguardia, Onyx Hub representa la evolución natural 
                  del desarrollo web profesional. Una plataforma donde la <span className="text-[#8A2BE2]">precisión técnica</span> 
                  se encuentra con la elegancia funcional.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/servicios#planes"
                  className="group relative bg-[#8A2BE2] text-white font-['Oswald'] font-bold text-lg px-10 py-4 uppercase tracking-wider transition-all duration-300 hover:bg-[#9A3BF2] hover:shadow-lg hover:shadow-[#8A2BE2]/25 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] w-fit"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver Planes
                    <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#9A3BF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <a
                  href="https://wa.me/56912345678?text=Hola! Quiero conocer más sobre Onyx Hub"
                  className="group relative bg-transparent border-2 border-[#8A2BE2] text-[#8A2BE2] font-['Oswald'] font-bold text-lg px-8 py-3 uppercase tracking-wider transition-all duration-300 hover:bg-[#8A2BE2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] w-fit"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaWhatsapp />
                    Consulta
                  </span>
                  <div className="absolute inset-0 bg-[#8A2BE2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </motion.div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedSection>
            <GlassContainer className="p-8 mb-12">
              <div className="text-center">
                {/* Accent Line */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-px bg-[#8A2BE2]"></div>
                  <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                    Diferenciación
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-6 font-['Oswald'] leading-tight tracking-tight">
                  Precisión en Cada Componente
                </h2>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                  <p className="text-[#EAEAEA] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                    Cada elemento ha sido diseñado con propósito específico, 
                    creando una experiencia digital que trasciende lo convencional
                  </p>
                </div>
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimatedSection key={index} delay={index * 0.1}>
                <div className="h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#8A2BE2]/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-[#8A2BE2]/10 rounded-full group-hover:bg-[#8A2BE2]/20 transition-all duration-300">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 font-['Oswald']">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedSection>
            <GlassContainer className="p-8 mb-12">
              <div className="text-center">
                {/* Accent Line */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-px bg-[#8A2BE2]"></div>
                  <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                    Stack Tecnológico
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-6 font-['Oswald'] leading-tight tracking-tight">
                  Arquitectura de Vanguardia
                </h2>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                  <p className="text-[#EAEAEA] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                    Construido sobre las tecnologías más avanzadas del ecosistema web moderno
                  </p>
                </div>
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-8">
            {techStack.map((tech, index) => (
              <ScrollAnimatedSection key={index} delay={index * 0.1}>
                <div className="p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#8A2BE2]/30 transition-all duration-300 group">
                  <div className="mb-4 flex justify-center p-3 bg-[#8A2BE2]/10 rounded-full group-hover:bg-[#8A2BE2]/20 transition-all duration-300">{tech.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-['Oswald']">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedSection>
            <GlassContainer className="p-8 mb-12">
              <div className="text-center">
                {/* Accent Line */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-px bg-[#8A2BE2]"></div>
                  <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                    Comparativa
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-6 font-['Oswald'] leading-tight tracking-tight">
                  Análisis Técnico Comparativo
                </h2>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                  <p className="text-[#EAEAEA] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                    Evaluación objetiva frente a plataformas convencionales del mercado
                  </p>
                </div>
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection delay={0.2}>
            <GlassContainer className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-6 px-6 text-white font-bold">Característica</th>
                    <th className="py-6 px-6 text-[#8A2BE2] font-bold">Onyx Hub</th>
                    <th className="py-6 px-6 text-gray-400 font-bold">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="border-b border-white/10"
                    >
                      <td className="py-6 px-6 text-white">{item.feature}</td>
                      <td className="py-6 px-6 text-green-400">✓ {item.onyx}</td>
                      <td className="py-6 px-6 text-red-400">✗ {item.competitors}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </GlassContainer>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedSection>
            <GlassContainer className="p-8 mb-12">
              <div className="text-center">
                {/* Accent Line */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-px bg-[#8A2BE2]"></div>
                  <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                    Testimonios
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-6 font-['Oswald'] leading-tight tracking-tight">
                  Experiencias Profesionales
                </h2>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                  <p className="text-[#EAEAEA] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                    Empresas que han elegido la excelencia técnica como base de su estrategia digital
                  </p>
                </div>
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimatedSection key={index} delay={index * 0.1}>
                <div className="p-8 h-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#8A2BE2]/30 transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimatedSection>
            <GlassContainer className="p-8">
              {/* Accent Line */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                  Conversión
                </div>
              </div>
              
              <div className="text-center">
                <div className="mb-12">
                  <FaRocket className="w-16 h-16 text-[#8A2BE2] mx-auto mb-8" />
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Oswald'] leading-tight tracking-tight">
                    Eleva tu Presencia Digital
                  </h2>
                  
                  <div className="relative mb-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                    <p className="text-[#EAEAEA] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                      Únete a las empresas que han elegido la excelencia técnica 
                      como base de su estrategia digital
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link
                      href="/servicios#planes"
                      className="group relative bg-[#8A2BE2] text-white font-['Oswald'] font-bold text-lg px-10 py-4 uppercase tracking-wider transition-all duration-300 hover:bg-[#9A3BF2] hover:shadow-lg hover:shadow-[#8A2BE2]/25 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] w-fit"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Ver Planes
                        <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#9A3BF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    <a
                      href="https://wa.me/56912345678?text=Hola! Quiero una demostración personalizada de Onyx Hub"
                      className="group relative bg-transparent border-2 border-[#8A2BE2] text-[#8A2BE2] font-['Oswald'] font-bold text-lg px-8 py-3 uppercase tracking-wider transition-all duration-300 hover:bg-[#8A2BE2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] w-fit"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FaWhatsapp />
                        Consulta
                      </span>
                      <div className="absolute inset-0 bg-[#8A2BE2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                  </div>

                  <p className="text-[#EAEAEA]/60 text-sm tracking-wide">
                    Desarrollo profesional • Soporte especializado • Resultados garantizados
                  </p>
                </div>
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default OnyxHubPage;
