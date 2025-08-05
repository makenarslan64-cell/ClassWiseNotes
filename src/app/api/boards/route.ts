import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const board = await prisma.board.create({ data: { name } });
  return NextResponse.json(board);
}
