import { NextRequest, NextResponse } from "next/server";
import { DASHBOARD, EnumTokens } from "./shared/lib";

// const protectedRoutes = ["/"];
// export default function middleware(req: NextRequest, response: NextResponse) {
//    const { url, cookies } = req;

//    // const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
//    const accessToken = true;

//    if (!accessToken && protectedRoutes.includes(req.nextUrl.pathname)) {
//       const absoluteURL = new URL("/signin", req.nextUrl.origin);
//       return NextResponse.redirect(absoluteURL.toString());
//    }
// }

export async function middleware(request: NextRequest, response: NextResponse) {
   const { url, cookies } = request;

   // const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
   const refreshToken = true;

   const isAuthPage = url.includes("/auth");

   if (isAuthPage && refreshToken) {
      return NextResponse.redirect(new URL(DASHBOARD.HOME, url));
   }

   if (isAuthPage) {
      return NextResponse.next();
   }

   if (!refreshToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
   }

   return NextResponse.next();
}

export const config = {
   matcher: ["/:path*", "/auth/:path*"],
};
