'use client';

import { useState } from 'react';

import { THEME_COOKIE } from '@/lib/constants';

type Theme = 'light' | 'dark';

const useThemeProvider = (initialTheme: Theme = 'light') => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const isDark = theme === 'dark';

  const toggle = () => {
    setTheme((currentTheme) => {
      const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.classList.toggle('dark', nextTheme === 'dark');

      document.cookie = [
        `${THEME_COOKIE}=${nextTheme}`,
        'path=/',
        'max-age=31536000',
        'samesite=lax',
      ].join('; ');

      return nextTheme;
    });
  };

  return {
    isDark,
    toggle,
  };
};

export default useThemeProvider;
