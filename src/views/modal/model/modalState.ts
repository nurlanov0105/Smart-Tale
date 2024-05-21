import { create } from "zustand";
import { ModalState } from "./types";

export const useModalStore = create<ModalState>((set) => ({
   isOpen: false,
   componentName: null,
   props: null,
   showModal: (componentName, props) =>
      set({ isOpen: true, componentName, props: props }),
   closeModal: () => set({ isOpen: false, componentName: null, props: null}),
}));
