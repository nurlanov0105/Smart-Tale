"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Modal } from "@/views/modal";
import { ToastContainer } from "react-toastify";

import { useThemeStore } from "@/shared/store/themeStore";
import "react-toastify/scss/main.scss";
import styles from "./styles.module.scss";
import {
   CookiesServices,
   EnumTokens,
   ROUTES,
   accessRoutes,
   authRoutes,
   useAuth,
   useRememberMe,
   useSubscribed,
} from "@/shared/lib";
import { usePathname, redirect } from "next/navigation";

export default function Provider({ children }: PropsWithChildren) {
   const pathname = usePathname();

   const { isAuth, isLoading } = useAuth();
   const { isSubscribed } = useSubscribed();

   const res = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
   const isRemember = res === "true";

   useEffect(() => {
      if (
         !isLoading &&
         !isAuth &&
         !authRoutes.includes(pathname as ROUTES) &&
         !accessRoutes.includes(pathname as ROUTES)
      ) {
         redirect(ROUTES.SIGN_IN);
      } else if (!isLoading && isAuth && !isSubscribed && pathname.includes(ROUTES.ORGANIZATION)) {
         redirect(ROUTES.SIGN_IN);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isAuth, isSubscribed, pathname, isRemember]);

   const [queryClient] = useState(
      () =>
         new QueryClient({
            defaultOptions: {
               queries: {
                  refetchOnWindowFocus: false,
                  staleTime: 1000 * 5,
                  retry: 1,
               },
            },
         })
   );

   const theme = useThemeStore((state) => state.theme);
   const toastTheme = theme ? theme : "light";

   return (
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />
         {children}
         <Modal />
         <ToastContainer
            className={styles.toast}
            position="top-center"
            draggable
            theme={toastTheme}
         />
      </QueryClientProvider>
   );
}
