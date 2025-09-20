import { urlFor } from "@/lib/sanity.client";
import { GallerySectionData } from "@/types";
import Image from "next/image";
import SafeScrollAnimatedSection from "../SafeScrollAnimatedSection";
import ArchitecturalContainer from "../ArchitecturalContainer";

type Props = {
  section: GallerySectionData;
};

export default function GallerySection({ section }: Props) {
  const { titulo, imagenes = [] } = section;

  return (
    <SafeScrollAnimatedSection>
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-12 w-px h-48 bg-[#2ECB98] opacity-15"></div>
          <div className="absolute bottom-16 left-20 w-40 h-px bg-[#2ECB98] opacity-20"></div>
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-[#2ECB98] transform rotate-45 opacity-25"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-[#2ECB98]"></div>
              <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
                Galería
              </div>
              <div className="w-16 h-px bg-[#2ECB98]"></div>
            </div>
            
            <h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight">
              {titulo}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {imagenes.map((imagen, index) => (
              <SafeScrollAnimatedSection 
                key={imagen._key}
                delay={index * 0.1}
                duration={0.5}
              >
                <ArchitecturalContainer className="group aspect-square overflow-hidden p-0">
                  <div className="absolute top-3 left-3 z-20 bg-[#1A1A1A]/80 text-[#2ECB98] text-sm font-['Oswald'] font-bold px-2 py-1 backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-[#2ECB98] transition-all duration-500 z-10"></div>
                  
                  <Image
                    src={urlFor(imagen).url()}
                    alt={`Imagen ${index + 1} de galería`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-[#1A1A1A]/40 group-hover:bg-[#2ECB98]/20 transition-colors duration-500"></div>
                  
                  <div className="absolute bottom-3 right-3 w-2 h-2 bg-[#2ECB98] transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </ArchitecturalContainer>
              </SafeScrollAnimatedSection>
            ))}
          </div>

          <div className="flex items-center justify-center mt-16">
            <div className="w-12 h-px bg-[#2ECB98]"></div>
            <div className="mx-4 flex space-x-2">
              <div className="w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
              <div className="w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
              <div className="w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
            </div>
            <div className="w-12 h-px bg-[#2ECB98]"></div>
          </div>
        </div>
      </section>
    </SafeScrollAnimatedSection>
  );
}