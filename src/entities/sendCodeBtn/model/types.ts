import {Dispatch, SetStateAction} from "react";

export type SendBtnProps = {
    isError: boolean
    setIsError: Dispatch<SetStateAction<boolean>>
}