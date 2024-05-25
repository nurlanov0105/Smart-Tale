
export  const daysInCurrentMonth = (year: number, month: number) => {
    const days = new Date(year, month, 0); //value может быть string,
    return days.getDate();
};


export const monthsList = () => {
    return [
        { value: "Январь", postValue: 1 },
        { value: "Февраль", postValue: 2 },
        { value: "Март", postValue: 3 },
        { value: "Апрель", postValue: 4 },
        { value: "Май", postValue: 5 },
        { value: "Июнь", postValue: 6 },
        { value: "Июль", postValue: 7 },
        { value: "Август", postValue: 8 },
        { value: "Сентябрь", postValue: 9 },
        { value: "Октябрь", postValue: 10 },
        { value: "Ноябрь", postValue: 11 },
        { value: "Декабрь", postValue: 12 },
    ];
}

export const monthsForDate = () => {
    return [
        { value: "января", postValue: 1 },
        { value: "февраля", postValue: 2 },
        { value: "марта", postValue: 3 },
        { value: "апреля", postValue: 4 },
        { value: "мая", postValue: 5 },
        { value: "июня", postValue: 6 },
        { value: "июля", postValue: 7 },
        { value: "августа", postValue: 8 },
        { value: "сентября", postValue: 9 },
        { value: "октября", postValue: 10 },
        { value: "ноября", postValue: 11 },
        { value: "декабря", postValue: 12 },
    ];
}

