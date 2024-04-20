import React, {FC} from 'react';
import {ImageProps} from "../index";
import {CircleX} from "lucide-react";
import Image from "next/image";
import styles from "./styles.module.scss";

const ImageItem:FC<ImageProps> = ({image, idx, images, setImages}) => {
    const handleRemove = (item: File) => {
        setImages(() => {
            return images.filter(image => image.name !== item.name)
        })
    }

    return (
        <div key={image.name} className={styles.item}>
            <Image
                width={100}
                height={100}
                className={styles.item__image}
                src={URL.createObjectURL(image)}
                alt="equipment"
            />
            {
                idx !== 0 &&
                <button onClick={() => handleRemove(image)} className={styles.item__icon}>
                    <CircleX/>
                </button>
            }
        </div>
    );
};

export default ImageItem;