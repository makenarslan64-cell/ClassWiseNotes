import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, classId } = await req.json();
  const subject = await prisma.subject.create({
    data: {
      name,
      class: { connect: { id: classId } },
    },
  });
  return NextResponse.json(subject);
}
