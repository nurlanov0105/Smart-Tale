import type { Metadata } from "next";
import { Modal } from "@/widgets/modal";

import clsx from "clsx";
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
         <body className={clsx(sf_pro.variable, dm_sans.variable)}>
            {children}
            <Modal />
         </body>
      </html>
   );
}
