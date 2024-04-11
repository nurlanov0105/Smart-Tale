import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./shared/lib";

const protectedRoutes = ["/"];
export default function middleware(req: NextRequest, response: NextResponse) {
   const { url, cookies } = req;

   // const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
   const accessToken = true;

   if (!accessToken && protectedRoutes.includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL("/signin", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
   }
}
