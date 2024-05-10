import {useEffect, useState} from "react";

export const useProgress = (isLoading: boolean) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null;

        if (isLoading) {
            timerId = setInterval(() => {
                setProgress(150);
            }, 16);

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