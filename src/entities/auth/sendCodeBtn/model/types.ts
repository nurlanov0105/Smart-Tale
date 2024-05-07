import { Dispatch, SetStateAction } from "react";

export type SendBtnProps = {
   isError: boolean;
   handleSendCode: (e: any) => void;
   handleSendAgain: (e: any) => void;
   btnDisabled: boolean;
   isResendSuccess: boolean;
};
