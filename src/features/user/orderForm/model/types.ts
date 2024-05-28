import { SelectPostTypes } from "@/shared/lib/types/types";
import { IDateProps } from "@/entities/general/selectDate";

export type OrderProps = {
   type: string;
   btnType?: string;
};


export type AnnouncementCreateFormType = {
   title: string;
   description: string;
   price: number;
   amount: number;
   tel: string;
   email?: string;
   currency: SelectPostTypes;
   sizeType: SelectPostTypes;
   sizes: SelectPostTypes[];
   images: File[];
   day: IDateProps;
   month: IDateProps;
   year: IDateProps;
};


