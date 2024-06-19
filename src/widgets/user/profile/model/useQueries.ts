import { UserQueryKeys } from "@/shared/api";
import {ProfileRequestTypes, UserService} from "@/shared/lib";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";


export const useGetProfile = (isAuth?: boolean) => {
   return useQuery<ProfileRequestTypes>({
      queryKey: [UserQueryKeys.PROFILE],
      queryFn: UserService.getProfile,
      enabled: isAuth
   });
};

export const useChangeProfile = () => {
   return useMutation({
      mutationFn: (data: FormData) => {
         return UserService.changeProfile(data);
      },
      mutationKey: [UserQueryKeys.PROFILE],
      onSuccess: (data) => {
         if (data) {
            toast.success("Вы успешно редактировали профиль!");
         }
      },
   });
};
