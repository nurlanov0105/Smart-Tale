import {PositionResponseTypes, usePositions} from "@/widgets/admin/positions/model/usePositions";
import {UseFormReset} from "react-hook-form";
import {
    AddEmployeeTypes,
} from "@/shared/lib/types/organizations-service.types";
import {useEffect} from "react";


interface IProps{
    reset: UseFormReset<AddEmployeeTypes>
}

export const usePositionsEmployee = ({reset}: IProps) => {
    const {
        data,
        isError,
        isSuccess,
        isLoading
    } = usePositions()

    useEffect(() => {
        if (isSuccess && data){
            const positionsList = data.map(item => {
                return {value: item.title, postValue: item.title}
            })

            reset({
                position: positionsList[0],
                positions: positionsList
            })
        }
    }, [isSuccess]);

    return {
        isLoadingPositions: isLoading,
        isErrorPositions: isError
    }
}