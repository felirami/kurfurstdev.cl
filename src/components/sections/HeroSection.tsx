// src/components/sections/HeroSection.tsx
import { urlFor } from "@/lib/sanity.client";
import { HeroSectionData } from "@/types"; // <-- Importamos nuestro nuevo tipo

// Usamos el tipo importado para las props
type Props = {
  section: HeroSectionData;
};

export default function HeroSection({ section }: Props) {
  const { titulo, subtitulo, imagenDeFondo } = section;
  const bgImageUrl = imagenDeFondo ? urlFor(imagenDeFondo).url() : '';

  return (
    <section
      className="relative flex h-screen items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl font-bold uppercase tracking-wider md:text-6xl">
          {titulo}
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          {subtitulo}
        </p>
      </div>
    </section>
  );
}