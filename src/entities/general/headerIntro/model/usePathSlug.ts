"use client";

import { usePathname } from "next/navigation";

export const usePathSlug = () => {
   const pathname = usePathname() as string;

   const pathArray = pathname.split("/");
   const slug =
      pathname.includes("/order-details/1/") ||
      pathname.includes("/order-details/2/") ||
      pathname.includes("/order-details/3/") ||
      pathname.includes("/card-details/1/") ||
      pathname.includes("/card-details/2/") ||
      pathname.includes("/card-details/3/") ||
      pathname.includes("/employees-details/") ||
      pathname.includes("/employees-settings/") ||
      pathname.includes("/organization-details/") ||
      pathname.includes("/vacancy-detail/") ||
      pathname.includes("/announcement-details/") ||
      pathname.includes("/position-details/") ||
      pathname.includes("/resume-details/") ||
      pathname.includes("/resume-info/") ||
      pathname.includes("/users/");
   pathname.includes("/users/") ||
   pathname.includes("/organizations-list/") ||
   pathname.includes("/organization/announcement-details/") ||
   pathname.includes("/resume-details/") ||
   pathname.includes("/work/vacancy-detail/") ||
   pathname.includes("/work/resume-info/")
      ? pathArray.pop()
      : "";
   const remainingPath = pathArray.join("/");

   return { pathname, slug, remainingPath };
};
