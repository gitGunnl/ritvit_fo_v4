
import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Return a dummy toggle function that does nothing
  const toggleTheme = () => {};

  return { theme: 'dark', toggleTheme };
};
