import { create } from "zustand";
import { NavbarType } from "./types";

export const useOrdersStore = create<NavbarType>()((set) => ({
   hidden: false,
   hover: false,
   // closed: false,

   toggleHidden: () =>
      set((state: NavbarType) => ({
         hidden: !state.hidden,
      })),

   addHover: () =>
      set((state: NavbarType) => ({
         hover: true,
      })),
   removeHover: () =>
      set((state: NavbarType) => ({
         hover: false,
      })),
   // addClosed: () =>
   //    set((state: NavbarType) => ({
   //       closed: !state.closed,
   //    })),
}));
