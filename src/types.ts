// src/types.ts
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "sanity";

// --- Definiciones para cada tipo de sección ---
export type HeroSlide = {
  _key: string;
  tituloSlide: string;
  parrafoSlide: string;
  imagenFondoSlide: SanityImageSource;
  urlBotonPrimario?: string;
  textoBotonPrimario?: string;
  urlBotonSecundario?: string;
  textoBotonSecundario?: string;
};

export type HeroSectionData = {
  _key: string;
  _type: "seccionHero";
  titulo?: string;
  subtitulo?: string;
  imagenDeFondo?: SanityImageSource;
  urlBotonPrimario?: string;
  textoBotonPrimario?: string;
  urlBotonSecundario?: string;
  textoBotonSecundario?: string;
  slides?: HeroSlide[];
};

export type HeroCarouselSectionData = {
  _key: string;
  _type: "seccionHeroCarrusel";
  slides: HeroSlide[];
};

export type GallerySectionData = {
  _key: string;
  _type: "seccionGaleria";
  titulo: string;
  imagenes: (SanityImageSource & { _key: string })[];
};

export type ServicesSectionData = {
  _key:string;
  _type: "seccionServicios";
  titulo: string;
  listaDeServicios: {
    _key: string;
    nombre: string;
    descripcionCorta: string;
    imagenDestacada: SanityImageSource;
    imagenFondo: SanityImageSource;
    urlCTA?: string;
    textoCTA?: string;
  }[];
};

export type ContentSectionData = {
  _key: string;
  _type: "seccionContenido";
  titulo?: string;
  imagenPersonal?: SanityImageSource;
  cuerpo: PortableTextBlock[];
};

export type TestimonialsSectionData = {
  _key: string;
  _type: "seccionTestimonios";
  titulo: string;
  testimonios: {
    _key: string;
    texto: string;
    autor: string;
    avatar?: SanityImageSource;
  }[];
};

export type ContactSectionData = {
  _key: string;
  _type: "seccionContacto";
  titulo: string;
  subtitulo?: string;
  formspreeUrl: string;
};

export type FeaturedPortfolioSectionData = {
  _key: string;
  _type: "seccionPortafolioDestacado";
  titulo: string;
  subtitulo?: string;
  proyectosDestacados: ProyectoData[];
};

export type CTASectionData = {
  _key: string;
  _type: "seccionCTA";
  titulo: string;
  subtitulo?: string;
  boton: {
    texto: string;
    url: string;
    esExterno: boolean;
  };
};

export type TechnologiesSectionData = {
  _key: string;
  _type: "seccionTecnologias";
  titulo: string;
  subtitulo?: string;
  mostrarSeccion?: boolean;
  estiloVisualizacion: 'elegant' | 'monochrome' | 'glow';
};

export type PricingPlansSectionData = {
  _key: string;
  _type: "seccionPlanesDePrecios";
  titulo: string;
  subtitulo?: string;
  planes: {
    titulo: string;
    subtitulo: string;
    precio: {
      mostrarPrecio: boolean;
      moneda?: string;
      cantidad?: number;
      textoPersonalizado?: string;
    };
    destacado: boolean;
    etiquetaDestacado?: string;
    caracteristicas: {
      texto: string;
      incluido: boolean;
    }[];
    botonCTA: {
      texto: string;
      url?: string;
      esWhatsApp?: boolean;
    };
    botonSecundario?: {
      mostrar: boolean;
      texto?: string;
      url?: string;
      esExterno?: boolean;
    };
    orden: number;
  }[];
  mostrarComparacion?: boolean;
};

// --- Un tipo "unión" que puede ser CUALQUIERA de nuestras secciones ---
export type PageSection =
  | HeroSectionData
  | HeroCarouselSectionData
  | GallerySectionData
  | ServicesSectionData
  | ContentSectionData
  | TestimonialsSectionData
  | ContactSectionData
  | FeaturedPortfolioSectionData
  | CTASectionData
  | TechnologiesSectionData
  | PricingPlansSectionData;

// --- Tipo para la página completa ---
export type PageData = {
  _id: string;
  _type: 'pagina';
  titulo: string;
  slug: { current: string };
  seo?: {
    metaTitulo: string;
    metaDescripcion: string;
  };
  secciones?: PageSection[] | null;
};

export type ProyectoData = {
  _id: string;
  _type: 'proyecto';
  titulo: string;
  slug: { current: string };
  imagenPrincipal: SanityImageSource;
  descripcion: PortableTextBlock[];
  galeriaDeImagenes?: (SanityImageSource & { _key: string })[];
  urlDelSitio?: string;
};

// --- Tipos para el carrusel del header ---
export type HeaderSlide = {
  _key: string;
  titulo: string;
  subtitulo: string;
  imagenPortada: SanityImageSource;
};

export type HeaderCarouselData = {
  _id: string;
  _type: 'headerCarousel';
  slides: HeaderSlide[];
};