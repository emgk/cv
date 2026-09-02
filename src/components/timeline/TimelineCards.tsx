import React from 'react';

import TimelineCard from '@/components/timeline/TimelineCard';
import { getEducations, getJobs } from '@/lib/data';
import { TimelineOrgType } from '@/types/timeline';
import { educationTable } from '@/db/schema';

type TimeLineItemType = typeof educationTable.$inferSelect & Pick<TimelineOrgType, 'workType'>;

const TimelineCards = async ({ type = 'work' }: { type?: 'work' | 'education' }) => {
  let method;

  if (type === 'work') {
    method = getJobs;
  } else if (type === 'education') {
    method = getEducations;
  }

  if (!method) {
    return null;
  }

  const items = await method();

  return (
    <div>
      <div className="relative pbs-3">
        {items?.map((work: TimeLineItemType) => (
          <TimelineCard
            key={work.id}
            timeLineType={type}
            id={work.id}
            title={work.title || ''}
            description={work.description}
            workType={work?.workType as TimelineOrgType['workType']}
            start={work.start || ''}
            end={work.end || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineCards;
