import {useEffect, useState} from "react";
import {MAX_PROGRESS, PROGRESS_STEP} from "../consts"

export const useProgress = (isLoading: boolean) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null;

        if (isLoading) {
            timerId = setInterval(() => {
                setProgress(MAX_PROGRESS);
            }, PROGRESS_STEP);

            return () => {
                if (timerId) {
                    clearInterval(timerId);
                }
            };
        } else {
            setProgress(0);
        }
    }, [isLoading]);


    return {progress}
}