"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { usePathname, redirect } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Modal } from "@/views/modal";
import { ToastContainer } from "react-toastify";
import { useThemeStore } from "@/shared/store/themeStore";
import {
    CookiesServices,
    EnumTokens,
    ROUTES,
    accessRoutes,
    authRoutes,
    useAuth,
    useSubscribed,
} from "@/shared/lib";
import "react-toastify/scss/main.scss";
import styles from "./styles.module.scss";
export default function Provider({ children }: PropsWithChildren) {
    const pathname = usePathname();
    const { isAuth, isLoading } = useAuth();
    const res = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
    const isRemember = res === "true";
    const matchPath = (patterns: string[], pathname: string) => {
        return patterns.some((pattern) =>
            new RegExp(`^${pattern.replace("{slug}", ".*")}`).test(pathname)
        );
    };
    useEffect(() => {
        const dynamicPaths = [
            ROUTES.CARD_DETAILS_EQUIPMENT,
            ROUTES.CARD_DETAILS_SERVICE,
            ROUTES.CARD_DETAILS_ORDER,
            ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT,
            ROUTES.ANNOUNCEMENT_DETAILS_SERVICE,
            ROUTES.ANNOUNCEMENT_DETAILS_ORDER,
            ROUTES.WORK_RESUME_INFO + "/{slug}",
            ROUTES.USERS + "/{slug}",
            "{slug}" + ROUTES.SEARCH,
        ];
        const isDynamicPath = matchPath(dynamicPaths, pathname);
        if (
            !isLoading &&
            !isAuth &&
            !authRoutes.includes(pathname as ROUTES) &&
            !accessRoutes.includes(pathname as ROUTES) &&
            !isDynamicPath
        ) {
            redirect(ROUTES.SIGN_IN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth, pathname, isRemember]);
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