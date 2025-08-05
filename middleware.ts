// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('auth-token')?.value // replace with your actual cookie/token check

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url)) // or your custom login page
  }

  return NextResponse.next()
}

// Protect only /admin and its subroutes
export const config = {
  matcher: ['/admin/:path*'],
}
