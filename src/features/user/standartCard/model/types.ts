import { CardType } from "@/shared/lib";

export type StandartCardType = {
   item: CardType;
};

interface urlState {
   pathname: string;
   slug: string;
}

export type PathType = {
   pathname: string;
   slug: string;

   setUrl: ({ pathname, slug }: urlState) => void;
};

export interface ISize {
   id: number;
   size: string;
}
