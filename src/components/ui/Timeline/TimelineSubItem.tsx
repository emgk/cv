import React from 'react';
import { formatDate } from '@/lib/date';

type TimelineSubItemType = {
  title?: string | null;
  description?: string | null;
  belowTitle?: React.ReactNode;
  time?: string | null;
  timeFormat?: string;
  children?: React.ReactNode;
};

const TimelineSubItem = ({
  title,
  description,
  belowTitle,
  time,
  timeFormat = 'yyyy',
  children,
}: TimelineSubItemType) => {
  return (
    <div className="pbs-4 first:pbs-2">
      <div className="flex items-start gap-3">
        <div className="relative w-full">
          <div className="font-semibold text-base leading-snug pbe-2 flex items-center justify-between gap-4">
            <div className="text-cv-heading">{title}</div>
            {!!belowTitle && belowTitle}
          </div>
          <div
            className="flex flex-col gap-2 text-sm text-cv-text leading-7 tracking-wide"
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
          <div className="text-xs flex gap-1.5 items-center absolute -left-10.5 top-[3] text-cv-sub-heading bg-cv-role-date-bg z-2">
            {time ? formatDate(time, timeFormat) : ''}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TimelineSubItem;
