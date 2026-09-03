import React from 'react';
import { getEducations } from '@/lib/data';

import Timeline from '@/components/ui/Timeline/Timeline';
import WorkPeriod from '@/components/shared/WorkPeriod';
import ListDegrees from '@/app/(public)/education/ListDegress';

export default async function Education() {
  const educations = await getEducations();

  if (!educations) {
    return <>Something went wrong!</>;
  }

  return (
    <div className="relative pbs-3 space-y-8">
      {educations?.map((education) => (
        <Timeline
          key={education.id}
          title={education.title}
          description={education.description}
          belowTitle={<WorkPeriod start={education?.start} end={education.end} />}
        >
          <ListDegrees educationId={education?.id} />
        </Timeline>
      ))}
    </div>
  );
}
