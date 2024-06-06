"use client";

import { Button, Emojis } from "@/shared/ui";
import styles from "./styles.module.scss";
import { useDeleteAccount } from "@/features/auth";
import { CookiesServices, EnumTokens } from "@/shared/lib";
import { closeModal } from "@/views/modal";
import Cookies from "js-cookie";

const DeleteModal = () => {
   const { mutate: deleteAcc, isPending } = useDeleteAccount();
   const remeberMe = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);

   const handleDeleteClick = () => {
      deleteAcc("");
   };

   return (
      <div className={styles.modal}>
         <Emojis type="sad" />
         <div className="modalFlex">
            <h3 className="h3">
               Вы действительно
               <br />
               хотите удалить?
            </h3>
            <p className="greyText">Все данные будут удалены!</p>
            <div className={styles.modal__btns}>
               <Button classType="btn_bordered">Нет</Button>
               <Button onClick={handleDeleteClick}>{isPending ? "Загрузка..." : "Да"}</Button>
            </div>
         </div>
      </div>
   );
};

export default DeleteModal;
