"use client";

import { FC } from "react";
import { useModalStore } from "../model/modalState";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {
   ChangeAvatarModal,
   SubscribeModal,
   DeleteAnnouncementModal,
   HideAnnouncement,
} from "@/features/modals";

const Modal: FC = () => {
   const { isOpen, componentName, closeModal } = useModalStore();
   const componentsLookUp: Record<string, React.ComponentType> = {
      SubscribeModal,
      ChangeAvatarModal,
      DeleteAnnouncementModal,
      HideAnnouncement,
   };
   let RenderComponent;

   if (componentName) {
      const SelectedComponent = componentsLookUp[componentName] as React.ElementType;

      if (SelectedComponent) {
         RenderComponent = <SelectedComponent />;
      }
   }

   const handleClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

   return (
      <div className={clsx(styles.modal, isOpen ? styles.active : "")} onClick={closeModal}>
         <div className={styles.content} onClick={handleClick}>
            {RenderComponent}
         </div>
      </div>
   );
};

export default Modal;
