import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

import { Tooltip } from '@/components/ui/Tooltip';
import Timeline from '@/components/ui/Timeline/Timeline';
import TimelineSubItem from '@/components/ui/Timeline/TimelineSubItem';
import Icon from '@/components/ui/Icon';

import { getContributions, getSkills } from '@/lib/data';
import { contributionsTable, skillsTable } from '@/db/schema';

const SkillsStack = ({
  skills,
  contributionTech,
}: {
  skills: (typeof skillsTable.$inferSelect)[];
  contributionTech: typeof contributionsTable.$inferSelect.skills;
}) => {
  const otherSkills = contributionTech?.otherSkills;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {contributionTech?.skills?.map((skill) => {
        const skillObj = skills?.find((s) => s.id === skill);

        return (
          skillObj?.icon &&
          skillObj.url && (
            <Tooltip content={skillObj?.name}>
              <Link
                href={skillObj.url}
                key={skillObj?.url}
                className="inline-flex items-center"
                target="_blank"
              >
                <Icon key={skill} tech={skillObj?.icon || ''} isHoveredInitially />
              </Link>
            </Tooltip>
          )
        );
      })}
      {(otherSkills?.length || 0) > 0 && ' and '}
      {otherSkills?.map((skill, index) => (
        <span key={skill} className="text-xs font-normal">
          {skill}
          {otherSkills.length - 1 !== index ? ', ' : ''}
        </span>
      ))}
    </div>
  );
};

export default async function Contribution() {
  const skills = await getSkills();
  const contributions = await getContributions();

  if (!contributions || !skills) {
    return <>Something went wrong!</>;
  }

  return (
    <div className="relative pbs-3 space-y-8">
      <Timeline
        title="Contributions"
        belowTitle="These are my contributions to the open source community beyond my job work."
        // description={contribution.description}
        // belowTitle={contribution?.date}
      >
        {contributions?.map((contribution) => (
          <TimelineSubItem
            key={contribution?.id}
            title={contribution?.title ?? ''}
            belowTitle={
              <div className="flex text-xs font-normal pbs-2 gap-3 justify-between">
                <div className="flex flex-wrap gap-2 items-center">
                  <span>Skills:</span>{' '}
                  <SkillsStack skills={skills} contributionTech={contribution.skills} />
                </div>
                <div>
                  {contribution.url && (
                    <Link
                      href={contribution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-cv-link"
                      aria-label="Open repository URL in a new tab text-cv-link"
                    >
                      Repo Url <SquareArrowOutUpRight size={12} aria-hidden="true" />
                    </Link>
                  )}
                  {contribution.demoUrl && (
                    <>
                      <span> | </span>
                      <Link
                        href={contribution.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-cv-link"
                        aria-label="Open repository URL in a new tab text-cv-link"
                      >
                        Repo Url <SquareArrowOutUpRight size={12} aria-hidden="true" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            }
            displayTitleSectionAsStack={true}
            description={contribution?.description}
            time={contribution.date}
            renderMonth
          />
        ))}
      </Timeline>
    </div>
  );
}
