'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappNumber = "+56912345678"; // Reemplaza con tu número real
  const message = "¡Hola! Me interesa conocer más sobre los servicios de KurfurstDev 🚀";

  const handleWhatsAppClick = useCallback(() => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, [message, whatsappNumber]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 mr-2"
          >
            {/* Mensaje flotante premium */}
            <div className="relative">
              {/* Contenedor principal con glassmorphism avanzado */}
              <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-5 sm:p-6 shadow-2xl max-w-xs sm:max-w-sm overflow-hidden">
                
                {/* Efectos de fondo animados */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 via-transparent to-green-500/10 opacity-60"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#8A2BE2]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-green-500/20 rounded-full blur-xl"></div>
                
                {/* Borde brillante animado */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#8A2BE2]/30 via-white/20 to-green-500/30 p-[1px]">
                  <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1A1A1A]/90 rounded-3xl"></div>
                </div>
                
                {/* Contenido */}
                <div className="relative z-20">
                  {/* Header con estado online mejorado */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30"></div>
                      </div>
                      <span className="text-white font-['Oswald'] font-semibold text-sm ml-3 tracking-wide">DISPONIBLE AHORA</span>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-white/50 hover:text-white/80 transition-all duration-300 hover:rotate-90 hover:scale-110"
                    >
                      <FaTimes className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Mensaje principal con tipografía mejorada */}
                  <div className="mb-5">
                    <h4 className="text-white font-['Oswald'] font-bold text-lg mb-2 tracking-wide">
                      ¡Hola! 👋
                    </h4>
                    <p className="text-[#EAEAEA] font-['Inter'] text-sm leading-relaxed">
                      ¿Listo para llevar tu proyecto al <span className="text-[#8A2BE2] font-semibold">siguiente nivel</span>? 
                      Conversemos sobre tu visión digital.
                    </p>
                  </div>
                  
                  {/* Botón CTA premium */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="group relative w-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 hover:from-green-400 hover:via-green-500 hover:to-green-400 text-white font-['Oswald'] font-bold text-sm py-3 px-4 rounded-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg hover:shadow-2xl hover:shadow-green-500/25 uppercase tracking-wider overflow-hidden"
                  >
                    {/* Efecto de brillo deslizante */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Contenido del botón */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaWhatsapp className="w-4 h-4" />
                      Iniciar Conversación
                    </span>
                    
                    {/* Resplandor interno */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-300/20 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  {/* Indicador de respuesta rápida */}
                  <div className="flex items-center justify-center mt-3 text-white/60 text-xs font-['Inter']">
                    <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mr-2 animate-pulse"></div>
                    Respuesta típica en 5 min
                  </div>
                </div>
              </div>
              
              {/* Flecha mejorada con glassmorphism */}
              <div className="absolute -bottom-3 right-10">
                <div className="w-6 h-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-r border-b border-white/30 transform rotate-45 shadow-xl"></div>
                <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-[#8A2BE2]/20 to-green-500/10 transform rotate-45"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        onHoverStart={() => !isExpanded && setIsExpanded(true)}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl group-hover:bg-green-400/40 transition-all duration-300"></div>
        
        {/* Glass container principal */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl overflow-hidden group-hover:bg-white/15 transition-all duration-300">
          {/* Gradiente animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-green-500/30 to-green-600/20 group-hover:from-green-300/30 group-hover:via-green-400/40 group-hover:to-green-500/30 transition-all duration-500"></div>
          
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icono */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: isExpanded ? 180 : 0,
                scale: isExpanded ? 0.9 : 1 
              }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaWhatsapp className="w-7 h-7 text-white" />
              )}
            </motion.div>
          </div>
          
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 border-2 border-green-400/50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
