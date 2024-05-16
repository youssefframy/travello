import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicNestedRoutes,
  publicRoutes,
} from "@/routes";
import { NextRequest } from "next/server";
import { getSession } from "@/lib/authSession";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const isLoggedIn = !!(await getSession());

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPublicNestedRoute = publicNestedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.includes(nextUrl.searchParams.toString());

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute && !isPublicNestedRoute) {
    return Response.redirect(new URL(`/?auth=login`, nextUrl));
  }

  return;
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// export default auth((req: any): void | Response | Promise<void | Response> => {

// });
