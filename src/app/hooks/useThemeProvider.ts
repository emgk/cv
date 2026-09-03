'use client';

import { useEffect, useState } from 'react';

import { IS_DARK } from '@/types/theme';
import { LC_DARK_MODE_KEY } from '@/lib/constants';

const useThemeProvider = () => {
  const isDarkTheme = localStorage.getItem(LC_DARK_MODE_KEY);
  const [isDark, setIsDark] = useState<IS_DARK>('1' === isDarkTheme);

  useEffect(() => {
    const cl = document.documentElement.classList;
    cl?.[!isDark ? 'remove' : 'add']('dark');
  }, [isDark]);

  const toggle = () => {
    setIsDark(!isDark);

    // Store selected theme preference in local storage
    localStorage.setItem(LC_DARK_MODE_KEY, !isDark ? '1' : '0');
  };

  return {
    isDark,
    toggle,
  };
};

export default useThemeProvider;
