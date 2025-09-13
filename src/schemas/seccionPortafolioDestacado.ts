// src/schemas/seccionPortafolioDestacado.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionPortafolioDestacado',
  title: 'Sección Portafolio Destacado',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'subtitulo',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    },
    {
      name: 'proyectosDestacados',
      title: 'Proyectos Destacados',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'proyecto' }],
        },
      ],
      validation: (Rule) => Rule.min(1).max(6).error('Selecciona entre 1 y 6 proyectos destacados'),
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'subtitulo',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Portafolio Destacado',
        subtitle: subtitle || 'Sección de proyectos destacados',
        media: '🌟',
      };
    },
  },
});
