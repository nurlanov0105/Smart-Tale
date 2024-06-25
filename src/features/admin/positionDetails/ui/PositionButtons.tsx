import React, { FC } from "react";
import { Button } from "@/shared/ui";
import { AddPositionTypes, MODAL_KEYS, OWNER } from "@/shared/lib";
import { showModal } from "@/views/modal";
import { useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { RIGHT_ACTIONS } from "@/shared/lib/constants/consts";

interface IProps {
   position: string | undefined;
   slug: string;
   isSubmitting: boolean;
}
const PositionButtons: FC<IProps> = ({ position, slug, isSubmitting }) => {
   const {
      formState: { isValid, isDirty },
   } = useFormContext<AddPositionTypes>();
   const myPosition = useSubscribeStore((state) => state.position);

   const handleDelete = () => {
      if (!myPosition[RIGHT_ACTIONS.REMOVE_POSITION]) {
         showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.noRights });
         return;
      }

      if (myPosition?.job_title === slug) {
         showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.noRights });
         return;
      }
      if (OWNER === position) {
         showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.noChangeDeleteOwner });
         return;
      }

      showModal(MODAL_KEYS.confirmationModal, { slug, componentName: MODAL_KEYS.deletePosition });
   };

   return (
      <div className={styles.position__btn}>
         <Button onClick={handleDelete} classType="btn_danger" type="button">
            Удалить должность
         </Button>

         <Button disabled={!isValid || isSubmitting || !isDirty} type="submit">
            {isSubmitting ? "Загрузка..." : "Изменить должность"}
         </Button>
      </div>
   );
};

export default PositionButtons;
