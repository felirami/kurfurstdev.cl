// src/types.ts
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "sanity";

// --- Definiciones para cada tipo de sección ---

export type HeroSectionData = {
  _key: string;
  _type: "seccionHero";
  titulo: string;
  subtitulo: string;
  imagenDeFondo: SanityImageSource;
};

export type GallerySectionData = {
  _key: string;
  _type: "seccionGaleria";
  titulo: string;
  imagenes: (SanityImageSource & { _key: string })[];
};

export type ServicesSectionData = {
  _key: string;
  _type: "seccionServicios";
  titulo: string;
  listaDeServicios: {
    _key: string;
    nombre: string;
    descripcionCorta: string;
    imagenDestacada: SanityImageSource;
  }[];
};

export type ContentSectionData = {
  _key: string;
  _type: "seccionContenido";
  titulo?: string;
  cuerpo: PortableTextBlock[];
};

// ESTA ES LA SECCIÓN CRÍTICA A CORREGIR
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

// --- Un tipo "unión" que puede ser CUALQUIERA de nuestras secciones ---
export type PageSection =
  | HeroSectionData
  | GallerySectionData
  | ServicesSectionData
  | ContentSectionData
  | TestimonialsSectionData
  | ContactSectionData;

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

export type ContactSectionData = {
  _key: string;
  _type: "seccionContacto";
  titulo: string;
  subtitulo?: string;
  formspreeUrl: string;
};