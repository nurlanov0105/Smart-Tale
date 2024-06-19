import {create} from "zustand";

interface ChatState{
    selectedChat: null | string;
    isShowChat: boolean
    setChatState: (state: Partial<ChatState>) => void;
}

export const useChatsStore = create<ChatState>((set) => ({
    selectedChat: null,
    isShowChat: false,
    setChatState: (state: Partial<ChatState>) => set(state)
}));