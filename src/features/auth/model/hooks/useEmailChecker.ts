import type {EmailCheckerProps} from "@/features/auth/model/types";
import {useDebounce} from "@/shared/lib";
import {useEffect} from "react";

export const useEmailChecker = ({watch, errors, isValid}: EmailCheckerProps) => {
    const email = watch("email");
    const debouncedEmail = useDebounce(email, 500);

    const checkEmailValidity = (value: string) => {

        console.log(email);
    }

    useEffect(() => {
        if (!errors.email) {
            checkEmailValidity(debouncedEmail);
        }
    }, [debouncedEmail, isValid, errors.email, checkEmailValidity]);

    return {checkEmailValidity}
}