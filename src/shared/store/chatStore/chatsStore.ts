import {create} from "zustand";
import {ChatUserTypes} from "@/widgets/general/chats/model/types";

interface ChatState{
    selectedChat: null | string;
    isShowChat: boolean
    setChatState: (state: Partial<ChatState>) => void;
    messages: IMessageType[] | null
}
export interface IMessageType {
    sender: string,
    message: string
    timestamp: string
    id: number | string
}

export const useChatsStore = create<ChatState>((set) => ({
    selectedChat: null,
    messages: null,
    isShowChat: false,
    setChatState: (state: Partial<ChatState>) => set(state)
}));