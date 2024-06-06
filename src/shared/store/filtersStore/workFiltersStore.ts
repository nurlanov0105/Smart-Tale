import {create} from "zustand";
import {defaultValues} from "./helper";
import {FilterStoreTypes} from "./types";

export const VacancyFilterStore = create<FilterStoreTypes>((set) => ({
    defaultValues,
    setter: ({ value, key }) => set((state) => {
        const currentValues = state.defaultValues[key];

        if (!Array.isArray(currentValues)){
            return {
                defaultValues: {
                    ...state.defaultValues,
                    [key]: value,
                },
            };
        }

        if (!currentValues.includes(value)) {
            return {
                defaultValues: {
                    ...state.defaultValues,
                    [key]: [...currentValues, value],
                },
            };
        }

        return {
            defaultValues: {
                ...state.defaultValues,
                [key]: currentValues.filter(item => item !== value),
            },
        }
    })
}))

