import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import {DASHBOARD, EnumTokens, MARKETPLACE, ROUTES} from "./shared/lib";
import {WORK} from "@/shared/lib/routes.config";
import {baseApiInstance} from "@/shared/api/instance";


export async function middleware(request: NextRequest, response: NextResponse) {
   const { url, cookies } = request;

   const dashboardRoutes = [
       DASHBOARD.LISTINGS,
       DASHBOARD.FAVORITES,
       DASHBOARD.PROFILE,
       DASHBOARD.ORDER_HISTORY,
       DASHBOARD.PURCHASES,
   ]

   const authRoutes = [
       ROUTES.SIGN_IN,
       ROUTES.SIGN_UP,
       ROUTES.CONFIRMED,
       ROUTES.CONFIRMATION_REGISTER,
   ]

   const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
   const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value

   let isSubscribed = true
   // let isAuth = false
   //
   // if (accessToken) {
   //    try {
   //
   //       const decodedToken = jwt.verify(accessToken, process.env.NEXT_PUBLIC_JWT_SECRET || "");
   //       isAuth = true;
   //
   //       const response = await baseApiInstance.get(`/profile`);
   //
   //       const user = response.data;
   //       isSubscribed = user.isSubscribed;
   //    } catch (error) {
   //       console.error("Ошибка:", error);
   //    }
   // }


   const isAuthPage = authRoutes.includes(request.nextUrl.pathname as ROUTES)

    if (!refreshToken && request.nextUrl.pathname.includes(MARKETPLACE.CREATE_ANNOUNCEMENT)){
        return NextResponse.redirect(new URL(ROUTES.SIGN_IN, url));
    }

   if (!refreshToken && dashboardRoutes.includes(request.nextUrl.pathname as DASHBOARD)){
      return NextResponse.redirect(new URL(ROUTES.SIGN_IN, url));
   }

    if (isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL(MARKETPLACE.EQUIPMENT, url));
    }


   if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL(MARKETPLACE.EQUIPMENT, request.nextUrl.origin));
   }

   if (!isSubscribed && request.nextUrl.pathname.includes(WORK.CREATE_VACANCY)){
      return NextResponse.redirect(new URL(ROUTES.SUBSCRIBE, url))
   }

   if (!isSubscribed && request.nextUrl.pathname.includes("/organization")){
      return NextResponse.redirect(new URL("/not-found-bitch", url));
   }

   // const subscribedRoutes = [
   //       ORGANIZATION_ROUTES.ORGANIZATION_LIST,
   //       ORGANIZATION_ROUTES.ORGANIZATION_DETAILS,
   //       ORGANIZATION_ROUTES.CREATE_ORGANIZATION,
   //       ORGANIZATION_ROUTES.EMPLOYEES,
   //       ORGANIZATION_ROUTES.EMPLOYEES_DETAILS,
   //       ORGANIZATION_ROUTES.INVITE_EMPLOYEES,
   //       ORGANIZATION_ROUTES.POSITIONS,
   //       ORGANIZATION_ROUTES.ADD_POSITION,
   //       ORGANIZATION_ROUTES.EMPLOYEES_SETTINGS,
   //       ORGANIZATION_ROUTES.VACANCIES,
   //       ORGANIZATION_ROUTES.VACANCY_DETAIL,
   //       ORGANIZATION_ROUTES.HISTORY,
   //       ORGANIZATION_ROUTES.CURRENT_ORDERS,
   //       ORGANIZATION_ROUTES.HISTORY_USER
   //    ]
   // if (!isSubscribed && subscribedRoutes.includes(request.nextUrl.pathname as ORGANIZATION_ROUTES)){
   //    return NextResponse.redirect(new URL("/not-found-bitch", url));
   // }

   return NextResponse.next()
}

export const config = {
   matcher: ["/:path*"],
};
