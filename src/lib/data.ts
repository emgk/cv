import { db } from '@/db';

export const getDev = async () => {
  'use cache';

  try {
    const dev = await db.query.developerInfo.findFirst();
    return dev;
  } catch (error) {
    console.error('Error fetching developer info:', error);
    return null;
  }
};

export const getJobs = async () => {
  'use cache';

  try {
    const jobItems = await db.query.jobsTable.findMany({
      orderBy: (jobs, { desc }) => [desc(jobs.start)],
    });
    return jobItems;
  } catch (error) {
    console.error('Error fetching job items:', error);
    return null;
  }
};

export const getRoles = async (jobId: number) => {
  'use cache';

  try {
    const roles = await db.query.rolesTable.findMany({
      where: (roles, { eq }) => eq(roles.job_id, jobId),
      orderBy: (roles, { desc }) => [desc(roles.start)],
      with: {
        roleSkills: {
          with: {
            skill: true,
          },
        },
      },
    });

    return roles.map((role) => {
      const { roleSkills, ...rest } = role;
      return {
        ...rest,
        skills: roleSkills.map((rs) => rs.skill),
      };
    });
  } catch (error) {
    console.error('Error fetching roles:', error);
    return null;
  }
};

export const getEducations = async () => {
  'use cache';

  try {
    const educations = await db.query.educationTable.findMany({
      orderBy: (edu, { desc }) => [desc(edu.start)],
    });
    return educations;
  } catch (error) {
    console.error('Error fetching educations:', error);
    return null;
  }
};

export const getEducationDegrees = async (educationId: number) => {
  'use cache';

  try {
    const degrees = await db.query.educationDegreesTable.findMany({
      where: (deg, { eq }) => eq(deg.education_id, educationId),
    });
    return degrees;
  } catch (error) {
    console.error('Error fetching degrees:', error);
    return null;
  }
};

export const getContributions = async () => {
  'use cache';

  try {
    const contributions = await db.query.contributionsTable.findMany({
      orderBy: (c, { desc }) => [desc(c.date)],
    });
    return contributions;
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return null;
  }
};

export const getSkills = async () => {
  'use cache';

  try {
    const skills = await db.query.skillsTable.findMany();
    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return null;
  }
};
