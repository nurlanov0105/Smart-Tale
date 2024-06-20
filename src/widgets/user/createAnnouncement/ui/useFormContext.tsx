import React, {FC, PropsWithChildren} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import type {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";

const CreateAnnouncementContext:FC<PropsWithChildren> = ({children}) => {
    const methods = useForm<AnnouncementCreateFormType>(
        {
            mode: "onBlur",
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