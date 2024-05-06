"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Modal } from "@/views/modal";
import { ToastContainer } from "react-toastify";

import styles from "./styles.module.scss";
import "react-toastify/scss/main.scss";
import {useThemeStore} from "@/shared/themeStore";

export default function Provider({ children }: PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient());

    const theme = useThemeStore(state => state.theme);
    const toastTheme = theme ? theme : "light";

   return (
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />
         {children}
         <Modal />
         <ToastContainer className={styles.toast} position="top-center" draggable theme={toastTheme}/>
      </QueryClientProvider>
   );
}
