import React, {Dispatch, FC, SetStateAction} from 'react';

interface ISize{
    size: string
    setSizesData: Dispatch<SetStateAction<string[]>>
}
const SizeItem:FC<ISize> = ({setSizesData, size}) => {
    const handleDeleteSize = (elem: string) => {
        setSizesData((prev) => prev.filter((item) => item !== elem));
    };


    return (
        <li key={size}>
            <span>{size}</span>
            <svg viewBox="0 0 16 16" onClick={() => handleDeleteSize(size)}>
                <path
                    d="M5.36569 4.23431C5.05327 3.9219 4.54673 3.9219 4.23431 4.23431C3.9219 4.54673 3.9219 5.05327 4.23431 5.36569L6.86863 8L4.23431 10.6343C3.9219 10.9467 3.9219 11.4533 4.23431 11.7657C4.54673 12.0781 5.05327 12.0781 5.36569 11.7657L8 9.13137L10.6343 11.7657C10.9467 12.0781 11.4533 12.0781 11.7657 11.7657C12.0781 11.4533 12.0781 10.9467 11.7657 10.6343L9.13137 8L11.7657 5.36569C12.0781 5.05327 12.0781 4.54673 11.7657 4.23431C11.4533 3.9219 10.9467 3.9219 10.6343 4.23431L8 6.86863L5.36569 4.23431Z"/>
            </svg>
        </li>
    );
};

export default SizeItem;