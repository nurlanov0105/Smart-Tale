import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
   type: keyof typeof emojies;
};

enum EmosjiesEnum {
   sad,
   fine,
   holidayStuff,
   reverse,
   unknown,
   okay,
   holidaySmile,
}

const emojies = {
   sad: "😔",
   fine: "😃",
   holidayStuff: "🎉",
   reverse: "🙃",
   unknown: "🤔",
   okay: "🙂",
   holidaySmile: "🥳",
};

const Emojis: FC<Props> = ({ type }) => {
   return (
      <div>
         <p className={styles.emoji}>{emojies[type]}</p>
      </div>
   );
};

export default Emojis;
