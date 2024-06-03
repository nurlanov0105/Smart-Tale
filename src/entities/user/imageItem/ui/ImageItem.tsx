import React, {FC} from 'react';
import {ImageProps} from "../index";
import {CircleX} from "lucide-react";
import Image from "next/image";
import styles from "./styles.module.scss";


const ImageItem:FC<ImageProps> = ({image, idx, images, setValue}) => {

    const handleDelete = () => {
        const updatedItems = [...images];
        updatedItems.splice(idx, 1);
        setValue('images', updatedItems, { shouldValidate: true, shouldDirty: true });
    };

    return (
        <>
            <Image
                width={100}
                height={100}
                className={styles.item__image}
                src={URL.createObjectURL(image)}
                alt="equipment"
            />

            {
                idx !== 0 &&
                <button type="button" onClick={handleDelete} className={styles.item__icon}>
                    <CircleX/>
                </button>
            }
            <div className={styles.item__layer}/>
        </>
    );
};

export default ImageItem;