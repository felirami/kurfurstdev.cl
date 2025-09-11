// src/app/[[...slug]]/page.tsx
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import DynamicPage from "@/components/DynamicPage";
import { Metadata } from "next";
import { PageData } from "@/types"; // <-- 1. IMPORTAMOS EL TIPO CORREGIDO

const getPageQuery = (slug: string) => groq`
  *[_type == "pagina" && slug.current == "${slug}"][0]
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
  const pageData = await client.fetch(getPageQuery(slug) + `{..., secciones[]{...}}`);

  if (!pageData) {
    notFound();
  }

  return <DynamicPage pageData={pageData} />;
}