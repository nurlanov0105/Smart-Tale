type LightBgType = {
   isLightBg: boolean;
};

type showModal = {
   componentName: string;
   lightBg: LightBgType;
   slug?: string;
   props: any;
};

export type ModalProps = {
   slug?: string;
   organizationSlug?: string;
   // type?: "order" | "equipment" | "service";
   type?: string;
   componentName?: string;
   isLightBg?: boolean | null;
   author?: string | null;
   data?: { data: any[]; slug: string };
};

export type ModalState = {
   isOpen: boolean;
   componentName: string | null;
   props: any;
   showModal: (componentName: string, props?: ModalProps) => void;
   closeModal: () => void;
};
