// src/components/DynamicPage.tsx

import HeroSection from "./Sections/HeroSection";
import HeroCarouselSection from "./Sections/HeroCarouselSection";
import ServicesSection from "./Sections/ServicesSection";
import ContentSection from "./Sections/ContentSection";
import GallerySection from "./Sections/GallerySection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import ContactSection from "./Sections/ContactSection";
import FeaturedPortfolioSection from "./Sections/FeaturedPortfolioSection";
import CTASection from "./Sections/CTASection";
import TechnologiesSection from './Sections/TechnologiesSection';
import PricingPlansSection from './Sections/PricingPlansSection';
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
    case 'seccionTecnologias':
      return <TechnologiesSection section={section} />;
    case 'seccionPlanesDePrecios':
      return <PricingPlansSection data={section} />;
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