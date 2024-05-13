import InputMask from "react-input-mask";

export const NamingSchema = {
   required: "Поле обязательна для заполнения",
   minLength: {
      value: 2,
      message: "Поле должно содержать не менее 2 символов",
   },
   maxLength: {
      value: 35,
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

export const TelSchema = {
   required: "Телефон обязателен",
   pattern: {
      //value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
      value: /^\+\d{3} \(\d{3}\) \d{2}-\d{2}-\d{2}$/,
      //value: /^\s+?\+?\d{13,}\s+?$/,
      message: "Неверный формат номера",
   },
};
