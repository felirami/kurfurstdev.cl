// src/components/sections/GallerySection.tsx
import { urlFor } from "@/lib/sanity.client";
import { GallerySectionData } from "@/types";
import Image from "next/image";

type Props = {
  section: GallerySectionData;
};

export default function GallerySection({ section }: Props) {
  const { titulo, imagenes = [] } = section;

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          {titulo}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {imagenes.map((imagen) => (
            <div key={imagen._key} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={urlFor(imagen).width(500).height(500).url()}
                alt="Imagen de galería"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}