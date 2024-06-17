"use client"
import React, {FC, PropsWithChildren, useEffect} from 'react';
import dynamic from "next/dynamic";
import {TypeComponentOrganizationFields} from "./types";


const DynamicCheckSubscribe = dynamic(() => import("./CheckSubscribe"), {ssr: false})
const SubscribeProvider: FC<PropsWithChildren<TypeComponentOrganizationFields>> =
    ({children, Component: {isOnlyOwner}}) => {

        useEffect(() => {

        }, []);

    return isOnlyOwner ? (
        <DynamicCheckSubscribe Component={{isOnlyOwner}}>
            {children}
        </DynamicCheckSubscribe>
    ) : <>{children}</>
};

export default SubscribeProvider;