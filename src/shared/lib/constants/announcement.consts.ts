export const ANNOUNCEMENT_FORM_NAMES = {
    title: "title",
    description: "description",
    price: "price",
    email: "email",
    tel: "tel",
    currency: "currency",
    amount: "amount",
    sizes: "sizes",
    sizeType: "sizeType",
    images: "images",
    day: "day",
    month: "month",
    year: "year"
} as const

export const sizesTypes = [
    {value: "Буквы", postValue: "letter"},
    {value: "Цифры", postValue: "numbers"}
]


export const sizesDataNumbers = [
    {
        value: "40",
        postValue: "40",
    },
    {
        value: "42",
        postValue: "42",
    },
    {
        value: "46",
        postValue: "46",
    },
    {
        value: "48",
        postValue: "48",
    }
];
export const sizesDataLetters = [
    {
        value: "XS",
        postValue: "XS"
    },
    {
        value: "S",
        postValue: "S",
    },
    {
        value: "L",
        postValue: "L",
    },
    {
        value: "XL",
        postValue: "XL"
    }
];

export const AnnouncementValues = {
    SERVICE: "service",
    ORDER: "order",
    EQUIPMENT: "equipment",
};
