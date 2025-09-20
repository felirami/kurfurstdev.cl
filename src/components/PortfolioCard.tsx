"use client";
import { urlFor } from "@/lib/sanity.client";
import { ProyectoData } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { PortableTextBlock } from "sanity";
import ArchitecturalContainer from "./ArchitecturalContainer";

type Props = {
  proyecto: ProyectoData;
};

export default function PortfolioCard({ proyecto }: Props) {
  const imageUrl = urlFor(proyecto.imagenPrincipal).width(800).height(600).url();
  
  const getDescriptionPreview = (description: PortableTextBlock[]) => {
    if (!description || description.length === 0) return "";
    const firstBlock = description.find((block) => block._type === 'block');
    if (!firstBlock || !('children' in firstBlock) || !Array.isArray(firstBlock.children)) return "";
    return (firstBlock.children as { text?: string }[]).map((child) => child.text || '').join('').substring(0, 120) + "...";
  };

  return (
    <ArchitecturalContainer className="group overflow-hidden">
      <Link href={`/portafolio/${proyecto.slug.current}`} className="block">
        <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={proyecto.titulo}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium text-[#2ECB98] bg-[#2ECB98]/10 border border-[#2ECB98]/20 rounded uppercase tracking-wider">
              SITIO WEB
            </span>
          </div>

          <h3 className="font-bold text-xl text-white uppercase tracking-wide leading-tight group-hover:text-[#2ECB98] transition-colors duration-300">
            {proyecto.titulo}
          </h3>

          <p className="text-[#BBBBBB] text-sm leading-relaxed">
            {getDescriptionPreview(proyecto.descripcion)}
          </p>

          <div className="pt-4">
            <span className="inline-flex items-center text-[#2ECB98] font-medium text-sm uppercase tracking-wide group-hover:underline">
              Ver Caso de Estudio
              <svg 
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </ArchitecturalContainer>
  );
}