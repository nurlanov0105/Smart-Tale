import {EmployeeOrderTypes} from "@/entities/admin/adminEmployeesItem/model/types";

export type ItemProps = {
   item: EmployeeOrderTypes;
   isCurrent?: boolean;
};

// export type ItemType = {
//    type: string;
//    slug: string;
//    title: string;
//    description: string;
//    // image: string;
//    status: string
//
//    created_at?: string;
//    price?: string
//    currency?: string
//    image?: string
// };
