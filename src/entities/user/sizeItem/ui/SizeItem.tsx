import React, { FC} from 'react';
import {UseFormSetValue} from "react-hook-form";
import {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {employee} from "@/shared/lib/types/types";

interface ISize{
    sizes: employee[]
    size: employee
    setValue:  UseFormSetValue<OrderCreateFormType>
    idx: number
}
const SizeItem:FC<ISize> = ({
        idx,
        size,
        setValue,
        sizes
}) => {

    const handleRemoveItem = (index: number) => {
        const updatedItems = [...sizes];
        updatedItems.splice(index, 1);
        setValue('sizes', updatedItems, { shouldValidate: true, shouldDirty: true })
    };

    return (
        <li key={size.value}>
            <span>{size.value}</span>
            <svg viewBox="0 0 16 16" onClick={() => handleRemoveItem(idx)}>
                <path
                    d="M5.36569 4.23431C5.05327 3.9219 4.54673 3.9219 4.23431 4.23431C3.9219 4.54673 3.9219 5.05327 4.23431 5.36569L6.86863 8L4.23431 10.6343C3.9219 10.9467 3.9219 11.4533 4.23431 11.7657C4.54673 12.0781 5.05327 12.0781 5.36569 11.7657L8 9.13137L10.6343 11.7657C10.9467 12.0781 11.4533 12.0781 11.7657 11.7657C12.0781 11.4533 12.0781 10.9467 11.7657 10.6343L9.13137 8L11.7657 5.36569C12.0781 5.05327 12.0781 4.54673 11.7657 4.23431C11.4533 3.9219 10.9467 3.9219 10.6343 4.23431L8 6.86863L5.36569 4.23431Z"/>
            </svg>
        </li>
    );
};

export default SizeItem;