import React from 'react';
import { formatDate } from '@/lib/date';

type TimelineSubItemType = {
  title?: string | null;
  description?: string | null;
  belowTitle?: React.ReactNode;
  time?: string | null;
  renderMonth?: boolean;
  children?: React.ReactNode;
  displayTitleSectionAsStack?: boolean;
};

const TimelineSubItem = ({
  title,
  description,
  belowTitle,
  time,
  renderMonth = false,
  children,
  displayTitleSectionAsStack = false,
}: TimelineSubItemType) => {
  return (
    <div className="pbs-4 first:pbs-2">
      <div className="flex items-start gap-3">
        <div className="relative w-full">
          <div
            className={`font-semibold text-base leading-snug pbe-2 flex${displayTitleSectionAsStack ? ' flex-col' : 'items-center justify-between'}`}
          >
            <div className="text-cv-heading">{title}</div>
            {!!belowTitle && belowTitle}
          </div>
          <div
            className="flex flex-col gap-2 text-sm leading-7 tracking-wide [&_a]:text-cv-link"
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
          <div className="text-xs flex gap-1.5 items-center absolute -left-10 top-[3] text-cv-sub-heading bg-cv-role-date-bg z-2">
            {!!time && (
              <div className="inline-flex flex-col justify-center items-center">
                {renderMonth && <div>{formatDate(time, 'MMM')}</div>}
                <div>{formatDate(time, 'yyyy')}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TimelineSubItem;
