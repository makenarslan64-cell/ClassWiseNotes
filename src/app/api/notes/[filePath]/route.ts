// import fs from 'fs';
// import path from 'path';
// import { NextRequest } from 'next/server';

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { filePath: string } }
// ) {
//   const fileName = params.filePath;
//   const filePath = path.join(process.cwd(), 'uploads', fileName);

//   if (!fs.existsSync(filePath)) {
//     return new Response('File not found', { status: 404 });
//   }

//   const fileBuffer = fs.readFileSync(filePath);

//   return new Response(fileBuffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'inline', // don't force download
//     },
//   });
// }

import { NextRequest } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(
  req: NextRequest,
  { params }: { params: { filePath: string } }
) {
  const fileName = params.filePath;
  const filePath = path.join(process.cwd(), 'uploads', fileName); // Ensure 'uploads' is private

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
