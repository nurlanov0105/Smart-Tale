import {create} from "zustand";

interface ITypes{
    isShow: boolean
    startConfetti: () => void
    endConfetti: () => void
}
export const useConfettiStore = create<ITypes>((set) => ({
    isShow: false,
    startConfetti: () => set(() => ({
        isShow: true
    })),
    endConfetti: () => set(() => ({
        isShow: false
    })),
}));