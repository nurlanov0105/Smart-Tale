import { persist } from "zustand/middleware";
import { create } from "zustand";
import { ThemeState } from "./types";

export const useThemeStore = create(
   persist<ThemeState>(
      (set) => ({
         theme: "light",
         toggleTheme: () =>
            set((state) => {
               const newTheme = state.theme === "light" ? "dark" : "light";
               document.documentElement.className = newTheme;
               return { theme: newTheme };
            }),
      }),
      // localStorage
      {
         name: "theme_storage",
      }
   )
);
