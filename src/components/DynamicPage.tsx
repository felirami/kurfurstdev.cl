// src/components/DynamicPage.tsx

import HeroSection from "./sections/HeroSection";
import HeroCarouselSection from "./sections/HeroCarouselSection";
import ServicesSection from "./sections/ServicesSection";
import ContentSection from "./sections/ContentSection";
import GallerySection from "./sections/GallerySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import FeaturedPortfolioSection from "./sections/FeaturedPortfolioSection";
import CTASection from "./sections/CTASection";
import { PageSection } from "@/types";

// ... (código de tipos y props no cambia)
type PageData = {
  titulo: string;
  secciones?: PageSection[] | null;
};

type Props = {
  pageData: PageData;
};

function SectionRenderer({ section }: { section: PageSection }) {
  switch (section._type) {
    case 'seccionHero':
      return <HeroSection section={section} />;
    case 'seccionHeroCarrusel':
      return <HeroCarouselSection section={section} />;
    case 'seccionServicios':
      return <ServicesSection section={section} />;
    case 'seccionContenido':
      return <ContentSection section={section} />;
    case 'seccionGaleria':
      return <GallerySection section={section} />;
    case 'seccionTestimonios':
      return <TestimonialsSection section={section} />;
    case 'seccionContacto':
      return <ContactSection section={section} />;
    case 'seccionPortafolioDestacado':
      return <FeaturedPortfolioSection section={section} />;
    case 'seccionCTA':
      return <CTASection section={section} />;
  }
}

// ... (código de DynamicPage no cambia)
export default function DynamicPage({ pageData }: Props) {
  const { secciones } = pageData;
  const seccionesReales = secciones || [];

  return (
    <div>
      {seccionesReales.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
    </div>
  );
}