import type { Metadata, Viewport } from "next";

import clsx from "clsx";
import { sf_pro, dm_sans } from "@/shared/scss/base/fonts";
import { Provider } from "@/views/providers";
import "@/shared/scss/index.scss";

export const metadata: Metadata = {
   title: "SmartTale",
   description: "Мониторинг и управление швейным производством",
   generator: "Next.js",
   manifest: "/manifest.json",
   keywords: ["nextjs", "pwa", "next-pwa"],
   authors: [{ name: "Pranov Adilet" }, { name: "Nursultan Nurlanov" }],
   icons: [
      { rel: "apple-touch-icon", url: "/logo.svg" },
      { rel: "icon", url: "/logo.svg" },
   ],
};
export const viewport: Viewport = {
   minimumScale: 1,
   initialScale: 1,
   width: "device-width",
   viewportFit: "cover",
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
            <Provider>{children}</Provider>
         </body>
      </html>
   );
}
