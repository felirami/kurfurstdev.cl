'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import DevelopmentTooltip from './DevelopmentTooltip';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-zinc-800 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg font-['Inter']">K</span>
              </div>
              <h3 className="text-white font-bold text-lg sm:text-xl font-['Inter'] uppercase tracking-wider">
                KurfurstDev
              </h3>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-['Inter']">
              Desarrollo web profesional y soluciones digitales innovadoras para impulsar tu negocio al siguiente nivel.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Link 
                href="https://linkedin.com" 
                className="w-10 h-10 sm:w-11 sm:h-11 min-w-[44px] min-h-[44px] bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#2ECB98] hover:border-[#2ECB98] active:scale-95 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </Link>
              <Link 
                href="https://github.com" 
                className="w-10 h-10 sm:w-11 sm:h-11 min-w-[44px] min-h-[44px] bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#2ECB98] hover:border-[#2ECB98] active:scale-95 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="w-10 h-10 sm:w-11 sm:h-11 min-w-[44px] min-h-[44px] bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#2ECB98] hover:border-[#2ECB98] active:scale-95 transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </Link>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white font-bold text-base sm:text-lg font-['Inter'] uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/servicios" className="text-zinc-400 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-zinc-400 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center">
                  Diseño UI/UX
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-zinc-400 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center">
                  E-commerce
                </Link>
              </li>
              <li>
                <DevelopmentTooltip message="En Desarrollo">
                  <span className="text-zinc-400 transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center cursor-not-allowed">
                    Onyx Hub CMS
                  </span>
                </DevelopmentTooltip>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white font-bold text-base sm:text-lg font-['Inter'] uppercase tracking-wider">
              Enlaces
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-zinc-400 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-zinc-400 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-zinc-400 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] block py-2 min-h-[44px] flex items-center">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6 col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-base sm:text-lg font-['Inter'] uppercase tracking-wider">
              Contacto
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a href="mailto:contacto@kurfurstdev.cl" className="flex items-center space-x-3 p-3 bg-[#111111] border border-zinc-800 rounded-xl hover:border-[#2ECB98] active:border-[#2ECB98] transition-all duration-300 min-h-[48px]">
                <FiMail className="text-[#2ECB98] w-4 h-4 flex-shrink-0" />
                <span className="text-zinc-300 text-xs sm:text-sm font-['Inter'] truncate">contacto@kurfurstdev.cl</span>
              </a>
              <a href="tel:+56912345678" className="flex items-center space-x-3 p-3 bg-[#111111] border border-zinc-800 rounded-xl hover:border-[#2ECB98] active:border-[#2ECB98] transition-all duration-300 min-h-[48px]">
                <FiPhone className="text-[#2ECB98] w-4 h-4 flex-shrink-0" />
                <span className="text-zinc-300 text-xs sm:text-sm font-['Inter']">+56 9 1234 5678</span>
              </a>
              <div className="flex items-center space-x-3 p-3 bg-[#111111] border border-zinc-800 rounded-xl min-h-[48px]">
                <FiMapPin className="text-[#2ECB98] w-4 h-4 flex-shrink-0" />
                <span className="text-zinc-300 text-xs sm:text-sm font-['Inter']">Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs sm:text-sm font-['Inter'] text-center md:text-left">
            © {currentYear} KurfurstDev. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 sm:space-x-8">
            <Link href="/terminos" className="text-zinc-500 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] py-2 min-h-[44px] flex items-center">
              Términos
            </Link>
            <Link href="/privacidad" className="text-zinc-500 hover:text-[#2ECB98] active:text-[#2ECB98] transition-colors duration-300 text-xs sm:text-sm font-['Inter'] py-2 min-h-[44px] flex items-center">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;