// /src/app/api/pdf/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'public/uploads/b057fa9d-ed3d-4a55-be13-d072164415be-Application.pdf');
  const file = fs.readFileSync(filePath);

  return new NextResponse(file, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline',
      'Access-Control-Allow-Origin': '*', // if needed
    },
  });
}
