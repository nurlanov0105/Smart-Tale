import {create} from "zustand";
import {defaultValues} from "./helper";
import {FilterStoreTypes} from "./types";



export const VacancyFilterStore = create<FilterStoreTypes>((set) => ({
    defaultValues,
    // setGraphic: (value) => set((state) => {
    //     const {schedule} = state.defaultValues
    //     if (!schedule.includes(value)){
    //        return {
    //            defaultValues: {
    //                ...state.defaultValues,
    //                schedule: [...schedule, value]
    //            }
    //        }
    //     } else {
    //         return {
    //             defaultValues: {
    //                 ...state.defaultValues,
    //                 schedule: schedule.filter(item => item !== value)
    //             }
    //         }
    //     }
    //
    // }),

    setter: ({ value, key }) => set((state) => {
        const currentValues = state.defaultValues[key];

        if (Array.isArray(currentValues)) {
            if (!currentValues.includes(value)) {
                return {
                    defaultValues: {
                        ...state.defaultValues,
                        [key]: [...currentValues, value],
                    },
                };
            } else {
                return {
                    defaultValues: {
                        ...state.defaultValues,
                        [key]: currentValues.filter(item => item !== value),
                    },
                };
            }
        } else {
            return {
                defaultValues: {
                    ...state.defaultValues,
                    [key]: value,
                },
            };
        }
    })
}))

