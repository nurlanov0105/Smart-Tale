import { IData } from "@/shared/lib/hooks/useInfiniteScroll";

export type ItemProps = {
   item: IData;
   isCurrent?: boolean;
};

type item = {
   id: number;
   type: string;
   status?: string;
   slug: string;
   title: string;
   description: string;
   created_at: string;
   image: string;
};
