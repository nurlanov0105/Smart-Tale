"use client"

import React, {FC, PropsWithChildren} from 'react';
import {TypeComponentOrganizationFields} from "./types";
import {useRouter} from "next/navigation";
import {useGetProfile} from "@/widgets/user/profile/model/useQueries";
import {ROUTES, useAuth} from "@/shared/lib";

const CheckSubscribe:FC<PropsWithChildren<TypeComponentOrganizationFields>> = ({children, Component: {isSubscribe}}) => {

    const {replace} = useRouter()

    // const {data} = useGetProfile()

    const isSubscribed = true
    const {isAuth} = useAuth()


    if (isSubscribed && isSubscribe) return <>{children}</>

    replace(ROUTES.SUBSCRIBE)

    return null
};

export default CheckSubscribe;