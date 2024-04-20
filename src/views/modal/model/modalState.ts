import { create } from "zustand";
import { ModalState } from "./types";

export const useModalStore = create<ModalState>((set) => ({
   isOpen: false,
   componentName: null,
   isLightBg: false,
   showModal: (componentName, lightBg) =>
      set({ isOpen: true, componentName, isLightBg: lightBg?.isLightBg }),
   closeModal: () => set({ isOpen: false, componentName: null, isLightBg: false }),
}));
