import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";
import { PositionResponseTypes } from "@/widgets/admin/positions/model/usePositions";
import {
   EmployeeDetailsResponseTypes,
   EmployeeDetailsTypes,
} from "@/shared/lib/types/organizations-service.types";
import { rightsActionsMap } from "@/widgets/admin/adminEmployeesSettings/model/helper";

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
      if (isSuccess && isSuccess && data && positions) {
         const positionsList = positions.map((item) => {
            return { value: item.title, postValue: item.title, ...item };
         });
         // const newData = positions.map(item => {
         //     return {
         //         [rightsActionsMap[item.title as keyof typeof rightsActionsMap]]
         //     }
         // })

         const selectedPosition = positionsList.find((pos) => pos.value === data.job_title);

         reset({
            email: data.email,
            name: data.first_name,
            lastName: data.last_name,
            patronymic: data.middle_name,
            tel: data["phone_number"],
            positions: positionsList,
            position: selectedPosition,

            ...selectedPosition,
         });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isSuccess, isSuccessPosition]);
};
