import { NextResponse } from 'next/server';
import { db } from '@/db';
import { jobsTable } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    // Fetch jobs and sort them by start date in descending order
    const jobs = await db.select().from(jobsTable).orderBy(desc(jobsTable.start));
    return NextResponse.json({ data: jobs });
  } catch (error) {
    // Handle errors and return a JSON response with an error message and status code
    return NextResponse.json({ error: 'An error occurred', data: error }, { status: 500 });
  }
}
