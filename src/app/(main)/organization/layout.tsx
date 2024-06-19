"use client"

import React, {FC, PropsWithChildren, useEffect} from 'react';
import dynamic from "next/dynamic";

const DynamicCheckSubscribe = dynamic(() => import("@/views/providers/subscribeProvider/CheckSubscribe"), {ssr: false})

const OrganizationLayout: FC<PropsWithChildren> = ({children}) => {

        const isSubscribe = true

        return  (
            <DynamicCheckSubscribe Component={{isSubscribe}}>
                {children}
            </DynamicCheckSubscribe>
        )
    };

export default OrganizationLayout;