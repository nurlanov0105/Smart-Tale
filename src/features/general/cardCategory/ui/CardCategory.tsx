import { FC } from "react";
import { CardCategoryData } from "../model/consts";
import { CardCategoryProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";

const CardCategory: FC<CardCategoryProps> = ({
   handleCategoryClick,
   selectedCategory,
   isLarge,
   isMobile,
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
         {CardCategoryData.map((category) => (
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
         ))}
      </ul>
   );
};

export default CardCategory;
