export type CreateOrderTypes = {
   title: string;
   description: string;
   uploaded_images: File[];
   deadline: string;
   price: number;
   //category_slug: "T-shorts",
   phone_number: string;
   email: string;
   size: string;
};

export type UpdateStatusProps = {
   status: string;
   orderSlug: string;
};
export type UpdateOrderProps = {
   params: FormData; //CreateOrderTypes
   orderSlug: string;
};
export type UpdateEquipmentProps = {
   params: FormData;
   equipmentSlug: string;
};
export type UpdateServiceProps = {
   params: FormData;
   serviceSlug: string;
};

export type BookingOrderProps = {
   organizationSlug: string;
   orderSlug: string;
};

export type CreateEquipmentTypes = {
   title: string;
   description: string;
   uploaded_images: File[];
   price: number;
   //category_slug: "T-shorts",
   phone_number: string;
   email: string;
};

export type GeneralPropsType = {
   slug: string;
   page?: string;
};
