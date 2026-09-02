import React from 'react';

import Intro from '@/components/shared/Intro';
import ThemeToggle from '@/components/ui/ToggleTheme';

const Header = () => {
  return (
    <header>
      <ThemeToggle />
      <Intro />
    </header>
  );
};

export default Header;
