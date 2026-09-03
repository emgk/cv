import React from 'react';
import { MoreVerticalIcon } from 'lucide-react';

import { educationTable } from '@/db/schema';
import { TimelineOrgType } from '@/types/timeline';
import { getJobs, getRoles } from '@/lib/data';
import { WORK_TYPE } from '@/lib/constants';

import WorkPeriod from '@/components/shared/WorkPeriod';
import TimelineSubItem from '@/components/ui/Timeline/TimelineSubItem';
import Timeline from '@/components/ui/Timeline/Timeline';

type TimeLineItemType = typeof educationTable.$inferSelect &
  Pick<TimelineOrgType, 'workType' | 'url'>;

const ListRoles = async ({ jobId }: { jobId: number }) => {
  const degress = await getRoles(jobId);

  if (!degress) {
    return <>Something went wrong!</>;
  }

  return degress.map((degree) => (
    <TimelineSubItem
      key={degree?.id}
      title={degree?.title ?? ''}
      description={degree?.description}
    />
  ));
};

export default async function Home() {
  const jobs = await getJobs();

  if (!jobs) {
    return <>Something went wrong!</>;
  }

  return (
    <div className="relative pbs-3 space-y-8">
      {jobs?.map((job: TimeLineItemType) => (
        <Timeline
          key={job.id}
          title={job.title}
          url={job.url}
          description={job.description}
          belowTitle={
            <>
              <WorkPeriod start={job.start} end={job.end} />
              {job.workType && (
                <>
                  <MoreVerticalIcon size={10} aria-hidden="true" className="text-cv-sub-heading" />
                  <span className="text-cv-sub-heading text-sm">
                    {WORK_TYPE[job.workType as keyof typeof WORK_TYPE]}
                  </span>
                </>
              )}
            </>
          }
        >
          <ListRoles jobId={job.id} />
        </Timeline>
      ))}
    </div>
  );
}
