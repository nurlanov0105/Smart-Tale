import { NextRequest, NextResponse } from "next/server";
import { EnumTokens, MARKETPLACE } from "./shared/lib";
import Cookies from "js-cookie";
//
const protectedRoutes = ["/", "/marketplace"];
export default function middleware(req: NextRequest, response: NextResponse) {
   const { url, cookies } = req;

   // const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
   if (protectedRoutes.includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL(MARKETPLACE.EQUIPMENT, req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
   }

   // if (!accessToken && protectedRoutes.includes(req.nextUrl.pathname)) {
   //    const absoluteURL = new URL("/login", req.nextUrl.origin);
   //    return NextResponse.redirect(absoluteURL.toString());
   // }
}

// export async function middleware(request: NextRequest, response: NextResponse) {
//    const { url, } = request;
//
//    // const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
//
//    const refreshToken = true;
//
//    const protectedRoutes = ["/confirmation" , "/login", "/register"];
//
//    const isAuthPage = protectedRoutes.includes(request.nextUrl.pathname);
//
//    // const isMarketplaceEquipmentPage = url.includes(MARKETPLACE.EQUIPMENT);
//    //
//    // if (isAuthPage && refreshToken) {
//    //    return NextResponse.redirect(new URL(MARKETPLACE.EQUIPMENT, url));
//    // }
//    //
//    // if (isAuthPage || isMarketplaceEquipmentPage) {
//    //    return NextResponse.next();
//    // }
//
//    // return NextResponse.redirect(new URL(MARKETPLACE.EQUIPMENT, url));
// }
//
// export const config = {
//    matcher: ["/:path*", "/auth/:path*"],
// };
