import { Dispatch, SetStateAction } from "react";

export type OtpProps = {
   isError: boolean;
   otp: string;
   setOtp: Dispatch<SetStateAction<string>>;
};
