import React from 'react';
import { skillsTable } from '@/db/schema';

export type SkillType = typeof skillsTable.$inferSelect;

export type TimelineOrgType = {
  id?: number;
  url?: string | null;
  title?: string | null;
  description: React.ReactNode | null;
  workType?: 'remote' | 'on-site' | 'hybrid' | string | null;
  techStack?: SkillType[];
  start?: string | null;
  end?: string | null;
  roles?: TimelineResponsbilityType[];
  timeLineType?: 'work' | 'education';
};

export type TimelineResponsbilityType = {
  id: number;
  job_id: number | null;
  title: string | null;
  description: string | null;
  responsibility: string[] | null;
  degrees?: string[];
  start?: string | null;
  end?: string | null;
  skills: SkillType[];
  timeLineType?: TimelineOrgType['timeLineType'];
};
