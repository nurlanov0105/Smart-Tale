type LightBgType = {
   isLightBg: boolean;
};

export type ModalState = {
   isOpen: boolean;
   componentName: string | null;
   isLightBg: boolean | null;
   showModal: (componentName: string, lightBg?: LightBgType) => void;
   closeModal: () => void;
};
