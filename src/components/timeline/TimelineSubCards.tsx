import React from 'react';
import { AsteriskIcon } from 'lucide-react';

import { TimelineResponsbilityType } from '@/types/timeline';
import { formatDate } from '@/lib/date';

import Stack from '@/components/shared/Stack';

const TimelineSubCards = (role: TimelineResponsbilityType) => (
  <div key={role?.id} className="pbs-3">
    <div className="flex items-center gap-3">
      {/*<Icon className="flex text-2xl" tech={role.tech} />*/}
      <div className="relative">
        <div className="font-bold text-md leading-3 pbe-3 flex items-center justify-between">
          <div>{role.title}</div>
          {role?.skills?.length > 0 && <Stack stack={role?.skills?.filter(Boolean)} />}
        </div>
        <div
          className="flex flex-col gap-2 text-sm/10 text-cv-text leading-6 tracking-wide"
          dangerouslySetInnerHTML={{ __html: role.description || '' }}
        />
        <div className="text-xs flex gap-1.5 items-center absolute left-[-42] top-[-1] bg-cv-role-date-bg">
          {role.start ? formatDate(role.start, 'yyyy') : ''}
        </div>
      </div>
    </div>
    {(role.responsibility?.length || 0) > 0 && (
      <ul className="list-disc list-inside pbs-2">
        {role.responsibility?.map((res) => (
          <li key={res} className="text-sm not-last:mbe-1 leading-7 relative list-none ms-4">
            <AsteriskIcon className="absolute left-[-15] top-2" size={10} />
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
