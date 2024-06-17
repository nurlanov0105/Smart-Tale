import {NextPage} from "next";


export type TypePositions = {
    isOnlyOwner?: boolean
    isSubscribe?: boolean
}

export type NextPageOrganization<P = {}> = NextPage<P> & TypePositions

export type TypeComponentOrganizationFields = {Component: TypePositions}