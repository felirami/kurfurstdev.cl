// src/schemas/pagina.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'pagina',
  title: 'Página',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título de la Página',
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitulo',
          title: 'Meta Título',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescripcion',
          title: 'Meta Descripción',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
      ],
    },
    {
      name: 'secciones',
      title: 'Secciones de la Página',
      type: 'array',
      of: [
        { type: 'seccionHero' },
        { type: 'seccionHeroCarrusel' },
        { type: 'seccionServicios' },
        { type: 'seccionContenido' },
        { type: 'seccionGaleria' },
        { type: 'seccionTestimonios' },
        { type: 'seccionContacto' },
        { type: 'seccionPortafolioDestacado' },
        { type: 'seccionTecnologias' },
        { type: 'seccionCTA' },
      ],
    },
  ],
  orderings: [
    {
      title: 'Título A-Z',
      name: 'tituloAsc',
      by: [{ field: 'titulo', direction: 'asc' }],
    },
    {
      title: 'Fecha de creación (más reciente primero)',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      slug: 'slug.current',
      seccionesCount: 'secciones',
    },
    prepare({ title, slug, seccionesCount }) {
      const count = Array.isArray(seccionesCount) ? seccionesCount.length : 0;
      return {
        title: title || 'Página sin título',
        subtitle: `/${slug || 'sin-slug'} • ${count} sección${count !== 1 ? 'es' : ''}`,
        media: '📄',
      };
    },
  },
});
