import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Metadata } from "next";
import { ProyectoData } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionContainer, ArchitecturalContainer } from "@/components/UnifiedContainers";
import SafeScrollAnimatedSection from "@/components/SafeScrollAnimatedSection";
import { FiArrowLeft, FiExternalLink, FiTag } from "react-icons/fi";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const query = groq`*[_type == "proyecto" && slug.current == "${slug}"][0]`;
    const proyecto: ProyectoData = await client.fetch(query);
    if (!proyecto) {
        return { title: "Proyecto no encontrado" };
    }
    return {
        title: `${proyecto.titulo} | Portafolio`,
        description: `Detalles del proyecto ${proyecto.titulo}.`,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const query = groq`*[_type == "proyecto" && slug.current == "${slug}"][0]`;
    const proyecto: ProyectoData = await client.fetch(query);

    if (!proyecto) {
        notFound();
    }

    return (
        <SectionContainer withAura={true}>
            <div className="max-w-7xl mx-auto pt-24">
                <article>
                    <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
                        <div className="mb-12">
                            <Link 
                                href="/portafolio" 
                                className="group inline-flex items-center text-[#2ECB98] hover:text-white transition-colors duration-300"
                            >
                                <FiArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                                <span className="font-medium uppercase tracking-wider">VOLVER AL PORTAFOLIO</span>
                            </Link>
                        </div>
                    </SafeScrollAnimatedSection>

                    <SafeScrollAnimatedSection delay={0.2} duration={0.6}>
                        <ArchitecturalContainer className="text-center mb-16">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
                                <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
                                    Proyecto
                                </div>
                                <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
                            </div>
                            
                            <h1 className="section-title text-4xl md:text-5xl lg:text-6xl mb-6">
                                {proyecto.titulo}
                            </h1>

                            {proyecto.descripcion && typeof proyecto.descripcion === 'string' && (
                                <p className="section-subtitle max-w-4xl mx-auto">
                                    {proyecto.descripcion}
                                </p>
                            )}
                        </ArchitecturalContainer>
                    </SafeScrollAnimatedSection>

                    <SafeScrollAnimatedSection delay={0.3} duration={0.6}>
                        <ArchitecturalContainer className="relative mb-16 aspect-video w-full overflow-hidden">
                            <Image
                                src={urlFor(proyecto.imagenPrincipal).url()}
                                alt={`Imagen principal de ${proyecto.titulo}`}
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </ArchitecturalContainer>
                    </SafeScrollAnimatedSection>

                    <SafeScrollAnimatedSection delay={0.4} duration={0.6}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                            <div className="lg:col-span-2">
                                <ArchitecturalContainer>
                                    <h2 className="section-title text-2xl mb-6">DESCRIPCIÓN DEL PROYECTO</h2>
                                    <div className="prose prose-lg prose-invert max-w-none [&_h1]:text-white [&_h1]:section-title [&_h2]:text-white [&_h2]:section-title [&_h2]:text-xl [&_h2]:border-b [&_h2]:border-[#2ECB98]/30 [&_h2]:pb-2 [&_h2]:mb-6 [&_h3]:text-white [&_h3]:font-semibold [&_h4]:text-white [&_h4]:font-semibold [&_p]:text-[#BBBBBB] [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-[#2ECB98] [&_strong]:font-semibold [&_a]:text-[#2ECB98] [&_a]:no-underline [&_a]:border-b [&_a]:border-transparent [&_a]:transition-colors [&_a:hover]:border-[#2ECB98]">
                                        <PortableText value={proyecto.descripcion} />
                                    </div>
                                </ArchitecturalContainer>
                            </div>

                            <div>
                                <ArchitecturalContainer>
                                    <h3 className="section-title text-xl mb-6">DETALLES</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <FiTag className="w-5 h-5 text-[#2ECB98]" />
                                            <span className="text-[#BBBBBB]">Proyecto Web</span>
                                        </div>

                                        {proyecto.urlDelSitio && (
                                            <div className="pt-4">
                                                <a
                                                    href={proyecto.urlDelSitio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center space-x-2 text-[#2ECB98] hover:text-white transition-colors duration-300 border border-[#2ECB98] hover:bg-[#2ECB98]/10 px-4 py-2 rounded"
                                                >
                                                    <FiExternalLink className="w-4 h-4" />
                                                    <span className="font-medium">VISITAR SITIO</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </ArchitecturalContainer>
                            </div>
                        </div>
                    </SafeScrollAnimatedSection>

                    {proyecto.galeriaDeImagenes && proyecto.galeriaDeImagenes.length > 0 && (
                        <SafeScrollAnimatedSection delay={0.5} duration={0.6}>
                            <div className="mb-16">
                                <ArchitecturalContainer className="text-center mb-12">
                                    <h2 className="section-title text-2xl">GALERÍA DEL PROYECTO</h2>
                                </ArchitecturalContainer>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {proyecto.galeriaDeImagenes.map((imagen, index) => (
                                        <ArchitecturalContainer 
                                            key={imagen._key} 
                                            className="group relative aspect-square overflow-hidden"
                                        >
                                            <Image
                                                src={urlFor(imagen).url()}
                                                alt="Imagen de la galería del proyecto"
                                                fill
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#2ECB98]/10 transition-colors duration-500"></div>
                                            
                                            <div className="absolute top-4 left-4 text-[#2ECB98] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                        </ArchitecturalContainer>
                                    ))}
                                </div>
                            </div>
                        </SafeScrollAnimatedSection>
                    )}

                    <SafeScrollAnimatedSection delay={0.6} duration={0.6}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/portafolio"
                                className="group inline-flex items-center space-x-2 text-[#2ECB98] hover:text-white transition-colors duration-300 border border-[#2ECB98] hover:bg-[#2ECB98]/10 px-6 py-3 rounded"
                            >
                                <FiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                <span className="font-medium uppercase tracking-wider">VER MÁS PROYECTOS</span>
                            </Link>
                        </div>
                    </SafeScrollAnimatedSection>
                </article>
            </div>
        </SectionContainer>
    );
}