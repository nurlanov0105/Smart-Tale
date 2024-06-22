"use client"
import React, {FC, PropsWithChildren} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import type {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";

interface IProps{
    mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all"
}
const CreateAnnouncementContext:FC<PropsWithChildren<IProps>> = ({children, mode = "onBlur"}) => {

    const methods = useForm<AnnouncementCreateFormType>(
        {
            mode: mode,
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