import { UserQueryKeys } from "@/shared/api";
import { UserService } from "@/shared/lib";
import { useQuery } from "@tanstack/react-query";

export const useGetCommonUser = (slug: string) => {
   return useQuery({
      queryFn: () => UserService.getCommonUser(slug),
      queryKey: [UserQueryKeys.COMMON_USER, slug],
   });
};
export const useGetCommonUserAds = ({
   slug,
   page,
   param_tab,
}: {
   slug: string;
   page: number;
   param_tab: string;
}) => {
   return useQuery({
      queryFn: () => UserService.getCommonUserAds({ slug, page, param_tab }),
      queryKey: [UserQueryKeys.COMMON_USER_ADS, slug],
   });
};
