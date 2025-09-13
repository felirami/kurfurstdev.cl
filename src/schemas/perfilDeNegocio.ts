// schemas/perfilDeNegocio.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'perfilDeNegocio',
  title: '1. Perfil del Negocio', // El "1." ayuda a ordenarlo primero en la lista
  type: 'document',
  fields: [
    defineField({
      name: 'nombreDelNegocio',
      title: 'Nombre del Negocio',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Nombre comercial que aparecerá en el sitio web'
    }),
    defineField({
      name: 'nombreLegal',
      title: 'Nombre Legal del Negocio',
      type: 'string',
      description: 'Nombre legal completo de la empresa para datos estructurados SEO'
    }),
    defineField({
      name: 'tipoDeNegocio',
      title: 'Tipo de Negocio',
      type: 'string',
      description: 'Tipo de negocio para Schema.org (ej: "LocalBusiness", "ProfessionalService", "Organization")',
      options: {
        list: [
          {title: 'Servicio Profesional', value: 'ProfessionalService'},
          {title: 'Negocio Local', value: 'LocalBusiness'},
          {title: 'Organización', value: 'Organization'},
          {title: 'Empresa de Tecnología', value: 'TechCompany'}
        ]
      }
    }),
    defineField({
      name: 'urlDelSitio',
      title: 'URL Principal del Sitio Web',
      type: 'url',
      description: 'URL completa del sitio web (ej: https://kurfurstdev.cl)',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo principal de la empresa para SEO y redes sociales'
    }),
    defineField({
      name: 'telefonoPrincipal',
      title: 'Teléfono Principal',
      type: 'string',
      description: 'Número de teléfono principal de contacto'
    }),
    defineField({
      name: 'emailDeContacto',
      title: 'Email de Contacto',
      type: 'string',
      description: 'Email principal de contacto'
    }),
    defineField({
      name: 'direccion',
      title: 'Dirección',
      type: 'text',
      description: 'Dirección física completa del negocio'
    }),
    defineField({
      name: 'textoFooter',
      title: 'Texto del Pie de Página',
      type: 'text',
      description: 'Texto descriptivo que aparecerá en el footer del sitio'
    }),
  ],
})
