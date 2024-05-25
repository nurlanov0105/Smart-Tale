"use client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { ImageItem } from "@/entities/user/imageItem";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import {UseFormSetValue} from "react-hook-form";
import {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {employee} from "@/shared/lib/types/types";

interface IImages {
    setImages: (value: File[]) => void;
    images: File[]
    setValue: UseFormSetValue<OrderCreateFormType>
}

const AddImages: FC<IImages> = ({  images, setImages, setValue }) => {
    const theme = useThemeStore((state) => state.theme);

    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (images?.length === 5) return;

        const files = event.target.files;
        if (files && files.length > 0) {
            setIsLoading(true);
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                const newValue = images ? [...images, files[0]] : [files[0]];
                setImages(newValue)
                setIsLoading(false);
                // if (result) {
                //     const newImage = { value: result as string, postValue: result as string };
                //     const newValue = images ? [...images, newImage] : [newImage];
                //
                //     setImages([files[0]]);
                //     setIsLoading(false);
                // }
            };
            reader.readAsDataURL(files[0]);
        }
    };


    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;
        if (!destination) {
            return;
        }

        const updatedImages = [...images];
        const [movedImage] = updatedImages.splice(source.index, 1);
        updatedImages.splice(destination.index, 0, movedImage);

        setImages(updatedImages)
    };


    return (
        <div className={clsx(styles.list, styles[theme])}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable direction="horizontal" droppableId="img">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={styles.list__list}
                        >
                            {!!images?.length && images?.map((image, idx) => (
                                <Draggable draggableId={`image-${idx}`} index={idx} key={idx}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={styles.list__item}
                                        >
                                            <ImageItem
                                                images={images}
                                                setValue={setValue}
                                                key={image.name}
                                                image={image}
                                                idx={idx}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            {isLoading && (
                <div className={styles.empty}>
          <span className={styles.loader}>
            <LoaderCircle />
          </span>
                </div>
            )}
            <div className={styles.empty}>
                <label htmlFor="file" className={styles.empty__text}>
                    + Добавить <br /> файл
                </label>
            </div>
            <input
                id="file"
                accept="image/*,.png,.jpg"
                className="visually-hidden"
                type="file"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default AddImages;
