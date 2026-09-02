'use client';

import { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const onClick = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <button
      type="button"
      aria-pressed={dark}
      aria-label="Toggle colour theme"
      className="fixed top-0 right-10 z-50 left-auto bg-cv-appreance-toggle-btn-bg rounded-bl-md rounded-br-md px-4 py-0.5 cursor-pointer border-cv-appreance-toggle-btn-border border border-t-0 max-w-37.5 hidden md:flex items-center"
      onClick={onClick}
    >
      <span className="text-cv-appreance-toggle-btn-color text-sm select-none">
        {dark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}
