import React from 'react';
import { urlFor } from '@/lib/sanity.client';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface PerfilDeNegocioData {
  nombreDelNegocio?: string;
  nombreLegal?: string;
  tipoDeNegocio?: 'ProfessionalService' | 'LocalBusiness' | 'Organization' | 'TechCompany';
  urlDelSitio?: string;
  logo?: SanityImageSource;
  telefonoPrincipal?: string;
  emailDeContacto?: string;
  direccion?: string;
  textoFooter?: string;
}

interface JsonLdSchemaProps {
  perfilDeNegocio: PerfilDeNegocioData;
}

interface JsonLdSchema {
  '@context': string;
  '@type': string;
  name: string;
  legalName?: string;
  url: string;
  description: string;
  logo?: unknown;
  telephone?: string;
  email?: string;
  contactPoint?: unknown;
  address?: unknown;
  areaServed?: unknown;
  serviceType?: unknown;
  [key: string]: unknown;
}

export default function JsonLdSchema({ perfilDeNegocio }: JsonLdSchemaProps) {
  const generateBusinessSchema = () => {
    const businessType = perfilDeNegocio.tipoDeNegocio || 'ProfessionalService';
    
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': businessType,
      name: perfilDeNegocio.nombreLegal || perfilDeNegocio.nombreDelNegocio || 'KurfurstDev',
      legalName: perfilDeNegocio.nombreLegal || perfilDeNegocio.nombreDelNegocio,
      url: perfilDeNegocio.urlDelSitio || 'https://kurfurstdev.cl',
      description: perfilDeNegocio.textoFooter || 'Soluciones digitales profesionales con Onyx Hub CMS para emprendedores y empresas',
    };

    if (perfilDeNegocio.logo) {
      (baseSchema as JsonLdSchema).logo = {
        '@type': 'ImageObject',
        url: urlFor(perfilDeNegocio.logo).width(512).height(512).url(),
        width: 512,
        height: 512
      };
    }

    if (perfilDeNegocio.telefonoPrincipal || perfilDeNegocio.emailDeContacto) {
      (baseSchema as JsonLdSchema).contactPoint = {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
        ...(perfilDeNegocio.telefonoPrincipal && { telephone: perfilDeNegocio.telefonoPrincipal }),
        ...(perfilDeNegocio.emailDeContacto && { email: perfilDeNegocio.emailDeContacto })
      };
    }

    if (perfilDeNegocio.direccion) {
      (baseSchema as JsonLdSchema).address = {
        '@type': 'PostalAddress',
        streetAddress: perfilDeNegocio.direccion,
        addressLocality: 'Chile',
        addressCountry: 'CL'
      };
    }

    if (businessType === 'ProfessionalService') {
      (baseSchema as JsonLdSchema).serviceType = 'Desarrollo Web y CMS';
      (baseSchema as JsonLdSchema).areaServed = {
        '@type': 'Country',
        name: 'Chile'
      };
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: perfilDeNegocio.nombreDelNegocio || 'KurfurstDev',
      url: perfilDeNegocio.urlDelSitio || 'https://kurfurstdev.cl',
      description: perfilDeNegocio.textoFooter || 'Plataforma Onyx Hub CMS para emprendedores',
      publisher: {
        '@type': businessType,
        name: perfilDeNegocio.nombreLegal || perfilDeNegocio.nombreDelNegocio || 'KurfurstDev'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${perfilDeNegocio.urlDelSitio || 'https://kurfurstdev.cl'}?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };

    return [baseSchema, websiteSchema];
  };

  const schemas = generateBusinessSchema();

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
      ))}
    </>
  );
}
