import { NextResponse } from 'next/server';

import { db } from '@/db';
import { developerInfo } from '@/db/schema';

export async function GET() {
  try {
    // Get developer info from the database
    const devInfo = await db.select().from(developerInfo);
    return NextResponse.json({ data: devInfo });
  } catch (error) {
    // Error handling
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }
}
