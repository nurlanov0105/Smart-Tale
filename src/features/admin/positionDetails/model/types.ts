import {UseFormReset} from "react-hook-form";
import {AddPositionTypes, GetPositionTypes} from "@/shared/lib/types/organizations-service.types";

export type InitialPositionProps = {
    reset: UseFormReset<AddPositionTypes>
    data: GetPositionTypes | undefined
    isSuccess: boolean
}