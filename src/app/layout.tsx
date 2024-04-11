import { poppins } from "@/shared/scss/base/fonts";
import "@/shared/scss/index.scss";
import { Modal } from "@/widgets/modal";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Project",
   description: "Project description",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={poppins.variable}>
            {children}
            <Modal />
         </body>
      </html>
   );
}
