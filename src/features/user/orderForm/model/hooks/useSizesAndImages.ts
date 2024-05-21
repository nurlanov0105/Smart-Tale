import {useEffect, useState} from "react";

interface IProps{
    userImages?: File[]
    userSizes?: (string | number)[]
    isSuccess?: boolean
}

export const useSizesAndImages = ({userImages, userSizes, isSuccess}: IProps) => {
    const [sizesDate, setSizesDate] = useState<string[]>([]);
    const [images, setImages] = useState<File[]>([]);
    const handleChangeSize = (elem: string) => {
        if (!sizesDate.includes(elem) && elem !== "") {
            setSizesDate((prev) => [...prev, elem]);
        }
    };

    useEffect(() => {
        if (userImages){
            setImages(userImages)
        }
        if (userSizes){
            setSizesDate([userSizes.toString()])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         if (userImages) {
    //             console.log(userImages)
    //             const imageFiles = await Promise.all(userImages.images.map(async (url) => {
    //                 const response = await fetch(url);
    //                 const blob = await response.blob();
    //                 const filename = url.split("/").pop() || "image.jpg"; // Extract the filename from URL
    //                 const file = new File([blob], filename, { type: blob.type });
    //                 console.log(filename, file)
    //                 return file;
    //             }));
    //             console.log(imageFiles)
    //             setImages(imageFiles);
    //         }
    //     };
    //
    //     if (isSuccess) {
    //         fetchImages();
    //
    //         if (userSizes) {
    //             setSizesDate([userSizes.toString()]);
    //         }
    //     }
    // }, [isSuccess, userImages, userSizes]);
    //
    // console.log(images)



    return {handleChangeSize, sizesDate, setSizesDate, images, setImages}
}