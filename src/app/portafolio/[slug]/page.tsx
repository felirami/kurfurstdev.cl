// src/app/portafolio/[slug]/page.tsx
import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Metadata } from "next";
import { ProyectoData } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
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

export default async function ProjectDetailPage({ params: { slug } }: Props) {
    const query = groq`*[_type == "proyecto" && slug.current == "${slug}"][0]`;
    const proyecto: ProyectoData = await client.fetch(query);

    if (!proyecto) {
        notFound();
    }

    return (
        <div className="relative bg-[#1A1A1A] min-h-screen overflow-hidden">
            {/* Geometric background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-32 left-8 w-px h-80 bg-[#8A2BE2] opacity-15"></div>
                <div className="absolute bottom-40 right-12 w-64 h-px bg-[#8A2BE2] opacity-20"></div>
                <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-[#8A2BE2] transform rotate-45 opacity-25"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl py-20 px-6 lg:px-8">
                <article>
                    {/* Back Navigation */}
                    <div className="mb-12">
                        <Link 
                            href="/portafolio" 
                            className="group inline-flex items-center text-[#8A2BE2] hover:text-[#EAEAEA] transition-colors duration-300"
                        >
                            <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">VOLVER AL PORTAFOLIO</span>
                        </Link>
                    </div>

                    {/* Project Header */}
                    <div className="mb-16">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-px bg-[#8A2BE2]"></div>
                            <div className="ml-4 text-[#8A2BE2] text-sm font-medium tracking-[0.2em] uppercase">
                                Proyecto
                            </div>
                        </div>
                        
                        <h1 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight">
                            {proyecto.titulo}
                        </h1>
                    </div>

                    {/* Main Image */}
                    <div className="relative mb-16 aspect-video w-full overflow-hidden border border-[#8A2BE2]/20">
                        <Image
                            src={urlFor(proyecto.imagenPrincipal).url()}
                            alt={`Imagen principal de ${proyecto.titulo}`}
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1A1A1A]/20"></div>
                        
                        {/* Image accent lines */}
                        <div className="absolute top-0 left-0 w-20 h-px bg-[#8A2BE2]"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-px bg-[#8A2BE2]"></div>
                    </div>

                    {/* Project Description */}
                    <div className="prose prose-lg prose-invert max-w-none mb-16 [&_h1]:text-[#EAEAEA] [&_h1]:font-['Oswald'] [&_h1]:font-bold [&_h1]:uppercase [&_h1]:tracking-wider [&_h2]:text-[#EAEAEA] [&_h2]:font-['Oswald'] [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wider [&_h2]:border-b-2 [&_h2]:border-[#8A2BE2]/30 [&_h2]:pb-2 [&_h2]:mb-8 [&_h3]:text-[#EAEAEA] [&_h3]:font-['Oswald'] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-wider [&_h4]:text-[#EAEAEA] [&_h4]:font-['Oswald'] [&_h4]:font-bold [&_h4]:uppercase [&_h4]:tracking-wider [&_p]:text-[#EAEAEA]/90 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg [&_strong]:text-[#8A2BE2] [&_strong]:font-semibold [&_a]:text-[#8A2BE2] [&_a]:no-underline [&_a]:border-b [&_a]:border-transparent [&_a]:transition-colors [&_a:hover]:border-[#8A2BE2]">
                        <PortableText value={proyecto.descripcion} />
                    </div>

                    {/* Project Gallery */}
                    {proyecto.galeriaDeImagenes && proyecto.galeriaDeImagenes.length > 0 && (
                        <div className="mb-16">
                            <div className="flex items-center mb-12">
                                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                                <h2 className="ml-4 font-['Oswald'] text-2xl font-bold text-[#EAEAEA] uppercase tracking-wide">
                                    Galería del Proyecto
                                </h2>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {proyecto.galeriaDeImagenes.map((imagen, index) => (
                                    <div 
                                        key={imagen._key} 
                                        className="group relative aspect-square overflow-hidden border border-[#8A2BE2]/20 hover:border-[#8A2BE2]/60 transition-all duration-500"
                                    >
                                        <Image
                                            src={urlFor(imagen).url()}
                                            alt="Imagen de la galería del proyecto"
                                            fill
                                            sizes="(max-width: 640px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-[#1A1A1A]/60 group-hover:bg-[#8A2BE2]/20 transition-colors duration-500"></div>
                                        
                                        {/* Gallery item number */}
                                        <div className="absolute top-4 left-4 text-[#8A2BE2] font-['Oswald'] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Live Site Button */}
                    {proyecto.urlDelSitio && (
                        <div className="flex justify-center">
                            <Link
                                href={proyecto.urlDelSitio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-transparent border-2 border-[#8A2BE2] text-[#EAEAEA] font-['Oswald'] font-bold text-lg px-12 py-4 uppercase tracking-wider transition-all duration-300 hover:bg-[#8A2BE2] hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
                            >
                                <span className="relative z-10">Visitar Sitio Web en Vivo</span>
                                <div className="absolute inset-0 bg-[#8A2BE2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                
                                {/* External link icon */}
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
}