import {create} from "zustand";

interface ChatState{
    wsChat: string | null
    selectedChat: null | string;
    isShowChat: boolean
    setChatState: (state: Partial<ChatState>) => void;
}

export const useChatsStore = create<ChatState>((set) => ({
    wsChat: null,
    selectedChat: null,
    isShowChat: false,
    setChatState: (state: Partial<ChatState>) => set(state)
}));