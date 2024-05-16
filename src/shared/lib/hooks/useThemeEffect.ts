"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/shared/themeStore";

const useThemeEffect = () => {
   const theme = useThemeStore((state) => state.theme);

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);
};

export default useThemeEffect;
