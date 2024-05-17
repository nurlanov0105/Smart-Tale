import {useState} from "react";
import {contactsData, sizesData} from "@/features/user/orderForm/model/consts.data";
import {currencies} from "@/widgets/user/createVacancy";

export const useSelectsOrder = () => {
    const [selectedSize, setSelectedSize] = useState(sizesData[0]);
    const [selectedContact, setSelectedContact] = useState(contactsData[0]);
    const [selectCurrency, setSelectCurrency] = useState(currencies[0])


    return {
        selectCurrency,
        setSelectCurrency,
        selectedContact,
        setSelectedContact,
        selectedSize,
        setSelectedSize
    }
}