import { UserQueryKeys } from "@/shared/api";
import { UserService } from "@/shared/lib";
import { useQuery } from "@tanstack/react-query";

export const useGetCommonUser = (slug: string) => {
   return useQuery({
      queryFn: () => UserService.getCommonUser(slug),
      queryKey: [UserQueryKeys.COMMON_USER, slug],
   });
};
