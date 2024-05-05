export const NamingSchema = {
   required: "Поле обязательна для заполнения",
   minLength: {
      value: 2,
      message: "Поле должно содержать не менее 2 символов",
   },
   maxLength: {
      value: 25,
      message: "Поле не должно содержать более 25 символов",
   },
};

export const EmailSchema = {
   required: "Email обязателен",
   pattern: {
      value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
      message: "Неверный формат email",
   },
};
