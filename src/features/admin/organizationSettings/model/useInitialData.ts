import {useEffect} from "react";
import {InitialOrganizationTypes} from "../model/types";
import {cloudImageToFile} from "@/shared/lib";

export const useInitialOrganizationSettings = ({reset, data, isSuccess}: InitialOrganizationTypes) => {
    useEffect(() => {
        if (isSuccess && data){
            const initializeData = async () => {
                const logo = await cloudImageToFile(data?.logo || "", Date.now().toString())
                reset({
                    title: data.title,
                    description: data.description,
                    logo: logo
                })
            }
            initializeData()

        }

    }, [isSuccess, data, reset]);
}