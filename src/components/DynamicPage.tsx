// src/components/DynamicPage.tsx
"use client";

import HeroSection from "@/components/Sections/HeroSection";
import HeroCarouselSection from "@/components/Sections/HeroCarouselSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import ContentSection from "@/components/Sections/ContentSection";
import GallerySection from "@/components/Sections/GallerySection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import ContactSection from "@/components/Sections/ContactSection";
import FeaturedPortfolioSection from "@/components/Sections/FeaturedPortfolioSection";
import CTASection from "@/components/Sections/CTASection";
import TechnologiesSection from "@/components/Sections/TechnologiesSection";
import PricingPlansSection from "@/components/Sections/PricingPlansSection";
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