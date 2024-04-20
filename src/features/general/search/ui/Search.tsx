import Image from "next/image";
import searchIcon from "@@/imgs/header/search.svg";
import styles from "./styles.module.scss";

const Search = () => {
   return (
      <div className={styles.search}>
         <Image
            src={searchIcon}
            alt="search icon"
            width={24}
            height={24}
            className={styles.search__icon}
         />
         <input type="text" placeholder="Поиск" className={styles.search__input} />
      </div>
   );
};

export default Search;
