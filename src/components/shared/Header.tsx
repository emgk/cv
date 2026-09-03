import React from 'react';

import Intro from '@/components/shared/Intro';
import ThemeToggle from '@/components/ui/ToggleTheme';

const Header = () => {
  return (
    <header role="banner" className="pbs-4">
      <ThemeToggle />
      <Intro />
    </header>
  );
};

export default Header;
