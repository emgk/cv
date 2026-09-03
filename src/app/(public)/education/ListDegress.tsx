import React from 'react';

import TimelineSubItem from '@/components/ui/Timeline/TimelineSubItem';
import { getEducationDegrees } from '@/lib/data';

export default async function ListDegrees({ educationId }: { educationId: number }) {
  const degress = await getEducationDegrees(educationId);

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
}
