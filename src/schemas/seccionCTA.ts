// src/schemas/seccionCTA.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionCTA',
  title: 'Sección Llamada a la Acción (CTA)',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    },
    {
      name: 'subtitulo',
      title: 'Subtítulo (Opcional)',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'boton',
      title: 'Botón Principal',
      type: 'object',
      fields: [
        {
          name: 'texto',
          title: 'Texto del Botón',
          type: 'string',
          validation: (Rule) => Rule.required().max(50),
        },
        {
          name: 'url',
          title: 'URL del Botón',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'esExterno',
          title: '¿Es enlace externo?',
          type: 'boolean',
          initialValue: false,
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      buttonText: 'boton.texto',
    },
    prepare({ title, buttonText }) {
      return {
        title: title || 'Llamada a la Acción',
        subtitle: buttonText ? `Botón: ${buttonText}` : 'CTA sin botón configurado',
        media: '🎯',
      };
    },
  },
});
