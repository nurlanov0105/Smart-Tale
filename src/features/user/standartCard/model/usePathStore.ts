import { create } from "zustand";
import { PathType } from "./types";

export const usePathStore = create<PathType>()((set) => ({
   pathname: "",
   slug: "",

   setUrl: ({ pathname, slug }) =>
      set(() => ({
         pathname,
         slug,
      })),
}));
