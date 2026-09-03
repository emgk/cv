'use client';

import useThemeProvider from '@/app/hooks/useThemeProvider';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  initialTheme: Theme;
}

export default function ThemeToggle({ initialTheme }: ThemeToggleProps) {
  const themeProvider = useThemeProvider(initialTheme);
  const isDark = themeProvider.isDark;

  const onClick = () => {
    themeProvider.toggle();
  };

  return (
    <button
      type="button"
      aria-pressed={isDark}
      aria-label="Toggle colour theme"
      className="fixed top-0 right-10 z-50 left-auto bg-cv-appreance-toggle-btn-bg rounded-bl-md rounded-br-md px-4 py-0.5 cursor-pointer border-cv-appreance-toggle-btn-border border border-t-0 max-w-37.5 hidden md:flex items-center"
      onClick={onClick}
    >
      <span className="text-cv-appreance-toggle-btn-color text-sm select-none">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}
