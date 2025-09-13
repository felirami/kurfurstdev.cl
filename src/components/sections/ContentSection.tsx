// src/components/sections/ContentSection.tsx
import { ContentSectionData } from "@/types";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";

type Props = {
  section: ContentSectionData;
};

// Custom components for PortableText
const customComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-[#EAEAEA]/90 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-['Oswald'] text-2xl font-bold text-[#EAEAEA] uppercase tracking-wide mb-4 mt-8">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="font-['Oswald'] text-xl font-semibold text-[#8A2BE2] uppercase tracking-wide mb-3 mt-6">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="space-y-3 mb-6 ml-6">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="space-y-3 mb-6 ml-6 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start">
        <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mt-3 mr-4 flex-shrink-0"></div>
        <div className="text-[#EAEAEA]/90 leading-relaxed">{children}</div>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-[#EAEAEA]/90 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <Link 
        href={value.href} 
        className="text-[#8A2BE2] hover:text-[#8A2BE2]/80 underline transition-colors duration-300"
      >
        {children}
      </Link>
    ),
    strong: ({ children }: any) => (
      <strong className="text-[#8A2BE2] font-semibold">{children}</strong>
    ),
  },
  types: {
    cta: ({ value }: any) => {
      const { textoBoton, urlBoton } = value;
      return (
        <div className="my-8">
          <Link 
            href={urlBoton}
            className="inline-flex items-center px-8 py-4 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
    <ScrollAnimatedSection>
      <section className="relative py-20 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-px h-32 bg-[#8A2BE2]"></div>
          <div className="absolute top-40 right-16 w-24 h-px bg-[#8A2BE2]"></div>
          <div className="absolute bottom-32 left-32 w-px h-48 bg-gradient-to-b from-[#8A2BE2] to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          {titulo && (
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
                <div className="mx-6 text-[#8A2BE2] text-sm font-medium tracking-[0.3em] uppercase">
                  Contenido
                </div>
                <div className="w-16 h-px bg-[#8A2BE2]"></div>
              </div>
              
              <h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight">
                {titulo}
              </h2>
            </div>
          )}

          {/* Content Layout - Two columns if personal image exists, single column otherwise */}
          {imagenPersonal ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Left Column - Personal Image (1/3 width on desktop) */}
              <div className="md:col-span-1 flex justify-center mb-8 md:mb-0">
                <div className="relative">
                  <Image
                    src={urlFor(imagenPersonal).width(400).height(400).url()}
                    alt="Imagen personal"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-[#8A2BE2]/50 shadow-2xl"
                  />
                  {/* Geometric accent around image */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8A2BE2] transform rotate-45"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
                </div>
              </div>

              {/* Right Column - Content (2/3 width on desktop) */}
              <div className="md:col-span-2">
                <div className="text-left prose prose-lg prose-invert max-w-none [&_h1]:text-[#EAEAEA] [&_h1]:font-['Oswald'] [&_h1]:font-bold [&_h1]:uppercase [&_h1]:tracking-wider [&_h2]:text-[#EAEAEA] [&_h2]:font-['Oswald'] [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wider [&_h2]:border-b [&_h2]:border-[#8A2BE2]/30 [&_h2]:pb-2 [&_h2]:mb-6 [&_h3]:text-[#EAEAEA] [&_h3]:font-['Oswald'] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-wider [&_h4]:text-[#EAEAEA] [&_h4]:font-['Oswald'] [&_h4]:font-bold [&_h4]:uppercase [&_h4]:tracking-wider [&_p]:text-[#EAEAEA]/90 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg [&_p]:text-left [&_strong]:text-[#8A2BE2] [&_strong]:font-semibold [&_a]:text-[#8A2BE2] [&_a]:no-underline [&_a]:border-b [&_a]:border-transparent [&_a]:transition-colors [&_a:hover]:border-[#8A2BE2] [&_ul]:text-[#EAEAEA]/90 [&_ol]:text-[#EAEAEA]/90 [&_li::marker]:text-[#8A2BE2] [&_blockquote]:border-l-4 [&_blockquote]:border-[#8A2BE2] [&_blockquote]:bg-[#8A2BE2]/10 [&_blockquote]:text-[#EAEAEA] [&_blockquote]:italic [&_blockquote]:p-6 [&_blockquote]:my-8">
                  <PortableText value={cuerpo} components={customComponents} />
                </div>
              </div>
            </div>
          ) : (
            /* Single Column Layout - No personal image */
            <div className="text-center prose prose-lg prose-invert max-w-none [&_h1]:text-[#EAEAEA] [&_h1]:font-['Oswald'] [&_h1]:font-bold [&_h1]:uppercase [&_h1]:tracking-wider [&_h2]:text-[#EAEAEA] [&_h2]:font-['Oswald'] [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wider [&_h2]:border-b [&_h2]:border-[#8A2BE2]/30 [&_h2]:pb-2 [&_h2]:mb-6 [&_h3]:text-[#EAEAEA] [&_h3]:font-['Oswald'] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-wider [&_h4]:text-[#EAEAEA] [&_h4]:font-['Oswald'] [&_h4]:font-bold [&_h4]:uppercase [&_h4]:tracking-wider [&_p]:text-[#EAEAEA]/90 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg [&_p]:text-center [&_strong]:text-[#8A2BE2] [&_strong]:font-semibold [&_a]:text-[#8A2BE2] [&_a]:no-underline [&_a]:border-b [&_a]:border-transparent [&_a]:transition-colors [&_a:hover]:border-[#8A2BE2] [&_ul]:text-[#EAEAEA]/90 [&_ol]:text-[#EAEAEA]/90 [&_li::marker]:text-[#8A2BE2] [&_blockquote]:border-l-4 [&_blockquote]:border-[#8A2BE2] [&_blockquote]:bg-[#8A2BE2]/10 [&_blockquote]:text-[#EAEAEA] [&_blockquote]:italic [&_blockquote]:p-6 [&_blockquote]:my-8">
              <PortableText value={cuerpo} components={customComponents} />
            </div>
          )}

          {/* Bottom accent */}
          <div className="flex items-center justify-center mt-16">
            <div className="w-8 h-px bg-[#8A2BE2]"></div>
            <div className="mx-3 w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
            <div className="w-8 h-px bg-[#8A2BE2]"></div>
          </div>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
}