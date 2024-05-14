import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
// import {useForm} from "react-hook-form";

const InputPhone = ({tel, setTel, error, setError}: any) => {

    const handleInputChange = (newValue: string | undefined) => {
        setTel(newValue ?? '');
    }
    const handleBlur = () => {
        if (tel && !isValidPhoneNumber(tel)){
            setError('Invalid phone number format');
        }else {
            setError("")
        }
    }
    // const {register, watch} = useForm()

    return (
        <div>
            <PhoneInput

                autoComplete="tel-national"
                international
                className="popup__input"
                placeholder="Enter phone number"
                value={tel}
                onChange={handleInputChange}
                defaultCountry="KG"
                onBlur={handleBlur}
                limitMaxLength={true}
                countries={['KG', 'KZ', "RU", "UZ"]}
            />
            {error && <p className="popup__error">{error}</p>}
        </div>
    );
};

export default InputPhone;