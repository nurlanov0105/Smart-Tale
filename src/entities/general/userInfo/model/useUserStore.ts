import { create } from "zustand";
import { UserType } from "./types";

export const useUserStore = create<UserType>()((set) => ({
   image: "",

   addImage: (image) =>
      set(() => ({
         image,
      })),
}));
