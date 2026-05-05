import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('vmu_auth')
  const { pathname } = request.nextUrl
  
  // Protect dashboard routes
  if (!authCookie && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // Redirect authenticated users away from login
  if (authCookie && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Redirect root to dashboard (which will then redirect to login if unauth)
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/login'],
}
