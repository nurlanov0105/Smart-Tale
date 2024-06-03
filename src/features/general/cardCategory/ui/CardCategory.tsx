import { FC } from "react";
import { CardCategoryData } from "../model/consts";
import { CardCategoryProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";

const CardCategory: FC<CardCategoryProps> = ({
   handleCategoryClick,
   selectedCategory,
   isLarge,
   isMobile,
   type,
}) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <ul
         className={clsx(
            styles.category,
            isLarge ? styles.category_large : "",
            isMobile ? styles.category_mobile : "",
            styles[theme]
         )}>
         {CardCategoryData.map((category) => {
            if (type !== "order" && category === "Размеры") {
               return null;
            }
            return (
               <li
                  key={category}
                  className={clsx(
                     styles.category__item,
                     selectedCategory.toLowerCase() === category.toLowerCase()
                        ? styles.category__item_active
                        : ""
                  )}
                  onClick={() => handleCategoryClick(category)}>
                  {category}
               </li>
            );
         })}
      </ul>
   );
};

export default CardCategory;
