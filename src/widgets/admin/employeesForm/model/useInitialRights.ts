"use client"

import {useEffect, useState} from "react";
import {IRights, rightsActionsData, PositionResponseTypes} from "@/shared/lib";

interface IProps{
    position: {idx: number}
    data: PositionResponseTypes[] | undefined
}
export const useInitialRights = ({data, position}: IProps) => {
    const [actions, setActions] = useState<IRights[]>([])

    useEffect(() => {
        if (data && position){

            const positionsList = data?.map(item => {
                return {value: item.title, postValue: item.title, ...item}
            })
            const values: IRights[] = rightsActionsData(positionsList[position.idx])

            setActions(values)
        }
        // eslint-disable-next-line
    }, [position]);

    return {actions}
}