import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Skip middleware for static SPA paths
  if (request.nextUrl.pathname.startsWith('/arranger')) {
    return;
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|zh|ja|ms|ta)/:path*'],
};
