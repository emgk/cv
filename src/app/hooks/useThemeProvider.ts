'use client';

import { useEffect, useState } from 'react';

import { IS_DARK } from '@/types/theme';
import { LC_DARK_MODE_KEY } from '@/lib/constants';

const useThemeProvider = () => {
  const [isDark, setIsDark] = useState<IS_DARK>(false);

  useEffect(() => {
    const dark = localStorage.getItem(LC_DARK_MODE_KEY) === '1';

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(dark);

    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggle = () => {
    setIsDark((current) => {
      const next = !current;

      localStorage.setItem(LC_DARK_MODE_KEY, next ? '1' : '0');

      document.documentElement.classList.toggle('dark', next);

      return next;
    });
  };

  return {
    isDark,
    toggle,
  };
};

export default useThemeProvider;
