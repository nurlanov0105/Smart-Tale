"use client";

import { useEffect, useState } from "react";

export const useFormatInitalDate = (incomingDate: string) => {
   const [date, setDate] = useState("");

   useEffect(() => {
      setDate(new Date(incomingDate).toISOString().split("T")[0]);
   }, [incomingDate]);

   return { formatedDate: date };
};
