// src/schemas/seccionHero.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionHero',
  title: 'Sección Hero',
  type: 'object',
  fields: [
    {
      name: 'slides',
      title: 'Slides del Carrusel',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
          fields: [
            {
              name: 'tituloSlide',
              title: 'Título del Slide',
              type: 'string',
              validation: Rule => Rule.required().min(10).max(100)
            },
            {
              name: 'parrafoSlide',
              title: 'Párrafo del Slide',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required().min(20).max(300)
            },
            {
              name: 'imagenFondoSlide',
              title: 'Imagen de Fondo del Slide',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'urlBotonPrimario',
              title: 'URL del Botón Primario',
              type: 'string',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            },
            {
              name: 'textoBotonPrimario',
              title: 'Texto del Botón Primario',
              type: 'string',
              validation: Rule => Rule.max(30)
            },
            {
              name: 'urlBotonSecundario',
              title: 'URL del Botón Secundario',
              type: 'string',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            },
            {
              name: 'textoBotonSecundario',
              title: 'Texto del Botón Secundario',
              type: 'string',
              validation: Rule => Rule.max(30)
            }
          ],
          preview: {
            select: {
              title: 'tituloSlide',
              subtitle: 'parrafoSlide',
              media: 'imagenFondoSlide'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1).max(5)
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
        title: 'Sección Hero',
        subtitle: `${slideCount} slide${slideCount !== 1 ? 's' : ''}`
      };
    }
  }
});
