import { client, isSanityConfigured } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import SafeScrollAnimatedSection from "@/components/SafeScrollAnimatedSection";
import { SectionContainer } from "@/components/UnifiedContainers";
import PageHeader from "@/components/PageHeader";
import PlaceholderPage from "@/components/PlaceholderPage";
import { ProyectoData } from "@/types";

const query = groq`*[_type == "proyecto"] | order(_createdAt desc)`;

export const metadata: Metadata = {
  title: "Portafolio | KurfurstDev",
  description: "Conoce los proyectos en los que hemos trabajado.",
};

export default async function PortfolioPage() {
  if (!isSanityConfigured) {
    return <PlaceholderPage />;
  }

  const proyectos: ProyectoData[] = await client.fetch(query);

  return (
    <SectionContainer withAura={true}>
      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
          <PageHeader 
            subtitle="Nuestros Trabajos"
            title="PORTAFOLIO"
            description="Una selección de proyectos que demuestran nuestra capacidad para crear soluciones digitales robustas y con un diseño impecable."
          />
        </SafeScrollAnimatedSection>

        <SafeScrollAnimatedSection direction="up" delay={0.25} duration={0.4}>
          <div className="mt-10 sm:mt-16">
            <PortfolioGrid proyectos={proyectos} />
          </div>
        </SafeScrollAnimatedSection>

        <SafeScrollAnimatedSection direction="fade" delay={0.3} duration={0.3}>
          <div className="flex items-center justify-center mt-12 sm:mt-20">
            <div className="w-8 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
            <div className="mx-3 w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
            <div className="w-8 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
          </div>
        </SafeScrollAnimatedSection>
      </div>
    </SectionContainer>
  );
}