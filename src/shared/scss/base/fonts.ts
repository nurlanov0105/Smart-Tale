import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dm_sans = DM_Sans({
   subsets: ["latin"],
   display: "swap",
   variable: "--var-dm_sans",
   weight: ["500", "700"],
});

export const sf_pro = localFont({
   src: [
      // regular
      {
         path: "../../assets/fonts/sf-pro/regular/SFProDisplay-Regular.ttf",
         weight: "400",
         style: "normal",
      },

      {
         path: "../../assets/fonts/sf-pro/regular/SFProDisplay-Regular.woff",
         weight: "400",
         style: "normal",
      },
      {
         path: "../../assets/fonts/sf-pro/regular/SFProDisplay-Regular.woff2",
         weight: "400",
         style: "normal",
      },
      // medium
      {
         path: "../../assets/fonts/sf-pro/medium/SFProDisplay-Medium.ttf",
         weight: "500",
         style: "normal",
      },

      {
         path: "../../assets/fonts/sf-pro/medium/SFProDisplay-Medium.woff",
         weight: "500",
         style: "normal",
      },
      {
         path: "../../assets/fonts/sf-pro/medium/SFProDisplay-Medium.woff2",
         weight: "500",
         style: "normal",
      },
      // semibold
      {
         path: "../../assets/fonts/sf-pro/semi-bold/SFProDisplay-Semibold.ttf",
         weight: "600",
         style: "normal",
      },

      {
         path: "../../assets/fonts/sf-pro/semi-bold/SFProDisplay-Semibold.woff",
         weight: "600",
         style: "normal",
      },
      {
         path: "../../assets/fonts/sf-pro/semi-bold/SFProDisplay-Semibold.woff2",
         weight: "600",
         style: "normal",
      },
      // bold
      {
         path: "../../assets/fonts/sf-pro/bold/SFProDisplay-Bold.ttf",
         weight: "700",
         style: "normal",
      },

      {
         path: "../../assets/fonts/sf-pro/bold/SFProDisplay-Bold.woff",
         weight: "700",
         style: "normal",
      },
      {
         path: "../../assets/fonts/sf-pro/bold/SFProDisplay-Bold.woff2",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-sf_pro",
});
