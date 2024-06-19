"use client"
import React, {FC, PropsWithChildren} from 'react';
import dynamic from "next/dynamic";
import {TypeComponentOrganizationFields} from "./types";


const DynamicCheckSubscribe = dynamic(() => import("./CheckSubscribe"), {ssr: false})
const SubscribeProvider: FC<PropsWithChildren<TypeComponentOrganizationFields>> =
    ({children, Component}) => {

    return <DynamicCheckSubscribe>
        {children}
    </DynamicCheckSubscribe>
};

export default SubscribeProvider;