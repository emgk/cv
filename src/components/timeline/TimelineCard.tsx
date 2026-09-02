import React from 'react';
import Link from 'next/link';
import { ArrowRight, MoreVerticalIcon, SquareArrowOutUpRight } from 'lucide-react';

import { formatDate } from '@/lib/date';
import { WORK_TYPE } from '@/lib/constants';
import { getEducationDegrees, getRoles } from '@/lib/data';

import TimelineSubCards from '@/components/timeline/TimelineSubCards';
import { TimelineOrgType } from '@/types/timeline';

const TimelineCard = async ({
  timeLineType,
  id,
  url,
  workType,
  title,
  description,
  start,
  end,
}: TimelineOrgType) => {
  let method;

  if (timeLineType === 'work') {
    method = getRoles;
  } else if (timeLineType === 'education') {
    method = getEducationDegrees;
  }

  if (!method) {
    return null;
  }

  const rolesList = await method(id || 0);

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
        <div className="flex items-center gap-2 pbs-1">
          <div className="text-cv-sub-heading flex gap-2 items-center text-sm">
            <span>{formatDate(start || '')}</span>
            <ArrowRight size={10} aria-hidden="true" />
            <span>{formatDate(end || '')}</span>
          </div>
          {workType && (
            <>
              <MoreVerticalIcon size={10} aria-hidden="true" className="text-cv-sub-heading" />
              <span className="text-cv-sub-heading text-sm">
                {WORK_TYPE[workType as keyof typeof WORK_TYPE]}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="pbs-3">
        <p className="text-sm leading-7 text-cv-text">{description}</p>
        <div className="pbs-2">
          {rolesList?.map((role) => (
            <TimelineSubCards key={role?.id} {...(role as any)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
