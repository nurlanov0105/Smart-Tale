import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";
import { AddEmployeeTypes, usePositions } from "@/shared/lib";

interface IProps {
   reset: UseFormReset<AddEmployeeTypes>;
}

export const usePositionsEmployee = ({ reset }: IProps) => {
   const { data, isError, isSuccess, isLoading } = usePositions();

   useEffect(() => {
      if (isSuccess && data) {
         const positionsList = data.map((item, idx) => {
            return {
               value: item.title,
               postValue: item.slug,
               idx,
               ...item,
            };
         });

         reset({
            position: positionsList[0],
            positions: positionsList,
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isSuccess]);


    return {
        isLoadingPositions: isLoading,
        isErrorPositions: isError,
        data
    }
}
