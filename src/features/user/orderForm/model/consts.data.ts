import { OrderFormNamesType } from "./types";
import { employee } from "@/shared/lib/types/types";

export const ORDER_FORM_NAMES: OrderFormNamesType = {
   title: "title",
   description: "description",
   price: "price",
   email: "email",
   tel: "tel",
};

export const contactsData: employee[] = [
   {
      value: "Электронная почта",
      postValue: ORDER_FORM_NAMES.email,
   },
   {
      value: "Номер телефона",
      postValue: ORDER_FORM_NAMES.tel,
   },
];

export const sizesTypes = [
   {value: "Буквы", postValue: "letter"},
   {value: "Цифры", postValue: "numbers"}
]


export const sizesDataNumbers = [
   {
      value: "40",
      postValue: "40",
   },
   {
      value: "42",
      postValue: "42",
   },
   {
      value: "46",
      postValue: "46",
   },
   {
      value: "48",
      postValue: "48",
   }
];
export const sizesDataLetters = [
   {
      value: "XS",
      postValue: "XS"
   },
   {
      value: "S",
      postValue: "S",
   },
   {
      value: "L",
      postValue: "L",
   },
   {
      value: "XL",
      postValue: "XL"
   }
];

export const AnnouncmentValues = {
   SERVICE: "service",
   ORDER: "order",
   EQUIPMENT: "equipment",
};