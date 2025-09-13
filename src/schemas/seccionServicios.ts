// src/schemas/seccionServicios.ts
export default {
  name: 'seccionServicios',
  title: 'Sección de Servicios',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título de la Sección',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100)
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
              validation: (Rule: any) => Rule.required().max(80)
            },
            {
              name: 'descripcionCorta',
              title: 'Descripción Corta',
              type: 'text',
              validation: (Rule: any) => Rule.required().max(200)
            },
            {
              name: 'imagenDestacada',
              title: 'Imagen Destacada',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'imagenFondo',
              title: 'Imagen de Fondo de la Tarjeta',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'textoCTA',
              title: 'Texto del Botón CTA',
              type: 'string',
              validation: (Rule: any) => Rule.max(30)
            },
            {
              name: 'urlCTA',
              title: 'URL del Botón CTA',
              type: 'url',
              validation: (Rule: any) => Rule.uri({
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
      validation: (Rule: any) => Rule.required().min(1).max(6)
    }
  ],
  preview: {
    select: {
      title: 'titulo'
    }
  }
}
