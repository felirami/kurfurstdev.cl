// src/components/sections/ContactSection.tsx
"use client";
import { ContactSectionData } from "@/types";
import StyledButton from "../StyledButton";
import ScrollAnimatedSection from "../ScrollAnimatedSection";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  section: ContactSectionData;
};

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Campo anti-spam
}

export default function ContactSection({ section }: Props) {
  const { formspreeUrl } = section;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Si el honeypot tiene contenido, es probable que sea spam
    if (data.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast.success("✅ ¡Gracias! Tu mensaje ha sido enviado con éxito.");
        reset(); // Limpiar el formulario
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      toast.error("❌ Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollAnimatedSection>
      <section className="relative bg-transparent py-20 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-16 w-px h-32 bg-[#8A2BE2]"></div>
          <div className="absolute bottom-32 right-24 w-24 h-px bg-[#8A2BE2]"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#8A2BE2] transform rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-px h-16 bg-gradient-to-b from-[#8A2BE2] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-[#8A2BE2]"></div>
              <div className="mx-6 text-[#8A2BE2] text-sm font-medium tracking-[0.3em] uppercase">
                Contacto
              </div>
              <div className="w-16 h-px bg-[#8A2BE2]"></div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:items-center">
            
            {/* Left Column - Text Content (40% width) */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] uppercase tracking-tight leading-tight mb-8">
                  Cuéntame tu Idea
                </h2>
                
                <div className="w-20 h-px bg-[#8A2BE2] mb-8"></div>
                
                <p className="text-[#EAEAEA]/80 text-lg leading-relaxed mb-12">
                  Sea un proyecto nuevo desde cero, una mejora a tu web actual o una consulta, estoy aquí para ayudarte a construir la solución digital que tu negocio necesita.
                </p>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="font-['Oswald'] text-lg font-semibold text-[#8A2BE2] uppercase tracking-wider mb-6">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-[#8A2BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-[#EAEAEA]/70 text-sm">info@kurfurstdev.cl</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-[#8A2BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-[#EAEAEA]/70 text-sm">+56 9 1234 5678</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-[#8A2BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-[#EAEAEA]/70 text-sm">Valparaíso, Chile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geometric accent elements */}
              <div className="flex items-center space-x-4 mt-12">
                <div className="w-8 h-px bg-[#8A2BE2]"></div>
                <div className="w-2 h-2 bg-[#8A2BE2] transform rotate-45"></div>
                <div className="w-12 h-px bg-[#8A2BE2]"></div>
              </div>
            </div>

            {/* Right Column - Contact Form (60% width) */}
            <div className="md:col-span-3">
              <div className="relative border border-[#8A2BE2]/20 p-8 lg:p-12 bg-[#8A2BE2]/5">
                {/* Form accent lines */}
                <div className="absolute top-0 left-0 w-20 h-px bg-[#8A2BE2]"></div>
                <div className="absolute bottom-0 right-0 w-20 h-px bg-[#8A2BE2]"></div>
                <div className="absolute top-0 right-0 w-px h-20 bg-[#8A2BE2]"></div>
                <div className="absolute bottom-0 left-0 w-px h-20 bg-[#8A2BE2]"></div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Campo Honeypot Anti-Spam (invisible) */}
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="absolute opacity-0 -z-10 pointer-events-none"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-[#8A2BE2] mb-3 uppercase tracking-wider">
                        Nombre
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        {...register("name", { 
                          required: "El nombre es requerido" 
                        })}
                        className={`w-full bg-transparent border-b-2 ${
                          errors.name ? 'border-red-500' : 'border-[#8A2BE2]/30'
                        } focus:border-[#8A2BE2] focus:shadow-[0_2px_8px_rgba(138,43,226,0.3)] text-[#EAEAEA] py-3 px-4 transition-all duration-300 focus:outline-none placeholder-[#EAEAEA]/40`}
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-[#8A2BE2] mb-3 uppercase tracking-wider">
                        Email
                      </label>
                      <input 
                        id="email" 
                        type="email" 
                        autoComplete="email" 
                        {...register("email", { 
                          required: "El email es requerido",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "El formato del email es inválido"
                          }
                        })}
                        className={`w-full bg-transparent border-b-2 ${
                          errors.email ? 'border-red-500' : 'border-[#8A2BE2]/30'
                        } focus:border-[#8A2BE2] focus:shadow-[0_2px_8px_rgba(138,43,226,0.3)] text-[#EAEAEA] py-3 px-4 transition-all duration-300 focus:outline-none placeholder-[#EAEAEA]/40`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-[#8A2BE2] mb-3 uppercase tracking-wider">
                      Mensaje
                    </label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      {...register("message", { 
                        required: "El mensaje es requerido" 
                      })}
                      className={`w-full bg-transparent border-2 ${
                        errors.message ? 'border-red-500' : 'border-[#8A2BE2]/30'
                      } focus:border-[#8A2BE2] focus:shadow-[0_0_16px_rgba(138,43,226,0.2)] text-[#EAEAEA] py-3 px-4 transition-all duration-300 focus:outline-none placeholder-[#EAEAEA]/40 resize-none`}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div className="flex justify-center pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center px-8 py-4 ${
                        isSubmitting 
                          ? 'bg-[#8A2BE2]/50 cursor-not-allowed' 
                          : 'bg-[#8A2BE2] hover:bg-[#8A2BE2]/80'
                      } text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensaje'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="flex items-center justify-center mt-20">
            <div className="w-8 h-px bg-[#8A2BE2]"></div>
            <div className="mx-3 w-1 h-1 bg-[#8A2BE2] transform rotate-45"></div>
            <div className="w-8 h-px bg-[#8A2BE2]"></div>
          </div>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
}