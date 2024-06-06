"use client";

import { closeModal } from "@/views/modal";
import { Button, Emojis } from "@/shared/ui";
import { DeletePositionProps } from "../../model/types";
import styles from "./styles.module.scss";
import { useDeletePosition } from "@/features/modals/model/useQueries";

const DeletePositionModal = ({ slug }: DeletePositionProps) => {
   const handleCancel = () => {
      closeModal();
   };
   const handleDeleteClick = () => mutate(slug);

   const { mutate, isPending } = useDeletePosition();

   return (
      <div className={styles.modal}>
         <Emojis type="sad" />
         <div className="modalFlex">
            <h3 className="h3">
               Вы действительно
               <br />
               хотите удалить?
            </h3>
            <p className="greyText">Должность будет удалена!</p>
            <div className={styles.modal__btns}>
               <Button classType="btn_bordered" onClick={handleCancel}>
                  Нет
               </Button>
               <Button onClick={handleDeleteClick}>{isPending ? "Загрузка..." : "Да"}</Button>
            </div>
         </div>
      </div>
   );
};

export default DeletePositionModal;
