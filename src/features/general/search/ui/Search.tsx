import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSearchStore } from "@/features/general/search";

import { useDebounce, useOutside } from "@/shared/lib";
import { useThemeStore } from "@/shared/lib";

import clsx from "clsx";
import searchIcon from "@@/imgs/header/search.svg";
import styles from "./styles.module.scss";

const SearchField = () => {
   const theme = useThemeStore((state) => state.theme);
   const setSearch = useSearchStore((state) => state.setSearch);
   const pathname = usePathname();

   const { push } = useRouter();
   // const data = [
   //    { id: 1, title: "Сшить костюм" },
   //    { id: 2, title: "Купить пуговицы" },
   //    { id: 3, title: "Съесть лапшу" },
   //    { id: 4, title: "Построить дом" },
   //    { id: 5, title: "Прочитать книгу" },
   //    { id: 6, title: "Приготовить ужин" },
   //    { id: 7, title: "Закончить поиск" },
   // ];

   const [searchValue, setSearchValue] = useState("");
   const debouncedValue = useDebounce(searchValue);
   const { ref, isShown, setIsShown, toggleShow } = useOutside(!!searchValue);

   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      setIsShown(false);
      if (!pathname.includes("/search")) {
         push(`/${pathname.slice(1).split("/").join("-")}/search`);
      }
   };

   const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      if (!searchValue.length) return;
      setIsShown(false);
      if (!pathname.includes("/search")) {
         push(`/${pathname.slice(1).split("/").join("-")}/search`);
      }
   };

   useEffect(() => {
      setSearch(debouncedValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [debouncedValue]);

   return (
      <div className={clsx(styles.search__full, styles[theme])} ref={ref}>
         <form onSubmit={handleSubmit} className={styles.search}>
            <button type="submit">
               <Image
                  src={searchIcon}
                  alt="search icon"
                  width={24}
                  height={24}
                  className={styles.search__icon}
               />
            </button>
            <input
               value={searchValue}
               onChange={handleSearch}
               type="text"
               placeholder="Поиск"
               className={styles.search__input}
            />
            {/* {isShown && debouncedValue && (
               <ul className={styles.search__list}>
                  {data.map((item) => (
                     <li key={item.id}>
                        {item.title.toLowerCase().includes(debouncedValue.toLowerCase()) && (
                           <SearchItem title={item.title} debouncedValue={debouncedValue} />
                        )}
                     </li>
                  ))}
                  {data.filter((item) =>
                     item.title.toLowerCase().includes(debouncedValue.toLowerCase())
                  ).length === 0 && (
                     <h4 className={styles.search__empty}>По вашему запросу ничего не найдено</h4>
                  )}
               </ul>
            )} */}
         </form>
      </div>
   );
};

export default SearchField;
