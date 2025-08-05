// src/app/api/login/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  // Replace this with your actual auth logic
  if (username === 'admin' && password === '1234') {
    (await cookies()).set('token', 'authenticated', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.redirect(new URL('/login?error=invalid', request.url));
}
