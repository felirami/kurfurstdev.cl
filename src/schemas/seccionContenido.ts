// src/schemas/seccionContenido.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'seccionContenido',
  title: 'Sección de Contenido',
  type: 'object',
  fields: [
    {
      name: 'titulo',
      title: 'Título (Opcional)',
      type: 'string',
      description: 'Título principal de la sección'
    },
    {
      name: 'imagenPersonal',
      title: 'Imagen Personal (Opcional)',
      type: 'image',
      description: 'Imagen personal para mostrar junto al contenido',
      options: {
        hotspot: true
      }
    },
    {
      name: 'cuerpo',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'object',
          name: 'cta',
          title: 'Call to Action',
          fields: [
            {
              name: 'textoBoton',
              title: 'Texto del Botón',
              type: 'string'
            },
            {
              name: 'urlBoton',
              title: 'URL del Botón',
              type: 'url'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'cuerpo'
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Sección de Contenido',
        subtitle: subtitle && subtitle[0] ? subtitle[0].children?.[0]?.text : 'Sin contenido'
      }
    }
  }
});
