'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaWhatsapp, FaArrowRight, FaStar, FaRocket, FaGem, FaLightbulb, FaCrown } from 'react-icons/fa';
import ScrollAnimatedSection from '../ScrollAnimatedSection';
import GlassContainer from '../GlassContainer';

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
    return <FaRocket className="w-8 h-8 text-purple-400" />;
  }
  if (title.includes('onyx') || title.includes('hub') || title.includes('premium')) {
    return <FaCrown className="w-8 h-8 text-yellow-400" />;
  }
  if (title.includes('básico') || title.includes('starter')) {
    return <FaLightbulb className="w-8 h-8 text-blue-400" />;
  }
  return <FaGem className="w-8 h-8 text-purple-400" />;
};

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  const isHighlighted = plan.destacado;

  return (
    <ScrollAnimatedSection delay={index * 0.1}>
      <div className="relative h-full">
        {/* Highlighted badge */}
        {isHighlighted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg">
              <FaStar className="text-yellow-300" />
              {plan.etiquetaDestacado || 'Recomendado'}
            </div>
          </motion.div>
        )}

        <GlassContainer
          className={`h-full relative overflow-hidden transition-all duration-300 ${
            isHighlighted 
              ? 'ring-2 ring-purple-500/50 shadow-2xl shadow-purple-500/20' 
              : 'hover:shadow-xl'
          }`}
        >
          {/* Background geometric accent */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="absolute inset-0 border-2 border-current transform rotate-45 translate-x-16 -translate-y-16"></div>
            <div className="absolute inset-4 border border-current transform rotate-45 translate-x-16 -translate-y-16"></div>
          </div>

          <div className="relative z-10 p-8 h-full flex flex-col">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {getPlanIcon(plan.titulo)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Oswald']">
                {plan.titulo}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                {plan.subtitulo}
              </p>
              
              {/* Price */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-1 font-['Oswald']">
                  {formatPrice(plan.precio)}
                </div>
                {plan.precio.mostrarPrecio && (
                  <p className="text-gray-400 text-sm">
                    Precio final del proyecto
                  </p>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="flex-grow mb-8">
              <ul className="space-y-4">
                {plan.caracteristicas.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      feature.incluido 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {feature.incluido ? (
                        <FaCheck className="w-3 h-3" />
                      ) : (
                        <FaTimes className="w-3 h-3" />
                      )}
                    </div>
                    <span className={`text-sm ${
                      feature.incluido ? 'text-gray-200' : 'text-gray-400 line-through'
                    }`}>
                      {feature.texto}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="space-y-3"
            >
              {/* Primary Button */}
              <a
                href={plan.botonCTA.url || '#contacto'}
                className={`block w-full text-center py-4 px-6 rounded-lg font-bold transition-all duration-300 group ${
                  isHighlighted
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                }`}
                target={plan.botonCTA.url?.startsWith('http') ? '_blank' : undefined}
                rel={plan.botonCTA.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="flex items-center justify-center gap-2">
                  {plan.botonCTA.esWhatsApp && <FaWhatsapp />}
                  {plan.botonCTA.texto}
                  <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              {/* Secondary Button */}
              {plan.botonSecundario?.mostrar && plan.botonSecundario.texto && plan.botonSecundario.url && (
                <a
                  href={plan.botonSecundario.url}
                  className="block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 group border border-white/30 hover:border-white/50 text-white hover:bg-white/10"
                  target={plan.botonSecundario.esExterno ? '_blank' : undefined}
                  rel={plan.botonSecundario.esExterno ? 'noopener noreferrer' : undefined}
                >
                  <span className="flex items-center justify-center gap-2">
                    {plan.botonSecundario.texto}
                    <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              )}
            </motion.div>
          </div>
        </GlassContainer>
      </div>
    </ScrollAnimatedSection>
  );
};

const PricingPlansSection: React.FC<PricingPlansSectionProps> = ({ data }) => {
  // Sort plans by order
  const sortedPlans = [...data.planes].sort((a, b) => a.orden - b.orden);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/20 transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollAnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Oswald']">
              {data.titulo}
            </h2>
            {data.subtitulo && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {data.subtitulo}
              </p>
            )}
          </div>
        </ScrollAnimatedSection>

        {/* Pricing Cards Grid */}
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

        {/* Comparison Table (if enabled) */}
        {data.mostrarComparacion && sortedPlans.length > 1 && (
          <ScrollAnimatedSection delay={0.8}>
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-white text-center mb-8 font-['Oswald']">
                Comparación Detallada
              </h3>
              <GlassContainer className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-6 text-white font-bold">Características</th>
                      {sortedPlans.map((plan, index) => (
                        <th key={index} className="text-center py-4 px-6 text-white font-bold">
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
                      <tr key={featureIndex} className="border-b border-white/10">
                        <td className="py-3 px-6 text-gray-200">{feature}</td>
                        {sortedPlans.map((plan, planIndex) => {
                          const planFeature = plan.caracteristicas.find(f => f.texto === feature);
                          return (
                            <td key={planIndex} className="text-center py-3 px-6">
                              {planFeature ? (
                                planFeature.incluido ? (
                                  <FaCheck className="w-4 h-4 text-green-400 mx-auto" />
                                ) : (
                                  <FaTimes className="w-4 h-4 text-red-400 mx-auto" />
                                )
                              ) : (
                                <span className="text-gray-500">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </GlassContainer>
            </div>
          </ScrollAnimatedSection>
        )}
      </div>
    </section>
  );
};

export default PricingPlansSection;
