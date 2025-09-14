// schemas/perfilPersonal.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'perfilPersonal',
  title: '2. Perfil Personal',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Tu nombre completo'
    }),
    defineField({
      name: 'titulo',
      title: 'Título Profesional',
      type: 'string',
      description: 'Ej: Full Stack Developer, Frontend Developer, etc.'
    }),
    defineField({
      name: 'fotoPerfil',
      title: 'Foto de Perfil',
      type: 'image',
      description: 'Foto profesional para la página Sobre Mí',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'ubicacion',
      title: 'Ubicación',
      type: 'string',
      description: 'Ciudad, País donde te encuentras'
    }),
    defineField({
      name: 'biografia',
      title: 'Biografía',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Descripción personal y profesional'
    }),
    defineField({
      name: 'habilidades',
      title: 'Habilidades',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'nombre', type: 'string', title: 'Nombre de la Habilidad'},
            {name: 'nivel', type: 'string', title: 'Nivel', options: {
              list: [
                {title: 'Básico', value: 'basico'},
                {title: 'Intermedio', value: 'intermedio'},
                {title: 'Avanzado', value: 'avanzado'},
                {title: 'Experto', value: 'experto'}
              ]
            }},
            {name: 'icono', type: 'string', title: 'Icono (React Icons)', description: 'Nombre del icono de React Icons (ej: FaReact)'}
          ]
        }
      ]
    }),
    defineField({
      name: 'experiencia',
      title: 'Experiencia Laboral',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'periodo', type: 'string', title: 'Período', description: 'Ej: 2023-2025'},
            {name: 'cargo', type: 'string', title: 'Cargo'},
            {name: 'empresa', type: 'string', title: 'Empresa'},
            {name: 'descripcion', type: 'text', title: 'Descripción'}
          ]
        }
      ]
    })
  ],
})
