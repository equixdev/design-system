import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = ["ru"];

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
