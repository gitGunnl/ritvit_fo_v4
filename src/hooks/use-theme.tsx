
import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  return { theme: 'dark' };
};
