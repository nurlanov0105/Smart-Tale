import React, {FC} from 'react';
import {ImageProps} from "../index";
import {CircleX} from "lucide-react";
import Image from "next/image";
import styles from "./styles.module.scss";


const ImageItem:FC<ImageProps> = ({image, idx, images, setImages}) => {
    const handleRemove = () => {
        setImages(() => {
            return images.filter(img => image.name + idx !== img.name + idx)
        })
    }

    return (
        <>
            <Image
                width={100}
                height={100}
                className={styles.item__image}
                src={URL.createObjectURL(image)} //image.images
                alt="equipment"
            />

            {
                idx !== 0 &&
                <button type="button" onClick={handleRemove} className={styles.item__icon}>
                    <CircleX/>
                </button>
            }
            <div className={styles.item__layer}/>
        </>
    );
};

export default ImageItem;