import HeroSection from "@/components/Section/HeroSection";
import HeroCarouselSection from "@/components/Section/HeroCarouselSection";
import ServicesSection from "@/components/Section/ServicesSection";
import ContentSection from "@/components/Section/ContentSection";
import GallerySection from "@/components/Section/GallerySection";
import TestimonialsSection from "@/components/Section/TestimonialsSection";
import ContactSection from "@/components/Section/ContactSection";
import FeaturedPortfolioSection from "@/components/Section/FeaturedPortfolioSection";
import CTASection from "@/components/Section/CTASection";
import TechnologiesSection from '@/components/Section/TechnologiesSection';
import PricingPlansSection from '@/components/Section/PricingPlansSection';
import { PageSection } from "@/types";

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