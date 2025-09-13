// src/schemas/seccionServicios.ts
import { Rule } from 'sanity';

const seccionServiciosSchema = {
  name: 'seccionServicios',
  title: 'Sección de Servicios',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título de la Sección',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(100)
    },
    {
      name: 'listaDeServicios',
      title: 'Lista de Servicios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'nombre',
              title: 'Nombre del Servicio',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().max(80)
            },
            {
              name: 'descripcionCorta',
              title: 'Descripción Corta',
              type: 'text',
              validation: (Rule: Rule) => Rule.required().max(200)
            },
            {
              name: 'imagenDestacada',
              title: 'Imagen Destacada',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'imagenFondo',
              title: 'Imagen de Fondo de la Tarjeta',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'textoCTA',
              title: 'Texto del Botón CTA',
              type: 'string',
              validation: (Rule: Rule) => Rule.max(30)
            },
            {
              name: 'urlCTA',
              title: 'URL del Botón CTA',
              type: 'url',
              validation: (Rule: Rule) => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            }
          ],
          preview: {
            select: {
              title: 'nombre',
              subtitle: 'descripcionCorta',
              media: 'imagenDestacada'
            }
          }
        }
      ],
      validation: (Rule: Rule) => Rule.required().min(1).max(6)
    }
  ],
  preview: {
    select: {
      title: 'titulo'
    }
  }
};

export default seccionServiciosSchema;
