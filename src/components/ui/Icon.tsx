import React from 'react';
import { LucideMail } from 'lucide-react';
import { getDevIcon } from '@/lib/misc';

const Icon = ({ tech, className }: { tech?: string; className?: string }) => {
  if (tech === 'email') {
    return <LucideMail size={16} className={`inline-block pb-0 mbs-[-3] ${className ?? ''}`} />;
  }

  const iconClass = tech?.includes('devicon') ? tech : `devicon-${getDevIcon(tech)}`;

  return <i className={`${iconClass} ${className ?? ''}`} aria-hidden="true" />;
};

export default Icon;
