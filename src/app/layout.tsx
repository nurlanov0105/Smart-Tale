import type { Metadata } from "next";
import { Modal } from "@/views/modal";

import {ToastContainer} from "react-toastify";
import "react-toastify/scss/main.scss"
import clsx from "clsx";
import styles from "./(main)/styles.module.scss"
import { sf_pro, dm_sans } from "@/shared/scss/base/fonts";
import "@/shared/scss/index.scss";

export const metadata: Metadata = {
   title: "SmartTale",
   description: "Мониторинг и управление швейным производством",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
         </head>
         <body className={clsx(sf_pro.variable, dm_sans.variable)}>
            {children}
            <Modal />
            <ToastContainer
                className={styles.toast}
                position="top-center"
                draggable
            />
         </body>
      </html>
   );
}
