"use client";
import { ContactSectionData } from "@/types";
import SafeScrollAnimatedSection from "../SafeScrollAnimatedSection";
import { ArchitecturalContainer, SectionContainer } from "../UnifiedContainers";
import PageHeader from "../PageHeader";
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
  honeypot?: string; 
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
        reset(); 
      } else {
        throw new Error("Error en el envío");
      }
    } catch {
      toast.error("❌ Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionContainer withAura={true}>
      <div className="max-w-7xl mx-auto pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <SafeScrollAnimatedSection delay={0.1} duration={0.6}>
          <PageHeader 
            subtitle="Contacto"
            title="CUÉNTAME TU IDEA"
            description="Sea un proyecto nuevo desde cero, una mejora a tu web actual o una consulta, estoy aquí para ayudarte a construir la solución digital que tu negocio necesita."
          />
        </SafeScrollAnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <SafeScrollAnimatedSection delay={0.2} duration={0.6}>
            <ArchitecturalContainer>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-6">
                INFORMACIÓN DE CONTACTO
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2ECB98]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="section-subtitle text-sm">info@kurfurstdev.cl</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2ECB98]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="section-subtitle text-sm">+56 9 1234 5678</span>
                </div>
              </div>
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>

          <SafeScrollAnimatedSection delay={0.3} duration={0.6}>
            <ArchitecturalContainer>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                  type="text"
                  {...register("honeypot")}
                  className="absolute opacity-0 -z-10 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[#2ECB98] mb-2 sm:mb-3 uppercase tracking-wider">
                      Nombre
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      {...register("name", { required: "El nombre es requerido" })}
                      className={`w-full bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-[#2ECB98]/30'} focus:border-[#2ECB98] focus:shadow-[0_2px_8px_rgba(46,203,152,0.3)] text-[#EAEAEA] py-3 px-3 sm:px-4 transition-all duration-300 focus:outline-none placeholder-[#EAEAEA]/40 text-base min-h-[48px]`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && <p className="mt-2 text-xs sm:text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#2ECB98] mb-2 sm:mb-3 uppercase tracking-wider">
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
                      className={`w-full bg-transparent border-b-2 ${errors.email ? 'border-red-500' : 'border-[#2ECB98]/30'} focus:border-[#2ECB98] focus:shadow-[0_2px_8px_rgba(46,203,152,0.3)] text-[#EAEAEA] py-3 px-3 sm:px-4 transition-all duration-300 focus:outline-none placeholder-[#EAEAEA]/40 text-base min-h-[48px]`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="mt-2 text-xs sm:text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="group mt-6 sm:mt-8">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[#2ECB98] mb-2 sm:mb-3 uppercase tracking-wider">
                    Mensaje
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    {...register("message", { required: "El mensaje es requerido" })}
                    className={`w-full bg-transparent border-2 ${errors.message ? 'border-red-500' : 'border-[#2ECB98]/30'} focus:border-[#2ECB98] focus:shadow-[0_0_16px_rgba(46,203,152,0.2)] text-[#EAEAEA] py-3 px-3 sm:px-4 transition-all duration-300 focus:outline-none placeholder-[#EAEAEA]/40 resize-none text-base`}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                  {errors.message && <p className="mt-2 text-xs sm:text-sm text-red-500">{errors.message.message}</p>}
                </div>
                <div className="flex justify-center pt-6 sm:pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 min-h-[52px] text-sm sm:text-base active:scale-[0.98] ${isSubmitting ? 'bg-[#2ECB98]/50 cursor-not-allowed rounded-xl text-black font-bold' : 'btn-primary'}`}
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
            </ArchitecturalContainer>
          </SafeScrollAnimatedSection>
        </div>

        <div className="flex items-center justify-center mt-12 sm:mt-20">
          <div className="w-8 h-px bg-[#2ECB98]"></div>
          <div className="mx-3 w-1 h-1 bg-[#2ECB98] transform rotate-45"></div>
          <div className="w-8 h-px bg-[#2ECB98]"></div>
        </div>
      </div>
    </SectionContainer>
  );
}