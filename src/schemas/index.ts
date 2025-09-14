// src/schemas/index.ts
import { SchemaTypeDefinition } from 'sanity'

// Document schemas
import pagina from './pagina'
import proyecto from './proyecto'
import headerCarousel from './headerCarousel'
import perfilDeNegocio from './perfilDeNegocio'
import perfilPersonal from './perfilPersonal'

// Section schemas
import seccionHero from './seccionHero'
import seccionServicios from './seccionServicios'
import seccionContenido from './seccionContenido'
import seccionGaleria from './seccionGaleria'
import seccionTestimonios from './seccionTestimonios'
import seccionContacto from './seccionContacto'
import seccionPortafolioDestacado from './seccionPortafolioDestacado'
import seccionCTA from './seccionCTA'
import seccionTecnologias from './seccionTecnologias'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types
    pagina,
    proyecto,
    headerCarousel,
    perfilDeNegocio,
    perfilPersonal,
  
    // Section types
    seccionHero,
    seccionServicios,
    seccionContenido,
    seccionGaleria,
    seccionTestimonios,
    seccionContacto,
    seccionPortafolioDestacado,
    seccionCTA,
    seccionTecnologias,
  ]
}
