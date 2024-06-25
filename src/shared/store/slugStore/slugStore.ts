import {create} from "zustand";
import {SlugStoreTypes} from "./types";



export const useSlugStore = create<SlugStoreTypes>((set) => ({
    cardSlug: null,
    vacancySlug: null,
    resumeSlug: null,
    organizationSlug: null,
    employeeSlug: null,
    positionSlug: null,
    setSlugState: (state) => set(state)
}));
