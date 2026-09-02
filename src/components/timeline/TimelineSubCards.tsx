import React from 'react';
import { AsteriskIcon } from 'lucide-react';

import { TimelineResponsbilityType } from '@/types/timeline';
import { formatDate } from '@/lib/date';

import Stack from '@/components/shared/Stack';

const TimelineSubCards = (role: TimelineResponsbilityType) => (
  <div key={role?.id} className="pbs-4 first:pbs-2">
    <div className="flex items-start gap-3">
      <div className="relative w-full">
        <div className="font-semibold text-base leading-snug pbe-2 flex items-center justify-between gap-4">
          <div className="text-cv-heading">{role.title}</div>
          {role?.skills?.length > 0 && <Stack stack={role?.skills?.filter(Boolean)} />}
        </div>
        <div
          className="flex flex-col gap-2 text-sm text-cv-text leading-7 tracking-wide"
          dangerouslySetInnerHTML={{ __html: role.description || '' }}
        />
        <div className="text-xs flex gap-1.5 items-center absolute -left-10.5 top-0.5 text-cv-sub-heading bg-cv-role-date-bg z-2">
          {role.start ? formatDate(role.start, 'yyyy') : ''}
        </div>
      </div>
    </div>
    {(role.responsibility?.length || 0) > 0 && (
      <ul className="pbs-3 space-y-1" aria-label="Responsibilities">
        {role.responsibility?.map((res) => (
          <li key={res} className="text-sm leading-7 relative list-none ms-4 text-cv-text">
            <AsteriskIcon
              className="absolute -left-4 top-2.5 text-cv-sub-heading"
              size={10}
              aria-hidden="true"
            />
            <span
              dangerouslySetInnerHTML={{
                __html: res,
              }}
            />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TimelineSubCards;
