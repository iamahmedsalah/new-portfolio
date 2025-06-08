import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Variants for animations
import { container } from '../variants';

const SunIcon = () => (
  <svg
    className="w-6 h-6 text-yellow-400 animate-pulse"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.464 6.464L5.05 5.05m12.02 0l-1.414 1.414M6.464 17.536l-1.414 1.414" />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="w-6 h-6 text-blue-400 animate-pulse"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
      fill="#60a5fa"
    />
  </svg>
);

const Themes = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Update theme-color meta tag
  const updateThemeColor = (currentTheme) => {
    if (typeof document !== 'undefined') {
      // Remove existing theme-color meta tags
      const existingMetas = document.querySelectorAll('meta[name="theme-color"]');
      existingMetas.forEach(meta => meta.remove());

      // Add new theme-color meta tag
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = currentTheme === 'light' ? '#731e1c' : '#2a2e37';
      document.head.appendChild(meta);
    }
  };

  useEffect(() => {
    setMounted(true);
    // Check if we're on the client side and localStorage is available
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeColor(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined' && window.localStorage) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeColor(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Don't render motion components until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex">
        <button className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-base-300 cursor-pointer transition-all duration-300 shadow-lg">
          <SunIcon />
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      className="flex"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`flex items-center justify-center w-[50px] h-[50px] rounded-full bg-base-300  z-10 ${
          theme === 'light' 
            ? 'hover:bg-yellow-400/20 hover:animate-spin-slow' 
            : 'hover:bg-blue-400/10'
        } cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl`}
        onClick={toggleTheme}
        aria-live="polite"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </motion.button>
      
    </motion.div>
  );
};

export default Themes;