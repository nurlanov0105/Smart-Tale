import { Dispatch, SetStateAction } from "react";

export type ChatItemProps = {
   item: number;
   selected: number;
   setSelected: Dispatch<SetStateAction<number>>;
   setIsShowChat: Dispatch<SetStateAction<boolean>>;
};
