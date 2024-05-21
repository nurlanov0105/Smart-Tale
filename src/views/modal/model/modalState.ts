import { create } from "zustand";
import { ModalState } from "./types";

export const useModalStore = create<ModalState>((set) => ({
   isOpen: false,
   componentName: null,
   isLightBg: false,
   slug: "",
   showModal: (componentName, lightBg, slug) =>
      set({ isOpen: true, componentName, isLightBg: lightBg?.isLightBg, slug }),
   closeModal: () => set({ isOpen: false, componentName: null, isLightBg: false }),
}));
