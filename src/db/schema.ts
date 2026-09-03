import { date, integer, jsonb, pgTable, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const developerInfo = pgTable('developer_info', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name'),
  email: text('email'),
  about: text('about'),
  skills: jsonb('skills').$type<string[] | null>(),
  linkedin: text('linkedin'),
  wordpress: text('wordpress'),
  stackOverflow: text('stackoverflow'),
  github: text('github'),
});

export const jobsTable = pgTable('jobs', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title'),
  workType: text('worktype'),
  url: text('url'),
  company: text('company'),
  start: date('start'),
  end: date('end'),
  description: text('description'),
});

export const jobsRelations = relations(jobsTable, ({ many }) => ({
  roles: many(rolesTable),
}));

export const rolesTable = pgTable('roles', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  job_id: integer('job_id').references(() => jobsTable.id, { onDelete: 'cascade' }),
  title: text('title'),
  description: text('description'),
  start: date('start'),
  end: date('end'),
  responsibility: jsonb('responsibility').$type<string[] | null>(),
});

export const rolesRelations = relations(rolesTable, ({ one, many }) => ({
  job: one(jobsTable, {
    fields: [rolesTable.job_id],
    references: [jobsTable.id],
  }),
  roleSkills: many(roleSkillsTable),
}));

export const skillsTable = pgTable('skills', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name'),
  icon: text('icon'),
  url: text('url'),
});

export const skillsRelations = relations(skillsTable, ({ many }) => ({
  roleSkills: many(roleSkillsTable),
}));

export const roleSkillsTable = pgTable('role_skills', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  role_id: integer('role_id').references(() => rolesTable.id, { onDelete: 'cascade' }),
  skill_id: integer('skill_id').references(() => skillsTable.id, { onDelete: 'cascade' }),
});

export const roleSkillsRelations = relations(roleSkillsTable, ({ one }) => ({
  role: one(rolesTable, {
    fields: [roleSkillsTable.role_id],
    references: [rolesTable.id],
  }),
  skill: one(skillsTable, {
    fields: [roleSkillsTable.skill_id],
    references: [skillsTable.id],
  }),
}));

export const educationTable = pgTable('education', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title'),
  start: date('start'),
  end: date('end'),
  description: text('description'),
});

export const educationRelations = relations(educationTable, ({ many }) => ({
  degrees: many(educationDegreesTable),
}));

export const educationDegreesTable = pgTable('education_degrees', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  education_id: integer('education_id').references(() => educationTable.id, {
    onDelete: 'cascade',
  }),
  title: text('title'),
  description: text('description'),
});

export const educationDegreesRelations = relations(educationDegreesTable, ({ one }) => ({
  education: one(educationTable, {
    fields: [educationDegreesTable.education_id],
    references: [educationTable.id],
  }),
}));

export const contributionsTable = pgTable('contributions', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  date: date('date').$type<string>(),
  title: text('title'),
  description: text('description'),
  url: text('url'),
  demoUrl: text('demo_url'),
  skills: jsonb('skills').$type<{ skills: number[]; otherSkills: string[] }>(),
});
