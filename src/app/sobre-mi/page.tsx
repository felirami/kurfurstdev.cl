'use client';

import React, { useEffect, useState } from 'react';
import { FaCode, FaLaptopCode, FaRocket, FaGraduationCap, FaAward, FaBriefcase } from 'react-icons/fa';
import SafeScrollAnimatedSection from '@/components/SafeScrollAnimatedSection';
import { ArchitecturalContainer, SectionContainer } from '@/components/UnifiedContainers';
import PageHeader from '@/components/PageHeader';
import { client, isSanityConfigured } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.client';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  interface PerfilData {
    nombre?: string;
    titulo?: string;
    fotoPerfil?: {
      asset: {
        _ref: string;
      };
    };
    ubicacion?: string;
    biografia?: string;
    habilidades?: Array<{
      icon: React.ReactNode;
      name: string;
      level: string;
    }>;
    experiencia?: Array<{
      year: string;
      role: string;
      company: string;
      description: string;
    }>;
  }

  const [perfilData, setPerfilData] = useState<PerfilData | null>(null);
  
  useEffect(() => {
    const fetchPerfil = async () => {
      // Skip fetch if Sanity is not configured
      if (!isSanityConfigured) return;
      
      try {
        const data = await client.fetch(`*[_type == "perfilPersonal"][0]{
          nombre,
          titulo,
          fotoPerfil{
            asset->
          },
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

  const skills = perfilData?.habilidades || [
    { icon: <FaCode className="w-5 h-5 text-[#2ECB98]" />, name: 'Desarrollo Frontend', level: 'Avanzado' },
    { icon: <FaLaptopCode className="w-5 h-5 text-[#2ECB98]" />, name: 'Desarrollo Backend', level: 'Avanzado' },
    { icon: <FaRocket className="w-5 h-5 text-[#2ECB98]" />, name: 'Optimización y SEO', level: 'Avanzado' },
  ];

  const experience = perfilData?.experiencia || [
    {
      year: '2021 - PRESENTE',
      role: 'DESARROLLADOR FULL STACK',
      company: 'Proyectos Freelance',
      description: 'He trabajado con startups y empresas para crear productos desde cero, definiendo la arquitectura, desarrollando tanto el frontend como el backend, y desplegando en la nube.',
    },
    {
      year: '2019 - 2021',
      role: 'DESARROLLADOR FRONTEND',
      company: 'Agencia Digital Creativa',
      description: 'Fui responsable de traducir diseños complejos en interfaces de usuario interactivas y responsivas, utilizando React y Next.js para asegurar un rendimiento óptimo.',
    },
  ];

  return (
    <SectionContainer withAura={true}>
      <div className="max-w-7xl mx-auto pt-24">
          <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
            <PageHeader 
              subtitle="Sobre Mí"
              title="DESARROLLADOR FULL STACK"
              description="Transformo ideas en soluciones digitales reales. Cada línea de código tiene un propósito: hacer que tu negocio crezca."
            />
          </SafeScrollAnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <SafeScrollAnimatedSection delay={0.1}>
              <div className="relative">
                <ArchitecturalContainer className="p-4 sm:p-6 md:p-8">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    {perfilData?.fotoPerfil ? (
                      <Image 
                        src={urlFor(perfilData.fotoPerfil).url()} 
                        alt={`${perfilData.nombre || 'Andrés'} - ${perfilData.titulo || 'Desarrollador Full Stack'}`}
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#30E0A0]/20 to-[#2ECB98]/40 flex items-center justify-center">
                        <FaCode className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-[#30E0A0]" />
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                      {perfilData?.nombre || 'ANDRÉS KURFÜRST'}
                    </h3>
                    <p className="text-[#2ECB98] font-medium text-sm">
                      {perfilData?.titulo || 'FULL STACK DEVELOPER'}
                    </p>
                    <p className="text-[#BBBBBB] text-xs mt-2">
                      {perfilData?.ubicacion || 'Valparaíso, Chile'}
                    </p>
                  </div>
                </ArchitecturalContainer>
              </div>
            </SafeScrollAnimatedSection>

            <SafeScrollAnimatedSection delay={0.2}>
              <div className="space-y-6 sm:space-y-8">
                
                <ArchitecturalContainer>
                  <div className="flex items-baseline mb-6">
                    <FaGraduationCap className="w-6 h-6 text-[#2ECB98] mr-3 flex-shrink-0" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">MI HISTORIA</h2>
                  </div>
                  
                  <div className="space-y-4 section-subtitle leading-relaxed">
                    <p>
                      Llevo más de 3 años construyendo aplicaciones web que realmente funcionan. No me conformo 
                      con código que &quot;simplemente funciona&quot; - busco soluciones elegantes que resuelvan problemas reales.
                    </p>
                    <p>
                      Mi stack favorito incluye React, Next.js y TypeScript en el frontend, con Node.js y bases de datos 
                      modernas en el backend. Pero la tecnología es solo la herramienta - lo importante es entender 
                      qué necesita tu negocio.
                    </p>
                    <p>
                      ¿Mi filosofía? Cada proyecto debe generar valor real. Si no mejora tu proceso, aumenta tus ventas 
                      o facilita la vida de tus usuarios, entonces no vale la pena construirlo.
                    </p>
                  </div>
                </ArchitecturalContainer>

                <ArchitecturalContainer>
                  <div className="flex items-baseline mb-6">
                    <FaAward className="w-6 h-6 text-[#2ECB98] mr-3 flex-shrink-0" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">ESPECIALIDADES</h2>
                  </div>
                  
                  <div className="grid gap-4">
                    {skills.map((skill: { icon: React.ReactNode; name: string; level: string }, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-[#111111] rounded-xl border border-[#333333] hover:border-[#2ECB98] transition-all duration-300">
                        <div className="flex items-center">
                          <div className="p-2 bg-[#2ECB98]/10 rounded-full mr-4">
                            {skill.icon}
                          </div>
                          <span className="text-white font-medium uppercase tracking-wide">{skill.name}</span>
                        </div>
                        <span className="text-[#2ECB98] text-sm font-medium">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </ArchitecturalContainer>

              </div>
            </SafeScrollAnimatedSection>
          </div>

          <ArchitecturalContainer className="mt-16">
            <div className="flex items-baseline mb-8">
              <FaBriefcase className="w-6 h-6 text-[#2ECB98] mr-3 flex-shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider">EXPERIENCIA</h2>
            </div>
              
              <div className="space-y-6">
                {experience.map((exp: { year: string; role: string; company: string; description: string }, index: number) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center p-6 bg-[#111111] rounded-xl border border-[#333333] hover:border-[#2ECB98] transition-all duration-300">
                    <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0">
                      <span className="text-[#2ECB98] font-bold text-sm uppercase tracking-wider">{exp.year}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">{exp.role}</h3>
                      <p className="text-[#2ECB98] font-medium mb-2">{exp.company}</p>
                      <p className="section-subtitle">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
          </ArchitecturalContainer>

          <ArchitecturalContainer className="mt-16 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
              <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
                Colaboremos
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-6">
              ¿TIENES UN PROYECTO EN MENTE?
            </h2>
              
            <p className="section-subtitle mb-8 max-w-2xl mx-auto">
              ¿Tienes una idea que quieres convertir en realidad? Hablemos. Me encanta escuchar 
              nuevos desafíos y encontrar la mejor forma de resolverlos.
            </p>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4"
              >
                INICIAR PROYECTO
              </Link>
              <Link
                href="/portafolio"
                className="px-8 py-3 text-white border border-[#333333] rounded-xl font-medium text-sm uppercase tracking-wider hover:border-[#2ECB98] hover:text-[#2ECB98] transition-all duration-300"
              >
                VER PORTAFOLIO
              </Link>
            </div>
          </ArchitecturalContainer>

        </div>
    </SectionContainer>
  );
};

export default AboutPage;
