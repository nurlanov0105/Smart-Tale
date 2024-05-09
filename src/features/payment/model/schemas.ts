export const NameSchema = {
   required: true,
   pattern: {
      value: /[a-z A-Z-]+/,
      message: "Неверный формат имени",
   },
};
export const NumberSchema = {
   required: true,
   pattern: {
      value: /[\d| ]{16,22}/,
      message: "Неверный формат номера",
   },
};
export const DateSchema = {
   required: true,
   pattern: {
      value: /^\d{2}\/\d{2}$/,
      message: "Неверный формат даты",
   },
};
export const CvvSchema = {
   required: true,
   pattern: {
      value: /\d{3}/,
      message: "Неверный формат номера карты",
   },
};
