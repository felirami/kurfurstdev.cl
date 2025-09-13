// src/schemas/seccionGaleria.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionGaleria',
  title: 'Sección Galería',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'imagenes',
      title: 'Imágenes de la Galería',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
              validation: (Rule) => Rule.max(100),
            },
            {
              name: 'caption',
              title: 'Descripción (Opcional)',
              type: 'string',
              validation: (Rule) => Rule.max(200),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(20).error('Añade entre 1 y 20 imágenes'),
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      imagenesCount: 'imagenes',
      firstImage: 'imagenes.0',
    },
    prepare({ title, imagenesCount, firstImage }) {
      const count = Array.isArray(imagenesCount) ? imagenesCount.length : 0;
      return {
        title: title || 'Galería',
        subtitle: `${count} imagen${count !== 1 ? 'es' : ''}`,
        media: firstImage || '🖼️',
      };
    },
  },
});
