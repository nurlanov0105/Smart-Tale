export const typeSchema = (type: string) => {
   if (type === "email") return emailSchema;
   return telSchema;
};

export const titleSchema = {
   required: "Поле обязательно для заполнения",
   minLength: {
      value: 2,
      message: "Поле должно содержать не менее 2 символов",
   },
   maxLength: {
      value: 25,
      message: "Поле не должно содержать более 25 символов",
   },
};

export const descriptionSchema = {
   required: "Поле обязательно для заполнения",
   minLength: {
      value: 2,
      message: "Поле должно содержать не менее 2 символов",
   },
   maxLength: {
      value: 250,
      message: "Поле не должно содержать более 250 символов",
   },
};

export const priceSchema = {
   required: "Поле обязательно для заполнения",
   maxLength: {
      value: 20,
      message: "Поле не должно содержать более 20 символов",
   },
};

export const emailSchema = {
   required: "Поле обязательно для заполнения",
   pattern: {
      value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
      message: "Неверный формат email",
   },
};

export const telSchema = {
   required: "Поле обязательно для заполнения",
   minLength: {
      value: 10,
      message: "Поле должно содержать не менее 2 символов",
   },
   maxLength: {
      value: 20,
      message: "Поле не должно содержать более 25 символов",
   },
};
