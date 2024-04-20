import { FC } from "react";
import styles from "./styles.module.scss";
import { ChatMessageProps } from "../model/types";

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
   return (
      <div className={styles.message}>
         <span className={styles.message__content}>{message}</span>
      </div>
   );
};

export default ChatMessage;
