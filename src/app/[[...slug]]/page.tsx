import { client, isSanityConfigured } from "@/lib/sanity.server";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import DynamicPage from "@/components/DynamicPage";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Metadata } from "next";
import { PageData } from "@/types";

const getPageQuery = (slug: string) => groq`
  *[_type == "pagina" && slug.current == "${slug}"][0] {
    ...,
    "secciones": secciones[]{
      ...,
      _type == "seccionHero" => {
        ...,
        imagenDeFondo {
          asset->
        }
      },
      _type == "seccionHeroCarrusel" => {
        slides[]{
          ...,
          imagenFondoSlide {
            asset->
          }
        }
      },
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  // Return default metadata if Sanity is not configured
  if (!isSanityConfigured) {
    return {
      title: "KurfurstDev - Desarrollo Web Profesional",
      description: "Desarrollo web profesional con tecnología de vanguardia. Creamos experiencias digitales que impulsan tu negocio.",
    };
  }

  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join("/") || "inicio";
  
  try {
    const pageData: PageData = await client.fetch(getPageQuery(slug));

    if (!pageData) {
      return {
        title: "Página no encontrada",
      };
    }

    return {
      title: pageData.seo?.metaTitulo || pageData.titulo,
      description: pageData.seo?.metaDescripcion || "Bienvenido a nuestro sitio web.",
    };
  } catch (error) {
    console.error('Error fetching page metadata:', error);
    return {
      title: "KurfurstDev",
      description: "Desarrollo web profesional con tecnología de vanguardia.",
    };
  }
}

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

// Generate static params for the home page when Sanity is not configured
export async function generateStaticParams() {
  // Always generate the home page (empty slug)
  if (!isSanityConfigured) {
    return [{ slug: [] }];
  }
  
  // When Sanity is configured, let it be fully dynamic
  return [];
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join("/") || "inicio";
  
  // Show placeholder page if Sanity is not configured
  if (!isSanityConfigured) {
    return <PlaceholderPage />;
  }
  
  try {
    const pageData = await client.fetch(getPageQuery(slug));

    if (!pageData) {
      notFound();
    }

    return <DynamicPage pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page data:', error);
    notFound();
  }
}