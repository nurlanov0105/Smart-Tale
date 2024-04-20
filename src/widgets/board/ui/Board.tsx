import { BoardColumn, Heading } from "@/features/boardColumn";
import styles from "./styles.module.scss";
import { BoardHeadings } from "@/entities/boardCard";

const Board = () => {
   return (
      <div className={styles.board}>
         <div className={styles.board__inner}>
            {BoardHeadings.map((heading: Heading) => (
               <BoardColumn key={heading.id} heading={heading} />
            ))}
         </div>
      </div>
   );
};

export default Board;
