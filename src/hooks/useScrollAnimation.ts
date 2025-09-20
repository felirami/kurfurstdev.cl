// src/hooks/useScrollAnimation.ts
"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface UseScrollAnimationOptions {
  once?: boolean;
  amount?: number;
  fallbackDelay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    once = true,
    amount = 0.1,
    fallbackDelay = 100
  } = options;

  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const isInView = useInView(ref, {
    once: false, // Siempre permitir re-detección
    margin: "-20px",
    amount
  });

  // Efecto para manejar la animación
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShouldAnimate(true);
      if (once) {
        setHasAnimated(true);
      }
    }
  }, [isInView, hasAnimated, once]);

  // Fallback: Si el elemento está visible al cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current && !hasAnimated) {
        const element = ref.current as HTMLElement;
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setShouldAnimate(true);
          if (once) {
            setHasAnimated(true);
          }
        }
      }
    }, fallbackDelay);

    return () => clearTimeout(timer);
  }, [hasAnimated, once, fallbackDelay]);

  return {
    ref,
    shouldAnimate: shouldAnimate || isInView,
    isInView,
    hasAnimated
  };
}
