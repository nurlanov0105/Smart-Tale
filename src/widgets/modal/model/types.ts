export type ModalState = {
   isOpen: boolean;
   componentName: string | null;
   showModal: (componentName: string) => void;
   closeModal: () => void;
};
