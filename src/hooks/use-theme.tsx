
import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  }, []);

  return { theme: 'dark' };
};
