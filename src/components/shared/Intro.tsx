import React from 'react';
import Link from 'next/link';

import Title from '@/components/shared/Title';
import Icon from '@/components/ui/Icon';

import { buildContactUrl } from '@/lib/misc';
import { getDev } from '@/lib/data';

const Intro = async () => {
  const devInfo = await getDev();

  if (!devInfo) {
    return <>Something went wrong!</>;
  }

  const contactUrls = buildContactUrl(devInfo ?? {});

  return (
    <>
      <div className="flex flex-col md:flex md:flex-row gap-1 items-baseline justify-between">
        <Link href="/" aria-label="Go to homepage">
          <Title>{devInfo?.name}</Title>
          <div className="pbs-1 text-cv-sub-heading text-sm">{devInfo?.skills}</div>
        </Link>
        <ul className="flex gap-4 pbs-2 list-none" role="list" aria-label="Contact links">
          {contactUrls.map((contact) => (
            <li key={contact.id} role="listitem">
              <Link
                href={contact.url || ''}
                aria-label={contact.title}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-cv-text hover:text-cv-link transition-colors"
              >
                <Icon tech={contact.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {devInfo?.about && (
        <div className="relative group">
          <div
            className="flex flex-col gap-2 text-sm leading-6 my-5 py-2 ps-8 after:content-[''] after:absolute after:border after:border-cv-timeline-stale after:h-full after:top-0 after:bg-cv-timeline-stale after:left-[5px] after:z-0 group-hover:after:border-cv-timeline-hover after:transition-all after:duration-500"
            dangerouslySetInnerHTML={{ __html: devInfo?.about }}
          />
        </div>
      )}
    </>
  );
};

export default Intro;
