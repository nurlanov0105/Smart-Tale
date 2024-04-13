import Image from "next/image";
import styles from "./styles.module.scss";
import searchIcon from "@@/imgs/header/search.svg";

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
