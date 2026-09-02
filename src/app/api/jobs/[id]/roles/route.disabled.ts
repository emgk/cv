import { NextResponse } from 'next/server';
import { desc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { roleSkillsTable, rolesTable, skillsTable } from '@/db/schema';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Get roles and skills for the given job ID
  const roles = await db
    .select({
      roles: rolesTable,
      skills: skillsTable,
    })
    .from(rolesTable)
    .where(eq(rolesTable.job_id, parseInt(id)))
    .leftJoin(roleSkillsTable, eq(rolesTable.id, roleSkillsTable.role_id))
    .leftJoin(skillsTable, eq(roleSkillsTable.skill_id, skillsTable.id))
    .orderBy(desc(rolesTable.start));

  const map = new Map();

  // Populate the map with roles and their associated skills
  for (const current of roles) {
    const roleId = current.roles.id;

    if (!map.has(roleId)) {
      map.set(roleId, {
        ...current.roles,
        skills: [],
      });
    }

    if (current.skills) {
      map.get(roleId).skills.push(current.skills);
    }
  }

  // Convert the map values to an array
  const rolesList = [...map.values()];

  return NextResponse.json({ data: rolesList });
}
