import { useEffect, useState } from 'react';

declare global {
  interface Window {
    __theme: 'light' | 'dark';
    __setPreferredTheme: (newTheme: 'light' | 'dark') => void;
    __onThemeChange: (newTheme: 'light' | 'dark') => void;
  }
}

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(
    typeof window !== 'undefined' && window.__theme ? window.__theme : 'light',
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__onThemeChange = (newTheme: Theme) => setThemeState(newTheme);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.__onThemeChange = () => undefined;
      }
    };
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (typeof window !== 'undefined' && typeof window.__setPreferredTheme === 'function') {
      window.__setPreferredTheme(newTheme);
    }
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return { theme, setTheme, toggleTheme };
};
