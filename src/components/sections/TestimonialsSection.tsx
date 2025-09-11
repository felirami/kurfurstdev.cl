// src/components/sections/TestimonialsSection.tsx
import { urlFor } from "@/lib/sanity.client";
import { TestimonialsSectionData } from "@/types";
import Image from "next/image";

type Props = {
  section: TestimonialsSectionData;
};

export default function TestimonialsSection({ section }: Props) {
  const { titulo, testimonios = [] } = section;

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          {titulo}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonios.map((testimonio) => (
            <div key={testimonio._key} className="flex flex-col rounded-lg bg-white shadow-lg">
              <div className="flex-1 p-6">
                <blockquote className="italic text-gray-600">
                  "{testimonio.texto}"
                </blockquote>
              </div>
              <div className="flex items-center bg-gray-100 p-4">
                {testimonio.avatar && (
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={urlFor(testimonio.avatar).url()}
                      alt={`Foto de ${testimonio.autor}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonio.autor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}