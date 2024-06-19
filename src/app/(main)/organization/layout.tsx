"use client"

import React, {FC, PropsWithChildren} from 'react';
import dynamic from "next/dynamic";

const DynamicCheckSubscribe = dynamic(() => import("@/views/providers/subscribeProvider/CheckSubscribe"), {ssr: false})

const OrganizationLayout: FC<PropsWithChildren> = ({children}) => {

    return  (
            <DynamicCheckSubscribe>
                {children}
            </DynamicCheckSubscribe>
        )
    };

export default OrganizationLayout;