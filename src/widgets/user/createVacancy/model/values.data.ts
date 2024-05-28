export const graphicsFilter = [
   { value: "Полный день", postValue: "Полный день" },
   { value: "Неполный день", postValue: "Неполный день" },
   { value: "Частичная занятость", postValue: "Частичная занятость" },
   { value: "Гибкий график", postValue: "Гибкий график" },
   { value: "Удаленно", postValue: "Удаленно" },
];
export const incomeLevelFilter = [
   { value: "Не имеет значения", postValue: "all" },
   { value: "от 1 700 сом", postValue: "1700" },
   { value: "от 10 000 сом", postValue: "10000" },
   { value: "от 25 000 сом", postValue: "25000" },
   { value: "от 50 000 сом", postValue: "50000" },
   { value: "от 80 000 сом", postValue: "80000" },
];

export const cityFilter = [
   { value: "Бишкек", postValue: "Бишкек" },
   { value: "Ош", postValue: "Ош" },
   { value: "Джалал-Абад", postValue: "Джалал-Абад" },
   { value: "Баткен", postValue: "Баткен" },
   // { value: "Иссык-Куль", postValue: "issyk-kul" },
   { value: "Нарын", postValue: "Нарын" },
   { value: "Каракол", postValue: "Каракол" },
];

export const specializationsFilter = [
   { value: "Администратор", postValue: "admin" },
   { value: "Швея", postValue: "seamstress" },
   { value: "Утюжник", postValue: "iron" },
   { value: "Менеджер", postValue: "manager" },
];

export const experienceFilter = [
   { value: "Без опыта", postValue: "Без опыта" },
   { value: "Не имеет значения", postValue: "Не имеет значения" },
   { value: "От 1 года до 3 лет", postValue: "От 1 года до 3 лет" },
   { value: "От 3 лет до 6 лет", postValue: "От 3 лет до 6 лет" },
   { value: "Более 6 лет", postValue: "Более 6 лет" },
];

export const currencies = [
   { value: "сом", postValue: "Som" },
   { value: "₽", postValue: "Ruble" },
   { value: "$", postValue: "USD" },
   { value: "€", postValue: "Euro " },
];

export const currenciesMap = {
   Som: { value: "сом", postValue: "Som" },
   Ruble: { value: "₽", postValue: "Ruble" },
   USD: { value: "$", postValue: "USD" },
   Euro: { value: "€", postValue: "Euro " },
};

export const typeSalary = [
   { value: "До вычета налогов", postValue: "som" },
   { value: "На руки", postValue: "eur" },
];
