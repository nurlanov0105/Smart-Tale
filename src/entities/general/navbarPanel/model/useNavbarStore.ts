import { create } from "zustand";
import { NavbarType } from "./types";

export const useOrdersStore = create<NavbarType>()((set) => ({
   hidden: false,
   hover: false,

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
}));

// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import { NavbarType } from "./types";

// export const useOrdersStore = create(
//    persist<NavbarType>(
//       (set) => ({
//          hidden: false,
//          hover: false,

//          toggleHidden: () =>
//             set((state: NavbarType) => ({
//                hidden: !state.hidden,
//             })),

//          addHover: () =>
//             set((state: NavbarType) => ({
//                hover: true,
//             })),
//          removeHover: () =>
//             set((state: NavbarType) => ({
//                hover: false,
//             })),
//       }),
//       {
//          name: "navbar-storage", // unique name for the item in the storage
//          storage: createJSONStorage(() => sessionStorage), // by default, 'localStorage' is used
//       }
//    )
// );
