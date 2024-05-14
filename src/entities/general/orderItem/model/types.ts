export type ItemProps = {
   item: item;
   isCurrent?: boolean;
};

type item = {
   id: number;
   type: string;
   status?: string;
};
