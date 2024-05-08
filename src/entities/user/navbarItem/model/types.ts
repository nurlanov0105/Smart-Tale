import { LucideIcon } from "lucide-react";
export type RoutesType = {
   parentId: number;
   subtitle: string;
   link: string;
   isShow: boolean;
};

export type TypeCategories = {
   id: number;
   title: string;
   Icon: LucideIcon;
   routes: RoutesType[];
   activeRoutes?: string[]
   isShow: boolean
};
