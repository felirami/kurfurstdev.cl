// src/schemas/proyecto.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Sitio Web', value: 'sitio-web' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Aplicación Web', value: 'aplicacion-web' },
          { title: 'Landing Page', value: 'landing-page' },
          { title: 'Blog', value: 'blog' },
          { title: 'Portfolio', value: 'portfolio' },
          { title: 'Otro', value: 'otro' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagenPrincipal',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tecnologias',
      title: 'Tecnologías Utilizadas',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'galeriaDeImagenes',
      title: 'Galería de Imágenes',
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
              title: 'Descripción',
              type: 'string',
              validation: (Rule) => Rule.max(200),
            },
          ],
        },
      ],
    },
    {
      name: 'urlDelSitio',
      title: 'URL del Sitio Web',
      type: 'url',
      description: 'URL del proyecto en vivo (opcional)',
    },
    {
      name: 'fechaDeFinalizacion',
      title: 'Fecha de Finalización',
      type: 'date',
    },
    {
      name: 'cliente',
      title: 'Cliente',
      type: 'string',
      validation: (Rule) => Rule.max(100),
    },
    {
      name: 'destacado',
      title: '¿Proyecto Destacado?',
      type: 'boolean',
      description: 'Marcar si este proyecto debe aparecer en la sección de destacados',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Fecha de finalización (más reciente primero)',
      name: 'fechaFinalizacionDesc',
      by: [{ field: 'fechaDeFinalizacion', direction: 'desc' }],
    },
    {
      title: 'Título A-Z',
      name: 'tituloAsc',
      by: [{ field: 'titulo', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'categoria',
      media: 'imagenPrincipal',
      destacado: 'destacado',
    },
    prepare({ title, subtitle, media, destacado }) {
      return {
        title: `${destacado ? '⭐ ' : ''}${title}`,
        subtitle: subtitle || 'Sin categoría',
        media: media,
      };
    },
  },
});
