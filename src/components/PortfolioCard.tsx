// src/components/PortfolioCard.tsx
"use client";
import { urlFor } from "@/lib/sanity.client";
import { ProyectoData } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { PortableTextBlock } from "sanity";

type Props = {
  proyecto: ProyectoData;
};

export default function PortfolioCard({ proyecto }: Props) {
  const imageUrl = urlFor(proyecto.imagenPrincipal).width(800).height(600).url();
  
  // Extract first paragraph from description for preview
  const getDescriptionPreview = (description: PortableTextBlock[]) => {
    if (!description || description.length === 0) return "";
    const firstBlock = description.find((block) => block._type === 'block');
    if (!firstBlock || !('children' in firstBlock) || !Array.isArray(firstBlock.children)) return "";
    return (firstBlock.children as any[]).map((child: any) => child.text || '').join('').substring(0, 120) + "...";
  };

  return (
    <motion.div
      className="group relative h-[500px] border border-white/10 overflow-hidden bg-transparent hover:border-[#8A2BE2]/50 transition-all duration-500"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image Section (60% height) */}
      <div className="relative h-[60%] overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={imageUrl}
            alt={proyecto.titulo}
            fill
            className="object-cover"
          />
          
          {/* Geometric accent elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-[#8A2BE2] transform rotate-45 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-6 left-4 w-8 h-px bg-[#8A2BE2] opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
        </motion.div>
      </div>

      {/* Content Section (40% height) */}
      <div className="relative h-[40%] bg-[#1A1A1A] p-6 flex flex-col justify-between">
        {/* Category Tag */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#8A2BE2] bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 uppercase tracking-wider">
            SITIO WEB
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-['Oswald'] text-xl md:text-2xl font-bold text-[#EAEAEA] uppercase tracking-wide mb-2 leading-tight">
          {proyecto.titulo}
        </h3>

        {/* Project Description Preview */}
        <p className="text-[#EAEAEA]/70 text-sm leading-relaxed mb-4 flex-grow">
          {getDescriptionPreview(proyecto.descripcion)}
        </p>

        {/* CTA Button - Hidden by default, appears on hover */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Link 
            href={`/portafolio/${proyecto.slug.current}`}
            className="inline-flex items-center text-[#8A2BE2] font-medium text-sm uppercase tracking-wide hover:text-[#8A2BE2]/80 transition-colors duration-300"
          >
            <motion.span
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Ver Caso de Estudio
            </motion.span>
            <motion.svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>

        {/* Geometric accent line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A2BE2]/30 to-transparent group-hover:via-[#8A2BE2]/60 transition-all duration-500" />
      </div>

      {/* Overall card link overlay */}
      <Link 
        href={`/portafolio/${proyecto.slug.current}`}
        className="absolute inset-0 z-10"
        aria-label={`Ver proyecto ${proyecto.titulo}`}
      />
    </motion.div>
  );
}