import React from 'react';
import { DevIntroType } from '@/types/dev';

export const getDevIcon = (tech?: string) => {
  let techIcon = '';

  switch (tech) {
    case 'github':
      techIcon = 'github-original';
      break;
    case 'stackoverflow':
      techIcon = 'stackoverflow-plain';
      break;
    // case 'email':
    //   return <LucideMail size={16} className="pb-0 inline-block mbs-[-3]" />;
    case 'wordpress':
      techIcon = 'wordpress-plain';
      break;
    default:
      techIcon = 'htmx-plain';
  }

  return techIcon;
};

export const buildContactUrl = (devInfo: DevIntroType) => [
  {
    id: 'wordpress',
    title: 'Wordpress Profile',
    icon: 'wordpress',
    url: devInfo?.wordpress,
  },
  {
    id: 'github',
    title: 'Github Profile',
    icon: 'github',
    url: devInfo?.github,
  },
  {
    id: 'stakoverflow',
    icon: 'stackoverflow',
    title: 'StackOverflow Profile',
    url: devInfo?.stackOverflow,
  },
  {
    id: 'email',
    title: 'Email',
    icon: 'email',
    url: `mailto:${devInfo?.email}`,
  },
];
