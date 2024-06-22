import {useEffect} from "react";
import type {InitialDataProps} from "../types";
import {useResetAnnouncementData} from "../helper";

export const useInitialData = ({reset, data, isSuccess, type}: InitialDataProps) => {

    const resetFunc = useResetAnnouncementData;

    useEffect(() => {
        const resetDataAsync = async () => {
            const resetData = await resetFunc({ data, type });
            reset(resetData);
        };
        if (data && isSuccess) {
            resetDataAsync();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, data, reset, type, resetFunc]);
}