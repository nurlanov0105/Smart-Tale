import { Button, Emojis } from "@/shared/ui";
import { ModalProps } from "../../model/types";
import { modalInfoMap } from "../../model/helper";
import Link from "next/link";
import { ROUTES } from "@/shared/lib";
import { closeModal } from "@/views/modal";

const InfoModal = ({ componentName }: ModalProps) => {
   const { buttonText, emoji, title, description, login } = modalInfoMap[componentName];

   return (
      <div>
         <Emojis
            type={
               emoji as
                  | "unknown"
                  | "reverse"
                  | "sad"
                  | "fine"
                  | "holidayStuff"
                  | "okay"
                  | "holidaySmile"
                  | "angry"
            }
         />
         <div className="modalFlex">
            <h3 className="h3">{title}</h3>
            <p className="greyText textMaxWidth">{description}</p>
            {login ? (
               <Link href={ROUTES.SIGN_IN} className="btn" onClick={closeModal}>
                  <span> {login}</span>
               </Link>
            ) : (
               <Button onClick={closeModal}>{buttonText}</Button>
            )}
         </div>
      </div>
   );
};

export default InfoModal;
