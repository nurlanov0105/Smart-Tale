import { create } from "zustand";
import { PathType } from "./types";
import { persist } from "zustand/middleware";

export const usePathStore = create(
   persist<PathType>(
      (set) => ({
         pathname: "",
         slug: "",

         setUrl: ({ pathname, slug }) =>
            set(() => ({
               pathname,
               slug,
            })),
      }),
      // localStorage
      {
         name: "url_storage",
      }
   )
);

// export const usePathStore = create<PathType>()((set) => ({
//    pathname: "",
//    slug: "",

//    setUrl: ({ pathname, slug }) =>
//       set(() => ({
//          pathname,
//          slug,
//       })),
// }));
