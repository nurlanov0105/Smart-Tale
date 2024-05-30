import {UseFormRegister} from "react-hook-form";

export type TypeRightActions = {
   title: string;
   name: string
   value: string
};

export type RightActionProps = {
   action: TypeRightActions
   register: UseFormRegister<any>
   isDisabled?: boolean
}