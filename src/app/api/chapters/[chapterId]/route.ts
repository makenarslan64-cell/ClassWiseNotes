import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { chapterId: string } }
) {
  try {
    const chapter = await prisma.chapter.findUnique({
      where: { id: params.chapterId },
      include: { notes: true },
    });

    if (!chapter) {
      return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong', detail: String(error) }, { status: 500 });
  }
}
