import { Dispatch, SetStateAction } from "react";

export type ChatProps = {
   value: string;
   postValue: string;
};

export type ChatFormProps = {
   setIsShowChat: Dispatch<SetStateAction<boolean>>;
};

interface ChatUserTypes {
   first_name: string;
   last_name: string;
   slug: string;
   profile_image: null | string;
}
export interface ChatTypes {
   initiator: ChatUserTypes;
   receiver: ChatUserTypes;
   last_message: string;
   id: string;
}

export interface IMessageFullTypes {
   initiator: ChatUserTypes;
   receiver: ChatUserTypes;
   message_set: IMessageTypes[];
}

export interface IMessageTypes {
   id: number;
   text: string;
   attachment: null | string;
   timestamp: string;
   sender: {
      first_name: string;
      last_name: string;
      profile_image: string;
      slug: string;
   };
}
