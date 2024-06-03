"use client";

import React, { useState } from "react";
import { Button, Emojis } from "@/shared/ui";
import { closeModal } from "@/views/modal";
import { useUserStore } from "@/entities/general/userInfo";
import styles from "./styles.module.scss";

const ChangeAvatarModal = () => {
   const [image, setImage] = useState("");
   const [label, setLabel] = useState("+ Загрузить файл");
   const addImage = useUserStore((state) => state.addImage);

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         setImage(URL.createObjectURL(e.target.files[0]));

         setLabel("Поменять файл");
      }
   };

   const handleSaveClick = () => {
      if (image) {
         addImage(image);
      }
      closeModal();
   };

   return (
      <div className={styles.content}>
         <Emojis type="fine" />
         <h3 className="h3">Изменить фото профиля?</h3>
         <p className={styles.content__text}>
            Загрузите фотографию из своей <br /> галлереи
         </p>
         <label className={styles.content__dragAndDrop}>
            <button className={styles.content__button}>{label}</button>
            {image ? (
               <div style={{ backgroundImage: `url(${image})` }} className={styles.content__img} />
            ) : (
               <p className={styles.content__format}>Формат JPG, JPEG, PNG</p>
            )}

            <input
               type="file"
               id="photo"
               accept="image/*"
               className={styles.content__fileInput}
               onChange={(e) => {
                  handleImageChange(e);
               }}
            />
         </label>
         <Button onClick={handleSaveClick}>Сохранить</Button>
      </div>
   );
};

export default ChangeAvatarModal;
