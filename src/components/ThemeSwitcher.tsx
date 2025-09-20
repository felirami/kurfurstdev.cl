"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ArchitecturalContainer from "./ArchitecturalContainer";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('kurfurst-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('dark');
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    
    if (newTheme === 'light') {
      root.style.setProperty('--bg-primary', '#F8F9FA');
      root.style.setProperty('--bg-secondary', '#FFFFFF');
      root.style.setProperty('--bg-tertiary', '#E9ECEF');
      root.style.setProperty('--text-primary', '#1A1A1A');
      root.style.setProperty('--text-secondary', '#495057');
      root.style.setProperty('--accent-primary', '#30E0A0');
      root.style.setProperty('--accent-secondary', '#2ECB98');
      root.style.setProperty('--border-color', '#DEE2E6');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--glass-border', 'rgba(26, 26, 26, 0.1)');
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else {
      root.style.setProperty('--bg-primary', '#1A1A1A');
      root.style.setProperty('--bg-secondary', '#111111');
      root.style.setProperty('--bg-tertiary', '#0F0F0F');
      root.style.setProperty('--text-primary', '#EAEAEA');
      root.style.setProperty('--text-secondary', '#B0B0B0');
      root.style.setProperty('--accent-primary', '#30E0A0');
      root.style.setProperty('--accent-secondary', '#2ECB98');
      root.style.setProperty('--border-color', '#333333');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--glass-border', 'rgba(234, 234, 234, 0.1)');
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('kurfurst-theme', newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <ArchitecturalContainer className="p-3" hover={true}>
      <motion.button
        onClick={toggleTheme}
        className="relative text-[#30E0A0] hover:bg-[#30E0A0]/10 hover:border-[#30E0A0]/30 transition-all duration-500 group overflow-hidden w-full h-full"
        aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#30E0A0]/20 transform rotate-45 group-hover:bg-[#30E0A0]/40 transition-colors duration-300" />
      
      <div className="relative z-10">
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'light' ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {theme === 'light' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              />
            </svg>
          )}
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#30E0A0]/0 via-[#30E0A0]/5 to-[#30E0A0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </ArchitecturalContainer>
  );
}
