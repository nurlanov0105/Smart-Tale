import { NextRequest, NextResponse } from "next/server";
import { DASHBOARD, EnumTokens, MARKETPLACE } from "./shared/lib";

const protectedRoutes = ["/", "/marketplace"];
export default function middleware(req: NextRequest, response: NextResponse) {
   const { url, cookies } = req;

   // const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
   const accessToken = true;

   if (protectedRoutes.includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL(MARKETPLACE.EQUIPMENT, req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
   }

   // if (!accessToken && protectedRoutes.includes(req.nextUrl.pathname)) {
   //    const absoluteURL = new URL("/signin", req.nextUrl.origin);
   //    return NextResponse.redirect(absoluteURL.toString());
   // }
}

// export async function middleware(request: NextRequest, response: NextResponse) {
//    const { url } = request;
//
//    // const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
//    const refreshToken = true;
//
//    const isAuthPage = url.includes("/auth");
//    const isMarketplaceEquipmentPage = url.includes(MARKETPLACE.EQUIPMENT);
//
//    if (isAuthPage && refreshToken) {
//       return NextResponse.redirect(new URL(MARKETPLACE.EQUIPMENT, url));
//    }
//
//    if (isAuthPage || isMarketplaceEquipmentPage) {
//       return NextResponse.next();
//    }
//
//    return NextResponse.redirect(new URL(MARKETPLACE.EQUIPMENT, url));
// }
//
// export const config = {
//    matcher: ["/:path*", "/auth/:path*"],
// };
