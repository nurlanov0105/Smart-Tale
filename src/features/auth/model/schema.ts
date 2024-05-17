
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
export const passwordSchema = {
   required: "Пароль обязателен",
   minLength: {
      value: 8,
      message: "Минимум 8 символов",
   },

   pattern: {
      value: /(?=.*[a-z])(?=.*[A-Z])/,
      message: "Включите как строчные, так и прописные буквы",
   },
   validate: {
      containsNumber: (value: any) => /\d/.test(value) || "Хотя бы 1 цифра",
      containsSymbol: (value: any) =>
         /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value) || "Минимум 1 специальный символ",
   },
};

