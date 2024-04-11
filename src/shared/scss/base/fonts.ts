import { Poppins } from "next/font/google";
// import localFont from 'next/font/local';

export const poppins = Poppins({
   subsets: ["latin"],
   display: "swap",
   variable: "--poppins",
   weight: ["300", "400", "500", "600"],
});

// export const roboto = localFont({
//    src: [
//       {
//          path: '../../assets/fonts/',
//          weight: '400',
//          style: 'normal',
//       },
//    ],
//    variable: '--font-poppins',
// });
