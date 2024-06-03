import { useEffect, useState } from "react";
import { IRights, rightsActionsData } from "@/shared/lib";
import { InitialPositionProps } from "./types";

export const useInitialPositionData = ({isSuccess, reset, data}: InitialPositionProps) => {
    const [actions, setActions] = useState<IRights[]>([])
    useEffect(() => {
        if (isSuccess && data) {
            const values = rightsActionsData(data)
            setActions(values)
            reset({
                ...data
            })
        }
        // eslint-disable-next-line
    }, [isSuccess, data]);

    return {actions}
}