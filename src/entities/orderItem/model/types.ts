export type ItemProps = {
   item: item
   itemType: "order" | "equipment"
   isAdmin?: boolean
}

type item = {
   id: number;
   type?: string;
}
