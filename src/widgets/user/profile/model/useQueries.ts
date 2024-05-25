import { UserQueryKeys } from "@/shared/api";
import { UserService } from "@/shared/lib";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
   return useQuery({
      queryFn: UserService.getProfile,
      queryKey: [UserQueryKeys.PROFILE],
   });
};
