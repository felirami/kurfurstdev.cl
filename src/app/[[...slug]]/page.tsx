// src/app/[[...slug]]/page.tsx
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import DynamicPage from "@/components/DynamicPage";
import { Metadata } from "next";
import { PageData } from "@/types"; // <-- 1. IMPORTAMOS EL TIPO CORREGIDO

// En src/app/[[...slug]]/page.tsx

// Esta función genera las consultas a Sanity
const getPageQuery = (slug: string) => groq`
  *[_type == "pagina" && slug.current == "${slug}"][0] {
    ...,
    "secciones": secciones[]{
      ...,
      // SI LA SECCIÓN ES UN HERO SIMPLE, PEDIMOS LOS CAMPOS DIRECTOS
      _type == "seccionHero" => {
        ...,
        imagenDeFondo {
          asset->
        }
      },
      // SI LA SECCIÓN ES UN HERO CARRUSEL, PEDIMOS LOS DATOS DE LOS SLIDES
      _type == "seccionHeroCarrusel" => {
        slides[]{
          ...,
          imagenFondoSlide {
            asset->
          }
        }
      },
      // SI LA SECCIÓN ES PORTAFOLIO DESTACADO, PEDIMOS LOS PROYECTOS REFERENCIADOS
      _type == "seccionPortafolioDestacado" => {
        ...,
        "proyectosDestacados": proyectosDestacados[]->{
          _id,
          _type,
          titulo,
          slug,
          imagenPrincipal {
            asset->
          },
          descripcion,
          urlDelSitio
        }
      },
      // SI LA SECCIÓN ES CTA, PEDIMOS TODOS LOS CAMPOS
      _type == "seccionCTA" => {
        ...,
        boton {
          texto,
          url,
          esExterno
        }
      }
    }
  }
`;

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug?.join("/") || "inicio";
  const pageData: PageData = await client.fetch(getPageQuery(slug)); // <-- 2. AHORA SÍ ENCUENTRA 'PageData'

  if (!pageData) {
    return {
      title: "Página no encontrada",
    };
  }

  return {
    title: pageData.seo?.metaTitulo || pageData.titulo,
    description: pageData.seo?.metaDescripcion || "Bienvenido a nuestro sitio web.",
  };
}

type Props = {
  params: {
    slug: string[];
  };
};

export default async function Page({ params }: Props) {
  const slug = params.slug?.join("/") || "inicio";
  const pageData = await client.fetch(getPageQuery(slug));

  if (!pageData) {
    notFound();
  }

  return <DynamicPage pageData={pageData} />;
}