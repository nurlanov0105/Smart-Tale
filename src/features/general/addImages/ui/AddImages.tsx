"use client";
import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { ImageItem } from "@/entities/user/imageItem";
import styles from "./styles.module.scss";

const AddImages = () => {
   const [images, setImages] = useState<File[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
   };

   return (
      <div className={styles.list}>
         {images.map((image, idx) => (
            <ImageItem
               key={image.name}
               image={image}
               idx={idx}
               images={images}
               setImages={setImages}
            />
         ))}
         {isLoading && (
            <div className={styles.empty}>
               <span className={styles.loader}>
                  <LoaderCircle />
               </span>
            </div>
         )}
         <div className={styles.empty}>
            <label htmlFor="file" className={styles.empty__text}>
               + Добавить файл
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
