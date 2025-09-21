import { ContentSectionData } from "@/types";
import { PortableText } from "@portabletext/react";
import SafeScrollAnimatedSection from "@/components/SafeScrollAnimatedSection";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import ArchitecturalContainer from "@/components/ArchitecturalContainer";

type Props = {
  section: ContentSectionData;
};

const customComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[#BBBBBB] leading-relaxed mb-6 text-lg font-normal">{children}</p>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 mt-8 border-l-3 border-[#2ECB98] pl-4">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold text-[#2ECB98] uppercase tracking-wide mb-3 mt-6 flex items-center">
        <div className="w-2 h-2 bg-[#2ECB98] rounded-full mr-3"></div>
        {children}
      </h4>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="space-y-4 mb-8 ml-0">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="space-y-4 mb-8 ml-0 counter-reset-list">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start bg-[#111111] rounded-xl p-4 border border-[#333333] hover:border-[#2ECB98] transition-all duration-300 mb-4">
        <div className="w-2 h-2 bg-[#2ECB98] rounded-full mt-2 mr-4 flex-shrink-0"></div>
        <div className="text-[#BBBBBB] leading-relaxed flex-1 text-base">{children}</div>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start bg-[#111111] rounded-xl p-4 border border-[#333333] hover:border-[#2ECB98] transition-all duration-300 counter-increment-list mb-4">
        <div className="w-6 h-6 bg-[#2ECB98] rounded-full flex items-center justify-center text-black text-sm font-bold mr-4 flex-shrink-0 before:content-[counter(list-item)]">
        </div>
        <div className="text-[#BBBBBB] leading-relaxed flex-1 text-base">{children}</div>
      </li>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <Link 
        href={value?.href || '#'}
        className="text-[#2ECB98] hover:text-[#2ECB98]/80 underline transition-colors duration-300"
      >
        {children}
      </Link>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-[#2ECB98] font-semibold">{children}</strong>
    ),
  },
  types: {
    cta: ({ value }: { value: { textoBoton: string; urlBoton: string } }) => {
      const { textoBoton, urlBoton } = value;
      return (
        <div className="my-8">
          <Link 
            href={urlBoton}
            className="btn-primary px-6 sm:px-8 py-3 sm:py-4"
          >
            {textoBoton}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      );
    },
  },
};

export default function ContentSection({ section }: Props) {
  const { titulo, imagenPersonal, cuerpo } = section;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {titulo && (
          <SafeScrollAnimatedSection delay={0.1}>
            <ArchitecturalContainer className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
                <div className="mx-6 text-[#2ECB98] text-sm font-medium tracking-[0.3em] uppercase">
                  Bienvenido
                </div>
                <div className="w-24 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
              </div>
              
              <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mb-6">
                {titulo}
              </h2>
              
              <div className="flex items-center justify-center mt-8">
                <div className="w-2 h-2 bg-[#2ECB98] rounded-full"></div>
                <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-transparent mx-4"></div>
                <div className="w-1 h-1 bg-[#2ECB98] rounded-full"></div>
                <div className="w-16 h-px bg-gradient-to-l from-[#2ECB98] to-transparent mx-4"></div>
                <div className="w-2 h-2 bg-[#2ECB98] rounded-full"></div>
              </div>
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>
        )}

        <SafeScrollAnimatedSection delay={0.2}>
          {imagenPersonal ? (
            <div className="max-w-7xl mx-auto">
              <ArchitecturalContainer className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #2ECB98 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-[#2ECB98] to-transparent opacity-60"></div>
                <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-[#2ECB98] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-[#2ECB98] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-[#2ECB98] to-transparent opacity-60"></div>
                
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    <div className="lg:col-span-4 flex justify-center">
                      <div className="relative group">
                        <div className="relative">
                          <div className="w-64 h-64 lg:w-72 lg:h-72 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-[#333333] shadow-2xl">
                            <Image
                              src={urlFor(imagenPersonal).width(400).height(400).url()}
                              alt="Imagen personal"
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-transparent"></div>
                          </div>
                          
                          <div className="absolute -bottom-4 -right-4 bg-[#2ECB98] text-black px-4 py-2 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-black rounded-full"></div>
                              Disponible
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <div className="w-12 h-px bg-[#2ECB98]"></div>
                            <span className="text-[#2ECB98] text-sm font-medium uppercase tracking-[0.3em]">
                              Desarrollador Full Stack
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-[#2ECB98] to-transparent"></div>
                          </div>
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                          <PortableText value={cuerpo} components={customComponents} />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#333333]">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-[#2ECB98] mb-1">5+</div>
                            <div className="text-sm text-[#BBBBBB] uppercase tracking-wider">Años Experiencia</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-[#2ECB98] mb-1">10</div>
                            <div className="text-sm text-[#BBBBBB] uppercase tracking-wider">Proyectos Completados</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-[#2ECB98] mb-1">100%</div>
                            <div className="text-sm text-[#BBBBBB] uppercase tracking-wider">Satisfacción Cliente</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ArchitecturalContainer>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <ArchitecturalContainer className="p-12 lg:p-16 relative">
                <div className="absolute top-8 right-8 w-16 h-px bg-[#2ECB98] opacity-30"></div>
                <div className="absolute bottom-8 left-8 w-px h-16 bg-[#2ECB98] opacity-30"></div>
                
                <div className="max-w-none text-center">
                  <PortableText value={cuerpo} components={customComponents} />
                </div>
                
                <div className="flex items-center justify-center mt-12">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#2ECB98] to-transparent"></div>
                </div>
              </ArchitecturalContainer>
            </div>
          )}
        </SafeScrollAnimatedSection>
      </div>
    </section>
  );
}