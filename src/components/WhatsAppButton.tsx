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
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 mr-2"
          >
            {/* Mensaje flotante */}
            <div className="relative">
              {/* Glass container con efecto premium */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl max-w-xs">
                {/* Gradiente sutil en el borde */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8A2BE2]/20 to-transparent opacity-50"></div>
                
                {/* Contenido */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-white font-medium text-sm">En línea</span>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <FaTimes className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <p className="text-white text-sm leading-relaxed mb-3">
                    ¡Hola! 👋 ¿Necesitas ayuda con tu proyecto web? Estoy aquí para asesorarte.
                  </p>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Iniciar conversación
                  </button>
                </div>
              </div>
              
              {/* Flecha apuntando al botón */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/10 backdrop-blur-md border-r border-b border-white/20 transform rotate-45"></div>
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
        <div className="relative w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl overflow-hidden group-hover:bg-white/15 transition-all duration-300">
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
