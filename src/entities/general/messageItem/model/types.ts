import {ChatUserTypes, IMessageFullTypes, IMessageTypes} from "@/widgets/general/chats/model/types";



export interface IMessageType {
    sender: string
    message: string;
    timestamp: string
    id: number | string
}

export type MessageTypes = {
    message: IMessageType
    idx: number
    mySlug: string
}