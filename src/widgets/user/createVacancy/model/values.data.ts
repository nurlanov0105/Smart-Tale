export const graphicsFilter = [
   { value: "24/7", postValue: "all" },
   { value: "В будние дни", postValue: "weekdays" },
   { value: "По выходным", postValue: "weekend" },
   { value: "Неполный день", postValue: "part-time" },
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
   { value: "Бишкек", postValue: "bishkek" },
   { value: "Ош", postValue: "osh" },
   { value: "Джалал-Абад", postValue: "jalal-abad" },
   { value: "Баткен", postValue: "batken" },
   { value: "Иссык-Куль", postValue: "issyk-kul" },
   { value: "Нарын", postValue: "naryn" },
   { value: "Каракол", postValue: "karakol" },
];

export const specializationsFilter = [
   { value: "Администратор", postValue: "admin" },
   { value: "Швея", postValue: "seamstress" },
   { value: "Утюжник", postValue: "iron" },
   { value: "Менеджер", postValue: "manager" },
];

export const experienceFilter = [
   { value: "Не имеет значения", postValue: "all" },
   { value: "От 1 года до 3 лет", postValue: "1" },
   { value: "От 3 до 6 лет", postValue: "3" },
   { value: "Более 6 лет", postValue: "6" },
   { value: "Нет опыта", postValue: "not" },
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
}



export const typeSalary = [
   { value: "До вычета налогов", postValue: "som" },
   { value: "На руки", postValue: "eur" },
];
