export type ItemProps = {
   item: item;
   isAdmin?: boolean;
   isCurrent?: boolean;
};

type item = {
   id: number;
   type: string;
   status?: string;
};
