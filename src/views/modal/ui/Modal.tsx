"use client";

import { FC } from "react";
import { useModalStore } from "../model/modalState";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {
   ChangeAvatarModal,
   InviteEmployeeModal,
   ResponsesModal,
   ConfirmationModal,
   InfoModal,
} from "@/features/modals";
import { CardModal } from "@/widgets/general/cardModal";
import { CloseModalBtn } from "@/entities/general/closeModalBtn";
import { useThemeStore } from "@/shared/store/themeStore";
import dynamic from "next/dynamic";

const Modal: FC = () => {
   const theme = useThemeStore((state) => state.theme);
   const { isOpen, componentName, props, closeModal } = useModalStore();

   const componentsLookUp: Record<string, React.ComponentType<any>> = {
      ConfirmationModal,
      InfoModal,
      ChangeAvatarModal,
      InviteEmployeeModal,
      CardModal,
      ResponsesModal,
   };

   let RenderComponent;

   if (componentName) {
      const SelectedComponent = componentsLookUp[componentName] as React.ElementType;

      if (SelectedComponent) {
         RenderComponent = <SelectedComponent {...props} />;
      }
   }

   const handleClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

   return (
      <div
         className={clsx(styles.modal, isOpen ? styles.active : "", styles[theme])}
         onClick={closeModal}>
         <div
            className={clsx(styles.content, props?.isLightBg ? "lightBg" : "")}
            onClick={handleClick}>
            <CloseModalBtn />
            <div className={styles.modal__inner}>{RenderComponent}</div>
         </div>
      </div>
   );
};

export default Modal;
