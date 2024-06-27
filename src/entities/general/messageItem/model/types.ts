import {ChatUserTypes, IMessageFullTypes, IMessageTypes} from "@/widgets/general/chats/model/types";



interface IMessageType {
    sender: ChatUserTypes;
    text: string;
    timestamp: string
}

export type MessageTypes = {
    message: IMessageType
    messages: IMessageType[]
    idx: number
    mySlug: string
}