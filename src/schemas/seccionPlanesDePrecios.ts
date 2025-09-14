// src/schemas/seccionPlanesDePrecios.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seccionPlanesDePrecios',
  title: '💰 Sección de Planes de Precios',
  type: 'object',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título de la Sección',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo (Opcional)',
      type: 'string'
    }),
    defineField({
      name: 'planes',
      title: 'Planes de Precios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'titulo',
              title: 'Título del Plan',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'subtitulo',
              title: 'Subtítulo del Plan',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'precio',
              title: 'Configuración de Precio',
              type: 'object',
              fields: [
                defineField({
                  name: 'mostrarPrecio',
                  title: 'Mostrar Precio',
                  type: 'boolean',
                  initialValue: true
                }),
                defineField({
                  name: 'moneda',
                  title: 'Moneda',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Pesos Chilenos (CLP)', value: 'CLP' },
                      { title: 'Dólares Americanos (USD)', value: 'USD' },
                      { title: 'Euros (EUR)', value: 'EUR' }
                    ]
                  },
                  hidden: ({ parent }) => !parent?.mostrarPrecio
                }),
                defineField({
                  name: 'cantidad',
                  title: 'Cantidad',
                  type: 'number',
                  hidden: ({ parent }) => !parent?.mostrarPrecio
                }),
                defineField({
                  name: 'textoPersonalizado',
                  title: 'Texto Personalizado (ej: "Cotizar")',
                  type: 'string',
                  hidden: ({ parent }) => parent?.mostrarPrecio
                })
              ]
            }),
            defineField({
              name: 'destacado',
              title: 'Plan Destacado',
              type: 'boolean',
              initialValue: false
            }),
            defineField({
              name: 'etiquetaDestacado',
              title: 'Etiqueta del Plan Destacado',
              type: 'string',
              hidden: ({ parent }) => !parent?.destacado
            }),
            defineField({
              name: 'caracteristicas',
              title: 'Características del Plan',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'texto',
                      title: 'Texto de la Característica',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'incluido',
                      title: 'Incluido en el Plan',
                      type: 'boolean',
                      initialValue: true
                    })
                  ]
                }
              ]
            }),
            defineField({
              name: 'botonCTA',
              title: 'Botón Principal',
              type: 'object',
              fields: [
                defineField({
                  name: 'texto',
                  title: 'Texto del Botón',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'url',
                  title: 'URL del Botón',
                  type: 'string'
                }),
                defineField({
                  name: 'esWhatsApp',
                  title: 'Es enlace de WhatsApp',
                  type: 'boolean',
                  initialValue: false
                })
              ]
            }),
            defineField({
              name: 'botonSecundario',
              title: 'Botón Secundario (Opcional)',
              type: 'object',
              fields: [
                defineField({
                  name: 'mostrar',
                  title: 'Mostrar Botón Secundario',
                  type: 'boolean',
                  initialValue: false
                }),
                defineField({
                  name: 'texto',
                  title: 'Texto del Botón',
                  type: 'string',
                  hidden: ({ parent }) => !parent?.mostrar
                }),
                defineField({
                  name: 'url',
                  title: 'URL del Botón',
                  type: 'string',
                  hidden: ({ parent }) => !parent?.mostrar
                }),
                defineField({
                  name: 'esExterno',
                  title: 'Es enlace externo',
                  type: 'boolean',
                  initialValue: false,
                  hidden: ({ parent }) => !parent?.mostrar
                })
              ]
            }),
            defineField({
              name: 'orden',
              title: 'Orden de Visualización',
              type: 'number',
              initialValue: 1
            })
          ]
        }
      ],
      validation: Rule => Rule.min(1).max(4).error('Debe tener entre 1 y 4 planes')
    }),
    defineField({
      name: 'mostrarComparacion',
      title: 'Mostrar Tabla de Comparación',
      type: 'boolean',
      initialValue: false
    })
  ]
})
