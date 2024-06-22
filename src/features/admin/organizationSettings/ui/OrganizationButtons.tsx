import React, { FC, useCallback } from "react";
import { Button } from "@/shared/ui";
import styles from "./styles.module.scss";
import { showModal } from "@/views/modal";
import { MODAL_KEYS, OWNER } from "@/shared/lib";
import { useParams } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { UpdateOrganizationTypes } from "../model/types";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

interface IProps {
   isSubmitting: boolean;
}
const OrganizationButtons: FC<IProps> = ({ isSubmitting }) => {
   const { slug } = useParams<{ slug: string }>();
   const position = useSubscribeStore((state) => state.position);

   const {
      reset,
      formState: { isValid, isDirty },
   } = useFormContext<UpdateOrganizationTypes>();

   const handleDelete = useCallback(() => {
      // if (position.job_title !== OWNER) {
      //    showModal(MODAL_KEYS.infoModal, { slug, componentName: MODAL_KEYS.noRights });
      //    return;
      // }
      showModal(MODAL_KEYS.confirmationModal, {
         slug,
         componentName: MODAL_KEYS.deleteOrganization,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [slug]);
   const handleReset = () => reset();

   return (
      <div className={styles.form__button}>
         <Button onClick={handleDelete} type="button" classType="btn_danger">
            Удалить организацию
         </Button>

         {isDirty && (
            <Button onClick={handleReset} type="button" classType="btn_bordered">
               Отменить изменения
            </Button>
         )}
         <Button disabled={!isValid} type="submit">
            {isSubmitting ? "Загрузка..." : "Изменить организацию"}
         </Button>
      </div>
   );
};

export default OrganizationButtons;
