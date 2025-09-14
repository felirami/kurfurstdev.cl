// src/schemas/seccionTecnologias.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionTecnologias',
  title: 'Sección de Tecnologías',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título de la Sección',
      type: 'string',
      initialValue: 'Construido con Tecnología de Vanguardia',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'subtitulo',
      title: 'Subtítulo (Opcional)',
      type: 'string',
      description: 'Descripción breve sobre las tecnologías utilizadas',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'tecnologias',
      title: 'Lista de Tecnologías',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tecnologia',
          title: 'Tecnología',
          fields: [
            {
              name: 'nombre',
              title: 'Nombre de la Tecnología',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'logo',
              title: 'Logo de la Tecnología',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'descripcion',
              title: 'Descripción Breve',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.max(150),
            },
            {
              name: 'sitioWeb',
              title: 'Sitio Web Oficial',
              type: 'url',
              description: 'URL del sitio oficial de la tecnología',
            },
            {
              name: 'orden',
              title: 'Orden de Aparición',
              type: 'number',
              description: 'Número para ordenar las tecnologías (1, 2, 3...)',
              validation: (Rule) => Rule.required().min(1),
            },
          ],
          preview: {
            select: {
              title: 'nombre',
              subtitle: 'descripcion',
              media: 'logo',
              orden: 'orden',
            },
            prepare({ title, subtitle, media, orden }) {
              return {
                title: `${orden}. ${title}`,
                subtitle: subtitle || 'Sin descripción',
                media: media,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3).max(8).error('Debe tener entre 3 y 8 tecnologías'),
    },
    {
      name: 'estiloVisualizacion',
      title: 'Estilo de Visualización',
      type: 'string',
      options: {
        list: [
          { title: 'Logos Originales a Color', value: 'color' },
          { title: 'Logos Monocromáticos', value: 'monochrome' },
          { title: 'Logos con Efecto Hover', value: 'hover' },
        ],
      },
      initialValue: 'hover',
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
        title: title || 'Sección de Tecnologías',
        subtitle: subtitle || 'Stack tecnológico',
      };
    },
  },
});
