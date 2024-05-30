import { Dispatch, SetStateAction } from "react";

export type PaginationProps = {
   totalPages: number;
   currentPage: number;
   fetchNextPage: () => void;
   fetchPreviousPage: () => void;
   setCurrentPage: Dispatch<SetStateAction<number>>;
};
