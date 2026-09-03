import React from 'react';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

type TimelineType = {
  title?: string | null;
  url?: string | null;
  belowTitle?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
};

const Timeline = ({ title, description, url, belowTitle, children }: TimelineType) => {
  return (
    <div className="group ps-8 relative before:content-[''] before:absolute before:w-3 before:h-3 before:top-[42px] before:left-0 before:rounded-full before:bg-cv-timeline-dot-stale before:z-1 hover:before:bg-cv-timeline-dot-hover before:transition-all before:duration-500 after:content-[''] after:absolute after:border after:border-cv-timeline-stale after:h-[calc(100%+32px)] after:top-0 after:left-[5px] after:z-0 group-hover:after:border-cv-timeline-hover after:transition-all after:duration-500">
      <div className="pbs-5">
        <h2 className="text-lg font-semibold text-cv-heading leading-snug">
          <span>{title}</span>
          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — open website (opens in new tab)`}
              className="hidden group-hover:inline-block ps-2 text-cv-link"
            >
              <SquareArrowOutUpRight size={12} aria-hidden="true" />
            </Link>
          )}
        </h2>
        <div className="flex items-center gap-2 pbs-1">{belowTitle}</div>
      </div>
      <div className="pbs-3">
        <p className="text-sm leading-7 text-cv-text">{description}</p>
        <div className="pbs-2">{children}</div>
      </div>
    </div>
  );
};

export default Timeline;
