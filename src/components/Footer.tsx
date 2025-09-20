'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import DevelopmentTooltip from './DevelopmentTooltip';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-['Inter']">K</span>
              </div>
              <h3 className="text-white font-bold text-xl font-['Inter'] uppercase tracking-wider">
                KurfurstDev
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed font-['Inter']">
              Desarrollo web profesional y soluciones digitales innovadoras para impulsar tu negocio al siguiente nivel.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#2ECB98] hover:border-[#2ECB98] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </Link>
              <Link 
                href="https://github.com" 
                className="w-10 h-10 bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#2ECB98] hover:border-[#2ECB98] transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="w-10 h-10 bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#2ECB98] hover:border-[#2ECB98] transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg font-['Inter'] uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios" className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1">
                  Diseño UI/UX
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1">
                  E-commerce
                </Link>
              </li>
              <li>
                <DevelopmentTooltip message="En Desarrollo">
                  <span className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1 cursor-not-allowed">
                    Onyx Hub CMS
                  </span>
                </DevelopmentTooltip>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg font-['Inter'] uppercase tracking-wider">
              Enlaces
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-zinc-400 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter'] block py-1">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg font-['Inter'] uppercase tracking-wider">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-[#111111] border border-zinc-800 rounded-xl hover:border-[#2ECB98] transition-all duration-300">
                <FiMail className="text-[#2ECB98] w-4 h-4 flex-shrink-0" />
                <span className="text-zinc-300 text-sm font-['Inter']">contacto@kurfurstdev.cl</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-[#111111] border border-zinc-800 rounded-xl hover:border-[#2ECB98] transition-all duration-300">
                <FiPhone className="text-[#2ECB98] w-4 h-4 flex-shrink-0" />
                <span className="text-zinc-300 text-sm font-['Inter']">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-[#111111] border border-zinc-800 rounded-xl hover:border-[#2ECB98] transition-all duration-300">
                <FiMapPin className="text-[#2ECB98] w-4 h-4 flex-shrink-0" />
                <span className="text-zinc-300 text-sm font-['Inter']">Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm font-['Inter']">
            © {currentYear} KurfurstDev. Todos los derechos reservados.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/terminos" className="text-zinc-500 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter']">
              Términos de Servicio
            </Link>
            <Link href="/privacidad" className="text-zinc-500 hover:text-[#2ECB98] transition-colors duration-300 text-sm font-['Inter']">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;