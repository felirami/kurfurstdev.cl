// src/schemas/seccionContacto.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionContacto',
  title: 'Sección Contacto',
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
      title: 'Subtítulo (Opcional)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    },
    {
      name: 'formspreeUrl',
      title: 'URL de Formspree',
      type: 'url',
      description: 'URL del endpoint de Formspree para el envío del formulario',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'subtitulo',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Contacto',
        subtitle: subtitle || 'Formulario de contacto',
        media: '📧',
      };
    },
  },
});
