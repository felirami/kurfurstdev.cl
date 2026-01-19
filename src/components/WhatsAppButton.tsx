'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappNumber = "+56912345678"; // Reemplaza con tu número real
  const message = "Hola, necesito información sobre desarrollo web";

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
            <div className="relative">
              <div className="bg-[#111111]/90 backdrop-blur-xl border border-[#333333] rounded-xl p-4 shadow-2xl max-w-xs sm:max-w-sm">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#2ECB98] rounded-full mr-2 animate-pulse"></div>
                      <span className="text-white font-medium text-sm uppercase tracking-wider">Disponible</span>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-[#BBBBBB] hover:text-white active:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 -mt-2"
                      aria-label="Cerrar"
                    >
                      <FaTimes className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <p className="text-[#BBBBBB] text-sm leading-relaxed mb-4">
                    ¿Necesitas desarrollo web profesional? Conversemos sobre tu proyecto.
                  </p>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-[#2ECB98] hover:bg-[#26B88A] active:bg-[#26B88A] active:scale-[0.98] text-black font-medium py-3 px-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-sm min-h-[48px]"
                  >
                    Contactar
                  </button>
                </div>
              </div>
              
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#111111]/90 backdrop-blur-xl border-r border-b border-[#333333] transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative group"
        whileTap={{ scale: 0.95 }}
        aria-label={isExpanded ? "Cerrar WhatsApp" : "Abrir WhatsApp"}
      >
        <div className="absolute inset-0 bg-[#2ECB98]/30 rounded-full blur-xl group-hover:bg-[#2ECB98]/40 transition-all duration-300"></div>
        
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 min-w-[56px] min-h-[56px] bg-[#111111]/80 backdrop-blur-xl border border-[#333333] rounded-full shadow-2xl overflow-hidden group-hover:border-[#2ECB98] active:border-[#2ECB98] transition-all duration-300">
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: isExpanded ? 180 : 0,
                scale: isExpanded ? 0.9 : 1 
              }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <FaTimes className="w-5 h-5 text-white" />
              ) : (
                <FaWhatsapp className="w-6 h-6 text-[#2ECB98]" />
              )}
            </motion.div>
          </div>
          
          <motion.div
            className="absolute inset-0 border-2 border-[#2ECB98]/50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </div>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
