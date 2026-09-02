import React, { Key } from 'react';
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
    <div className="group ps-8 relative before:content-[''] before:absolute before:w-3 before:h-3 before:top-10.5 before:left-0 before:bg-cv-timeline-dot-stale before:z-1 hover:before:bg-cv-timeline-dot-hover before:transition-(background-color) before:transition-all before:duration-500">
      <div className="flex items-center gap-5 after:content-[''] after:absolute after:border after:border-cv-timeline-stale after:h-full after:top-0 after:bg-gray-800 after:left-[5] after:z-0 group-hover:after:border-cv-timeline-hover after:transition-(background-color) after:transition-all after:duration-500">
        <div className="group pbs-5">
          <h2 className="text-[clamp(1.25rem, 1.5rem, 2rem)] font-bold">
            <span className="text-[18px] text-cv-text">{title}</span>
            <Link
              href={`${url}`}
              target="_blank"
              className="text-sm text-cv-text hidden group-hover:inline-block ps-2"
            >
              <SquareArrowOutUpRight size={10} />
            </Link>
          </h2>
          <div className="flex items-center gap-2">
            <div className="text-cv-text flex gap-2 relative left-0 items-center text-[13px]">
              <div className="">{formatDate(start || '')}</div>
              <ArrowRight size={10} />
              <div className="">{formatDate(end || '')}</div>
            </div>
            {workType && (
              <>
                <MoreVerticalIcon size={10} />
                <span className="text-cv-text flex gap-2 relative left-0 items-center text-[13px]">
                  {WORK_TYPE[workType as keyof typeof WORK_TYPE]}
                </span>
              </>
            )}
          </div>
          {/*{techStack && <Stack stack={stackItems} />}*/}
        </div>
      </div>
      <div>
        <p className="text-sm py-1 leading-6">{description}</p>
        <div className="">
          {rolesList?.map((role) => (
            <TimelineSubCards key={role?.id} {...(role as any)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
