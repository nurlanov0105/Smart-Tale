export const CREATE_ANNOUNCEMENT_POST_NAMES = {
   title: "title",
   description: "description",
   price: "price",
   email: "email",
   tel: "phone_number",
   currency: "currency",
   size: "size",
   deadline: "deadline",
   images: "uploaded_images",
   quantity: "quantity",
};

export const ContactValues = {
   tel: "tel",
   email: "email",
};

export const orderContactValues = [
   {
      value: "Номер телефона",
      postValue: ContactValues.tel,
   },
   {
      value: "Почта",
      postValue: ContactValues.email,
   },
];
