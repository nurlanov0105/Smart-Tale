import { Button, Emojis } from "@/shared/ui";
import {ModalProps} from "../../model/types";
import {modalInfoMap} from "../../model/helper";

const InfoModal = ({componentName}: ModalProps) => {
    const {
        buttonText,
        emoji,
        title,
        description
    } = modalInfoMap[componentName]

    return (
        <div>
            <Emojis type={emoji as "unknown" | "reverse" | "sad" | "fine" | "holidayStuff" | "okay" | "holidaySmile"} />
            <div className="modalFlex">
                <h3 className="h3">{title}</h3>
                <p className="greyText textMaxWidth">{description}</p>
                <Button>{buttonText}</Button>
            </div>
        </div>
    );
};

export default InfoModal;
