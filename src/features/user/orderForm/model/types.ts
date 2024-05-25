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

type images = {
   id: string | number
   images: string
}

// export type AnnouncementDataForm = {
//    value: string
//    postValue: string
//    key: string
// }

export type OrderCreateFormType = {
   title: string;
   description: string;
   price: number;
   tel: string;
   email: string;
   currency: employee
   sizeType: employee
   sizes: employee[]
   images: File[]
   day: IDateProps
   month: IDateProps
   year: IDateProps
};

export type GetMyAnnouncementTypes = {
   title: string;
   description: string;
   price: number;
   tel: string;
   email: string;
   currency: employee
   sizeType: employee
   sizes: employee[]
   images: employee[]
   day: IDateProps
   month: IDateProps
   year: IDateProps
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
};
