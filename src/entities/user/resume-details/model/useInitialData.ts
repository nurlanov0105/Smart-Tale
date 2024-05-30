import {ResumeFormTypes} from "./types";
import {useEffect} from "react";
import {UseFormReset} from "react-hook-form";
import {cityMap, currenciesMap, experienceMap, graphicMap} from "@/widgets/user/createVacancy/model/values.data";

interface IProps{
    isSuccess: boolean
    resume: ITypes
    reset: UseFormReset<ResumeFormTypes>
}
interface ITypes{
    job_title: string
    about_me: string
    min_salary: string
    max_salary: string
    experience: string
    currency: string
    schedule: string
    slug: string
    location: string
    author: {last_name: string, middle_name: string, first_name: string}
}
export const useInitialResume = ({resume, isSuccess, reset}:IProps) => {

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