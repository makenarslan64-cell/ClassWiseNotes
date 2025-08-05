import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, boardId } = await req.json();
  const classObj = await prisma.class.create({
    data: {
      name,
      board: { connect: { id: boardId } },
    },
  });
  return NextResponse.json(classObj);
}
