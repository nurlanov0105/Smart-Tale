import {IMessageFullTypes, IMessageTypes} from "@/widgets/general/chats/model/types";

export type MessageTypes = {
    message: IMessageTypes
    messages: IMessageFullTypes
    idx: number
    mySlug: string
}