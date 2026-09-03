import React from 'react';
import { formatDate } from '@/lib/date';
import { ArrowRight } from 'lucide-react';
import { TimelineOrgType } from '@/types/timeline';

export default function WorkPeriod({ start, end }: Pick<TimelineOrgType, 'start' | 'end'>) {
  return (
    <div className="text-cv-sub-heading flex gap-2 items-center text-sm">
      <span>{formatDate(start || '')}</span>
      <ArrowRight size={10} aria-hidden="true" />
      <span>{formatDate(end || '')}</span>
    </div>
  );
}
