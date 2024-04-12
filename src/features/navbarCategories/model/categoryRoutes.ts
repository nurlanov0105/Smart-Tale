import { DASHBOARD } from "@/shared/lib";

export const CategoryRoutes = [
   {
      title: "lc",
      id: 1,
      routes: [
         {
            parentId: 1,
            subtitle: "profile",
            link: DASHBOARD.PROFILE,
            isSubscride: false,
         },
         {
            subtitle: "profile",
            link: DASHBOARD.SEARCH,
            isSubscride: false,
         },
         {
            subtitle: "profile",
            link: DASHBOARD.HOME,
            isSubscride: true,
         },
         {
            subtitle: "profile",
            link: DASHBOARD.HOME,
            isSubscride: true,
         },
      ],
   },
   {
      title: "orders",
      id: 2,
      routes: [
         {
            parentId: 2,
            subtitle: "order 1",
            link: DASHBOARD.PROFILE,
         },
         {
            subtitle: "order 2",
            link: DASHBOARD.SEARCH,
         },
         {
            subtitle: "order 2",
            link: DASHBOARD.HOME,
         },
      ],
   },
];
