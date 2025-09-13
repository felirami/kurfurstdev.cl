// src/components/JsonLdSchema.tsx
import React from 'react';
import { urlFor } from '@/lib/sanity.client';

interface PerfilDeNegocioData {
  nombreDelNegocio?: string;
  nombreLegal?: string;
  tipoDeNegocio?: 'ProfessionalService' | 'LocalBusiness' | 'Organization' | 'TechCompany';
  urlDelSitio?: string;
  logo?: any;
  telefonoPrincipal?: string;
  emailDeContacto?: string;
  direccion?: string;
  textoFooter?: string;
}

interface JsonLdSchemaProps {
  perfilDeNegocio: PerfilDeNegocioData;
}

export default function JsonLdSchema({ perfilDeNegocio }: JsonLdSchemaProps) {
  const generateBusinessSchema = () => {
    const businessType = perfilDeNegocio.tipoDeNegocio || 'ProfessionalService';
    
    const baseSchema: any = {
      '@context': 'https://schema.org',
      '@type': businessType,
      name: perfilDeNegocio.nombreLegal || perfilDeNegocio.nombreDelNegocio || 'KurfurstDev',
      legalName: perfilDeNegocio.nombreLegal || perfilDeNegocio.nombreDelNegocio,
      url: perfilDeNegocio.urlDelSitio || 'https://kurfurstdev.cl',
      description: perfilDeNegocio.textoFooter || 'Soluciones digitales profesionales con Onyx Hub CMS para emprendedores y empresas',
    };

    // Add logo if available
    if (perfilDeNegocio.logo) {
      baseSchema.logo = {
        '@type': 'ImageObject',
        url: urlFor(perfilDeNegocio.logo).width(512).height(512).url(),
        width: 512,
        height: 512
      };
    }

    // Add contact information if available
    if (perfilDeNegocio.telefonoPrincipal || perfilDeNegocio.emailDeContacto) {
      baseSchema.contactPoint = {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'English']
      };

      if (perfilDeNegocio.telefonoPrincipal) {
        baseSchema.contactPoint.telephone = perfilDeNegocio.telefonoPrincipal;
      }

      if (perfilDeNegocio.emailDeContacto) {
        baseSchema.contactPoint.email = perfilDeNegocio.emailDeContacto;
      }
    }

    // Add address if available
    if (perfilDeNegocio.direccion) {
      baseSchema.address = {
        '@type': 'PostalAddress',
        streetAddress: perfilDeNegocio.direccion,
        addressCountry: 'CL'
      };
    }

    // Add specific fields for ProfessionalService
    if (businessType === 'ProfessionalService') {
      baseSchema.serviceType = 'Web Development & CMS Solutions';
      baseSchema.areaServed = {
        '@type': 'Country',
        name: 'Chile'
      };
    }

    // Add same organization as WebSite schema
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
