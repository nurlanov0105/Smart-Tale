import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";
import {
   PositionResponseTypes,
   EmployeeDetailsResponseTypes,
   EmployeeDetailsTypes,
} from "@/shared/lib";
import { EMPLOYEE_SETTINGS_NAMES } from "@/widgets/admin/adminEmployeesSettings/model/helper";
import {EmployeesRequestTypes} from "@/shared/lib/types/queries.types";

interface IProps {
   reset: UseFormReset<EmployeeDetailsTypes>;
   data: EmployeesRequestTypes | undefined
   isSuccess: boolean;
   positions: PositionResponseTypes[] | undefined;
   isSuccessPosition: boolean;
}

export const useInitialEmployeeData = ({
   reset,
   data,
   isSuccess,
   isSuccessPosition,
   positions,
}: IProps) => {

    useEffect(() => {
        if (isSuccess && isSuccessPosition && data && positions) {
            const positionsList = positions.map((item, idx) => {
                return {value: item.title, postValue: item.slug, idx, ...item}
            })

            const userData = data?.user
            const positionData = data?.job_title
            const selectedPosition = positionsList.find((pos) => pos.postValue === positionData?.slug);

            reset({
                [EMPLOYEE_SETTINGS_NAMES.email]: userData?.email,
                [EMPLOYEE_SETTINGS_NAMES.name]: userData?.first_name,
                [EMPLOYEE_SETTINGS_NAMES.lastName]: userData?.last_name,
                [EMPLOYEE_SETTINGS_NAMES.patronymic]: userData?.middle_name,
                [EMPLOYEE_SETTINGS_NAMES.tel]: userData?.phone_number,
                [EMPLOYEE_SETTINGS_NAMES.positions]: positionsList,
                [EMPLOYEE_SETTINGS_NAMES.position]: selectedPosition,
                user_slug: userData?.slug,

                ...selectedPosition
            })
        }

        // eslint-disable-next-line
    }, [isSuccess, isSuccessPosition, data, positions]);


}
