import React, { FC, useState } from "react";
import OtpInput from "react-otp-input";

import { OtpProps } from "../index";
import styles from "./styles.module.scss";

const OtpInputFields: FC<OtpProps> = ({ isError }) => {
   const [otp, setOtp] = useState("");

   const inputStyles = {
      width: "5.3rem",
      height: "8rem",
      marginRight: "2rem",
      borderRadius: "10px",
      border: `solid ${isError ? "red 1px" : "#f8f9fa 2px"}`,
   };
   console.log(isError);

   return (
      <div className={styles.input}>
         <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={inputStyles}
            inputType={"number"}
            renderInput={(props) => <input {...props} required />}
         />
      </div>
   );
};

export default OtpInputFields;
