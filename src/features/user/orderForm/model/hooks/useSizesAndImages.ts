import {useState} from "react";

export const useSizesAndImages = () => {
    const [sizesDate, setSizesDate] = useState<string[]>([]);
    const [images, setImages] = useState<File[]>([]);
    const handleChangeSize = (elem: string) => {
        if (!sizesDate.includes(elem) && elem !== "") {
            setSizesDate((prev) => [...prev, elem]);
        }
    };

    return {handleChangeSize, sizesDate, setSizesDate, images, setImages}
}