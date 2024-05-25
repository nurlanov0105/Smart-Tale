import { Dispatch, SetStateAction } from "react";
import { employee } from "@/shared/lib/types/types";
import { IDateProps } from "@/entities/general/selectDate";

export type OrderProps = {
   type: string;
   btnType?: string;
};

export type OrderCreateFormRequest = {
   title: string;
   uploaded_images: File[];
   description: string;
   deadline: string;
   price: number;
   category_slug: string;
   phone_number: string;
   size: string;
};

export type OrderCreateFormType = {
   title: string;
   description: string;
   price: number;
   tel: string;
   email?: string;
};

export type OrderFormNamesType = {
   title: "title";
   description: "description";
   price: "price";
   email: "email";
   tel: "tel";
};

export type UseOrderFormProps = {
   type: string;
   images: File[];
   // year: IDateProps
   // month: IDateProps
   // day: IDateProps
   deadline: string;
   sizesData: employee[];
   currency: string;
};
