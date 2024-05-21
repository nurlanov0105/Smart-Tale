type LightBgType = {
   isLightBg: boolean;
};

export type ModalState = {
   isOpen: boolean;
   componentName: string | null;
   isLightBg: boolean | null;
   slug: string | null;
   showModal: (componentName: string, lightBg?: LightBgType, slug?: string) => void;
   closeModal: () => void;
};
