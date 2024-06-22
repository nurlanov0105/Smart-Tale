import React, {FC, PropsWithChildren} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import type {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";

interface IProps{
    mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all"
}
const CreateAnnouncementContext:FC<PropsWithChildren<IProps>> = ({children, mode}) => {
    const methods = useForm<AnnouncementCreateFormType>(
        {
            mode: mode ?? "onBlur",
            criteriaMode: "all",
            shouldFocusError: true,
        }
    );

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
};

export default CreateAnnouncementContext;