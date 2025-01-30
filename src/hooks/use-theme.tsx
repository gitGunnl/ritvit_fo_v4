import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Default to dark

  useEffect(() => {
    // Set dark mode class on mount
    document.documentElement.classList.add('dark');
    
    // Remove light mode class if it exists
    document.documentElement.classList.remove('light');
    
    // Listen for theme changes
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    // Initial check
    handleThemeChange();

    // Cleanup
    return () => {
      document.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('light');
      root.classList.add('dark');
      setTheme('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      setTheme('light');
    }
  };

  return { theme, toggleTheme };
};