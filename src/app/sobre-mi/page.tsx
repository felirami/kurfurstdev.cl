'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaGraduationCap, FaAward, FaBriefcase } from 'react-icons/fa';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import GlassContainer from '@/components/GlassContainer';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.client';

const AboutPage = () => {
  const [perfilData, setPerfilData] = useState<any>(null);
  
  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const data = await client.fetch(`*[_type == "perfilPersonal"][0]{
          nombre,
          titulo,
          fotoPerfil,
          ubicacion,
          biografia,
          habilidades,
          experiencia
        }`);
        setPerfilData(data);
      } catch (error) {
        console.error('Error fetching perfil:', error);
      }
    };
    
    fetchPerfil();
  }, []);

  const defaultSkills = [
    { icon: <FaCode className="w-8 h-8 text-[#8A2BE2]" />, name: "Frontend Development", level: "Experto" },
    { icon: <FaLaptopCode className="w-8 h-8 text-[#8A2BE2]" />, name: "Backend Development", level: "Avanzado" },
    { icon: <FaRocket className="w-8 h-8 text-[#8A2BE2]" />, name: "Full Stack Solutions", level: "Experto" }
  ];

  const defaultExperience = [
    { year: "2023-2025", role: "Desarrollador Full Stack", company: "KurfurstDev", description: "Desarrollo de soluciones web personalizadas con tecnologías modernas" },
    { year: "2022-2023", role: "Frontend Developer", company: "Freelance", description: "Creación de interfaces de usuario elegantes y funcionales" },
    { year: "2021-2022", role: "Web Developer", company: "Proyectos Personales", description: "Desarrollo de aplicaciones web con React y Node.js" }
  ];

  const skills = perfilData?.habilidades || defaultSkills;
  const experience = perfilData?.experiencia || defaultExperience;

  return (
    <div className="min-h-screen text-white relative pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedSection>
            <GlassContainer className="p-8 mb-12">
              <div className="text-center">
                {/* Accent Line */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-px bg-[#8A2BE2]"></div>
                  <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                    Sobre Mí
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-6 font-['Oswald'] leading-tight tracking-tight">
                  Desarrollador Full Stack
                </h1>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -left-6 top-0 w-px h-full bg-gradient-to-b from-[#8A2BE2] to-transparent opacity-50"></div>
                  <p className="text-[#EAEAEA] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto [text-shadow:_0_3px_8px_rgb(0_0_0_/_80%)]">
                    Especializado en crear experiencias digitales excepcionales con tecnologías de vanguardia
                  </p>
                </div>
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Profile Photo */}
            <ScrollAnimatedSection delay={0.1}>
              <div className="relative">
                <GlassContainer className="p-8">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    {perfilData?.fotoPerfil ? (
                      <img 
                        src={urlFor(perfilData.fotoPerfil).url()} 
                        alt={`${perfilData.nombre || 'Andrés'} - ${perfilData.titulo || 'Desarrollador Full Stack'}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#8A2BE2]/20 to-[#8A2BE2]/40 flex items-center justify-center">
                        <FaCode className="w-24 h-24 text-[#8A2BE2]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8A2BE2]/20 to-transparent"></div>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Oswald']">
                      {perfilData?.nombre || 'Andrés Kurfürst'}
                    </h3>
                    <p className="text-[#8A2BE2] font-medium">
                      {perfilData?.titulo || 'Full Stack Developer'}
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      {perfilData?.ubicacion || 'Valparaíso, Chile'}
                    </p>
                  </div>
                </GlassContainer>
              </div>
            </ScrollAnimatedSection>

            {/* Right Column - About Content */}
            <ScrollAnimatedSection delay={0.2}>
              <div className="space-y-8">
                
                {/* About Text */}
                <GlassContainer className="p-8">
                  <div className="flex items-center mb-6">
                    <FaGraduationCap className="w-6 h-6 text-[#8A2BE2] mr-3" />
                    <h2 className="text-2xl font-bold text-white font-['Oswald']">Mi Historia</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Soy un desarrollador full stack apasionado por crear soluciones digitales que combinan 
                      funcionalidad excepcional con diseño elegante. Mi enfoque se centra en la precisión 
                      técnica y la atención al detalle.
                    </p>
                    <p>
                      Con experiencia en tecnologías modernas como React, Next.js, TypeScript y Node.js, 
                      me especializo en desarrollar aplicaciones web escalables y de alto rendimiento que 
                      impulsan el crecimiento de los negocios.
                    </p>
                    <p>
                      Cada proyecto es una oportunidad para superar expectativas y entregar resultados 
                      que marquen la diferencia en el mundo digital.
                    </p>
                  </div>
                </GlassContainer>

                {/* Skills */}
                <GlassContainer className="p-8">
                  <div className="flex items-center mb-6">
                    <FaAward className="w-6 h-6 text-[#8A2BE2] mr-3" />
                    <h2 className="text-2xl font-bold text-white font-['Oswald']">Especialidades</h2>
                  </div>
                  
                  <div className="grid gap-4">
                    {skills.map((skill: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center">
                          <div className="p-2 bg-[#8A2BE2]/10 rounded-full mr-4">
                            {skill.icon}
                          </div>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-[#8A2BE2] text-sm font-medium">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </GlassContainer>

              </div>
            </ScrollAnimatedSection>
          </div>

          {/* Experience Section */}
          <ScrollAnimatedSection delay={0.3}>
            <GlassContainer className="p-8 mt-16">
              <div className="flex items-center mb-8">
                <FaBriefcase className="w-6 h-6 text-[#8A2BE2] mr-3" />
                <h2 className="text-3xl font-bold text-white font-['Oswald']">Experiencia</h2>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp: any, index: number) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0">
                      <span className="text-[#8A2BE2] font-bold text-sm">{exp.year}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-1 font-['Oswald']">{exp.role}</h3>
                      <p className="text-[#8A2BE2] font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>

          {/* CTA Section */}
          <ScrollAnimatedSection delay={0.4}>
            <GlassContainer className="p-8 mt-16 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                  Colaboremos
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6 font-['Oswald']">
                ¿Tienes un proyecto en mente?
              </h2>
              
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Estoy siempre abierto a nuevos desafíos y oportunidades de colaboración. 
                Hablemos sobre cómo puedo ayudarte a materializar tu visión digital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="group relative bg-[#8A2BE2] text-white font-['Oswald'] font-bold text-lg px-8 py-4 uppercase tracking-wider transition-all duration-300 hover:bg-[#9A3BF2] hover:shadow-lg hover:shadow-[#8A2BE2]/25 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
                >
                  <span className="relative z-10">Iniciar Proyecto</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#9A3BF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/portafolio"
                  className="group relative bg-transparent border-2 border-[#8A2BE2] text-[#8A2BE2] font-['Oswald'] font-bold text-lg px-8 py-4 uppercase tracking-wider transition-all duration-300 hover:bg-[#8A2BE2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
                >
                  <span className="relative z-10">Ver Portafolio</span>
                  <div className="absolute inset-0 bg-[#8A2BE2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </div>
            </GlassContainer>
          </ScrollAnimatedSection>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
