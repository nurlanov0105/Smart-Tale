import {useEffect} from "react";
import {cityMap, currenciesMap, experienceMap, graphicMap} from "@/shared/lib";
import {ResumeDataProps, ResumeItemTypes} from "./types"


export const useInitialResume = ({resume, isSuccess, reset}:ResumeDataProps) => {

    useEffect(() => {
        if (isSuccess && resume){
            const {
                author,
                slug,
                location,
                schedule,
                currency,
                experience,
                ...rest
            } = resume

            reset({
                ...rest,
                currency: currenciesMap[currency as keyof typeof currenciesMap],
                schedule: graphicMap[schedule as keyof typeof graphicMap],
                experience: experienceMap[experience as keyof typeof experienceMap].value,
                location: cityMap[location as keyof typeof cityMap]
            })
        }
        // eslint-disable-next-line
    }, [isSuccess]);
}