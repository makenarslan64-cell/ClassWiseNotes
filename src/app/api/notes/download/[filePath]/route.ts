// src/app/api/notes/download/[filePath]/route.ts

import { NextRequest } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(
  req: NextRequest,
  { params }: { params: { filePath: string } }
) {
  const fileName = params.filePath;
  const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

  try {
    const fileBuffer = await fs.readFile(filePath);
    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (err) {
    return new Response('File not found', { status: 404 });
  }
}
