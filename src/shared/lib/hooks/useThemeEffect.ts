"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/shared/store/themeStore";

const useThemeEffect = () => {
   const theme = useThemeStore((state) => state.theme);

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   return theme
};

export default useThemeEffect;
