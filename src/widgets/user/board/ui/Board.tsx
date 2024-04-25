import { BoardColumn } from "@/features/user/boardColumn";
import { BoardHeading, BoardHeadingType } from "@/entities/user/boardCard";
import styles from "./styles.module.scss";

const Board = () => {
   return (
      <div className={styles.board}>
         <div className={styles.board__inner}>
            {BoardHeading.map((heading: BoardHeadingType) => (
               <BoardColumn key={heading.id} heading={heading} />
            ))}
         </div>
      </div>
   );
};

export default Board;
