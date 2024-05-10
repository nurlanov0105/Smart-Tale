"use client";
import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { ImageItem } from "@/entities/user/imageItem";
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd";
import styles from "./styles.module.scss";
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";

const AddImages = () => {
    const theme = useThemeStore((state) => state.theme);

    const [images, setImages] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       if (images.length === 5) return

       const files = event.target.files;
       if (files && files.length > 0) {
           setIsLoading(true);
            const reader = new FileReader();
            reader.onload = () => {
            setImages([...images, files[0]]);
            setIsLoading(false);
         };
         reader.readAsDataURL(files[0]);
      }
   }
   const onDragEnd = (result: DropResult) => {
       const {destination, source} = result
       if (!destination) {
           return;
       }
       const updatedImages = [...images];
       const movedImage = updatedImages[source.index];
       updatedImages.splice(source.index, 1);
       updatedImages.splice(destination.index, 0, movedImage);

       setImages(updatedImages);

   }

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
                          {!!images.length && images.map((image, idx) => (
                              <Draggable draggableId={image.name + idx} index={idx} key={idx}>
                                  {(provided, snapshot) => (
                                      <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          key={image.name}
                                          className={styles.list__item}
                                      >
                                          <ImageItem
                                              key={image.name + idx}
                                              image={image}
                                              idx={idx}
                                              images={images}
                                              setImages={setImages}
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
               + Добавить <br/> файл
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
