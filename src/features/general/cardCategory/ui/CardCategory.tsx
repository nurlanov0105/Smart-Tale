import { FC } from "react";
import { CardCategoryData } from "../model/consts";
import { CardCategoryProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const CardCategory: FC<CardCategoryProps> = ({
   handleCategoryClick,
   selectedCategory,
   isLarge,
}) => {
   return (
      <ul className={clsx(styles.category, isLarge ? styles.category_large : "")}>
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
