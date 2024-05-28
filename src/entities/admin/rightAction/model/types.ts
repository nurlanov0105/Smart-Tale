import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {UseFormRegister, UseFormWatch} from "react-hook-form";

export type TypeRightActions = {
   title: string;
   name: "organization" | "title" | "description" | typeof RIGHT_ACTIONS[keyof typeof RIGHT_ACTIONS]
};

export type RightActionProps = {
   action: TypeRightActions
   register: UseFormRegister<any>
   isDisabled?: boolean
}