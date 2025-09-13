// src/components/Footer.tsx
import Link from 'next/link';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface BusinessProfile {
  nombreDelNegocio?: string;
  nombreLegal?: string;
  logo?: SanityImageSource;
  telefonoPrincipal?: string;
  emailDeContacto?: string;
  direccion?: string;
  textoFooter?: string;
}

export default function Footer({ businessProfile }: { businessProfile: BusinessProfile }) {
    return (
      <footer className="relative bg-[#0F0F0F]/95 backdrop-blur-sm border-t border-[#8A2BE2]/20">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-40"></div>
        
        {/* Geometric background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-8 left-16 w-px h-16 bg-[#8A2BE2] opacity-30"></div>
          <div className="absolute bottom-12 right-24 w-8 h-px bg-[#8A2BE2] opacity-20"></div>
          <div className="absolute top-8 right-16 w-2 h-2 bg-[#8A2BE2] transform rotate-45 opacity-40"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Columna 1 - Logo y Descripción */}
            <div className="text-center md:text-left">
              <div className="font-['Oswald'] text-2xl font-bold text-[#EAEAEA] uppercase tracking-wider mb-3">
                KurfurstDev
              </div>
              <div className="w-16 h-px bg-[#8A2BE2] mx-auto md:mx-0 mb-4"></div>
              <p className="text-[#EAEAEA]/80 text-sm leading-relaxed">
                Soluciones Digitales para Emprendedores
              </p>
            </div>

            {/* Columna 2 - Navegación */}
            <div className="text-center">
              <h3 className="font-['Oswald'] text-lg font-bold text-[#EAEAEA] uppercase tracking-wide mb-4">
                Navegación
              </h3>
              <nav className="space-y-2">
                <Link href="/" className="block text-[#EAEAEA]/70 hover:text-[#8A2BE2] transition-colors duration-300 text-sm">
                  Inicio
                </Link>
                <Link href="/servicios" className="block text-[#EAEAEA]/70 hover:text-[#8A2BE2] transition-colors duration-300 text-sm">
                  Servicios
                </Link>
                <Link href="/onyx-hub" className="block text-[#EAEAEA]/70 hover:text-[#8A2BE2] transition-colors duration-300 text-sm">
                  Onyx Hub
                </Link>
                <Link href="/portafolio" className="block text-[#EAEAEA]/70 hover:text-[#8A2BE2] transition-colors duration-300 text-sm">
                  Portafolio
                </Link>
                <Link href="/sobre-mi" className="block text-[#EAEAEA]/70 hover:text-[#8A2BE2] transition-colors duration-300 text-sm">
                  Sobre mí
                </Link>
                <Link href="/contacto" className="block text-[#EAEAEA]/70 hover:text-[#8A2BE2] transition-colors duration-300 text-sm">
                  Contacto
                </Link>
              </nav>
            </div>

            {/* Columna 3 - Powered by */}
            <div className="text-center md:text-right">
              <div className="text-[#EAEAEA]/60 text-sm font-medium">
                Powered by Onyx Hub
              </div>
              {/* Geometric accent */}
              <div className="flex items-center justify-center md:justify-end space-x-2 mt-4">
                <div className="w-4 h-px bg-[#8A2BE2]"></div>
                <div className="w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
                <div className="w-4 h-px bg-[#8A2BE2]"></div>
              </div>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="mt-8 pt-6 border-t border-[#8A2BE2]/10">
            <div className="text-center">
              <p className="text-sm text-[#EAEAEA]/60">
                © {new Date().getFullYear()} KurfurstDev. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }