"use client"
import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {ORGANIZATION_ROUTES} from "@/shared/lib";
import {useOrganization} from "../model/useOrganization";

const OrganizationProvider: FC<PropsWithChildren> = ({children}) => {
    const { replace } = useRouter();
    const { data, isSuccess } = useOrganization();

    const [componentData, setComponentData] = useState<React.ReactNode>(null);
    const [isMe, setIsMe] = useState(false);

    useEffect(() => {
        if (isSuccess && data) {
            const dataRoute = data["my-orgs"].find(organization => organization.active)

            if (dataRoute){
                setIsMe(true)
                setComponentData(children);
                return
            }

            const dataOtherRoute = data["other-orgs"].find(organization => organization.active)
            replace(ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + `/${dataOtherRoute?.slug}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, isMe]);

    return componentData
};

export default OrganizationProvider;