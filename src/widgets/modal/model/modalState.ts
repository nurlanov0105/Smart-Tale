import { create } from "zustand";
import { ModalState } from "./types";

export const useModalStore = create<ModalState>((set) => ({
   isOpen: false,
   componentName: null,
   showModal: (componentName) => set({ isOpen: true, componentName }),
   closeModal: () => set({ isOpen: false, componentName: null }),
}));
