// src/schemas/seccionTestimonios.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionTestimonios',
  title: 'Sección Testimonios',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'testimonios',
      title: 'Testimonios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'texto',
              title: 'Texto del Testimonio',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required().max(500),
            },
            {
              name: 'autor',
              title: 'Autor',
              type: 'string',
              validation: (Rule) => Rule.required().max(100),
            },
            {
              name: 'avatar',
              title: 'Avatar (Opcional)',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'autor',
              subtitle: 'texto',
              media: 'avatar',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Testimonio sin autor',
                subtitle: subtitle ? `"${subtitle.substring(0, 60)}..."` : 'Sin texto',
                media: media || '💬',
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(10).error('Añade entre 1 y 10 testimonios'),
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      testimoniosCount: 'testimonios',
    },
    prepare({ title, testimoniosCount }) {
      const count = Array.isArray(testimoniosCount) ? testimoniosCount.length : 0;
      return {
        title: title || 'Testimonios',
        subtitle: `${count} testimonio${count !== 1 ? 's' : ''}`,
        media: '⭐',
      };
    },
  },
});
