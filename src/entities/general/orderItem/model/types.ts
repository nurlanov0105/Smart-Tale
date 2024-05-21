export type ItemProps = {
   item: item;
   isCurrent?: boolean;
};

type item = {
   id: number;
   type: string;
   status?: string;
   slug: string
   title: string
   description: string
   created_at: string
};
