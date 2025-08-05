// app/api/chapters/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST() {
  try {
    const existing = await prisma.chapter.findMany();
    if (existing.length > 0) {
      return NextResponse.json({ message: 'Chapters already exist' }, { status: 200 });
    }

    await prisma.chapter.createMany({
      data: [
        { name: 'Chapter 1' },
        { name: 'Chapter 2' },
        { name: 'Chapter 3' },
      ],
    });

    return NextResponse.json({ message: 'Chapters created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
