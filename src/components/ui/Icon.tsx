'use client';

import React from 'react';
import { LucideMail } from 'lucide-react';
import { getDevIcon } from '@/lib/misc';

const Icon = ({ tech, className }: { tech?: string; className?: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  if (tech === 'email') {
    return (
      <LucideMail
        size={16}
        aria-hidden="true"
        className={`inline-block pb-0 mbs-[0.8] ${className ?? ''}`}
      />
    );
  }

  const iconClass = tech?.includes('devicon') ? tech : `devicon-${getDevIcon(tech)}`;

  return (
    <i
      className={`${iconClass} ${className ?? ''} ${isHovered ? 'colored' : ''}`}
      aria-hidden="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default Icon;
