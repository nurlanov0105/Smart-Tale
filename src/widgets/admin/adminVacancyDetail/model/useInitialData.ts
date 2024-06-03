import {useEffect} from "react";
import {UseFormReset} from "react-hook-form";
import {ResumeItemTypes} from "@/entities/user/resume-details";
import {cityMap, currenciesMap, experienceMap, graphicMap} from "@/shared/lib";
import {VacancyDetailsTypes} from "./types";

interface IProps{
    isSuccess: boolean
    vacancy: ResumeItemTypes
    reset: UseFormReset<VacancyDetailsTypes>
}
export const useInitialVacancyData = ({vacancy, reset, isSuccess}: IProps) => {
    useEffect(() => {
        if (isSuccess && vacancy){
            const {
                author,
                slug,
                location,
                schedule,
                currency,
                experience,
                ...rest
            } = vacancy

            reset({
                ...rest,
                currency: currenciesMap[currency as keyof typeof currenciesMap],
                schedule: graphicMap[schedule as keyof typeof graphicMap],
                experience: experienceMap[experience as keyof typeof experienceMap].value,
                location: cityMap[location as keyof typeof cityMap]
            })
        }
        // eslint-disable-next-line
    }, [isSuccess, vacancy]);
}