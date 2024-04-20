import type { Status } from "@/entities/user/boardCard";

export type Heading = {
   id: number;
   name: string;
   status: Status;
   color: string;
};

export type HeadingProps = {
   heading: Heading;
};
