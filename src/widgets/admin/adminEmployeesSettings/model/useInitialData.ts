import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";
import {
   PositionResponseTypes,
   EmployeeDetailsResponseTypes,
   EmployeeDetailsTypes,
} from "@/shared/lib";
import { EMPLOYEE_SETTINGS_NAMES } from "@/widgets/admin/adminEmployeesSettings/model/helper";

interface IProps {
   reset: UseFormReset<EmployeeDetailsTypes>;
   data: EmployeeDetailsResponseTypes;
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

            const selectedPosition = positionsList.find((pos) => pos.value === data.job_title);

            reset({
                [EMPLOYEE_SETTINGS_NAMES.email]: data.email,
                [EMPLOYEE_SETTINGS_NAMES.name]: data.first_name,
                [EMPLOYEE_SETTINGS_NAMES.lastName]: data.last_name,
                [EMPLOYEE_SETTINGS_NAMES.patronymic]: data.middle_name,
                [EMPLOYEE_SETTINGS_NAMES.tel]: data["phone_number"],
                [EMPLOYEE_SETTINGS_NAMES.positions]: positionsList,
                [EMPLOYEE_SETTINGS_NAMES.position]: selectedPosition,
                user_slug: data.user_slug,

                ...selectedPosition
            })
        }

        // eslint-disable-next-line
    }, [isSuccess, isSuccessPosition, data, positions]);


}
