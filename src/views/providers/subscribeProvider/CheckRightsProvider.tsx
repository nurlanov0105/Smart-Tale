"use client"
import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {usePathname, useRouter} from "next/navigation";
import {MODAL_KEYS, ORGANIZATION_ROUTES, ROUTES} from "@/shared/lib";
import {showModal} from "@/views/modal";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";

const CheckRightsProvider:FC<PropsWithChildren> = ({children}) => {
    const pathname = usePathname()
    const {replace} = useRouter()

    const data = useSubscribeStore(state => state.data)
    const isError = useSubscribeStore(state => state.isError)
    const position = useSubscribeStore((state) => state.position);

    useEffect(() => {
        const routes = [
            {route: ORGANIZATION_ROUTES.INVITE_EMPLOYEES, right: RIGHT_ACTIONS.ADD_EMPLOYEE},
            {route: ORGANIZATION_ROUTES.CREATE_VACANCY, right: RIGHT_ACTIONS.CREATE_POSITION},
            {route: ORGANIZATION_ROUTES.ADD_POSITION, right: RIGHT_ACTIONS.CREATE_POSITION},
        ]
        const handleNoRights = () => {
            replace(ORGANIZATION_ROUTES.NO_RIGHTS);
        };
        if (isError){
            replace(ROUTES.NO_RIGHTS)
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.error})
            return
        }
        for (const {route, right} of routes){
            if (pathname.includes(route) && !position[right]){
                handleNoRights()
                return;
            }
        }

    }, [isError, data, position, pathname, replace]);

    return <>{children}</>
};

export default CheckRightsProvider;