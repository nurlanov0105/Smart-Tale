export const ValidationsSchemasService = {
   titleSchema: {
      required: "Поле обязательно для заполнения",
      minLength: {
         value: 2,
         message: "Поле должно содержать не менее 2 символов",
      },
      maxLength: {
         value: 50,
         message: "Поле не должно содержать более 50 символов",
      },
   },

   descriptionSchema: {
      required: "Поле обязательно для заполнения",
      minLength: {
         value: 2,
         message: "Поле должно содержать не менее 2 символов",
      },
      maxLength: {
         value: 250,
         message: "Поле не должно содержать более 250 символов",
      },
   },

   priceSchema: {
      required: "Поле обязательно для заполнения",
      maxLength: {
         value: 20,
         message: "Поле не должно содержать более 20 символов",
      },
   },
   emailSchema: {
      required: "Поле обязательно для заполнения",
      pattern: {
         value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
         message: "Неверный формат email",
      },
   },
   emailSchemaNotReq: {
      required: "Поле обязательно для заполнения",
      pattern: {
         value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
         message: "Неверный формат email",
      },
   },
   telSchema: {
      required: "Поле обязательно для заполнения",
      minLength: {
         value: 10,
         message: "Поле должно содержать не менее 2 символов",
      },
      maxLength: {
         value: 20,
         message: "Поле не должно содержать более 25 символов",
      },
   },
   requiredSchema: {
      required: "Поле обязательно для заполнения",
   },
};
