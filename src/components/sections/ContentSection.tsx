// src/components/sections/ContentSection.tsx
import { ContentSectionData } from "@/types";
import { PortableText } from "@portabletext/react";

type Props = {
  section: ContentSectionData;
};

export default function ContentSection({ section }: Props) {
  const { titulo, cuerpo } = section;

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg mx-auto max-w-4xl text-gray-600">
        {/* Si hay un título, lo mostramos */}
        {titulo && <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">{titulo}</h2>}

        {/* Aquí renderizamos el contenido enriquecido */}
        <div className="mt-6">
          <PortableText value={cuerpo} />
        </div>
      </div>
    </section>
  );
}