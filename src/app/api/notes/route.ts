// // src/app/api/notes/route.ts

// import { prisma } from '@/lib/prisma';
// import { NextResponse } from 'next/server';

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const chapterId = searchParams.get('chapterId');

//   if (!chapterId) {
//     return NextResponse.json({ error: 'Missing chapterId' }, { status: 400 });
//   }

//   const notes = await prisma.note.findMany({
//     where: { chapterId },
//     orderBy: { createdAt: 'desc' },
//   });

//   return NextResponse.json(notes);
// }



// import { prisma } from '@/lib/prisma';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest) {
//   const chapterId = req.nextUrl.searchParams.get('chapterId');

//   if (!chapterId) {
//     return NextResponse.json({ error: 'chapterId is required' }, { status: 400 });
//   }

//   const notes = await prisma.note.findMany({
//     where: { chapterId },
//     orderBy: { createdAt: 'desc' },
//   });

//   return NextResponse.json(notes);
// }




// src/app/api/notes/route.ts

import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const chapterId = req.nextUrl.searchParams.get('chapterId');

  if (!chapterId) {
    return NextResponse.json({ error: 'chapterId is required' }, { status: 400 });
  }

  const notes = await prisma.note.findMany({
    where: { chapterId },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(notes);
}
