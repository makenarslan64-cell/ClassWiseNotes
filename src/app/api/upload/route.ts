// src/app/api/upload/route.ts
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';

export const config = {
  api: {
    bodyParser: false, // Let us handle it manually
  },
};

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const chapterId = formData.get('chapterId') as string;
  const noteFile = formData.get('file') as File;
  const imageFile = formData.get('image') as File | null;

  if (!noteFile || !title || !description || !chapterId) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  async function uploadToCloudinary(file: File, folder: string) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder }, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        })
        .end(buffer);
    });

    return result;
  }

  try {
    const noteUpload = await uploadToCloudinary(noteFile, 'notes');
    let imageUpload = null;

    if (imageFile && imageFile.size > 0) {
      imageUpload = await uploadToCloudinary(imageFile, 'images');
    }

    // Save to DB (example)
    const newNote = await prisma.note.create({
      data: {
        title,
        description,
        filePath: (noteUpload as any).secure_url,
        imagePath: imageUpload ? (imageUpload as any).secure_url : null,
        chapter: { connect: { id: chapterId } },
      },
    });

    return NextResponse.json({ success: true, note: newNote });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Cloud upload failed' }, { status: 500 });
  }
}
