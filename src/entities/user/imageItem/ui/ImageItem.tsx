import React, {FC} from 'react';
import {ImageProps} from "../index";
import {CircleX} from "lucide-react";
import Image from "next/image";
import {Reorder} from "framer-motion";
import styles from "./styles.module.scss";
// import {Draggable} from "@hello-pangea/dnd";

const ImageItem:FC<ImageProps> = ({image, idx, images, setImages}) => {
    const handleRemove = (item: File) => {
        setImages(() => {
            return images.filter(image => image.name !== item.name)
        })
    }

    return (
        // <Draggable draggableId={image.name + idx} index={idx} key={idx}>
        //         {(provided, snapshot) => (
        //             <div
        //                 ref={provided.innerRef}
        //                 {...provided.draggableProps}
        //                 {...provided.dragHandleProps}
        //                 key={image.name}
        //                 className={styles.item}
        //             >
        //                 <Image
        //                     width={100}
        //                     height={100}
        //                     className={styles.item__image}
        //                     src={URL.createObjectURL(image)}
        //                     alt="equipment"
        //                 />
        //
        //                 {
        //                     idx !== 0 &&
        //                     <button type="button" onClick={() => handleRemove(image)} className={styles.item__icon}>
        //                         <CircleX/>
        //                     </button>
        //                 }
        //                 <div className={styles.item__layer}/>
        //             </div>
        //         )}
        // </Draggable>
        <Reorder.Item key={image.name} value={image}>
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
            <div className={styles.item__layer}/>
            </div>
        </Reorder.Item>

    );
};

export default ImageItem;