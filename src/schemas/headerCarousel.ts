// src/schemas/headerCarousel.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'headerCarousel',
  title: 'Carrusel del Header',
  type: 'document',
  fields: [
    {
      name: 'slides',
      title: 'Slides del Header',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'headerSlide',
          title: 'Slide del Header',
          fields: [
            {
              name: 'titulo',
              title: 'Título',
              type: 'string',
              validation: Rule => Rule.required().min(5).max(60)
            },
            {
              name: 'subtitulo',
              title: 'Subtítulo',
              type: 'string',
              validation: Rule => Rule.required().min(10).max(120)
            },
            {
              name: 'imagenPortada',
              title: 'Imagen de Portada',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'titulo',
              subtitle: 'subtitulo',
              media: 'imagenPortada'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(3).max(4)
    }
  ],
  preview: {
    select: {
      slides: 'slides'
    },
    prepare(selection) {
      const { slides } = selection;
      const slideCount = slides ? slides.length : 0;
      return {
        title: 'Carrusel del Header',
        subtitle: `${slideCount} slide${slideCount !== 1 ? 's' : ''} de portada`
      };
    }
  }
});
