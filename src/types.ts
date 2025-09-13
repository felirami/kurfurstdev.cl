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
  | CTASectionData;

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