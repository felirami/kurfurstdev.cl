"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PlaceholderPage() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-[#0D0D0D] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-[#111111] border border-[#333333] rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white font-bold text-3xl sm:text-4xl">K</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider">
              KurfurstDev
            </h1>
          </motion.div>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-[#2ECB98] mx-auto mb-8 rounded-full"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-[#BBBBBB] mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Desarrollo web profesional con tecnologías de vanguardia.
            Creamos experiencias digitales que impulsan tu negocio.
          </motion.p>

          {/* Setup Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#111111] border border-[#333333] rounded-xl p-6 sm:p-8 mb-8 max-w-xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-500 font-medium uppercase tracking-wider text-sm">
                Configuración Pendiente
              </span>
            </div>
            <p className="text-[#BBBBBB] text-sm sm:text-base leading-relaxed">
              Este sitio necesita configuración de Sanity CMS para mostrar contenido.
              Configura las variables de entorno <code className="text-[#2ECB98] bg-[#2ECB98]/10 px-2 py-1 rounded">NEXT_PUBLIC_SANITY_PROJECT_ID</code> y <code className="text-[#2ECB98] bg-[#2ECB98]/10 px-2 py-1 rounded">NEXT_PUBLIC_SANITY_DATASET</code> en Vercel.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8"
          >
            {[
              { title: "Next.js 15", desc: "Framework React moderno" },
              { title: "Tailwind CSS", desc: "Diseño responsive" },
              { title: "Sanity CMS", desc: "Gestión de contenido" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-[#333333] rounded-xl p-4 sm:p-6 hover:border-[#2ECB98] transition-colors duration-300"
              >
                <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#BBBBBB] text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="https://www.sanity.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#2ECB98] hover:bg-[#26B88A] text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-sm min-h-[52px] active:scale-[0.98]"
            >
              Configurar Sanity
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#333333] py-6 px-4">
        <p className="text-center text-[#666666] text-sm">
          © {new Date().getFullYear()} KurfurstDev. Mobile-optimized and ready for deployment.
        </p>
      </footer>
    </div>
  );
}
