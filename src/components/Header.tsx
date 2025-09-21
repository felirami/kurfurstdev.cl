'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Sobre Mí', href: '/sobre-mi' },
  ];

  return (
    <header className="relative">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#111111]/90 backdrop-blur-xl border-b border-zinc-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-[#111111] border border-zinc-800 rounded-xl flex items-center justify-center hover:border-[#2ECB98] transition-all duration-300"
              >
                <span className="text-white font-bold text-lg font-['Inter']">K</span>
              </motion.div>
              <span className="text-white font-bold text-xl tracking-tight group-hover:text-[#2ECB98] transition-colors duration-300 font-['Inter'] uppercase">
                KurfurstDev
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-[#2ECB98] transition-colors duration-300 font-medium relative group font-['Inter'] uppercase text-sm tracking-wider"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ECB98] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                href="/contacto"
                className="bg-[#2ECB98] text-black px-6 py-3 hover:bg-[#26B88A] transition-all duration-300 font-bold border border-[#2ECB98] hover:shadow-lg hover:shadow-[#2ECB98]/25 rounded-xl font-['Inter'] uppercase text-sm tracking-wider"
              >
                Contacto
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-zinc-300 hover:text-[#2ECB98] transition-colors duration-300"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-[#111111]/95 backdrop-blur-xl z-50"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-5 right-5 text-zinc-300 hover:text-[#2ECB98] transition-colors duration-300 z-50"
              >
                <FiX size={28} />
              </button>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-zinc-300 hover:text-[#2ECB98] transition-colors duration-300 font-medium text-2xl font-['Inter'] uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contacto"
                  onClick={closeMenu}
                  className="bg-[#2ECB98] text-black px-8 py-4 hover:bg-[#26B88A] transition-all duration-300 font-bold border border-[#2ECB98] text-center rounded-xl font-['Inter'] uppercase text-base tracking-wider mt-4"
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </header>
  );
};

export default Header;

// Forzar detección de cambios