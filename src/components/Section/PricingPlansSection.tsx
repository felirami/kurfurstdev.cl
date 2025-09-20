'use client';

import React from 'react';
import { FaCheck, FaTimes, FaWhatsapp, FaArrowRight, FaStar, FaRocket, FaGem, FaLightbulb, FaCrown } from 'react-icons/fa';
import ArchitecturalContainer from '../ArchitecturalContainer';
import { SectionContainer } from '../UnifiedContainers';
import PageHeader from '../PageHeader';
import SafeScrollAnimatedSection from '../SafeScrollAnimatedSection';

interface PricingFeature {
  texto: string;
  incluido: boolean;
}

interface PricingButton {
  texto: string;
  url?: string;
  esWhatsApp?: boolean;
}

interface SecondaryButton {
  mostrar: boolean;
  texto?: string;
  url?: string;
  esExterno?: boolean;
}

interface PricingPlan {
  titulo: string;
  subtitulo: string;
  precio: {
    mostrarPrecio: boolean;
    moneda?: string;
    cantidad?: number;
    textoPersonalizado?: string;
  };
  destacado: boolean;
  etiquetaDestacado?: string;
  caracteristicas: PricingFeature[];
  botonCTA: PricingButton;
  botonSecundario?: SecondaryButton;
  orden: number;
}

interface PricingPlansSectionData {
  _type: 'seccionPlanesDePrecios';
  titulo: string;
  subtitulo?: string;
  planes: PricingPlan[];
  mostrarComparacion?: boolean;
}

interface PricingPlansSectionProps {
  data: PricingPlansSectionData;
}

const formatPrice = (precio: PricingPlan['precio']): string => {
  if (!precio.mostrarPrecio) {
    return precio.textoPersonalizado || 'Cotizar';
  }

  if (precio.cantidad && precio.moneda) {
    const formatter = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: precio.moneda,
      minimumFractionDigits: 0,
    });
    return formatter.format(precio.cantidad);
  }

  return precio.textoPersonalizado || 'Cotizar';
};

const getPlanIcon = (planTitle: string) => {
  const title = planTitle.toLowerCase();
  if (title.includes('landing') || title.includes('impacto')) {
    return <FaRocket className="w-8 h-8 text-[#2ECB98]" />;
  }
  if (title.includes('onyx') || title.includes('hub') || title.includes('premium')) {
    return <FaCrown className="w-8 h-8 text-[#2ECB98]" />;
  }
  if (title.includes('básico') || title.includes('starter')) {
    return <FaLightbulb className="w-8 h-8 text-[#2ECB98]" />;
  }
  return <FaGem className="w-8 h-8 text-[#2ECB98]" />;
};

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  const isHighlighted = plan.destacado;

  const scrollToComparison = (e: React.MouseEvent) => {
    e.preventDefault();
    const comparisonTable = document.getElementById('comparison-table');
    if (comparisonTable) {
      comparisonTable.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative h-full">
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-[#2ECB98] text-[#0D0D0D] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg">
            <FaStar className="text-[#0D0D0D]" />
            {plan.etiquetaDestacado || 'Recomendado'}
          </div>
        </div>
      )}

      <ArchitecturalContainer
        className={`h-full relative overflow-hidden ${
          isHighlighted 
            ? 'border-[#2ECB98] shadow-[0_8px_25px_rgba(46,203,152,0.2)]' 
            : ''
        }`}
        accent={isHighlighted}
        accentType="scanlines"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {getPlanIcon(plan.titulo)}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              {plan.titulo}
            </h3>
            
            {plan.precio.mostrarPrecio && (
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-1">
                  {formatPrice(plan.precio)}
                </div>
                <p className="text-[#BBBBBB] text-sm">
                  Precio final del proyecto
                </p>
              </div>
            )}
            
            <p className="text-[#BBBBBB] text-base leading-relaxed mb-6 overflow-hidden" 
               style={{
                 display: '-webkit-box',
                 WebkitLineClamp: 2,
                 WebkitBoxOrient: 'vertical'
               }}>
              {plan.subtitulo}
            </p>
            
            <button
              onClick={scrollToComparison}
              className="text-[#2ECB98] hover:text-[#26B88A] text-sm font-medium transition-colors duration-300 mb-8 flex items-center justify-center gap-1 group"
            >
              Ver comparación completa
              <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
            </button>
          </div>

          <div>
            <a
              href={plan.botonCTA.texto.toLowerCase().includes('cotización') 
                ? `https://wa.me/56937133235?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20para%20el%20plan%20${encodeURIComponent(plan.titulo)}.`
                : plan.botonCTA.url || '#contacto'}
              className={`block w-full text-center rounded-xl font-bold transition-all duration-300 group uppercase tracking-wide ${
                isHighlighted || plan.titulo.toLowerCase().includes('pyme')
                  ? 'btn-primary px-6 sm:px-8 py-3 sm:py-4'
                  : 'bg-[#111111] hover:bg-[#2ECB98]/10 text-white border border-[#333333] hover:border-[#2ECB98] px-6 sm:px-8 py-3 sm:py-4'
              }`}
              target={plan.botonCTA.texto.toLowerCase().includes('cotización') || plan.botonCTA.url?.startsWith('http') ? '_blank' : undefined}
              rel={plan.botonCTA.texto.toLowerCase().includes('cotización') || plan.botonCTA.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="flex items-center justify-center gap-2">
                {(plan.botonCTA.esWhatsApp || plan.botonCTA.texto.toLowerCase().includes('cotización')) && <FaWhatsapp />}
                {plan.botonCTA.texto}
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </ArchitecturalContainer>
    </div>
  );
};

const PricingPlansSection: React.FC<PricingPlansSectionProps> = ({ data }) => {
  const sortedPlans = [...data.planes].sort((a, b) => a.orden - b.orden);

  return (
    <SectionContainer withAura={true}>
      <div className="max-w-7xl mx-auto pt-24">
        <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
          <PageHeader 
            subtitle="Planes"
            title={data.titulo || "PLANES DESARROLLO WEB"}
            description={data.subtitulo || "Elige el plan que mejor se adapte a las necesidades de tu negocio"}
          />
        </SafeScrollAnimatedSection>

        <SafeScrollAnimatedSection delay={0.2} duration={0.6}>
          <div className={`grid gap-8 ${
            sortedPlans.length === 1 
              ? 'max-w-md mx-auto' 
              : sortedPlans.length === 2 
                ? 'md:grid-cols-2 max-w-4xl mx-auto' 
                : sortedPlans.length === 3 
                  ? 'md:grid-cols-3 max-w-6xl mx-auto' 
                  : 'md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {sortedPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </SafeScrollAnimatedSection>

        {data.mostrarComparacion && sortedPlans.length > 1 && (
          <SafeScrollAnimatedSection delay={0.3} duration={0.6}>
            <div id="comparison-table" className="mt-20">
              <ArchitecturalContainer className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                  COMPARACIÓN DETALLADA
                </h3>
              </ArchitecturalContainer>
              
              <ArchitecturalContainer className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="text-left py-4 px-6 text-white font-bold uppercase tracking-wide">Características</th>
                    {sortedPlans.map((plan, index) => (
                      <th key={index} className="text-center py-4 px-6 text-white font-bold uppercase tracking-wide">
                        {plan.titulo}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Get all unique features */}
                  {Array.from(
                    new Set(
                      sortedPlans.flatMap(plan => 
                        plan.caracteristicas.map(f => f.texto)
                      )
                    )
                  ).map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-b border-[#333333]/50">
                      <td className="py-3 px-6 text-[#BBBBBB]">{feature}</td>
                      {sortedPlans.map((plan, planIndex) => {
                        const planFeature = plan.caracteristicas.find(f => f.texto === feature);
                        return (
                          <td key={planIndex} className="text-center py-3 px-6">
                            {planFeature ? (
                              planFeature.incluido ? (
                                <FaCheck className="w-4 h-4 text-[#2ECB98] mx-auto" />
                              ) : (
                                <FaTimes className="w-4 h-4 text-red-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-[#666666]">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </ArchitecturalContainer>
          </div>
          </SafeScrollAnimatedSection>
        )}
      </div>
    </SectionContainer>
  );
};

export default PricingPlansSection;
