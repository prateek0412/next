import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en-US', 'nl-NL', 'nl'];
const defaultLocale = 'en-US';

function getLocale(request) {
  // Implement logic to get user's preferred locale from request headers
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next).*)', // Skip all internal paths (_next)
    // Add other configurations as needed
  ],
};
