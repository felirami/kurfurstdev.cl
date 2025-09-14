// src/components/DynamicPage.tsx 
// comentario.

// Fixed imports with correct case-sensitive paths
import HeroSection from "@/components/sections/HeroSection";
import HeroCarouselSection from "@/components/sections/HeroCarouselSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContentSection from "@/components/sections/ContentSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FeaturedPortfolioSection from "@/components/sections/FeaturedPortfolioSection";
import CTASection from "@/components/sections/CTASection";
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import PricingPlansSection from '@/components/sections/PricingPlansSection';

// ... el resto de tus importaciones ...
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