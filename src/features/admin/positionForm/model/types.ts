import {UseFormReset} from "react-hook-form";
import {AddPositionTypes} from "@/shared/lib/types/organizations-service.types";

export type AddPositionProps = {
    reset: UseFormReset<AddPositionTypes>
}