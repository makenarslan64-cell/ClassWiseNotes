// // src/app/api/upload/route.ts
// import { prisma } from '@/lib/prisma';
// import { writeFile } from 'fs/promises';
// import { randomUUID } from 'crypto';
// import path from 'path';
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const data = await req.formData();
//     const file = data.get('file') as File;
//     const title = data.get('title') as string;
//     const description = data.get('description') as string;
//     const chapterId = data.get('chapterId') as string;
//     const name = data.get('name') as string; // Add this if your schema requires it

//     if (!file || !file.name || !file.size) {
//       return NextResponse.json({ error: 'File is missing' }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const filename = `${randomUUID()}-${file.name}`;
//     const uploadPath = path.join(process.cwd(), 'public', 'uploads', filename);

//     await writeFile(uploadPath, buffer);

//     const note = await prisma.note.create({
//       data: {
//         title,
//         description: description || '',
//         filePath: filename,
//         name, // only include this if your schema requires it
//         chapter: {
//           connect: {
//             id: chapterId,
//           },
//         },
//       },
//     });

//     return NextResponse.json(note, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Failed to upload file' },
//       { status: 500 }
//     );
//   }
// }


import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const chapterId = formData.get('chapterId') as string;
  const noteFile = formData.get('file') as File;
  const imageFile = formData.get('image') as File;

  if (!noteFile || !title || !description || !chapterId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  const noteFilePath = `/uploads/${Date.now()}-${noteFile.name}`;
  const noteBytes = await noteFile.arrayBuffer();
  await writeFile(path.join(uploadsDir, path.basename(noteFilePath)), Buffer.from(noteBytes));


  if (imageFile) {
    const imagePath = `/uploads/${imageFile.name}`;
    const bytes = await imageFile.arrayBuffer();
    await writeFile(path.join(process.cwd(), 'public', 'uploads', imageFile.name), Buffer.from(bytes));
    
    await prisma.note.create({
      data: {
        title,
        description,
        filePath: noteFilePath,
        imagePath, // Save image path to DB
        chapterId,
      },
    });
  }
  

  return NextResponse.json({ success: true });
}
