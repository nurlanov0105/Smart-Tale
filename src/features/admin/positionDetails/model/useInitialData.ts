import {useEffect} from "react";
import {InitialPositionProps} from "./types";

export const useInitialPositionData = ({isSuccess, reset, data}: InitialPositionProps) => {

    useEffect(() => {
        if (isSuccess && data){
            reset({
                ...data
            })
        }
    }, [isSuccess]);
}