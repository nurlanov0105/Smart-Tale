import { SelectPostTypes } from "@/shared/lib/types/types";
import { IDateProps } from "@/entities/general/selectDate";
import { AnnouncementImagesTypes } from "@/features/user/ announcementDetailForm/model/types";
import { IImage } from "@/features/general/addImages/ui/AddImages";

export type OrderProps = {
   type: string;
   btnType?: string;
};

export type AnnouncementCreateFormType = {
   title: string;
   description: string;
   price: number;
   quantity: number;
   tel: string;
   email?: string;
   currency: SelectPostTypes;
   sizeType: SelectPostTypes;
   sizes: SelectPostTypes[];
   images: IImage[];
   day: IDateProps;
   month: IDateProps;
   year: IDateProps;
};
