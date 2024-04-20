import { Status } from "@/entities/boardCard";

export type Heading = {
   id: number;
   name: string;
   status: Status;
   color: string;
};

export type HeadingProps = {
   heading: Heading;
};
