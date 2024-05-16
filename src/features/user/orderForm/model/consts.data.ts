import {OrderFormNamesType} from "./types";
import {employee} from "@/shared/lib/types/types";

export const ORDER_FORM_NAMES: OrderFormNamesType = {
   title: "title",
   description: "description",
   price: "price",
   email: "email",
   tel: "tel",
}

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


export const sizesData = [
   {
      value: "",
      postValue: "",
   },
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
   },
   {
      value: "S",
      postValue: "s",
   },
   {
      value: "M",
      postValue: "m",
   },
   {
      value: "L",
      postValue: "l",
   },
   {
      value: "XL",
      postValue: "xl",
   }
];
