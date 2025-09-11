// src/components/sections/ServicesSection.tsx
import { urlFor } from "@/lib/sanity.client";
import { ServicesSectionData } from "@/types";
import Image from "next/image";

type Props = {
  section: ServicesSectionData;
};

export default function ServicesSection({ section }: Props) {
  const { titulo, listaDeServicios = [] } = section;

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          {titulo}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listaDeServicios.map((servicio) => (
            <div key={servicio._key} className="overflow-hidden rounded-lg bg-white shadow-md">
              
              {/* Esta comprobación evita que la página se rompa si falta una imagen */}
              {servicio.imagenDestacada && (
                <div className="relative h-56 w-full">
                  <Image
                    src={urlFor(servicio.imagenDestacada).url()}
                    alt={`Imagen de ${servicio.nombre}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{servicio.nombre}</h3>
                <p className="mt-2 text-base text-gray-600">{servicio.descripcionCorta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}